import { useRouter, useSegments } from "expo-router";
import React, {useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View} from "react-native";

const AuthContext = React.createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user, isLoadingUser) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    if (isLoadingUser) return;
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/(auth)/sign-in");
    } else if (user && inAuthGroup) {

      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments, isLoadingUser]);
}

interface IUser {
  tenantId: number;
  username: string;
  signInTime: number;
}

export function AuthProvider(props) {

  const [user, setAuth] = React.useState<IUser>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  React.useEffect(() => {
    const loadUserFromLocalStorage = async () => {
      const u = await AsyncStorage.getItem('user')
      if (u)
        setAuth(JSON.parse(u))
      setTimeout(() => {
        setIsLoadingUser(false);
      }, 1500)

    }

    loadUserFromLocalStorage();
  }, [])

  useProtectedRoute(user, isLoadingUser);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          const data: IUser = {tenantId: 1, username: 'chux', signInTime: Date.now()}
          AsyncStorage.setItem('user', JSON.stringify(data))
          setAuth(data)
        },
        signOut: () => {
          AsyncStorage.removeItem('user')
          setAuth(null)
        },
        user,
      }}
    >
      {isLoadingUser ? <Text>Cargando</Text> : props.children}

    </AuthContext.Provider>
  );
}