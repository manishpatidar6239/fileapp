 import { View, Text, Alert, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

const DetailsScreen = () => {
     const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen

 