import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// 1. Import useRouter từ expo-router
import { useRouter } from 'expo-router';

const insightsData = [
  {
    id: 1,
    title: 'Scan new',
    subtitle: 'Scanned 483',
    icon: <Feather name="maximize" size={24} color="#6B6CEB" />,
    iconBg: '#EAEBFF',
  },
  {
    id: 2,
    title: 'Counterfeits',
    subtitle: 'Counterfeited 32',
    icon: <Feather name="alert-triangle" size={24} color="#E88A6E" />,
    iconBg: '#FCECE8',
  },
  {
    id: 3,
    title: 'Success',
    subtitle: 'Checkouts 8',
    icon: <Feather name="check-circle" size={24} color="#48C7A5" />,
    iconBg: '#E5F7F2',
  },
  {
    id: 4,
    title: 'Directory',
    subtitle: 'History 26',
    icon: <Feather name="calendar" size={24} color="#52ABEE" />,
    iconBg: '#E8F5FD',
  },
];

export default function App() {
  // 2. Khởi tạo router
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.name}>Christie Doe</Text>
          </View>
          {/* Lưu ý: Đảm bảo đường dẫn ảnh này tồn tại trong thư mục assets của bạn */}
          <Image
  source={require('../../assets/avatar.png')} // Sử dụng đường dẫn tương đối
  style={styles.avatar}
/>
        </View>

        <Text style={styles.sectionTitle}>Your Insights</Text>

        <View style={styles.grid}>
          {insightsData.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.card}
              // 3. Thêm sự kiện onPress để điều hướng
              onPress={() => {
                if (item.title === 'Scan new') {
                  router.push('/scan'); // Sẽ tìm đến file app/scan.tsx
                }
              }}
            >
              <View style={[styles.iconContainer, { backgroundColor: item.iconBg }]}>
                {item.icon}
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    color: '#666666',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EEE' // Fallback nếu không load được ảnh
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    backgroundColor: '#F9FAFC',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#A0A0A0',
    fontWeight: '500',
  },
});