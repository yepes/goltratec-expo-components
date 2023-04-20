import {StyleSheet, View} from "react-native";


const NativeSelectedComponent = ({ isSelected, item }: { isSelected: boolean, item: any}) => {
    return <View style={[styles.button, isSelected && styles.buttonSelected]}/>
}

export default NativeSelectedComponent;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    buttonSelected: {
        backgroundColor: 'red',
        width: 40,
        height: 40,
        borderRadius: 10,
    },
})