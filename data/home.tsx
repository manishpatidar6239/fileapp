 
import { router } from 'expo-router' 
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export const menuData = [
  {
    id: 1,
    name: 'Dashboard',
    key: 'dashboard',
    bgColor: '#fff',
    // url: () => router.push("/(tabs)/home/collaborations"),
    url: () => router.push('/home'),
    img: require('@/assets/images/icons/dashboard.svg'),
    icons: <MaterialIcons name='computer' size={80} color='black' />
  },
  {
    id: 2,
    name: 'New Entry',
    key: 'newentry',
    bgColor: '#fff',
    img: require('@/assets/images/icons/text-edit.svg'),
    url: () => router.push('/pages/new-entry'),
    icons: <MaterialIcons name='computer' size={80} color='black' />
  },
  {
    id: 3,
    name: 'Received',
    key: 'received',
    bgColor: '#fff',
    img: require('@/assets/images/icons/calendar-edit.svg'),
    url: () => router.push('/home'),
    icons: <MaterialIcons name='computer' size={80} color='black' />
  },
 
  {
    id: 5,
    name: 'Delivered',
    key: 'delivered',
    bgColor: '#fff',
    img: require('@/assets/images/icons/fluent-color--slide-text-sparkle-28.svg'),
    url: () => router.push('/home'),
    icons: <MaterialIcons name='computer' size={80} color='black' />
  },
  {
    id: 6,
    name: 'pending amount',
    key: 'pendingamount',
    bgColor: '#fff',
    img: require('@/assets/images/icons/calendar-edit.svg'),
    url: () => router.push('/pending'),
    icons: <MaterialIcons name='computer' size={80} color='black' />
  },
  {
    id: 7,
    name: 'Cancelled',
    key: 'cancelled',
    bgColor: '#fff',
    img: require('@/assets/images/icons/bullet-list-square-sparkle-32.svg'),
    url: () => router.push('/home'),
    icons: <MaterialIcons name='computer' size={80} color='black' />
  }
]

// d3f8f2
// fff0d1
// d7f0fe 
// daf7fb
// d7f0fe
// ffe5e9
 