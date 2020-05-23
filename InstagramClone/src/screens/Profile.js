import React from 'react'
import { View, Text, Image } from 'react-native'
import { Navigation, Space } from '../components';
import { ScrollView } from 'react-native-gesture-handler';

export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Space />

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
            <View style={{ flex: 1 }}>
                <View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#FAFAFA' }}>
                        <View style={{ flex: 1, height: 114, flexDirection: 'row', justifyContent: "space-evenly" }}>
                            <View>
                                <Image source={require('../../assets/images/image.png')} style={{ top: 14, bottom: 14, width: 87, height: 87, borderRadius: 50 }} />
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 17, fontWeight: "bold" }}>135</Text>
                                <Text style={{ fontSize: 15 }}>Posts</Text>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 17, fontWeight: "bold" }}>135</Text>
                                <Text style={{ fontSize: 15 }}>Followers</Text>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 17, fontWeight: "bold" }}>135</Text>
                                <Text style={{ fontSize: 15 }}>Following</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Indra Puji Novirwan</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, paddingHorizontal: 20 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                            </View>
                        </View>
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
                                <Image source={require('../../assets/images/block.png')} style={{ width: 30, height: 30 }} />
                            </View>
                            <View>
                                <Image source={require('../../assets/images/tag.png')} style={{ width: 30, height: 30 }} />
                            </View>
                        </View>
                        <View>
                            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: 'row', justifyContent: "space-between" }}>
                                <View style={{ marginVertical: 1 }}>
                                    <Image source={require('../../assets/images/image.png')} style={{ width: 119, height: 119 }} />
                                </View>
                                <View style={{ marginVertical: 1 }}>
                                    <Image source={require('../../assets/images/image.png')} style={{ width: 119, height: 119 }} />
                                </View>
                                <View style={{ marginVertical: 1 }}>
                                    <Image source={require('../../assets/images/image.png')} style={{ width: 119, height: 119 }} />
                                </View>
                                <View style={{ marginVertical: 1 }}>
                                    <Image source={require('../../assets/images/image.png')} style={{ width: 119, height: 119 }} />
                                </View>
                                <View style={{ marginVertical: 1 }}>
                                    <Image source={require('../../assets/images/image.png')} style={{ width: 119, height: 119 }} />
                                </View>
                                <View style={{ marginVertical: 1 }}>
                                    <Image source={require('../../assets/images/image.png')} style={{ width: 119, height: 119 }} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <Navigation navigation={navigation} />
        </View>
    )
}