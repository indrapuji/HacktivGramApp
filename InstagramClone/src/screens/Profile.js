import React from 'react'
import { View, Text, Image } from 'react-native'
import { Navigation, Space, NameProfile, ImageProfile, StatusProfile, PostProfile } from '../components';
import { ScrollView } from 'react-native-gesture-handler';

export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1 }}>

            <Space />
            <NameProfile />

            <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <ImageProfile />
                        <StatusProfile />

                        <View style={{ alignItems: "center" }}>
                            <View style={{ borderWidth: 3, borderRadius: 5, borderColor: "grey", width: 335, height: 35, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Edit Profile</Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 20, marginVertical: 10 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Story Hightlights</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-around", marginBottom: 15 }}>
                            <View>
                                <Image source={require('../../assets/images/like.png')} style={{ width: 30, height: 30 }} />
                            </View>
                            <View>
                                <Image source={require('../../assets/images/like.png')} style={{ width: 30, height: 30 }} />
                            </View>
                        </View>

                        <PostProfile />

                    </ScrollView>
                </View>
            </View>
            <Navigation navigation={navigation} />
        </View>
    )
}