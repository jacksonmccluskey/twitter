import { StyleSheet } from "react-native"
import Colors from "../../constants/Colors" 

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        position: "absolute",
        right: 20,
        bottom: 20,
        width: 60,
        height: 60,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default styles