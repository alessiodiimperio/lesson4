import React from "react";
import { StyleSheet, Text, View , Image} from "react-native";

export default function VideoFeedItem({ item }) {
    const title = item.snippet.title;
    const url = item.snippet.thumbnails.high.url
    return (
        <View>
            <Image style={styles.image} source={{ uri: url }} />
            <View style={styles.infoConainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 400,
        backgroundColor: "blue",
    },
    image:{
        height:200,
        width:'100%'
    },
    title:{
        padding:10,
        fontSize:16,
    },
    infoConainer:{
        height:100,
        width:'100%'
    }
});


