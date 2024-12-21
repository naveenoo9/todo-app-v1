import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  colors,
  ExtraText,
  ExtraView,
  InnerContainer,
  LeftIcon,
  Line,
  MsgBox,
  PageTitle,
  RightIcon,
  StyledButton,
  StyledButtonText,
  StyledContainer,
  StyledFormArea,
  StyledInputLable,
  StyledTextInput,
  SubTitle,
  TextLink,
  TextLinkContent,
} from "@/components/styles";
import { Formik } from "formik";
import { Fontisto, Ionicons, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUp = () => {
  const [pwdHidden, setPwdHidden] = useState(true);
  const [date, setDate] = useState(new Date(1598051730000));
  const [dob, setDob] = useState();
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(!show);
  };

  const showDatepicker = () => {
    setShow(!show);
  };
  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>ToDo App</PageTitle>
        <SubTitle>Account Signup</SubTitle>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <Formik
          initialValues={{
            userId: "",
            fullName: "",
            mail: "",
            dateOfBirth: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => console.log(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <CustomTextInput
                label="Full Name"
                icon="person"
                placeholder="Richard Barnes"
                placeholderTextColor={colors.darkLight}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
                keyboardType="text"
              />
              <CustomTextInput
                label="Email"
                icon="mail"
                placeholder="andy@gmail.com"
                placeholderTextColor={colors.darkLight}
                onChangeText={handleChange("mail")}
                onBlur={handleBlur("mail")}
                value={values.mail}
                keyboardType="email-address"
              />
              <CustomTextInput
                label="Date of Birth"
                icon="calendar"
                placeholder="DD/MM/YYYY"
                placeholderTextColor={colors.darkLight}
                onChangeText={handleChange("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
                value={values.dateOfBirth}
                // keyboardType="ca"
                isDate={true}
                editable={false}
                showDatepicker={showDatepicker}
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
              <CustomTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor={colors.darkLight}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                keyboardType="password"
                // secureTextEntry={pwdHidden}
                // isPwd={true}
                // pwdHidden={pwdHidden}
                // setPwdHidden={setPwdHidden}
              />
              <MsgBox>. . .</MsgBox>
              <StyledButton onPress={() => handleSubmit}>
                <StyledButtonText>
                  <Link href="/home">Sign Up</Link>
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
                <ExtraText>Already have an account? </ExtraText>
                <TextLink>
                  <TextLinkContent>
                    <Link href="/login">Sign In</Link>
                  </TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

type IconName = "mail" | "lock" | "calendar" | "person" | "mail" | "user";
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
  isDate,
  showDatepicker,
  ...props
}: CustomTextInputPropsType) => (
  <View>
    <LeftIcon>
      <Octicons name={icon} size={30} color={colors.brand} />
    </LeftIcon>
    <StyledInputLable>{label}</StyledInputLable>
    {isDate ? (
      <TouchableOpacity onPress={showDatepicker}>
        <StyledTextInput {...props} />
      </TouchableOpacity>
    ) : (
      <StyledTextInput {...props} />
    )}
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
export default SignUp;

const styles = StyleSheet.create({});
