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
  const isFetching = useSelector(SkillsSelectors.selectIsFetching);

  const makeClickHandler = (val: string) => {
    return () => {
      dispatch(SkillsActions.setSearchString(val));
      dispatch(SkillsThunkActions.fetchUsers());
    };
  };

  if (isFetching) {
    return null;
  }

  return (
    <Wrap variant={variant}>
      <Header3 marginBottom="8px" marginTop="0px">
        RELATED SEARCHES
      </Header3>
      <BtnWrap variant={variant}>
        {items.map((val: string) => (
          <HashBtn key={val} onClick={makeClickHandler(val)}>{`#${val}`}</HashBtn>
        ))}
      </BtnWrap>
    </Wrap>
  );
};

export default RelatedSearches;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ variant }: Props) => (variant === 'row' ? 'flex-start' : 'center')};
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: ${({ variant }: Props) => (variant === 'row' ? 'row' : 'column')};
`;

const HashBtn = styled.button`
  margin-top: 0;
  margin-bottom: 10px;
  color: ${colors.darkRed};
  background: none;
  border: none;
  font-size: 12px;
`;
