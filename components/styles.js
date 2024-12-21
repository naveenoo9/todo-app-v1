import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

// Colors
export const colors = {
  primary: "#fff",
  secondary: "#e5e7eb",
  tertiary: "#1f2937",
  darkLight: "#9ca3af",
  brand: "#6d28d9",
  green: "#10b981",
  red: "#ef4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = colors;

export const StyledContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 25px;
  padding-top: ${statusBarHeight + 10}px;
  background-color: ${primary};
  align-items: center;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  /* border: 1px solid black; */
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  margin: auto;
  border-radius: 50px;
  border: 2px solid ${secondary};
  margin: 10px 0;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
  margin-top: 25px;
  ${(props) => props.welcome && ` font-size: 35px;`}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledFormArea = styled.View`
  width: 100%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding: 0 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLable = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 34px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 34px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.google &&
    `
      background-color: ${green};
      flex-direction: row;
      justify-content: center;
  `}
`;

export const StyledButtonText = styled.Text`
  color: ${primary};
  font-size: 20px;
  ${(props) => props.google && `padding: 25px;`}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;
