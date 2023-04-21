import {StyleSheet, View} from "react-native";


const NativeSelectedComponent = ({ isSelected, item }: { isSelected: boolean, item: any}) => {
    return <View style={[styles.button, isSelected && styles.buttonSelected]}/>
}

export default NativeSelectedComponent;

const styles = StyleSheet.create({
    button: {
        width: 24,
        height: 24,
        borderRadius: 50,
        borderWidth:1,
        borderColor: 'gray',
    },
    buttonSelected: {
        backgroundColor: 'rgba(0,0,0,.1)',
    },
})