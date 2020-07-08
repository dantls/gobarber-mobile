import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #28262e;
  padding-top: ${getStatusBarHeight() + 24}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 24px;
`;
export const UserName = styled.Text`
  color: #39ff14;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  line-height: 24px;
`;

export const ProfileButton = styled.TouchableOpacity``;
export const UserAvatar = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 28px;
`;
