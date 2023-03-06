import React from 'react';
import {Text, View} from "react-native";
import {useAuth} from "../auth/provider";
import Row from "../ui/Row";

interface ILoggedInInfoProps {

}

export const LoggedInInfo: React.FC<ILoggedInInfoProps> = () => {
    const { user, signOut} = useAuth();
    if (!user) return null;

    return <Row>
        <Text>{user.username}</Text>
        <Text onPress={() => signOut()}>Salir</Text>
    </Row>;
}
