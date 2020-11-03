import React from 'react';
import styled from 'styled-components';
import { breakPoints, colors, fonts } from '../../styles/config';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <LinkWrap>
          <TermPrivacyLink href="/">Terms</TermPrivacyLink>
          <TermPrivacyLink href="/">Privacy</TermPrivacyLink>
        </LinkWrap>
        <LinkWrap>
          <AboutLink href="/">About Skilldar</AboutLink>
          <GetStartedLink href="/">Get Started</GetStartedLink>
        </LinkWrap>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 50px;
  background-color: ${colors.black};
  border-top: 2px solid #333437;
  border-bottom: 2px solid #333437;
`;

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
`;

const TermPrivacyLink = styled.a`
  margin-right: 16px;
  font-family: ${fonts.semiBold};
  color: ${colors.gray};
  font-size: 12px;

  @media (min-width: ${breakPoints.md}) {
    font-size: 18px;
  }
`;

const AboutLink = styled.a`
  margin-right: 16px;
  font-family: ${fonts.semiBold};
  color: ${colors.green};
  font-size: 12px;

  @media (min-width: ${breakPoints.md}) {
    font-size: 18px;
  }
`;

const GetStartedLink = styled.a`
  font-family: ${fonts.semiBold};
  color: ${colors.yellow};
  font-size: 12px;

  @media (min-width: ${breakPoints.md}) {
    font-size: 18px;
  }
`;
