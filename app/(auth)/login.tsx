import { Colors } from '@/constants/theme'

import unit, { fontSizes } from '@/utils/dimensions'
import { Ionicons } from '@expo/vector-icons'
 
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  ActivityIndicator,
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

const Login = () => {
  const loading = ''
  const router = useRouter()

  const [form, setForm] = useState({
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
    showPassword: false
  })

  const validation = () => {
    let usernameError = ''
    let passwordError = ''

    const { username, password } = form

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)

    if (!username.trim()) {
      usernameError = 'Username or Email is required'
    } else if (!isEmail && username.length < 3) {
      usernameError = 'Username must be at least 3 characters'
    }

    if (!password.trim()) {
      passwordError = 'Password is required'
    } else if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters'
    }

    setForm(prev => ({
      ...prev,
      usernameError,
      passwordError
    }))

    return !usernameError && !passwordError
  }

  const handleChange = (key: 'username' | 'password', value: string) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
      [`${key}Error`]: ''
    }))
  }

  const handleLogin = async () => {
    const isValid = validation()
    if (!isValid) return
  }

  return (
    <View style={styles.container}>
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
            <Image
              style={styles.logo}
              source={require('@/assets/images/01.png')}
            />
          </TouchableOpacity>
          {/* <Text style={styles.headerTitle}>Welcome Back 👋</Text> */}
          <Text style={styles.headerTitle}>Welcome Back</Text>
          <Text style={styles.subHeader}>Signin & Manage Your Shop</Text>

          <View style={styles.card}>
            <Text style={styles.title}>Log In</Text>

            <Text style={styles.label}>Username</Text>
            <TextInput
              placeholder='Enter your username'
              placeholderTextColor={Colors.light.primary}
              value={form.username}
              onChangeText={value => handleChange('username', value)}
              style={[
                styles.input,
                form.usernameError ? styles.inputError : null
              ]}
            />
            {form.usernameError ? (
              <Text style={styles.errorText}>{form.usernameError}</Text>
            ) : null}

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder='Enter your password'
                placeholderTextColor={Colors.light.primary}
                secureTextEntry={!form.showPassword}
                value={form.password}
                onChangeText={value => handleChange('password', value)}
                style={[
                  styles.input,
                  styles.passwordInput,
                  form.passwordError ? styles.inputError : null
                ]}
              />
              <TouchableOpacity
                onPress={() =>
                  setForm(prev => ({
                    ...prev,
                    showPassword: !prev.showPassword
                  }))
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

            {form.passwordError ? (
              <Text style={styles.errorText}>{form.passwordError}</Text>
            ) : null}

            <TouchableOpacity
              onPress={() => router.push('/(auth)/forgetpassword')}
            >
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              {/* <Text style={styles.buttonText}>
                {loading ? (
                  <ActivityIndicator size='small' color={Colors.white} />
                ) : (
                  'Login'
                )}
              </Text> */}
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.signupText}>
              Don't have an account?{'  '}
              <Text
                onPress={() => router.push('/(auth)/signup')}
                style={styles.signupLink}
              >
                Sign Up
              </Text>
            </Text>
          </View>

          {/* <View style={{ height: unit.windowHeight(0.05) }} /> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

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
    alignItems: 'center',
    
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
    fontWeight: '800',
    fontSize: fontSizes[14],
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  signupText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: unit.windowHeight(0.04),
    textAlign: 'center',
    fontSize: fontSizes[12],
    color: Colors.light.primary,
    marginRight: 4
  },
  signupLink: {
    fontSize: fontSizes[12],
    fontWeight: '700',
    color: Colors.light.primary,
    textDecorationLine: 'underline'
  },

  passwordContainer: {
    position: 'relative',
    width: '100%'
  },
  passwordInput: {
    paddingRight: unit.windowWidth(0.15) // extra space for show/hide text
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
  }
})
