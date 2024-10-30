import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const data = [
  { id: '1', date: new Date(), drc: '45%', gross_wt: '5 Kg', tare_wt:'1.5kg', amount: 132, total: 1328 },
  { id: '2', date: new Date(), drc: '50%', gross_wt:'7kg', tare_wt:'3kg', amount: 100, total: 1000 },
  { id: '3', date: new Date(), drc: '60%', gross_wt:'22.6kg', tare_wt:'2.5kg', amount: 150, total: 900 },
];

const ItemCard = ({ date, drc, gross_wt, tare_wt, amount, total }) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <Text style={styles.label}>DRC</Text>
      <Text style={styles.label}>Gross wt</Text>
      <Text style={styles.label}>Tare wt</Text>
      <Text style={styles.label}>Amount</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.value}>{drc}</Text>
      <Text style={styles.value}>{gross_wt}</Text>
      <Text style={styles.value}>{tare_wt}</Text>
      <Text style={styles.value}>{amount}</Text>
    </View>
    <Text style={styles.total}>Total: {total}</Text>
    <Text style={styles.date}>{date.toLocaleDateString()}</Text>
  </View>
);

export default function App() {
  const [filter, setFilter] = useState<'day' | 'month' | 'year' | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const getFilteredData = () => {
    const now = new Date();
    return data.filter(item => {
      const itemDate = new Date(item.date);
      switch (filter) {
        case 'day':
          return itemDate.toDateString() === now.toDateString();
        case 'month':
          return itemDate.getMonth() === now.getMonth() && itemDate.getFullYear() === now.getFullYear();
        case 'year':
          return itemDate.getFullYear() === now.getFullYear();
        default:
          return true; // No filter applied
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Select Filter:</Text>
        <Picker
          selectedValue={selectedFilter}
          onValueChange={(itemValue) => {
            setSelectedFilter(itemValue);
            setFilter(itemValue);
          }}
          style={styles.picker}
        >
          <Picker.Item label="None" value={null} />
          <Picker.Item label="Filter by Day" value="day" />
          <Picker.Item label="Filter by Month" value="month" />
          <Picker.Item label="Filter by Year" value="year" />
        </Picker>
      </View>
      <FlatList
        data={getFilteredData()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard
            date={item.date}
            drc={item.drc}
            weight={item.weight}
            amount={item.amount}
            total={item.total}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  dropdownContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    color: 'green',
    textAlign: 'right',
    marginTop: 5,
  },
  date: {
    marginTop: 10, // Add margin to separate from total
    textAlign: 'right',
    fontSize: 12,
    color: '#555',
  },
});
