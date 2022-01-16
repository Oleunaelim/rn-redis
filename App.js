import React from "react";
import {
  Text,
  HStack,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  Container,
  Code,
  Center,
} from "native-base";
import { LoginForm } from "./src/components/LoginForm";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <LoginForm />
      </Center>
    </NativeBaseProvider>
  );
}
