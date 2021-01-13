import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "#a0a0a0",
        borderTopColor: "#bfbfbf",
        borderRightColor: "#101010",
        borderBottomColor: "#101010",
        borderLeftColor: "#bfbfbf",
    },

    text: {
        color: "#ffffff",
    },
});

export default styles;
