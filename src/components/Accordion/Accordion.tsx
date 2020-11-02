import React, { FC } from 'react';

import Item from './AccordionItem';

interface Props {
  children: React.ReactNode;
}

interface AccordionInterface {
  Item: typeof Item;
}

const Accordion: FC<Props> & AccordionInterface = ({ children }) => {
  return <div>{children}</div>;
};

export default Accordion;

Accordion.Item = Item;
