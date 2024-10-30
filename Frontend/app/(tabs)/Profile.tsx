import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      {/* Account Information */}
      <View style={styles.accountInfo}>
        <Text style={styles.accountTitle}>SS RUBBERS</Text>
        <Text style={styles.accountPhone}>+91 882 847 844</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.amount}>60</Text>
        <Text style={styles.subTitle}>Rubber</Text>
        <Text style={styles.userName}>Praveena</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  accountInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  accountTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  accountPhone: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  amount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 24,
    color: '#555',
    marginTop: 10,
  },
  userName: {
    fontSize: 18,
    color: '#888',
    marginTop: 5,
  },
  profileButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    width: '90%',
  },
  profileButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});