import React from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function History() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 97, flexDirection: 'row', paddingLeft: 12, paddingTop: 7, borderWidth: 0.5, borderColor: "#DADADA" }}>
            <TouchableOpacity>
                <View style={{ marginRight: 18 }}>
                    <View style={{ width: 64, height: 64 }}>
                        <Image source={require('../../assets/images/image.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', borderRadius: 50, flex: 1 }} />
                    </View>
                    <Text style={{ fontSize: 15, marginTop: 2, textAlign: "center" }}>Your Story</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}