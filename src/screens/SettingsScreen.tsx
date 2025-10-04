import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ChevronRightIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path d="M9 18l6-6-6-6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const SettingItem = ({icon, title, onPress}: {icon: React.ReactNode; title: string; onPress: () => void}) => (
  <TouchableOpacity onPress={onPress} className="bg-white px-5 py-4 flex-row justify-between items-center border-b border-gray-100">
    <View className="flex-row items-center flex-1">
      <View className="mr-3">{icon}</View>
      <Text className="text-base text-gray-900">{title}</Text>
    </View>
    <ChevronRightIcon />
  </TouchableOpacity>
);

const SettingsScreen = () => {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white px-5 py-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-900">Cấu hình</Text>
      </View>
      <ScrollView className="flex-1">
        <View className="mt-5">
          <SettingItem
            icon={<Text className="text-3xl">👤</Text>}
            title="Thông tin cá nhân"
            onPress={() => console.log('Profile')}
          />
          <SettingItem
            icon={<Text className="text-3xl">🔔</Text>}
            title="Cài đặt thông báo"
            onPress={() => console.log('Notifications')}
          />
          <SettingItem
            icon={<Text className="text-3xl">🔒</Text>}
            title="Bảo mật"
            onPress={() => console.log('Security')}
          />
          <SettingItem
            icon={<Text className="text-3xl">ℹ️</Text>}
            title="Về ứng dụng"
            onPress={() => console.log('About')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
