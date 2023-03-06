import {Platform} from "react-native-web";
import {Alert} from "react-native";

export default function fakeModal(title) {
    if (Platform.OS === 'web')
        alert(title)
    else
        Alert.alert({title})
}