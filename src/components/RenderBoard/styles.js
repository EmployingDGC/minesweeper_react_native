import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    styleButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#909090",
        borderTopColor: "#cccccc",
        borderRightColor: "#202020",
        borderBottomColor: "#202020",
        borderLeftColor: "#cccccc",
        borderWidth: 5,
    },

    styleButtonOpened: {
        backgroundColor: "#eeeeee",
        borderTopColor: "#cccccc",
        borderRightColor: "#cccccc",
        borderBottomColor: "#cccccc",
        borderLeftColor: "#cccccc",
        borderWidth: 1,
    },

    styleTextNumberOne: {
        color: "#0966C2",
    },
    
    styleTextNumberTwo: {
        color: "#2E802F",
    },
    
    styleTextNumberThree: {
        color: "#C31F1F",
    },
    
    styleTextNumberFour: {
        color: "#943DB2",
    },
    
    styleTextNumberFive: {
        color: "#FF9002",
    },
    
    styleTextNumberSix: {
        color: "#eb34b7",
    },
    
    styleTextNumberSeven: {
        color: "#eb3474",
    },
    
    styleTextNumberEight: {
        color: "#eb3434",
    },
});

export default styles;
