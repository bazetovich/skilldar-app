import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { SkillsComponents } from '../..';
import { SkillsSelectors } from '../../../store/store';
import { breakPoints } from '../../../styles/config';

const Users = () => {
  const items = useSelector(SkillsSelectors.selectUsers);
  const isFetching = useSelector(SkillsSelectors.selectIsFetching);

  if (isFetching) {
    return null;
  }

  return (
    <Section>
      {items.map((item) => (
        <SkillsComponents.User key={item.id} {...item} />
      ))}
    </Section>
  );
};

export default Users;

const Section = styled.section`
  padding-top: 16px;

  @media (min-width: ${breakPoints.lg}) {
    padding-top: 26px;
  }
`;
