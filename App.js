import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import VideoFeed from "./components/VideoFeed";
import YouTubeService from "./YouTube.service";

export default function App() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);

    const queryData = (query) => {
        if (query) {
            setIsFiltering(false);
            YouTubeService.search(query)
                .then((data) => {
                  console.log(data)
                    setData(data.items);
                })
                .catch(console.log);
        }
    };
    const filter = (query) => {
        if (query && data.length > 1) {
            setIsFiltering(true);
            let mutable = data.slice();
            setFilteredData(
                mutable.filter((item) => gititem.snippet.title.includes(query)
                )
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header search={queryData} filter={filter} />
                <VideoFeed data={isFiltering ? filteredData : data} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 0.9,
        width: "100%",
    },
});
