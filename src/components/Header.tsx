import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const LogoutIcon = ({color = '#6B7280'}: {color?: string}) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Header = () => {
  return (
    <View className="bg-white px-5 py-4 border-b border-gray-200">
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <Text className="text-2xl font-bold text-gray-900">Xin chào, Tuấn</Text>
          <Text className="text-sm text-gray-500 mt-1">Cửa hàng trưởng</Text>
        </View>
        <TouchableOpacity
          className="p-2 -mr-2"
          onPress={() => console.log('Logout pressed')}>
          <LogoutIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
