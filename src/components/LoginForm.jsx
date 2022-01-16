import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  Icon,
  HStack,
} from "native-base";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
export const LoginForm = () => {
  return (
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading
        size="xl"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
        fontWeight="semibold"
      >
        Welcome!
      </Heading>
      <Heading
        mt="1"
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
        }}
        fontWeight="medium"
        size="xs"
      >
        redis에서 이메일 인증이 완료되면 pub/sub 동작을 기대합니다.
      </Heading>
      <VStack space={3} mt="5">
        <HStack space={2}>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <Button colorScheme="indigo" mt="7">
            인증
          </Button>
        </HStack>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button
          mt="2"
          colorScheme="indigo"
          leftIcon={<Icon as={AntDesign} name="rocket1" size="xs" />}
        >
          Sign up
        </Button>
        <Button
          mt="2"
          colorScheme="yellow"
          leftIcon={<Icon as={MaterialIcons} name="login" size="xs" />}
        >
          카카오로 로그인 하기
        </Button>
        <Button
          mt="2"
          colorScheme="green"
          leftIcon={<Icon as={MaterialIcons} name="login" size="xs" />}
        >
          네이버로 로그인 하기
        </Button>
        <Button
          mt="2"
          colorScheme="warmGray"
          leftIcon={<Icon as={AntDesign} name="google" size="xs" />}
        >
          구글로 로그인 하기
        </Button>
      </VStack>
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
