import {Slot} from "expo-router";
import {AuthProvider} from "../src/auth/provider";
import CurrentUser from "../src/ui/CurrentUser";
import RootNavigation from "../src/navigation/RootNavigation";

export default function Root() {
    return (
        <AuthProvider>
            <RootNavigation />
        </AuthProvider>
    );
}