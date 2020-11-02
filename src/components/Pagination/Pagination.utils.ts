const MAX_VISIBLE_COUNT = 5;

export const formPaginationItems = (total: number, currentPage: number) => {
  const res = [];
  const visibleCount = total < MAX_VISIBLE_COUNT ? total : MAX_VISIBLE_COUNT;

  let leftC = currentPage;
  let rightC = currentPage;

  while (res.length < visibleCount) {
    if (leftC > 0 && res.indexOf(leftC) === -1) {
      res.push(leftC);
    }

    if (rightC <= total && res.indexOf(rightC) === -1) {
      res.push(rightC);
    }

    leftC = leftC - 1;
    rightC = rightC + 1;
  }

  return res.sort();
};
