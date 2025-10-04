import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  className,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-blue-500 active:bg-blue-600',
    secondary: 'bg-gray-500 active:bg-gray-600',
    outline: 'bg-transparent border-2 border-blue-500 active:bg-blue-50',
  };

  const textVariantClasses = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-blue-500',
  };

  return (
    <TouchableOpacity
      className={`px-6 py-3 rounded-lg ${variantClasses[variant]} ${className || ''}`}
      {...props}>
      <Text className={`text-center font-semibold text-base ${textVariantClasses[variant]}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

