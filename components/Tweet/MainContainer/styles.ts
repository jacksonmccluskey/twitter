import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        marginHorizontal: 10,
    },
    tweetHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tweetHeaderName: {
        marginHorizontal: 5,
        fontWeight: "bold",
    },
    tweetHeaderUserName: {
        marginHorizontal: 5,
        color: "grey",
    },
    tweetHeaderCreatedAt: {
        marginHorizontal: 5,
        color: "grey",
    },
    tweetHeaderChevron: {
        color: "grey",
    },
    tweetContentContainer: {
        marginTop: 3,
        marginHorizontal: 5,
        lineHeight: 18,
    },
    tweetImage: {
        marginVertical: 10,
        width: "100%",
        height: 210,
        resizeMode: "contain",
        borderRadius: 15,
        overflow: "hidden",
    },
})

export default styles