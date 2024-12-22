import { Text, View } from "react-native";
import Login from "./login";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Device from "expo-device";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
export default function Index() {
  useEffect(() => {
    const setOrientation = async () => {
      if (Device.isDevice) {
        const isTablet = Device.deviceType === Device.DeviceType.TABLET;
        if (isTablet)
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE
          );
        else
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT
          );
      }
    };
    setOrientation();
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      {Device.deviceType === Device.DeviceType.TABLET && (
        <StatusBar style="dark" />
      )}
      <Login />
    </View>
  );
}
