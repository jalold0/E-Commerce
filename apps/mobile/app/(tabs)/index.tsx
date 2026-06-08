import { Link } from 'expo-router';
import { Bell, Search, ShieldCheck, Sparkles, Truck, Undo2 } from 'lucide-react-native';
import * as React from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { brands, categories, productImage, products } from '../../src/lib/mock-data';
import { CategoryChip } from '../../src/ui/category-chip';
import { ProductCard } from '../../src/ui/product-card';
import { SectionHeader } from '../../src/ui/section-header';

const PERKS = [
  { icon: Truck, title: 'Tezkor', sub: '24 soat' },
  { icon: Undo2, title: '14 kun', sub: 'Qaytarish' },
  { icon: ShieldCheck, title: 'Asl', sub: '100%' },
  { icon: Sparkles, title: 'Bonus', sub: 'Sodiqlik' },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const featured = products.slice(0, 4);
  const sale = products.filter((p) => p.badge === 'SALE' || p.badge === 'TOP').slice(0, 6);

  return (
    <ScrollView
      className="bg-background flex-1"
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Top bar */}
      <View style={{ paddingTop: insets.top + 8 }} className="bg-background px-4 pb-3">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-muted-foreground text-xs">Xush kelibsiz</Text>
            <Text className="text-foreground text-lg font-bold">E-Commerce</Text>
          </View>
          <Pressable
            hitSlop={8}
            className="bg-muted h-10 w-10 items-center justify-center rounded-full active:opacity-75"
          >
            <Bell size={18} color="#0f172a" />
          </Pressable>
        </View>

        {/* Search */}
        <Link href="/catalog" asChild>
          <Pressable className="bg-muted mt-3 flex-row items-center gap-2 rounded-full px-4 py-3 active:opacity-75">
            <Search size={16} color="#64748b" />
            <Text className="text-muted-foreground text-sm">Mahsulot, brend qidiring...</Text>
          </Pressable>
        </Link>
      </View>

      {/* Hero */}
      <View className="bg-primary mx-4 mt-2 overflow-hidden rounded-3xl p-5">
        <View className="flex-row items-center gap-1 self-start rounded-full bg-white/15 px-2 py-1">
          <Sparkles size={10} color="#fff" />
          <Text className="text-[10px] font-medium text-white">Yangi 2026</Text>
        </View>
        <Text className="mt-3 text-2xl font-black leading-tight text-white">
          Moda va go&apos;zallik
          <Text className="text-white/80">{'\n'}bozori — yagona joyda</Text>
        </Text>
        <Text className="mt-2 max-w-[80%] text-xs text-white/80">
          Tezkor yetkazib berish, asl mahsulot kafolati va 14 kun qaytarish.
        </Text>
        <Link href="/catalog" asChild>
          <Pressable className="mt-4 self-start rounded-full bg-white px-5 py-2.5 active:opacity-85">
            <Text className="text-primary text-sm font-semibold">Katalogni ochish →</Text>
          </Pressable>
        </Link>
      </View>

      {/* Perks */}
      <View className="mt-4 flex-row gap-2 px-4">
        {PERKS.map((p) => {
          const Icon = p.icon;
          return (
            <View
              key={p.title}
              className="border-border bg-card flex-1 items-center rounded-2xl border p-3"
            >
              <View className="bg-muted h-8 w-8 items-center justify-center rounded-full">
                <Icon size={14} color="#0f172a" />
              </View>
              <Text className="text-foreground mt-1.5 text-[11px] font-semibold">{p.title}</Text>
              <Text className="text-muted-foreground text-[10px]">{p.sub}</Text>
            </View>
          );
        })}
      </View>

      {/* Categories */}
      <View className="mt-6 gap-3">
        <SectionHeader title="Kategoriyalar" actionLabel="Barchasi" actionHref="/catalog" />
        <FlatList
          data={categories}
          keyExtractor={(c) => c.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12, gap: 4 }}
          renderItem={({ item }) => (
            <CategoryChip
              emoji={item.emoji}
              name={item.name.uz}
              href={`/catalog?category=${item.slug}`}
              productCount={item.productCount}
            />
          )}
        />
      </View>

      {/* Featured */}
      <View className="mt-6 gap-3">
        <SectionHeader
          title="Bestseller"
          description="Eng ko'p sotilganlar"
          actionLabel="Barchasi"
          actionHref="/catalog?sort=popularity"
        />
        <View className="flex-row flex-wrap gap-3 px-4">
          {featured.map((p) => (
            <View key={p.id} style={{ width: '47%' }}>
              <ProductCard product={p} />
            </View>
          ))}
        </View>
      </View>

      {/* Sale strip */}
      <View className="mt-6 gap-3">
        <SectionHeader
          title="🔥 Aksiya"
          description="Cheklangan vaqt"
          actionLabel="Barchasi"
          actionHref="/catalog?sort=sale"
        />
        <FlatList
          data={sale}
          keyExtractor={(p) => p.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12, gap: 12 }}
          renderItem={({ item }) => (
            <View style={{ width: 160 }}>
              <ProductCard product={item} />
            </View>
          )}
        />
      </View>

      {/* Brands */}
      <View className="mt-6 gap-3">
        <SectionHeader title="Brendlar" />
        <FlatList
          data={brands}
          keyExtractor={(b) => b.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12, gap: 10 }}
          renderItem={({ item }) => (
            <Link href={`/catalog?brand=${item.slug}`} asChild>
              <Pressable className="border-border bg-card h-14 w-24 items-center justify-center rounded-xl border active:opacity-75">
                <Text className="text-foreground text-xs font-bold tracking-widest">
                  {item.name.toUpperCase()}
                </Text>
              </Pressable>
            </Link>
          )}
        />
      </View>

      {/* Banner */}
      <View className="bg-accent mx-4 mt-6 overflow-hidden rounded-2xl p-5">
        <Text className="text-xs font-bold uppercase tracking-widest text-white/80">
          Yangi mijoz
        </Text>
        <Text className="mt-1 text-xl font-black text-white">10% chegirma kupon</Text>
        <Text className="mt-1 text-xs text-white/80">
          Ro&apos;yxatdan o&apos;tib promo-kod oling
        </Text>
        <Link href="/auth/login" asChild>
          <Pressable className="mt-3 self-start rounded-full bg-white px-4 py-2 active:opacity-85">
            <Text className="text-accent text-xs font-semibold">Olish</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}
