
import {Text, View} from "react-native";
import {Link, usePathname, useSegments} from "expo-router";

export default function Unmatched() {
      const pathname = usePathname();
      const segments= useSegments();
    return <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
        <Text>404</Text>
        <Text>{JSON.stringify({pathname, segments}, null, 2)}</Text>
        <Link href="/">Inicio</Link>
    </View>;

}