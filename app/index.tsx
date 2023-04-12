import React from 'react';
import {View} from "react-native";
import {Link} from "expo-router";

export const Index:React.FC = () => {
    return <View>
        <Link href="/SelectTwo">Select Two</Link>
    </View>;
}

export default Index