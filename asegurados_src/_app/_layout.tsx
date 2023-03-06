import React from "react";
// @ts-expect-error
import RootNavigation from "../src/navigation/RootNavigation";
import {AuthProvider} from "../src/auth/provider";


export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",
};

export default function Layout() {

    return <AuthProvider>
        <RootNavigation />
    </AuthProvider>
    // <DrawerNav>
    //     <DrawerNav.Screen
    //         name="index" // This is the name of the page and must match the url from root
    //         options={{
    //             drawerLabel: 'index page',
    //             title: 'index page title',
    //         }}
    //     />
    // </DrawerNav>
}

// export default function Layout() {
//   return <AuthProvider>
//     <LoggedInInfo />
//     <Slot />
//
//
//
//   </AuthProvider>;
// }