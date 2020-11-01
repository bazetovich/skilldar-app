import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  value: number;
  color: string;
}

const Rating: FC<Props> = ({ value, color }) => {
  return (
    <Wrap>
      <WrapInner width={value} color={color} />
    </Wrap>
  );
};

export default Rating;

const Wrap = styled.div`
  width: 40px;
  height: 8px;
  border: 2px solid #171819;
  box-sizing: border-box;
`;

interface WrapInnerStylesProps {
  width: number;
  color: string;
}

const WrapInner = styled.div`
  height: 100%;
  width: ${({ width }: WrapInnerStylesProps) => `${width}%`};
  background: ${({ color }: WrapInnerStylesProps) => color};
`;
