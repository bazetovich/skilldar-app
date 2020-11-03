import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { SkillsSelectors, SkillsActions, SkillsThunkActions } from '../../../store/store';
import { colors } from '../../../styles/config';
import { Header3 } from '../../../styles/styles';

interface Props {
  variant: 'row' | 'column';
}

const RelatedSearches: FC<Props> = ({ variant }) => {
  const dispatch = useDispatch();
  const items = useSelector(SkillsSelectors.selectRelatedSearches);

  const makeClickHandler = (val: string) => {
    return () => {
      dispatch(SkillsActions.setCurrentPage(1));
      dispatch(SkillsActions.setSearchString(val));
      dispatch(SkillsThunkActions.fetchUsers());
    };
  };

  if (!items.length) {
    return null;
  }

  return (
    <Wrap variant={variant}>
      <Header3 marginBottom="8px" marginTop="0px">
        RELATED SEARCHES
      </Header3>
      <BtnWrap variant={variant}>
        {items.map((val: string) => (
          <HashBtn variant={variant} key={val} onClick={makeClickHandler(val)}>{`#${val}`}</HashBtn>
        ))}
      </BtnWrap>
    </Wrap>
  );
};

export default RelatedSearches;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  align-items: ${({ variant }: Props) => (variant === 'row' ? 'flex-start' : 'center')};
`;

const BtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ variant }: Props) => (variant === 'row' ? 'row' : 'column')};
`;

const HashBtn = styled.button`
  margin-top: 0;
  margin-bottom: 10px;
  margin-right: ${({ variant }: Props) => (variant === 'row' ? '12px' : 0)};
  color: ${colors.darkRed};
  background: none;
  border: none;
  outline: none;
  font-size: 12px;
  cursor: pointer;
  padding: ${({ variant }: Props) => (variant === 'row' ? 0 : '0 8px')};
  padding: ${({ variant }: Props) => (variant === 'row' ? 0 : '0 8px')};
`;
