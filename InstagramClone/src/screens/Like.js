import React from 'react'
import { View, Text } from 'react-native'
import { Header, Navigation, Space } from '../components';

export default function Like({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Space />
            <Header />
            <View style={{ flex: 1 }}>
                <Text>Like Page</Text>
            </View>
            <Navigation navigation={navigation} />
        </View>
    )
}