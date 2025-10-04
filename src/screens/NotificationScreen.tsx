import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const AlertsTab = () => (
  <ScrollView style={styles.container}>
    <View style={styles.padding}>
      <View style={styles.notifCard}>
        <Text style={styles.notifTitle}>Cảnh báo hệ thống</Text>
        <Text style={styles.notifTime}>5 phút trước</Text>
        <Text style={styles.notifMessage}>Có 3 nhiệm vụ cần được xử lý ngay</Text>
      </View>
    </View>
  </ScrollView>
);

const SystemTab = () => (
  <ScrollView style={styles.container}>
    <View style={styles.padding}>
      <View style={styles.notifCard}>
        <Text style={styles.notifTitle}>Thông báo hệ thống</Text>
        <Text style={styles.notifTime}>1 giờ trước</Text>
        <Text style={styles.notifMessage}>Cập nhật phiên bản mới đã có sẵn</Text>
      </View>
    </View>
  </ScrollView>
);

const NotificationScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thông báo</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
            textTransform: 'none',
          },
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5EA',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#007AFF',
            height: 3,
          },
        }}>
        <Tab.Screen name="Alerts" component={AlertsTab} options={{title: 'Cảnh báo'}} />
        <Tab.Screen name="System" component={SystemTab} options={{title: 'Hệ thống'}} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  padding: {
    padding: 20,
  },
  notifCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  notifTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  notifTime: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  notifMessage: {
    fontSize: 14,
    color: '#374151',
  },
});

export default NotificationScreen;
