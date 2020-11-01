import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import { colors, fonts } from '../../styles/config';

interface Props {
  title: string;
}

const NavigationBar: FC<Props> = ({ title }) => {
  return (
    <Header>
      <Container>
        <LinkWrap>
          <HashIcon size="1x" color={colors.primaryRed} icon={faHashtag} />
          <Title>{title}</Title>
        </LinkWrap>
        <LinkWrap>
          <InstIcon href="/">
            <FontAwesomeIcon size="1x" color={colors.gray} icon={faInstagram} />
          </InstIcon>
          <TwitterIcon href="/">
            <FontAwesomeIcon size="1x" color={colors.gray} icon={faTwitterSquare} />
          </TwitterIcon>
          <LoginLink href="/">
            Login
            <LogInIcon size="1x" color={colors.blue} icon={faSignInAlt} />
          </LoginLink>
        </LinkWrap>
      </Container>
    </Header>
  );
};

export default NavigationBar;

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  padding: 0 16px;
`;

const Header = styled.header`
  height: 50px;
  background-color: ${colors.black};
  border-top: 2px solid #333437;
  border-bottom: 2px solid #333437;
`;

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${fonts.semiBold};
  margin: 0;
  font-size: 18px;
  align-items: center;
  color: ${colors.gray};
`;

const HashIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 6px;
`;

const InstIcon = styled.a`
  font-size: 22px;
`;

const TwitterIcon = styled.a`
  font-size: 22px;
  margin-left: 8px;
`;

const LogInIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  margin-left: 6px;
`;

const LoginLink = styled.a`
  margin-left: 16px;
  font-family: ${fonts.semiBold};
  color: ${colors.blue};
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
