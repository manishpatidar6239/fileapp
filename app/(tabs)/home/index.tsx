import React, { useState, useRef, useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Colors } from '@/constants/theme'
import unit from '@/utils/dimensions'
import { menuData } from '@/data/home'
import MenuContainer from '@/components/main/MenuContainer'
import StatusFilter from '@/components/main/StatusFilter'

const HomeScreen = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const flatListRef = useRef<FlatList<any>>(null)
  const statusOptions = [
    'Pending',
    'In Progress',
    'Received',
    'Completed',
    'Delivered',
    'Delivered with pending amount',
    'Cancelled'
  ]
  const handleStatusSelect = (statusOptions: string) => {
    setSelectedStatus(statusOptions) // Set the selected status
  }
  useEffect(() => {
    if (flatListRef.current && selectedStatus !== null) {
      flatListRef.current.scrollToIndex({ index: 0, animated: true }) // Scroll to top when status is selected
    }
  }, [selectedStatus]) // Trigger when selectedstatus changes

  const renderItem = ({ item }: any) => {
    switch (item.type) {
      case 'menuContainer':
        return <MenuContainer data={menuData} />
      case 'statusFilter':
        return (
          <StatusFilter
            status={statusOptions}
            selectedStatus={selectedStatus}
            onSelectStatus={handleStatusSelect}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      <FlatList
        ref={flatListRef} // Attach the ref to the FlatList
        data={[
          { id: 'menuContainer', type: 'menuContainer' },
          { id: 'statusFilter', type: 'statusFilter' }
        ]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.background,
    marginTop: unit.windowHeight(0.009),
    paddingBottom: unit.windowHeight(0.03),
  }
})
