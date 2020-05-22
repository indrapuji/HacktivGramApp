import React from "react";
import { ScrollView, View } from "react-native";
import { Header, Navigation, Post, Space, Story } from '../components';

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <Space />
            <Header />
            <View style={{ flex: 1 }}>
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 97, flexDirection: 'row', paddingLeft: 12, paddingTop: 7, borderWidth: 0.5, borderColor: "#DADADA" }}>
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                        </ScrollView>
                        <Post />
                        <Post />
                        <Post />
                    </ScrollView>
                </View>
            </View>
            <Navigation />
        </View >
    );
}