import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Welcome",
        headerShown: true,
        headerTitleStyle: {
          color: "#00a",
        },
      }}
      // name="index"
    />
  );
}
