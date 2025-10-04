# 🚀 Hướng dẫn nhanh - RestaurantAppV2

## Cài đặt đã hoàn tất ✅

Dự án React Native với NativeWind 2.0.11 đã được thiết lập thành công!

## 📦 Các thư viện đã cài đặt

- **React Native**: 0.72.6
- **NativeWind**: 2.0.11 (Tailwind CSS cho React Native)
- **Tailwind CSS**: 3.3.2
- **TypeScript**: 4.8.4
- **React Native Safe Area Context**: 4.7.4
- **React Native Screens**: 3.27.0

## 🏃‍♂️ Chạy ứng dụng

### Khởi động Metro Bundler
```bash
npm start
```

### Chạy trên Android
```bash
npm run android
```

### Chạy trên iOS
```bash
npm run ios
```

## 📁 Cấu trúc dự án

```
RestaurantAppV2/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Button.tsx       # Button component với NativeWind
│   │   ├── Card.tsx         # Card component
│   │   └── index.ts         # Export tất cả components
│   ├── screens/             # App screens
│   │   ├── HomeScreen.tsx   # Màn hình chính demo
│   │   └── index.ts         # Export tất cả screens
│   └── index.ts             # Export chính
├── App.tsx                  # Entry component hiện tại
├── App.example.tsx          # Ví dụ sử dụng HomeScreen
├── app.d.ts                 # TypeScript definitions cho NativeWind
├── babel.config.js          # Babel config với NativeWind plugin
├── tailwind.config.js       # Tailwind CSS config
└── tsconfig.json            # TypeScript config

```

## 🎨 Sử dụng NativeWind

NativeWind cho phép bạn sử dụng Tailwind CSS classes trong React Native:

### Ví dụ cơ bản:
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

### Sử dụng components có sẵn:
```tsx
import { Button, Card } from './src/components';

function MyScreen() {
  return (
    <Card className="m-4">
      <Button 
        title="Click me" 
        variant="primary"
        onPress={() => console.log('Pressed!')}
      />
    </Card>
  );
}
```

## 🔄 Thay đổi App.tsx

Để sử dụng `HomeScreen` demo, thay thế nội dung trong `App.tsx`:

```tsx
import React from 'react';
import { HomeScreen } from './src/screens';

function App(): JSX.Element {
  return <HomeScreen />;
}

export default App;
```

Hoặc copy từ `App.example.tsx`.

## 🎨 Tailwind Classes phổ biến

- **Layout**: `flex-1`, `flex-row`, `items-center`, `justify-center`
- **Spacing**: `p-4`, `px-6`, `py-3`, `m-4`, `mb-2`
- **Colors**: `bg-blue-500`, `text-white`, `border-gray-300`
- **Typography**: `text-xl`, `font-bold`, `text-center`
- **Borders**: `rounded-lg`, `border-2`, `shadow-md`

## 🛠️ Tips

1. **Reload app**: Nhấn `R` (Android) hoặc `Cmd+R` (iOS) trong dev menu
2. **Dev menu**: Shake device hoặc `Cmd+D` (iOS) / `Cmd+M` (Android)
3. **Clear cache**: `npm start -- --reset-cache`

## 📚 Tài liệu tham khảo

- [NativeWind Docs](https://www.nativewind.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Native Docs](https://reactnative.dev/)

## 🐛 Troubleshooting

### Nếu NativeWind không hoạt động:
1. Xóa cache: `npm start -- --reset-cache`
2. Rebuild app: `npm run android` hoặc `npm run ios`
3. Kiểm tra `babel.config.js` có plugin `nativewind/babel`

### Lỗi TypeScript với className:
- Đảm bảo file `app.d.ts` tồn tại
- Restart TypeScript server trong editor
- Kiểm tra `tsconfig.json` include `app.d.ts`

