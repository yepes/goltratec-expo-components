import {Stack} from "expo-router/stack";
import React from "react";
import {Link} from "expo-router";
import {View} from "react-native";

export default function Layout() {
    return <><Stack>
        <Stack.Screen
            name="index"
        />
        <Stack.Screen
            name="modal"
            options={{
                // Set the presentation mode to modal for our modal route.
                presentation: "modal",
                headerTitle: "this is an items"
            }}
        />



        {/*<Stack.Screen*/}
        {/*    name="polizas-crear"*/}
        {/*    options={{*/}
        {/*        presentation: "modal",*/}
        {/*        headerTitle: "poliza create stack"*/}
        {/*    }}*/}
        {/*/>*/}
    </Stack>
        <View style={{borderColor: 'tomato', borderWidth: 2, marginBottom: 10}}>
            <Link href="/polizas/modal">Modal de items</Link>
            <Link href="/polizas/polizas-crear">Crear Poliza</Link>
            <Link href="/modals/a">Shared</Link>

        </View>

    </>
}