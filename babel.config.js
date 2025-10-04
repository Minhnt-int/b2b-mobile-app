module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Bắt buộc phải thêm plugin NativeWind
    'nativewind/babel',
    
    // Nếu bạn dùng Reanimated, hãy để nó ở cuối cùng
    'react-native-reanimated/plugin',
  ],
};