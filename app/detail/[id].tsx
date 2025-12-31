import { Colors } from '@/constants/theme'
import LaptopData from '@/data/data.json'
import unit from '@/utils/dimensions'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailsScreen = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  // Find the item by ID
  const item = LaptopData.find(item => item.id === parseInt(id as string))

  if (!item) {
    return (
      <View>
        <Text>Item not found</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <StatusBar style='dark' />

      <View style={styles.container}>
        <Text>DetailsScreen for ID: {id}</Text>
        <Text>Customer: {item.customer_name}</Text>
        <Text>Mobile: {item.mobile_number}</Text>
        <Text>Laptop: {item.laptop_model}</Text>
        <Text>Notes: {item.notes}</Text>
        <Text>Payment: {item.payment_status}</Text>
      </View>
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: unit.windowWidth(0.03),
    flex: 1,
  },
});

