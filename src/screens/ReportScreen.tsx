import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const ReportScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Báo cáo</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.padding}>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>
              Màn hình báo cáo và thống kê sẽ được phát triển ở đây
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9FAFB',
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
  },
  padding: {
    padding: 20,
  },
  placeholder: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  placeholderText: {
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default ReportScreen;
