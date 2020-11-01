import styled from 'styled-components';
import { colors } from './config';

interface HeaderProps {
  marginTop?: string;
  marginBottom?: string;
  align?: string;
}

export const Header3 = styled.h3`
  margin-top: ${({ marginTop }: HeaderProps) => marginTop};
  margin-bottom: ${({ marginBottom }: HeaderProps) => marginBottom};
  color: ${colors.grayLight};
  font-size: 14px;
  font-weight: normal;
  text-align: ${({ align }: HeaderProps) => align};
`;
