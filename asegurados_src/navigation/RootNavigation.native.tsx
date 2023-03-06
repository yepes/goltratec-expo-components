import {Drawer} from "expo-router/drawer";

export default function RootNavigation() {
    return <Drawer>

        <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
                drawerLabel: 'Inicio',
                title: 'Inicio',
            }}
        />

        <Drawer.Screen
            name="tomador/index" // This is the name of the page and must match the url from root
            options={{
                drawerLabel: 'Datos Tomador',
                title: 'Tomador',
            }}
        />

        <Drawer.Screen
            name='poliza/[id]' // This is the name of the page and must match the url from root
            options={{
                drawerLabel: 'Mi Póliza',
                title: 'Mi Póliza',
            }}
            initialParams={{
              id: Date.now()
            }}
        />

        <Drawer.Screen
            name="asegurados/index" // This is the name of the page and must match the url from root
            options={{
                drawerLabel: 'Asegurados',
                title: 'Asegurados',
            }}
        />

        <Drawer.Screen
            name="recibos/index" // This is the name of the page and must match the url from root
            options={{
                drawerLabel: 'Recibos',
                title: 'Recibos',
            }}
        />

    </Drawer>
}

