import {Text, View} from "react-native";
import {usePathname, useSearchParams, useSegments} from "expo-router";

export default function PolizaID() {
    const pathname = usePathname()
    const segments = useSegments()
    const searchParams = useSearchParams()
    return <View>
        <Text>detalle de póliza</Text>
        <Text>{JSON.stringify({pathname, segments, searchParams}, null, 2)}</Text>
    </View>
}