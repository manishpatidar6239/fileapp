import { mainStyles } from '@/assets/styles/main.styles'
import TableViewDetails from '@/components/main/tableViewDetails'
import { Colors } from '@/constants/theme'
import LaptopData from '@/data/data.json'
import unit from '@/utils/dimensions'
import { MaterialIcons } from '@expo/vector-icons'
import Foundation from '@expo/vector-icons/Foundation'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailsScreen = () => {
  const { id } = useLocalSearchParams()

  // Find the item by ID
  const item = LaptopData.find(item => item.id === parseInt(id as string))

  if (!item) {
    return (
      <View>
        <Text>Item not found</Text>
      </View>
    )
  }
 const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <StatusBar style='dark' />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={[mainStyles.flexRow,{marginVertical:unit.windowHeight(0.015)}]}>
           <Pressable style={styles.pdfView} onPress={() => router.back()}>
              <MaterialIcons
                name='keyboard-backspace'
                size={24}
                color={Colors.light.gray300}
              />
            </Pressable>
            <View>
               <Text style={mainStyles.headtext}>{item.customer_name}</Text>
              <Text style={mainStyles.detailTitle}>
                Mobile: {item.mobile_number}
              </Text>
            </View>
            <View style={styles.pdfView}>
              <Foundation name='page-export-pdf' size={20} color={Colors.light.gray300} />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.images[0].url }}
              style={styles.imageFirst}
            />
          </View>
          <View style={[mainStyles.flexRow, { alignItems: 'flex-start' }]}>
            <View style={{ flex: 1 }}>
             
              <Text style={mainStyles.detailTitle}>
                Laptop: {item.laptop_model}
              </Text>
              <Text style={mainStyles.detailTitle}>
                Serial: {item.serial_number}
              </Text>
              <Text style={mainStyles.detailTitle}>
                Laptop Password: {item.laptop_password}
              </Text>
            </View>
            <View
              style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
            >
              <View style={styles.statusContainerDetail}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
              <Text style={[mainStyles.subTitle, mainStyles.flexColumnCenter]}>
                Date:{' '}
                {item.receive_date
                  ? new Date(item.receive_date).toLocaleDateString()
                  : 'N/A'}
              </Text>
            </View>
          </View>
          {/* Description  */}
          <View style={{ marginTop: unit.windowHeight(0.01) }}>
            <Text style={mainStyles.headtext}>Description</Text>
            <Text style={mainStyles.detailTitle}>{item.notes}</Text>
          </View>

          {/* payment status  */}
          <View style={styles.statusContainer}>
            <View style={mainStyles.flexColumnCenter}>
              <Text style={[mainStyles.subTitle, { textAlign: 'center' }]}>
                Estimate Price
              </Text>
              <Text style={mainStyles.headtext}>₹{item.estimate_price}</Text>
            </View>
            <View style={mainStyles.flexColumnCenter}>
              <Text style={[mainStyles.subTitle, { textAlign: 'center' }]}>
                Advance Pay
              </Text>
              <Text style={mainStyles.headtext}>₹{item.advance_payment}</Text>
            </View>
            <View style={mainStyles.flexColumnCenter}>
              <Text style={[mainStyles.subTitle, { textAlign: 'center' }]}>
                Remaining
              </Text>
              <Text style={mainStyles.headtext}>₹{item.remaining_amount}</Text>
            </View>
          </View>
          <Text style={[mainStyles.subTitle, { textAlign: 'right' }]}>
            Payment Method: {item.payment_method}
          </Text>
          {/* Details  */}
          <View>
            <Text style={mainStyles.headtext}>Details</Text>

            <View style={{ marginTop: unit.windowHeight(0.001) }}>
              <View style={[mainStyles.flexRowStart]}>
                <Text style={[{ minWidth: unit.windowWidth(0.32) }]}>
                  Service Provider:
                </Text>
                <Text style={mainStyles.body1}>{item.service_provider}</Text>
              </View>
              <View style={[mainStyles.flexRowStart]}>
                <Text style={[{ minWidth: unit.windowWidth(0.32) }]}>
                  Service Location
                </Text>
                <Text style={mainStyles.body1}>{item.service_location}</Text>
              </View>
              <View style={[mainStyles.flexRowStart]}>
                <Text style={[{ minWidth: unit.windowWidth(0.32) }]}>
                  Invoice Number:
                </Text>
                <Text style={mainStyles.body1}>{item.invoice_number}</Text>
              </View>
            </View>
          </View>
          {/* All repair work  */}
          <View style={{ marginTop: unit.windowHeight(0.01) }}>
            <Text style={mainStyles.headtext}>All Repair Work</Text>
            <TableViewDetails />
          </View>
          {/* Technician Note  */}
          <View style={{ marginTop: unit.windowHeight(0.01) }}>
            <Text style={mainStyles.headtext}>Technician Note</Text>
            <Text style={mainStyles.detailTitle}>
              {item.technician_notes || 'No technician notes provided'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: unit.windowWidth(0.03),
    flex: 1
  },
  statusContainer: {
    backgroundColor: Colors.light.gray100,
    borderRadius: unit.windowWidth(0.02),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: unit.windowWidth(0.025),
    marginTop: unit.windowHeight(0.015)
  },
  imageContainer: {
    width: unit.windowWidth(1),
    height: unit.windowHeight(0.3),
    alignSelf: 'center',
    marginBottom: unit.windowHeight(0.02),
    paddingHorizontal: 10
  },

  imageFirst: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  statusContainerDetail: {
    backgroundColor: '#fbf2e6ff',
    paddingVertical: unit.windowHeight(0.005),
    paddingHorizontal: unit.windowWidth(0.02),
    borderRadius: unit.windowWidth(0.02)
  },
  statusText: {
    textTransform: 'capitalize',
    fontSize: unit.fontSize(0.8),
    fontWeight: '400',
    color: '#B74B6A'
  },
  pdfView: {
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 100,
    backgroundColor: Colors.light.gray100,
    borderWidth: 1,
    borderColor: Colors.light.gray100,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: 35,
    height: 35
  }
})
