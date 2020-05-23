import React from 'react'
import { Space, Navigation } from '../components'
import { View, Text } from 'react-native'


export default function Login({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Space />
            <View style={{ flex: 1 }}>
                <Text>Login</Text>
            </View>
            <Navigation navigation={navigation} />
        </View>
    )
}