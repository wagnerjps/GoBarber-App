import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
  margin: 64px 0 24px;
`;

export const BtnLogOut = styled(RectButton)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  width: 50px;
  height: 40px;
  background: #ff9000;
  border-radius: 6px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const BtnLogOutText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #312e38;
  font-size: 16px;
`;
