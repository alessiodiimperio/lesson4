import React from "react";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import VideoFeedItem from "./VideoFeedItem";

export default function VideoFeed({ data }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return <VideoFeedItem  item={item} />
                }}
                keyExtractor={(item) => item.id.videoId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});
