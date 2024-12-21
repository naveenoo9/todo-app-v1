import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {},
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
