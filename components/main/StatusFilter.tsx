import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  FlatList
} from 'react-native'

import { mainStyles } from '../../assets/styles/main.styles'
import { Colors } from '@/constants/theme'
import unit from '@/utils/dimensions'
import Card from './Card'
import LaptopData from '@/data/data.json'

interface StatusFilterProps {
  status: string[]
  selectedStatus: string | null
  onSelectStatus: (status: string) => void
}

const StatusFilter = ({
  status,
  selectedStatus,
  onSelectStatus
}: StatusFilterProps) => {
  return (
    <View style={mainStyles.container}>
      <Text style={[mainStyles.headtext]}>Search By Status</Text>
      <View style={styles.statusFilterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
         
        >
          {status.map(statusItem => {
            const isSelected = statusItem === selectedStatus // Check if this category is selected
            return (
              <TouchableOpacity
                key={statusItem}
                onPress={() => onSelectStatus(statusItem)} // Select category when clicked
                style={[
                  styles.statusButton,
                  isSelected && styles.selectedStatus
                ]} // Apply selected style if category is selected
              >
                <Text
                  style={[styles.statusText, isSelected && styles.selectedText]}
                >
                  {statusItem}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>

      <FlatList
        data={LaptopData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Card item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default StatusFilter

const styles = StyleSheet.create({
  statusFilterContainer: {
    marginTop: unit.windowHeight(0.01), 
  },
  
  statusButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.gray100,
    marginLeft: unit.windowWidth(0.006),
    marginRight: unit.windowWidth(0.002),
    marginBottom: unit.windowWidth(0.01),
    paddingVertical: unit.windowWidth(0.025),
    paddingHorizontal: unit.windowWidth(0.025),
    borderRadius: unit.windowWidth(1),
    borderWidth: 1,
    borderColor: Colors.light.gray200,
    minWidth: unit.windowWidth(0.21),
    shadowColor: Colors.light.shadow,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  },
  selectedStatus: { 
    shadowOpacity: 0.15,
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary
  },
  statusText: {
    color: Colors.light.primary
  },
  selectedText: {
    color: Colors.white 
  }
})
