import {StyleSheet} from "react-native";

export const videoListStyles = StyleSheet.create({
    mainSection: {
        alignItems: "center"
    },
    videoList: {
        flexDirection: "row",
        margin: 10,
        width: "100%",
        alignItems: 'center'
    },
    thumbnail: {
        width: "15%",
        height: 50,
        borderRadius: 10,
        margin: 5
    },
    title: {
        width: "70%"
    },
    line: {
        width: "90%",
        color: "grey",
        borderWidth: .5
    }
})
