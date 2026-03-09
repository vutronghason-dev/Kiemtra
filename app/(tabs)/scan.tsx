import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ScanScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background giả lập Camera hoặc dùng ảnh mẫu */}
      <ImageBackground 
        source={require('../../assets/juice.jpg')} // Thay bằng ảnh sản phẩm thực tế
        style={styles.cameraPreview}
      >
        {/* Nút Back */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={28} color="#6B6CEB" />
        </TouchableOpacity>

        {/* Khung quét (Overlay) */}
        <View style={styles.overlayContainer}>
          {/* 4 Góc của khung quét */}
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
          
          {/* Vạch quét mờ ở giữa */}
          <View style={styles.scanLine} />
        </View>

        {/* Thẻ kết quả sản phẩm phía dưới */}
        <View style={styles.bottomCardContainer}>
          <View style={styles.resultCard}>
            <View style={styles.productInfo}>
              <Image 
                source={require('../../assets/juice.jpg')} // Thumbnail sản phẩm
                style={styles.productThumb}
              />
              <View style={styles.textContainer}>
                <Text style={styles.brandText}>Lauren's</Text>
                <Text style={styles.productName}>Orange Juice</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.addButton}>
              <Feather name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraPreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
    zIndex: 10,
  },
  overlayContainer: {
    width: 280,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: 'white',
    borderWidth: 4,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopLeftRadius: 25,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopRightRadius: 25,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 25,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomRightRadius: 25,
  },
  scanLine: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
  },
  bottomCardContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productThumb: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
  },
  textContainer: {
    marginLeft: 15,
  },
  brandText: {
    fontSize: 12,
    color: '#BCBCBC',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#5D5FEF',
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScanScreen;