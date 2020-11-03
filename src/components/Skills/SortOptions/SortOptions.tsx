import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Accordion } from '../..';
import { SkillsActions, SkillsSelectors, SkillsThunkActions } from '../../../store/store';
import { Locations } from '../../../store/views/Skills/types';

import { Header3 } from '../../../styles/styles';
import CheckBox from '../../Forms/CheckBox';

const locationOptions = [
  {
    label: 'All Cities',
    value: Locations.All,
  },
  {
    label: 'Stockholm',
    value: Locations.Stockholm,
  },
  {
    label: 'Berlin',
    value: Locations.Berlin,
  },
  {
    label: 'New York',
    value: Locations.NewYork,
  },
];

interface Props {
  openedByDefault?: boolean;
  sectionHeaderBorderColor?: string;
}

const SortOptions: FC<Props> = ({ openedByDefault = true, sectionHeaderBorderColor }) => {
  const dispatch = useDispatch();
  const location = useSelector(SkillsSelectors.selectLocation);

  const makeChangeOptionHandler = (option: Locations) => {
    return () => {
      dispatch(SkillsActions.setLocation(option));
      dispatch(SkillsActions.setCurrentPage(1));
      dispatch(SkillsThunkActions.fetchUsers());
    };
  };

  return (
    <Wrap>
      <Header3 marginBottom="8px" marginTop="0px">
        SORT RESULTS
      </Header3>
      <Accordion>
        <Accordion.Item headerBorderColor={sectionHeaderBorderColor} openedByDefault={openedByDefault} title="Location">
          {locationOptions.map(({ label, value }) => (
            <CheckBox key={value} onClick={makeChangeOptionHandler(value)} checked={location === value} label={label} />
          ))}
        </Accordion.Item>
      </Accordion>
    </Wrap>
  );
};

export default SortOptions;

const Wrap = styled.div`
  padding-top: 26px;
`;
