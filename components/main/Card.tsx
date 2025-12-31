import { Colors } from '@/constants/theme'
import unit from '@/utils/dimensions'
import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface CardProps {
  item: {
    id: number
    customer_name: string
    mobile_number: string
    laptop_model: string
    estimate_price: number
    remaining_amount: number
    total_amount: number
    status: string
    images: { url: string; description: string }[]
    notes: string
    payment_status: string
  }
}

const Card = ({ item }: CardProps) => {
 
  return (
    <View style={styles.card}>
      <Link href={`/detail/${item.id}`}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.images[0].url }}
              style={styles.imageFirst}
            />
            <View style={styles.imageThumbnailContainer}>
              {item.images.slice(1, 3).map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image.url }}
                  style={styles.image}
                  accessibilityLabel={image.description}
                />
              ))}
            </View>
          </View>
          <View style={styles.header}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between'
                }}
              >
                <View>
                  <Text style={styles.customerName}>{item.customer_name}</Text>
                  <Text style={styles.title}>{item.mobile_number}</Text>
                  <Text style={styles.title}>{item.laptop_model}</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.description}>{item.notes}</Text>
          <View style={styles.costContainer}>
            <View>
              <Text style={styles.costText}>₹{item.estimate_price}</Text>
              <Text style={styles.costHead}>Estimated cost</Text>
            </View>
            <View>
              <Text style={styles.costText}>{item.payment_status}</Text>
              <Text style={styles.costHead}>Amount Status</Text>
            </View>
          </View>
        </View>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: unit.windowWidth(0.025),
    marginTop: unit.windowHeight(0.01),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    gap: unit.windowWidth(0.04),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: unit.windowWidth(0.23),
    overflow: 'hidden'
  },
  imageThumbnailContainer: {
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    gap: 5
  },
  imageFirst: {
    height: unit.windowHeight(0.07),
    width: unit.windowHeight(0.1),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    borderRadius: unit.windowHeight(0.01)
  },
  image: {
    height: unit.windowHeight(0.04),
    width: unit.windowHeight(0.05),
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: unit.windowHeight(0.01)
  },

  statusContainer: {
    backgroundColor: '#fbf2e6ff',
    paddingVertical: unit.windowHeight(0.005),
    paddingHorizontal: unit.windowWidth(0.02),
    borderRadius: unit.windowWidth(0.02),
    alignSelf: 'flex-start'
  },
  statusText: {
    textTransform: 'capitalize',
    fontSize: unit.fontSize(0.8),
    fontWeight: '400',
    color: '#B74B6A'
  },

  header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  bottomContainer: {
    marginTop: unit.windowHeight(0.001)
  },
  customerName: {
    fontSize: unit.fontSize(1.3),
    fontWeight: 'bold',
    color: Colors.light.primary,
    paddingBottom: unit.windowHeight(0.005)
  },

  title: {
    fontSize: unit.fontSize(1),
    fontWeight: '500',
    color: Colors.light.text,
    paddingBottom: unit.windowHeight(0.003)
  },
  description: {
    marginTop: unit.windowHeight(0.004),
    color: '#555',
    fontSize: unit.fontSize(0.85)
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: unit.windowHeight(0.01)
  },
  costHead: {
    color: '#555',
    fontSize: unit.fontSize(0.85),
    fontWeight: '400'
  },
  costText: {
    fontSize: unit.fontSize(1.1),
    color: Colors.light.primary,
    fontWeight: '600',
    textTransform: 'capitalize',
    width: '100%'
  }
})

export default Card
