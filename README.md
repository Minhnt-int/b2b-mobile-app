# RestaurantAppV2

Dự án React Native với NativeWind 2.0.11

## 🚀 Công nghệ sử dụng

- **React Native**: 0.72.6
- **NativeWind**: 2.0.11
- **Tailwind CSS**: 3.3.2
- **TypeScript**: 4.8.4

## 📦 Cài đặt

Dependencies đã được cài đặt. Nếu cần cài đặt lại:

```bash
npm install
```

## 🏃‍♂️ Chạy dự án

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

### Khởi động Metro Server

```bash
npm start
```

## 🎨 Sử dụng NativeWind

NativeWind cho phép bạn sử dụng các utility class của Tailwind CSS trực tiếp trong React Native:

```tsx
import { View, Text } from 'react-native';

function MyComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-2xl font-bold">
        Hello NativeWind!
      </Text>
    </View>
  );
}
```

## 📁 Cấu trúc dự án

```
RestaurantAppV2/
├── android/          # Native Android code
├── ios/              # Native iOS code
├── App.tsx           # Component chính
├── app.d.ts          # TypeScript definitions cho NativeWind
├── babel.config.js   # Babel config với NativeWind plugin
├── tailwind.config.js # Tailwind CSS config
├── tsconfig.json     # TypeScript config
└── package.json      # Dependencies và scripts
```

## 🛠️ Các lệnh hữu ích

- `npm start` - Khởi động Metro bundler
- `npm run android` - Chạy app trên Android
- `npm run ios` - Chạy app trên iOS
- `npm run lint` - Kiểm tra code với ESLint
- `npm test` - Chạy tests

## 📚 Tài liệu tham khảo

- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
