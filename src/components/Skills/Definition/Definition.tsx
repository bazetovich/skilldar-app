import React, { FC } from 'react';
import styled from 'styled-components';

import { breakPoints, colors } from '../../../styles/config';
import { Header3 } from '../../../styles/styles';

interface Props {
  text: string;
}

const Definition: FC<Props> = ({ text }) => {
  return (
    <Wrap>
      <Title align="center" marginBottom="2px">
        DEFINITION
      </Title>
      <Text>{text}</Text>
    </Wrap>
  );
};

export default Definition;

const Wrap = styled.div`
  border-radius: 4px;
  border: 1px solid #393a3c;
  padding: 0px 14px 10px 14px;
  margin-top: 26px;

  @media (min-width: ${breakPoints.md}) {
    padding: 0px 30px 10px 30px;
  }
`;

const Title = styled(Header3)`
  background-color: ${colors.mainBackground};
  width: 72px;
  margin-top: -10px;
  margin-left: -3px;
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  color: ${colors.darkRed};
  font-size: 14px;
  margin: 0;
`;
