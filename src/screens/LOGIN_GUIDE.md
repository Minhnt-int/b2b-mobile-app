# 🔐 Màn hình Đăng nhập

## Tính năng đã tạo:

### ✅ LoginScreen Component
- 📱 Responsive design với NativeWind
- 🎨 UI đẹp mắt theo Material Design
- ⌨️ KeyboardAvoidingView cho iOS/Android
- 👁️ Toggle show/hide password
- 🔗 Link quên mật khẩu
- 🔗 Link đăng ký tài khoản mới

### ✅ Input Component
- Component tái sử dụng cho form
- Hỗ trợ hiển thị lỗi validation
- Custom styling với className

## Sử dụng:

### Trong App.tsx:
```tsx
import React from 'react';
import {LoginScreen} from './src/screens';

function App(): JSX.Element {
  return <LoginScreen />;
}

export default App;
```

### Hoặc kết hợp với navigation:
```tsx
import {LoginScreen} from './src/screens';

// Trong navigation stack
<Stack.Screen name="Login" component={LoginScreen} />
```

## Tùy chỉnh:

### Thêm validation:
```tsx
const [errors, setErrors] = useState({
  username: '',
  password: '',
});

const validate = () => {
  if (!username) {
    setErrors({...errors, username: 'Vui lòng nhập tên đăng nhập'});
    return false;
  }
  return true;
};
```

### Kết nối API:
```tsx
const handleLogin = async () => {
  try {
    const response = await fetch('YOUR_API_URL/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    });
    const data = await response.json();
    // Xử lý response
  } catch (error) {
    console.error(error);
  }
};
```

## Components có sẵn:

### Button
```tsx
<Button 
  title="Đăng nhập" 
  variant="primary"
  onPress={handleLogin}
/>
```

### Input
```tsx
<Input
  label="Email"
  placeholder="email@example.com"
  value={email}
  onChangeText={setEmail}
  error={errors.email}
/>
```

### Card
```tsx
<Card className="p-6">
  <Text>Nội dung</Text>
</Card>
```

## Màu sắc:

- Primary Blue: `bg-blue-500`
- Background: `bg-gray-50`
- Text: `text-gray-800`
- Border: `border-gray-200`
- Error: `text-red-500`

## Reload app để xem:

```bash
# Reload app trên emulator
- Android: Nhấn R R (double tap R)
- iOS: Cmd + R

# Hoặc từ terminal
npm start
npm run android  # hoặc npm run ios
```

