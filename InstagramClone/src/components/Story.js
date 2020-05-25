import React from 'react'
import { View, Image, Text } from 'react-native'

export default function History() {
    return (
        <View style={{ marginRight: 18 }}>
            <View style={{ width: 64, height: 64, borderRadius: 50 }}>
                <Image source={require('../../assets/images/thumbnail-story.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
            </View>
            <Text style={{ fontSize: 15, marginTop: 2, textAlign: "center" }}>Your Story</Text>
        </View>
    )
}