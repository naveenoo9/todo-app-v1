import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={Keyboard.dismiss}>
          {children}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
