import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const LoginModal = () => {
  const isPresented = router.canGoBack();
  return (
    <View style={styles.container}>
      <Text>LoginModal</Text>
      {isPresented && (
        <Link style={styles.dismiss} href="../">
          Dismiss
        </Link>
      )}
    </View>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dismiss: {
    backgroundColor: "#f15",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    // width: "120px",
    fontWeight: 600,
  },
});
