import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/config';

const Footer = () => {
  return <Wrapper></Wrapper>;
};

export default Footer;

const Wrapper = styled.footer`
  height: 50px;
  background-color: ${colors.black};
  margin-top: -54px;
  border-top: 2px solid #333437;
  border-bottom: 2px solid #333437;
`;
