import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/config';

interface Props {
  checked?: boolean;
  label?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
}

const CheckBox: React.FC<Props> = ({ label, checked, onClick }) => {
  return (
    <Wrap onClick={onClick}>
      <CheckMark checked={checked} aria-checked={checked} role="checkbox" />
      {label && <Label>{label}</Label>}
    </Wrap>
  );
};

export default CheckBox;

const Wrap = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.span`
  flex-grow: 1;
  color: ${colors.white};
  padding-left: 8px;
  font-size: 14px;
`;

const CheckMark = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ checked }: { checked: boolean }) => (checked ? colors.primaryRed : '#4a4a4a')};
`;
