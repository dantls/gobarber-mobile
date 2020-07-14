import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  padding: 0px 30px ${Platform.OS === 'android' ? 100 : 40}px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 120px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;
export const UserAvatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;

  align-self: center;
`;
