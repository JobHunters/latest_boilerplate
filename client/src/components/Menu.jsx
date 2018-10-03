import React from 'react';
import { Segment } from 'semantic-ui-react';
import SearchForm from './SearchForm';

const Navigation = () => (
  <Segment textAlign="center" clearing style={{ marginTop: 15 }}>
    <SearchForm />
  </Segment>
);

export default Navigation;
