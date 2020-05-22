import React from 'react'
import { View, Text } from 'react-native'
import { Header, Navigation, Space } from '../components';

export default function Add({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Space />
            <Header />
            <View style={{ flex: 1 }}>
                <Text>Add Page</Text>
            </View>
            <Navigation navigation={navigation} />
        </View>
    )
}