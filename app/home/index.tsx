import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  InnerContainer,
  WelcomeContainer,
  PageTitle,
  SubTitle,
  StyledButton,
  StyledButtonText,
} from "@/components/styles";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <>
      <InnerContainer>
        <PageTitle>ToDo App</PageTitle>
        <SubTitle>Welcome User!!!</SubTitle>
        <WelcomeContainer>
          <StyledButton>
            <StyledButtonText>
              <Link href="/">Go Back</Link>
            </StyledButtonText>
          </StyledButton>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
