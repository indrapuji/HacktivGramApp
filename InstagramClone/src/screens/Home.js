import React from "react";
import { ScrollView, View } from "react-native";
import { Header, Navigation, Post, Space, Story } from '../components';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Space />
            <Header />
            <View style={{ flex: 1 }}>
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Story />
                        <Post />
                    </ScrollView>
                </View>
            </View>
            <Navigation navigation={navigation} />
        </View >
    );
}