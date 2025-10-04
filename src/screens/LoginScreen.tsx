import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';

export const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Đăng nhập:', {username, password});
    // Xử lý đăng nhập ở đây
  };

  const handleForgotPassword = () => {
    console.log('Quên mật khẩu');
    // Xử lý quên mật khẩu
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View className="flex-1 px-6">
            {/* Logo và Header */}
            <View className="items-center pt-16 pb-8">
              {/* Logo Icon */}
              <View className="w-16 h-16 bg-white rounded-2xl items-center justify-center mb-6 shadow-lg">
                <View className="w-10 h-10 bg-blue-500 rounded-lg items-center justify-center">
                  <Text className="text-white text-2xl font-bold">R</Text>
                </View>
              </View>

              {/* Title */}
              <Text className="text-white text-4xl font-bold mb-3">
                Đăng nhập
              </Text>

              {/* Subtitle */}
              <Text className="text-blue-100 text-center text-base leading-6">
                Nhập tài khoản và mật khẩu để truy{'\n'}cập ứng dụng
              </Text>
            </View>

            {/* Form đăng nhập */}
            <View className="bg-white rounded-3xl px-6 pt-8 pb-6 shadow-2xl">
              {/* Tên đăng nhập */}
              <View className="mb-5">
                <Text className="text-gray-800 text-sm font-semibold mb-2">
                  Tên đăng nhập
                </Text>
                <TextInput
                  className="bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-base text-gray-800"
                  placeholder="admin"
                  placeholderTextColor="#9CA3AF"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              {/* Mật khẩu */}
              <View className="mb-3">
                <Text className="text-gray-800 text-sm font-semibold mb-2">
                  Mật khẩu
                </Text>
                <View className="relative">
                  <TextInput
                    className="bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-base text-gray-800 pr-12"
                    placeholder="••••••••"
                    placeholderTextColor="#9CA3AF"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    className="absolute right-4 top-3.5"
                    onPress={() => setShowPassword(!showPassword)}
                    activeOpacity={0.7}>
                    <Text className="text-xl text-gray-500">
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Quên mật khẩu */}
              <TouchableOpacity
                onPress={handleForgotPassword}
                className="items-end mb-6"
                activeOpacity={0.7}>
                <Text className="text-blue-500 text-sm font-medium">
                  Forgot Password ?
                </Text>
              </TouchableOpacity>

              {/* Nút đăng nhập */}
              <TouchableOpacity
                className="bg-blue-500 rounded-xl py-4 items-center shadow-lg active:bg-blue-600"
                onPress={handleLogin}
                activeOpacity={0.8}>
                <Text className="text-white text-base font-bold tracking-wide">
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>

            {/* Phần dưới */}
            <View className="flex-1 justify-end items-center pb-6 pt-8">
              <Text className="text-blue-200 text-xs">
                Login Version 3
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

