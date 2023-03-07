import React from 'react';
import { Drawer } from 'expo-router/drawer'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient()

const Layout = props => <QueryClientProvider client={queryClient}>
    <Drawer />
</QueryClientProvider>

export default Layout;