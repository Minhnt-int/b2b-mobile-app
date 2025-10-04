import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Button, Card} from '../components';

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Header */}
          <View className="mb-6">
            <Text className="text-3xl font-bold text-gray-800 mb-2">
              Restaurant App
            </Text>
            <Text className="text-gray-600 text-base">
              Ứng dụng quản lý nhà hàng với NativeWind
            </Text>
          </View>

          {/* Feature Cards */}
          <View className="space-y-4">
            <Card>
              <Text className="text-xl font-semibold text-gray-800 mb-2">
                🍽️ Quản lý thực đơn
              </Text>
              <Text className="text-gray-600 mb-4">
                Dễ dàng thêm, sửa, xóa các món ăn trong thực đơn
              </Text>
              <Button title="Xem chi tiết" variant="primary" />
            </Card>

            <Card className="bg-blue-50">
              <Text className="text-xl font-semibold text-blue-800 mb-2">
                📊 Thống kê doanh thu
              </Text>
              <Text className="text-blue-600 mb-4">
                Theo dõi doanh thu và báo cáo chi tiết
              </Text>
              <Button title="Xem thống kê" variant="outline" />
            </Card>

            <Card className="bg-green-50">
              <Text className="text-xl font-semibold text-green-800 mb-2">
                👥 Quản lý nhân viên
              </Text>
              <Text className="text-green-600 mb-4">
                Quản lý thông tin và lịch làm việc của nhân viên
              </Text>
              <Button title="Quản lý" variant="secondary" />
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

