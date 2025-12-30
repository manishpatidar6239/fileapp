import { Colors } from '@/constants/theme'

import unit, { fontSizes } from '@/utils/dimensions'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View
} from 'react-native' 

import { Toast } from 'toastify-react-native'

const SignUp = () => {
  const loading = 123
  const router = useRouter()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    errors: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const validateSignUp = () => {
    const errors = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    const { fullName, email, password, confirmPassword } = form
    let valid = true

    if (!fullName.trim()) {
      errors.fullName = 'Full name is required'
      valid = false
    } else if (fullName.trim().length < 3) {
      errors.fullName = 'Full name must be at least 3 characters'
      valid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      errors.email = 'Email is required'
      valid = false
    } else if (!emailRegex.test(email.trim())) {
      errors.email = 'Please enter a valid email'
      valid = false
    }

    if (!password.trim()) {
      errors.password = 'Password is required'
      valid = false
    } else if (password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters'
      valid = false
    } else if (!/[A-Z]/.test(password)) {
      errors.password = 'Password must contain at least one uppercase letter'
      valid = false
    } else if (!/[0-9]/.test(password)) {
      errors.password = 'Password must contain at least one number'
      valid = false
    }

    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Please confirm your password'
      valid = false
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match'
      valid = false
    }

    setForm(prev => ({ ...prev, errors }))
    return valid
  }

  const handleChange = (
    key: 'fullName' | 'email' | 'password' | 'confirmPassword',
    value: string
  ) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
      errors: { ...prev.errors, [key]: '' }
    }))
  }

  const handleSignUp = async () => {
    const isValid = validateSignUp()
    if (!isValid) return
  }

  return (
   <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
          >
      <TouchableOpacity onPress={() => router.push('/home')}>
        <Image style={styles.logo} source={require('@/assets/images/01.png')} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Create Account ✨</Text>
      <Text style={styles.subHeader}>Join us and get started!</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder='Enter your full name'
          placeholderTextColor={Colors.light.primary[600]}
          value={form.fullName}
          onChangeText={value => handleChange('fullName', value)}
          style={[
            styles.input,
            form.errors.fullName ? styles.inputError : null
          ]}
        />
        {form.errors.fullName ? (
          <Text style={styles.errorText}>{form.errors.fullName}</Text>
        ) : null}

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder='Enter your email'
          placeholderTextColor={Colors.light.primary[600]}
          keyboardType='email-address'
          value={form.email}
          onChangeText={value => handleChange('email', value)}
          style={[styles.input, form.errors.email ? styles.inputError : null]}
        />
        {form.errors.email ? (
          <Text style={styles.errorText}>{form.errors.email}</Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder='Create a password'
            placeholderTextColor={Colors.light.primary[600]}
            secureTextEntry={!form.showPassword}
            value={form.password}
            onChangeText={value => handleChange('password', value)}
            style={[
              styles.input,
              styles.passwordInput,
              form.errors.password ? styles.inputError : null
            ]}
          />
          <TouchableOpacity
            onPress={() =>
              setForm(prev => ({ ...prev, showPassword: !prev.showPassword }))
            }
            style={styles.showHideButton}
          >
            <Text style={styles.showHideText}>
              <Ionicons
                name={form.showPassword ? 'eye-off' : 'eye'}
                size={22}
                color={Colors.light.primary}
              />
            </Text>
          </TouchableOpacity>
        </View>
        {form.errors.password ? (
          <Text style={styles.errorText}>{form.errors.password}</Text>
        ) : null}

        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder='Re-enter your password'
            placeholderTextColor={Colors.light.primary[600]}
            value={form.confirmPassword}
            secureTextEntry
            onChangeText={value => handleChange('confirmPassword', value)}
            style={[
              styles.input,
              styles.passwordInput,
              form.errors.confirmPassword ? styles.inputError : null
            ]}
          />
        </View>
        {form.errors.confirmPassword ? (
          <Text style={styles.errorText}>{form.errors.confirmPassword}</Text>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
          {/* <Text style={styles.buttonText}>
            {loading ? (
              <ActivityIndicator size='small' color={Colors.white} />
            ) : (
              'Sign Up'
            )}
          </Text> */}
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Already have an account?{'  '}
          <Text style={styles.linkText} onPress={() => router.push('/login')}>
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: unit.windowWidth(0.06),
    paddingVertical: unit.windowHeight(0.02)
  },
    scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logo: {
    width: unit.windowWidth(0.25),
    height: unit.windowWidth(0.25),
    resizeMode: 'contain'
  },
  headerTitle: {
    fontSize: fontSizes[26],
    fontWeight: '900',
    color: Colors.light.primary,
    marginBottom: unit.windowHeight(0.005),
    textAlign: 'center'
  },
  subHeader: {
    fontSize: fontSizes[14],
    color: Colors.light.primary,
    marginBottom: unit.windowHeight(0.01),
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
    fontSize: fontSizes[22],
    fontWeight: '800',
    color: Colors.light.primary,
    textAlign: 'left',
    marginBottom: unit.windowHeight(0.02)
  },
  label: {
    fontSize: fontSizes[12],
    fontWeight: '600',
    color: Colors.light.primary,
    marginBottom: unit.windowHeight(0.005)
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
  passwordContainer: {
    position: 'relative',
    width: '100%'
  },
  passwordInput: {
    paddingRight: unit.windowWidth(0.15)
  },
  showHideButton: {
    position: 'absolute',
    right: unit.windowWidth(0.04),
    top: '22%'
  },
  showHideText: {
    color: Colors.light.primary,
    fontWeight: '600',
    fontSize: fontSizes[12]
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: unit.windowHeight(0.02),
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.light.primary,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    marginTop: unit.windowHeight(0.01)
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: fontSizes[14],
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  footerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: unit.windowHeight(0.025),
    fontSize: fontSizes[12],
    color: Colors.light.primary,
    textAlign: 'center'
  },
  linkText: {
    fontSize: fontSizes[12],
    fontWeight: '700',
    color: Colors.light.primary,
    textDecorationLine: 'underline'
  }
})
