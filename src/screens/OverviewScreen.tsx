import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Svg, {Path, Circle, Rect} from 'react-native-svg';

// Icon Components
const UserIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      stroke="#34C759"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const TableIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9h18M3 15h18M12 3l-9 6v12h18V9l-9-6z"
      stroke="#007AFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AlertIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
    <Path
      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      stroke="#FF3B30"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M12 9v4M12 17h.01" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const ClockIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M12 6v6l4 2" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke="#34C759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M9 12l2 2 4-4" stroke="#34C759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const CalendarIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M16 2v4M8 2v4M3 10h18" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const ChevronRightIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path d="M9 18l6-6-6-6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatCard = ({icon, label, value}: StatCardProps) => (
  <View className="bg-white rounded-2xl p-4 shadow-sm">
    <View className="mb-2">{icon}</View>
    <Text className="text-xs text-gray-500 mb-1">{label}</Text>
    <Text className="text-2xl font-bold text-gray-900">{value}</Text>
  </View>
);

interface AlertItemProps {
  title: string;
  timeAgo: string;
  onPress: () => void;
}

const AlertItem = ({title, timeAgo, onPress}: AlertItemProps) => (
  <View className="bg-red-50 rounded-xl p-4 mb-3 border-l-4 border-l-red-500">
    <View className="flex-row justify-between items-start">
      <View className="flex-1 mr-3">
        <Text className="text-sm font-semibold text-gray-900 mb-1">{title}</Text>
        <Text className="text-xs text-gray-500">{timeAgo}</Text>
      </View>
      <TouchableOpacity onPress={onPress} className="bg-primary px-4 py-2 rounded-lg">
        <Text className="text-white text-xs font-semibold">Xử lý</Text>
      </TouchableOpacity>
    </View>
  </View>
);

interface ActivityItemProps {
  name: string;
  time: string;
}

const ActivityItem = ({name, time}: ActivityItemProps) => (
  <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 flex-row justify-between items-center shadow-sm border border-gray-100">
    <View className="flex-row items-center flex-1">
      <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
        <CalendarIcon />
      </View>
      <View className="flex-1">
        <Text className="text-sm font-semibold text-gray-900 mb-1">Check in đầu ca</Text>
        <Text className="text-xs text-gray-500">{name} • {time}</Text>
      </View>
    </View>
    <ChevronRightIcon />
  </TouchableOpacity>
);

const OverviewScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-5">
        {/* Stats Grid */}
        <View className="flex-row flex-wrap -mx-1.5 mb-5">
          <View className="w-1/2 px-1.5 mb-3">
            <StatCard icon={<UserIcon />} label="Nhân viên" value="3" />
          </View>
          <View className="w-1/2 px-1.5 mb-3">
            <StatCard icon={<TableIcon />} label="Đang phục vụ" value="3 bàn" />
          </View>
          <View className="w-1/2 px-1.5 mb-3">
            <StatCard icon={<AlertIcon />} label="Cảnh báo" value="3" />
          </View>
          <View className="w-1/2 px-1.5 mb-3">
            <StatCard icon={<ClockIcon />} label="Đang chờ" value="2" />
          </View>
        </View>

        {/* Full Width Complete Card */}
        <View className="mb-5">
          <StatCard icon={<CheckIcon />} label="Hoàn thành" value="12" />
        </View>

        {/* Alerts Section */}
        <View className="mb-5">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-bold text-gray-900">Cảnh báo (8)</Text>
            <TouchableOpacity>
              <Text className="text-sm font-semibold text-primary">Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          
          <AlertItem
            title="Bàn B4 - Task quá hạn 15 phút"
            timeAgo="2 phút trước"
            onPress={() => console.log('Handle alert 1')}
          />
          <AlertItem
            title="Nhân viên Minh chưa check-in"
            timeAgo="5 phút trước"
            onPress={() => console.log('Handle alert 2')}
          />
          <AlertItem
            title="Nhiệm vụ setup bàn VIP chưa hoàn..."
            timeAgo="8 phút trước"
            onPress={() => console.log('Handle alert 3')}
          />
        </View>

        {/* Performance Section */}
        <View className="bg-white rounded-2xl p-4 shadow-sm mb-5">
          <Text className="text-lg font-bold text-gray-900 mb-4">Hiệu suất ca làm</Text>
          
          <View className="mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-sm font-medium text-gray-700">Tỷ lệ hoàn thành đúng hạn</Text>
              <Text className="text-lg font-bold text-success">87%</Text>
            </View>
            <View className="h-2 bg-gray-200 rounded overflow-hidden">
              <View className="h-full bg-success rounded" style={{width: '87%'}} />
            </View>
          </View>

          <View className="flex-row justify-between py-3 border-b border-gray-100">
            <Text className="text-sm text-gray-500">Thời gian phục vụ trung bình</Text>
            <Text className="text-sm font-semibold text-gray-900">15,5 phút</Text>
          </View>

          <View className="flex-row justify-between pt-3">
            <Text className="text-sm text-gray-500">Số lần cần hỗ trợ</Text>
            <Text className="text-sm font-semibold text-gray-900">5</Text>
          </View>
        </View>

        {/* Recent Activity Section */}
        <View className="mb-5">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-bold text-gray-900">Hoạt động gần đây</Text>
            <TouchableOpacity>
              <Text className="text-sm font-semibold text-primary">Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          <ActivityItem name="Hà" time="Hôm nay 07:52" />
          <ActivityItem name="Lan" time="Hôm nay 07:44" />
          <ActivityItem name="Minh" time="Hôm nay 07:30" />
        </View>
      </View>
    </ScrollView>
  );
};

export default OverviewScreen;
