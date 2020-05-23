import React from 'react'
import { View, Text } from 'react-native'

export default function StatusProfile() {
    return (
        <View style={{ marginBottom: 20 }}>
            <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Indra Puji Novirwan</Text>
            </View>
            <View>
                <Text style={{ fontSize: 15, paddingHorizontal: 20 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
        </View>
    )
}