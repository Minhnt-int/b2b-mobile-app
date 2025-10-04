import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import OverviewScreen from '../screens/OverviewScreen';
import TablesScreen from '../screens/TablesScreen';
import StaffHomeScreen from '../screens/StaffHomeScreen';
import TasksScreen from '../screens/TasksScreen';
import Header from '../components/Header';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../constants/theme';

const Tab = createMaterialTopTabNavigator();

// Using theme from constants
const tabTheme = theme.tabNavigation;

// Icon components for top tabs
const OverviewIcon = ({color}: {color: string}) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const TableIcon = ({color}: {color: string}) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9h18M3 15h18M12 3l-9 6v12h18V9l-9-6z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const StaffIcon = ({color}: {color: string}) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const TaskIcon = ({color}: {color: string}) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 11l3 3L22 4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const HomeNavigator = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: tabTheme.activeTintColor,
          tabBarInactiveTintColor: tabTheme.inactiveTintColor,
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
            textTransform: 'none',
          },
          tabBarStyle: {
            backgroundColor: tabTheme.backgroundColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: tabTheme.borderBottomColor,
          },
          tabBarIndicatorStyle: {
            backgroundColor: tabTheme.indicatorColor,
            height: 3,
          },
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: 'auto',
            minWidth: 90,
          },
          tabBarShowIcon: true,

        }}>
        <Tab.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            title: 'Tổng quan',
            tabBarIcon: ({color}) => <OverviewIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Tables"
          component={TablesScreen}
          options={{
            title: 'Bàn',
            tabBarIcon: ({color}) => <TableIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="StaffHome"
          component={StaffHomeScreen}
          options={{
            title: 'Nhân viên',
            tabBarIcon: ({color}) => <StaffIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={TasksScreen}
          options={{
            title: 'Nhiệm vụ',
            tabBarIcon: ({color}) => <TaskIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeNavigator;

