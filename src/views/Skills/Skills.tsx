import React, { useEffect } from 'react';
import { Container, Row, Col, Visible } from 'react-grid-system';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Page, SkillsComponents } from '../../components';
import { SkillsThunkActions } from '../../store/store';

const SkillsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SkillsThunkActions.fetchUsers());
  });

  return (
    <Page title="Browse Skills">
      <Container>
        <Row>
          <Visible md lg xl xxl>
            <RealatedSearchCol lg={2}>
              <SkillsComponents.RelatedSearches variant="column" />
            </RealatedSearchCol>
          </Visible>
          <Col md={12} lg={8}>
            <SkillsComponents.TopSection />
            <SkillsComponents.UsersSection />
          </Col>
          <Visible lg>
            <Col lg={2}></Col>
          </Visible>
        </Row>
      </Container>
    </Page>
  );
};

export default SkillsView;

const RealatedSearchCol = styled(Col)`
  padding-top: 172px;
`;
