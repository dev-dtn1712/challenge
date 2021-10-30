import React from 'react';
import Container from 'react-bootstrap/Container'
import Users from '../containers/Users';
import Ages from '../containers/Ages';

export default function App() {
  return (
    <Container>
      <Users />
      <Ages />
    </Container>
  )
}