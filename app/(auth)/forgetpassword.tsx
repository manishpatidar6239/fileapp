import { Colors } from '@/constants/theme'
import unit, { fontSizes } from '@/utils/dimensions'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const ForgetPassword = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSend = () => {
    if (!email.trim()) {
      setError('Email is required')
    } else {
      setError('')
      // Add your API call here
      alert('Reset link sent to your email!')
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps='handled'
        >
           <TouchableOpacity onPress={() => router.push('/home')}>
          <Image
            style={styles.logo}
            source={require('@/assets/images/01.png')}
          />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Forgot Password?</Text>
          <Text style={styles.subHeader}>
            Enter your registered email and we will send you reset instructions.
          </Text>

          <View style={styles.card}>
            <Text style={styles.label}>Email Address</Text>

            <TextInput
              placeholder='Enter your email'
              placeholderTextColor={Colors.light.primary}
              value={email}
              onChangeText={value => {
                setEmail(value)
                setError('')
              }}
              style={[styles.input, error ? styles.inputError : null]}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleSend}>
              <Text style={styles.buttonText}>Send Reset Link</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.backToLogin}>Back to Login</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: unit.windowHeight(0.05) }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: unit.windowWidth(0.06),
    paddingVertical: unit.windowHeight(0.05)
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: fontSizes[26],
    fontWeight: '900',
    color: Colors.light.primary,
    marginBottom: unit.windowHeight(0.005),
    textAlign: 'center'
  },
  logo: {
    width: unit.windowWidth(0.25),
    height: unit.windowWidth(0.25),
    resizeMode: 'contain',
    marginTop: unit.windowHeight(0.05)
  },
  subHeader: {
    fontSize: fontSizes[14],
    color: Colors.light.primary,
    marginBottom: unit.windowHeight(0.05),
    textAlign: 'center'
  },
  card: {
    width: '100%',
    backgroundColor: Colors.white,
    flexGrow: 1,
    borderTopLeftRadius: unit.windowWidth(0.08),
    borderTopRightRadius: unit.windowWidth(0.08)
  },
  title: {
    fontSize: fontSizes[24],
    fontWeight: '800',
    color: Colors.light.primary,
    textAlign: 'left',
    marginBottom: unit.windowHeight(0.02)
  },
  label: {
    fontSize: fontSizes[12],
    fontWeight: '600',
    color: Colors.light.primary,
    marginBottom: unit.windowHeight(0.008)
  },
  input: {
    width: '100%',
    backgroundColor: Colors.light.gray100,
    borderRadius: 10,
    paddingVertical: unit.windowHeight(0.018),
    paddingHorizontal: unit.windowWidth(0.04),
    marginBottom: unit.windowHeight(0.02),
    fontSize: fontSizes[12],
    color: Colors.light.primary,
    borderWidth: 1,
    borderColor: Colors.light.gray200
  },
  inputError: {
    borderColor: Colors.red
  },
  errorText: {
    color: Colors.red,
    fontSize: fontSizes[11],
    marginBottom: unit.windowHeight(0.01)
  },
  forgot: {
    color: Colors.light.primary,
    fontSize: fontSizes[12],
    textAlign: 'right',
    marginBottom: unit.windowHeight(0.035),
    fontWeight: '600'
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: unit.windowHeight(0.02),
    borderRadius: unit.windowWidth(0.03),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.light.primary,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: fontSizes[14],
    
    letterSpacing: 1
  },

  backToLogin: {
    marginTop: unit.windowHeight(0.03),
    textAlign: 'center',
    color: Colors.light.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontSize: fontSizes[12]
  }
})
