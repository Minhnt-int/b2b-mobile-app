import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const TasksScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-5">
        <Text className="text-2xl font-bold text-gray-900 mb-4">Nhiệm vụ</Text>
        <View className="bg-white rounded-2xl p-6 items-center justify-center min-h-[200px]">
          <Text className="text-gray-500 text-center">
            Màn hình quản lý nhiệm vụ sẽ được phát triển ở đây
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TasksScreen;
