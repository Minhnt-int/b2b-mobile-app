import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <View className="mb-4">
      <Text className="text-gray-700 text-sm font-semibold mb-2">{label}</Text>
      <TextInput
        className={`bg-gray-50 border ${
          error ? 'border-red-500' : 'border-gray-200'
        } rounded-xl px-4 py-3 text-base text-gray-800 ${className || ''}`}
        {...props}
      />
      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  );
};

