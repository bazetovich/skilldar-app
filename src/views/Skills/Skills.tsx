import React, { useCallback, useEffect } from 'react';
import { Container, Row, Col, Visible } from 'react-grid-system';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Page, Pagination, SkillsComponents } from '../../components';
import { SkillsActions, SkillsSelectors, SkillsThunkActions } from '../../store/store';

const SkillsView = () => {
  const dispatch = useDispatch();
  const { totalPages, currentPage } = useSelector(SkillsSelectors.selectPagination);

  const handlePageChange = useCallback((page: number) => {
    dispatch(SkillsActions.setCurrentPage(page));
    dispatch(SkillsThunkActions.fetchUsers());
  }, []);

  useEffect(() => {
    dispatch(SkillsThunkActions.fetchUsers());
  }, []);

  return (
    <Page title="Browse Skills">
      <ContainerStyled>
        <RowStyled>
          <Visible lg xl xxl>
            <RealatedSearchCol lg={2}>
              <SkillsComponents.RelatedSearches variant="column" />
            </RealatedSearchCol>
          </Visible>
          <MainCol md={12} lg={8} xl={7}>
            <SkillsComponents.TopSection />
            <SkillsComponents.UsersSection />
            <Bumper />
            {totalPages && (
              <Pagination totalCount={totalPages} currentPage={currentPage} onPageChanges={handlePageChange} />
            )}
          </MainCol>
          <Visible lg xl xxl>
            <RealatedSearchCol lg={2}>
              <SkillsComponents.SortOptions />
            </RealatedSearchCol>
          </Visible>
        </RowStyled>
      </ContainerStyled>
    </Page>
  );
};

export default SkillsView;

const RealatedSearchCol = styled(Col)`
  padding-top: 172px;
`;

const ContainerStyled = styled(Container)`
  flex: 1;
`;

const RowStyled = styled(Row)`
  height: 100%;
`;

const MainCol = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const Bumper = styled.div`
  flex: 1;
`;
