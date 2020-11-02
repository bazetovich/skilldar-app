import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../styles/config';
import { formPaginationItems } from './Pagination.utils';

interface Props {
  totalCount: number;
  currentPage: number;

  onPageChanges: (pageNumber: number) => void;
}

const Pagination: FC<Props> = ({ totalCount, currentPage, onPageChanges }) => {
  const paginationItems = formPaginationItems(totalCount, currentPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChanges(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalCount) {
      onPageChanges(currentPage + 1);
    }
  };

  const makePaginationHandler = (pageToGo: number) => {
    return () => {
      onPageChanges(pageToGo);
    };
  };

  return (
    <Wrap>
      <ArrowIconLeft size="1x" color={colors.gray} icon={faChevronLeft} onClick={handlePrev} />
      {paginationItems[0] !== 1 && <Ellipsis size="1x" color={colors.gray} icon={faEllipsisH} />}
      {paginationItems.map((item: number) => {
        return (
          <PaginationItem active={item == currentPage} key={String(item)} onClick={makePaginationHandler(item)}>
            {item}
          </PaginationItem>
        );
      })}
      {paginationItems[paginationItems.length - 1] !== totalCount && (
        <Ellipsis size="1x" color={colors.gray} icon={faEllipsisH} />
      )}
      <ArrowIconRight size="1x" color={colors.gray} icon={faChevronRight} onClick={handleNext} />
    </Wrap>
  );
};

export default memo(Pagination);

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 46px;
`;

const PaginationItem = styled.a`
  text-decoration: none;
  font-size: 16px;
  line-height: 1;
  color: ${({ active }: { active: boolean }) => (active ? colors.yellow : colors.gray)};
  font-weight: ${({ active }: { active: boolean }) => (active ? 'bold' : 'normal')};
  margin-right: 8px;
  cursor: pointer;
`;

const ArrowIconLeft = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-right: 8px;
  cursor: pointer;
`;

const ArrowIconRight = styled(FontAwesomeIcon)`
  font-size: 16px;
  cursor: pointer;
`;

const Ellipsis = styled(FontAwesomeIcon)`
  font-size: 12px;
  margin-right: 8px;
  margin-top: 6px;
`;
