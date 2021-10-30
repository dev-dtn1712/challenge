import React, { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup'
import { getUsers } from '../../apis/users';
import LoadingComponent from '../../components/LoadingComponent';
import '../_styels/users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const users = await getUsers();
      setUsers(users);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  const renderUsers = () => (
    <ListGroup variant="flush" className="w-50">
      <ListGroup.Item className="d-flex justify-content-between">
        <p className="column h6">Username</p>
        <p className="column h6">Age</p>
      </ListGroup.Item>
      {users.map((user) => (
        <ListGroup.Item
          className="d-flex justify-content-between"
          key={user.username}
        >
          <p className="column h6">{user.username}</p>
          <p className="column h6">{user.age}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <div className="py-5">
      <header>
        <p className="h3">All Users </p>
        <p className="h6 text-muted mt-3">User and their age</p>
      </header>
      {loading ? <LoadingComponent /> : renderUsers()}
    </div>
  );
};

export default Users;