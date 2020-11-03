import React from 'react';
import styled from 'styled-components';

import './Loader.css';

const Loader = () => {
  return <Wrapp className="loader">Loading...</Wrapp>;
};

export default Loader;

const Wrapp = styled.div`
  margin-top: 16px;
`;
