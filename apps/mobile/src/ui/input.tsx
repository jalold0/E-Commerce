import * as React from 'react';
import { TextInput, type TextInputProps, View, Text } from 'react-native';

import { cn } from './cn';

interface Props extends TextInputProps {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Input({ label, hint, error, leftIcon, rightIcon, ...props }: Props) {
  return (
    <View className="gap-1.5">
      {label ? <Text className="text-muted-foreground text-xs font-medium">{label}</Text> : null}
      <View
        className={cn(
          'border-border bg-card flex-row items-center rounded-xl border px-3',
          error && 'border-danger',
        )}
      >
        {leftIcon ? <View className="mr-2">{leftIcon}</View> : null}
        <TextInput
          placeholderTextColor="#94a3b8"
          className="text-foreground h-11 flex-1 text-base"
          {...props}
        />
        {rightIcon ? <View className="ml-2">{rightIcon}</View> : null}
      </View>
      {error ? (
        <Text className="text-danger text-xs">{error}</Text>
      ) : hint ? (
        <Text className="text-muted-foreground text-xs">{hint}</Text>
      ) : null}
    </View>
  );
}
