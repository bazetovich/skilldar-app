import React, { FC } from 'react';
import styled from 'styled-components';

import { fonts } from '../../styles/config';

type Props = JSX.IntrinsicElements['input'] & {
  grow?: boolean;
  iconRight?: React.ReactNode;
  onValueChange: (val: string) => void;
};

interface StyleProps {
  grow?: boolean;
}

const Input: FC<Props> = ({ value, iconRight, grow, onValueChange, ...other }) => {
  const handleChange = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    onValueChange(evt.currentTarget.value);
  };

  return (
    <Wrap grow={grow}>
      {/** @ts-ignore */}
      <InputStyled value={value} onChange={handleChange} {...other} />
      {iconRight && iconRight}
    </Wrap>
  );
};

export default Input;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 15px 15px;
  background-color: #3b3d3f;
  align-items: center;
  border-radius: 4px;
  box-shadow: 3px 3px 0px 0px rgba(26, 27, 28, 1);
  flex: ${({ grow }: StyleProps) => (grow ? 1 : undefined)};
`;

const InputStyled = styled.input`
  width: 100%;
  outline: none;
  background: none;
  border: none;
  font-size: 16px;
  color: #999a9b;
  font-family: ${fonts.semiBold};
  padding: 0;
  margin: 0;
  margin-top: -2px;

  &::placeholder {
    color: #999a9b;
  }
`;
