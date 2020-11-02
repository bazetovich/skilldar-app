import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import { colors } from '../../styles/config';

interface Props {
  title: string;
  children: React.ReactNode;
  openedByDefault?: boolean;
}

const Item: FC<Props> = ({ title, children, openedByDefault = false }) => {
  const [opened, toggleOpened] = useState(openedByDefault);

  const handleClick = () => {
    toggleOpened(!opened);
  };

  return (
    <>
      <Header onClick={handleClick}>
        <Title>{title}</Title>
        {opened ? (
          <ChevronIcon size="1x" color={colors.white} icon={faChevronUp} />
        ) : (
          <ChevronIcon size="1x" color={colors.white} icon={faChevronDown} />
        )}
      </Header>
      <ContentWrap animate={{ height: opened ? 'auto' : 0 }}>
        <ContentInner>{children}</ContentInner>
      </ContentWrap>
    </>
  );
};

export default Item;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 8px 8px;
  border: 2px solid ${colors.yellow};
  border-radius: 5px;
  cursor: pointer;
`;

const ChevronIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
`;

const Title = styled.h4`
  margin: 0;
  color: ${colors.white};
  font-weight: normal;
  font-size: 14px;
`;

const ContentWrap = styled(motion.div)`
  background-color: #2f3236;
  overflow: hidden;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const ContentInner = styled.div`
  padding: 12px 10px;
`;
