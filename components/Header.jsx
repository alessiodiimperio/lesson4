import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Header({ search, filter }) {
    const [query, setQuery] = useState("");
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>YouTube</Text>
            <TextInput
                placeholder="Search..."
                value={query}
                onChangeText={setQuery}
                style={styles.searchField}
            />
            <View style={styles.searchOptions}>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => search(query)}
                >
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => filter(query)}
                >
                    <Feather name="filter" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        flexDirection: "row",
        paddingBottom: 10,
    },
    searchOptions:{
        flexDirection:'row'
    },
    searchField: {
        height: 50,
        flex: 1,
        borderRadius: 12,
        paddingHorizontal: 20,
    },
    logo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
    },
    option:{
        padding:5
    }
});
