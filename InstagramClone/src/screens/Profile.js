import React from 'react'
import { View, Text } from 'react-native'
import { Header, Navigation, Space } from '../components';

export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1 }}>

            <Space />
            <Header />
            <View style={{ flex: 1 }}>
                <Text>Profile Page</Text>
            </View>
            <Navigation navigation={navigation} />
        </View>
    )
}