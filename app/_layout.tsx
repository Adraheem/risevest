import React from 'react';
import {Stack} from "expo-router";

interface IProps {
}

function RootLayout(props: IProps) {
  return (
    <Stack screenOptions={{animation: "default", headerShown: false}}>
      <Stack.Screen name="(main)"/>
    </Stack>
  );
}

export default RootLayout;
