import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return <View>
        <Link href="/polizas/1">Poliza 1</Link>
        <Link href="/polizas/2">Poliza 2</Link>
        <Link href="/polizas/3">Poliza 3</Link>
    </View>
}