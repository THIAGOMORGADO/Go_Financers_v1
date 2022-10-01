import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundColor};

`
export const Header = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primaryColor};
  height: ${RFPercentage(42)}px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
 
`;
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UseInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`

export const User = styled.View`
  margin-left: 13px;
`

export const UseGreetings = styled.Text`
  color: ${({theme}) => theme.colors.shapeColor};
  font-family: ${({theme}) => theme.Fonts.Regular};
  font-size: ${RFValue(18)}px;
`

export const UseName = styled.Text`
  color: ${({theme}) => theme.colors.shapeColor};
  font-family: ${({theme}) => theme.Fonts.Bold};
  font-size: ${RFValue(18)}px;
`
export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secundaryColor};
  font-size: ${RFValue(24)}px;
`;
export const  HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator:false,
  contentContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;