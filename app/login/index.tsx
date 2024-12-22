import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Formik } from "formik";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  colors,
  StyledInputLable,
  StyledTextInput,
  RightIcon,
  StyledButton,
  StyledButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "@/components/styles";
import { Fontisto, Ionicons, Octicons } from "@expo/vector-icons";

import KeyboardAvoidingWrapper from "@/components/KeyboardAvoidingWrapper";

const Login = () => {
  const [pwdHidden, setPwdHidden] = useState(true);
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <InnerContainer>
          <PageTitle>ToDo App</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{
              userId: "",
              password: "",
            }}
            onSubmit={(values) => console.log(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <CustomTextInput
                  label="Email or Username"
                  icon="mail"
                  placeholder="andy@gmail.com"
                  placeholderTextColor={colors.darkLight}
                  onChangeText={handleChange("userId")}
                  onBlur={handleBlur("userId")}
                  value={values.userId}
                  keyboardType="text"
                />
                <CustomTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={colors.darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  keyboardType="password"
                  secureTextEntry={pwdHidden}
                  isPwd={true}
                  pwdHidden={pwdHidden}
                  setPwdHidden={setPwdHidden}
                />
                <MsgBox>. . .</MsgBox>
                <StyledButton onPress={() => handleSubmit}>
                  <StyledButtonText>
                    {" "}
                    <Link href="/home">Login</Link>{" "}
                  </StyledButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true} onPress={() => handleSubmit}>
                  <Fontisto name="google" size={25} color={colors.primary} />
                  <StyledButtonText google={true}>
                    Sign in with Google
                  </StyledButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Don't have an account alread? </ExtraText>
                  <TextLink>
                    <TextLinkContent>
                      <Link href="/sign-up">Signup</Link>{" "}
                    </TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

type IconName = "mail" | "lock";
type CustomTextInputPropsType = {
  label: string;
  icon: IconName;
  // isPwd: boolean;
  [key: string]: any; // ...props
};
const CustomTextInput = ({
  label,
  icon,
  isPwd = false,
  pwdHidden,
  setPwdHidden,
  ...props
}: CustomTextInputPropsType) => (
  <View>
    <LeftIcon>
      <Octicons name={icon} size={30} color={colors.brand} />
    </LeftIcon>
    <StyledInputLable>{label}</StyledInputLable>
    <StyledTextInput {...props} />
    {isPwd && (
      <RightIcon onPress={() => setPwdHidden(!pwdHidden)}>
        <Ionicons
          size={30}
          color={colors.darkLight}
          name={pwdHidden ? "eye-off-outline" : "eye-outline"}
        />
      </RightIcon>
    )}
  </View>
);

export default Login;
