import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Visible } from 'react-grid-system';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash.debounce';

import { Loader, SkillsComponents, Input } from '../..';
import { SkillsSelectors, SkillsActions, SkillsThunkActions } from '../../../store/store';
// @ts-ignore
import logoImg from '../../../assets/images/logo.png';
import { colors } from '../../../styles/config';

const TopSection = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(SkillsSelectors.selectIsFetching);
  const searchString = useSelector(SkillsSelectors.selectSearchString);
  const definition = useSelector(SkillsSelectors.selectDefinition);

  const handleChange = (val: string) => {
    dispatch(SkillsActions.setSearchString(val));

    if (val.length > 3) {
      fetchUsers();
    }
  };

  const fetchUsers = useCallback(
    debounce(
      () => {
        dispatch(SkillsThunkActions.fetchUsers());
      },
      1000,
      {
        leading: false,
      }
    ),
    []
  );

  return (
    <Section>
      <SearchWrap>
        <LogoWrap>
          <Logo src={logoImg} alt="Skilldar" />
        </LogoWrap>
        <Input
          grow
          placeholder="Search"
          value={searchString}
          onValueChange={handleChange}
          iconRight={<SearchIcon size="1x" color={colors.grayLight} icon={faSearch} />}
        />
      </SearchWrap>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {definition && <SkillsComponents.Definition text={definition} />}
          <Visible xs sm>
            <SkillsComponents.RelatedSearches variant="row" />
          </Visible>
        </>
      )}
    </Section>
  );
};

export default TopSection;

const Section = styled.section`
  padding-top: 16px;
`;

const SearchWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 26px;
`;

const Logo = styled.img`
  width: 216px;
`;

const LogoWrap = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  margin-left: 6px;
`;
