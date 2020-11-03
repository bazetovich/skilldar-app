import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/config';

import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Page: FC<Props> = ({ title, children }) => {
  return (
    <>
      <NavigationBar title={title} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Page;

const Main = styled.main`
  min-height: calc(100% - 108px);
  box-sizing: border-box;
  background-color: ${colors.mainBackground};
  display: flex;
`;
