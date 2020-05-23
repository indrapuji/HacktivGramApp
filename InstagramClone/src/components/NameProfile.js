import React from 'react'
import { View, Text, Image } from 'react-native'

export default function DetailProfile() {
    return (
        <View style={{ height: 48, flexDirection: "row", backgroundColor: '#FAFAFA' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={{ fontSize: 17, top: 12, fontWeight: "bold", marginLeft: 12 }}>indrapuji</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../../assets/images/3line.png')} style={{ width: 38, height: 38, top: 3, right: 4 }} />
                </View>
            </View>
        </View>
    )
}