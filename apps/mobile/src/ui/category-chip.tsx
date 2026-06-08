import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

interface Props {
  emoji: string;
  name: string;
  href: string;
  productCount?: number;
}

export function CategoryChip({ emoji, name, href, productCount }: Props) {
  return (
    <Link href={href as never} asChild>
      <Pressable className="w-24 items-center gap-1 active:opacity-75">
        <View className="bg-muted h-16 w-16 items-center justify-center rounded-2xl">
          <Text className="text-3xl">{emoji}</Text>
        </View>
        <Text numberOfLines={1} className="text-foreground text-xs font-medium">
          {name}
        </Text>
        {productCount !== undefined ? (
          <Text className="text-muted-foreground text-[10px]">{productCount}+</Text>
        ) : null}
      </Pressable>
    </Link>
  );
}
