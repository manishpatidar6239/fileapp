import unit from '@/utils/dimensions'
import React, { useState } from 'react'
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'

// Define types for the data
interface DataItem {
  id: string
  itemName: string
  costPrice: number
  chargePrice: number
  totalExpense: number
}

// Function to calculate profit
const calculateProfit = (charge: number, expense: number): number => {
  return charge - expense
}

const TableViewDetails: React.FC = () => {
  // Sample data for table
  const [data, setData] = useState<DataItem[]>([
    {
      id: '1',
      itemName: 'Motherboard',
      costPrice: 100,
      chargePrice: 150,
      totalExpense: 120
    },
    {
      id: '2',
      itemName: 'Graphics Card',
      costPrice: 200,
      chargePrice: 250,
      totalExpense: 220
    }
  ])

  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.colItemName]}>{item.itemName}</Text>
      <Text style={[styles.cell, styles.colCostPrice]}>{item.costPrice}</Text>
      <Text style={[styles.cell, styles.colChargePrice]}>
        {item.chargePrice}
      </Text>
      <Text style={[styles.cell, styles.colTotalExpense]}>
        {item.totalExpense}
      </Text>
      <Text style={[styles.cell, styles.colProfit]}>
        {calculateProfit(item.chargePrice, item.totalExpense)}
      </Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          {/* Table Header */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.colItemName, styles.header]}>
              Item Name
            </Text>
            <Text style={[styles.cell, styles.colCostPrice, styles.header]}>
              Cost Price
            </Text>
            <Text style={[styles.cell, styles.colChargePrice, styles.header]}>
              Selling/Charge
            </Text>
            <Text style={[styles.cell, styles.colTotalExpense, styles.header]}>
              Total Expense
            </Text>
            <Text style={[styles.cell, styles.colProfit, styles.header]}>
              Profit
            </Text>
          </View>

          {/* Table Rows */}
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

          {/* <Button title='Add New Entry' onPress={() => {}} /> */}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:unit.windowHeight(0.01)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cell: {
    padding: unit.windowWidth(0.026),
    borderRightWidth: 1,
    borderRightColor: '#dcdcdcff',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdcff'
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    fontSize: unit.fontSize(0.8)
  },

  /* FIXED WIDTHS FOR ALIGNMENT */
  colItemName: {
    width: unit.windowWidth(0.35) // 35% of screen width
  },
  colCostPrice: {
    width: unit.windowWidth(0.3),
    textAlign: 'center'
  },
  colChargePrice: {
    width: unit.windowWidth(0.3),
    textAlign: 'center'
  },
  colTotalExpense: {
    width: unit.windowWidth(0.3),
    textAlign: 'center'
  },
  colProfit: {
    width: unit.windowWidth(0.3),
    textAlign: 'center'
  }
})

export default TableViewDetails
