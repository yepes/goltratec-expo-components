import {useNavigation} from "expo-router";
import {Button, View} from "react-native";

export default function DebugNavigatorInfo() {
    const navigation = useNavigation()

    const parseNav = () => {
        let res = []
        res.push({
            id: navigation.getId(),
            isFocused: navigation.isFocused(),
            state: navigation.getState(),
        })

        let tmpNav = navigation;
        while (tmpNav.getParent()) {
            tmpNav = tmpNav.getParent()
            res.push({
                id: tmpNav.getId(),
            isFocused: tmpNav.isFocused(),
            state: tmpNav.getState(),
            })
        }
        console.log(res);
    }


    return <View>
        <Button title="Debug Navigator Info" onPress={parseNav} />
    </View>
}