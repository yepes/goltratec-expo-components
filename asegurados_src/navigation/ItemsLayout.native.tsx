import React from "react";
import {Stack} from "expo-router/stack";

export default function ItemsLayout() {

    return <Stack>
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
    </Stack>
}