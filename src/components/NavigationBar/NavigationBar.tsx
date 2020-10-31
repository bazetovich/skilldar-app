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
      <LeftWrap>
        <HashIcon size="1x" color={colors.primaryRed} icon={faHashtag} />
        <Title>{title}</Title>
      </LeftWrap>
      <Icon size="1x" color={colors.gray} icon={faInstagram} />
      <Icon size="1x" color={colors.gray} icon={faTwitterSquare} />
      <Icon size="1x" color={colors.gray} icon={faSignInAlt} />
    </Header>
  );
};

export default NavigationBar;

const Header = styled.header`
  height: 50px;
  background-color: ${colors.black};
  border-top: 2px solid #333437;
  border-bottom: 2px solid #333437;
  display: flex;
  flex-direction: row;
`;

const LeftWrap = styled.div`
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

const Icon = styled(FontAwesomeIcon)`
  font-size: 22px;
`;
