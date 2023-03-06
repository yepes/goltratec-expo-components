import {Stack} from "expo-router/stack";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Navigator, usePathname, Slot, Link} from "expo-router";
import {TabRouter} from "@react-navigation/native";
import {LoggedInInfo} from "../components/LoggedInInfo";

function Header() {
    const {navigation, state, descriptors, router} = Navigator.useContext();

    const pathname = usePathname();

    return (
        <>
            <View style={s.w}>

                <Link
                    href="/"
                    style={[pathname === "/" && s.active]}
                >
                    Home
                </Link>

                <Link
                    href="/tomador"
                    // Use `pathname` to determine if the link is active.
                    style={[pathname === "/tomador" && s.active]}
                >
                    Datos Tomador
                </Link>

                <Link
                    href={`/poliza/${Date.now()}`}
                    style={[pathname.startsWith("/poliza/") && s.active]}
                >
                    Mi Póliza
                </Link>

                <Link
                    href="/asegurados"
                    // Use `pathname` to determine if the link is active.
                    style={[pathname === "/asegurados" && s.active]}
                >
                    Asegurados
                </Link>

                <Link
                    href="/recibos"
                    // Use `pathname` to determine if the link is active.
                    style={[pathname === "/recibos" && s.active]}
                >
                    Recibos
                </Link>

            </View>
            <LoggedInInfo />
        </>
    );
}

const s = StyleSheet.create({
    w: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    active: {
        backgroundColor: "blue",
        color: "white"
    }
})

export default function RootNavigation() {
    return <Navigator router={TabRouter}>
        <Header/>
        <Slot/>
    </Navigator>
}