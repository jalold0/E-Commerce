import { Text, View } from 'react-native';

import { cn } from './cn';

type Tone = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'sale' | 'new' | 'top';

interface Props {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

const TONES: Record<Tone, { bg: string; text: string }> = {
  default: { bg: 'bg-muted', text: 'text-foreground' },
  success: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  warning: { bg: 'bg-amber-100', text: 'text-amber-700' },
  danger: { bg: 'bg-red-100', text: 'text-red-700' },
  info: { bg: 'bg-sky-100', text: 'text-sky-700' },
  sale: { bg: 'bg-red-500', text: 'text-white' },
  new: { bg: 'bg-emerald-500', text: 'text-white' },
  top: { bg: 'bg-amber-500', text: 'text-white' },
};

export function Badge({ children, tone = 'default', className }: Props) {
  const t = TONES[tone];
  return (
    <View className={cn('rounded-md px-2 py-0.5', t.bg, className)}>
      <Text className={cn('text-[10px] font-bold uppercase tracking-wide', t.text)}>
        {children}
      </Text>
    </View>
  );
}
