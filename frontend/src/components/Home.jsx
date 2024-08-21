import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/delete/${id}`);
    setUsers(users.filter(user => user._id !== id));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Registered Users</h2>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Profession</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.profession}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
