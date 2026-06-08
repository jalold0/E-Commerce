import { View, type ViewProps } from 'react-native';

import { cn } from './cn';

export function Skeleton({ className, ...props }: ViewProps & { className?: string }) {
  return <View className={cn('bg-muted animate-pulse rounded-md', className)} {...props} />;
}
