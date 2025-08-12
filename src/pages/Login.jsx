import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

export default function Login({ onLogin }) {
  const [role, setRole] = useState('candidate'); // default to candidate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // No validation, just set login state and redirect by role
    onLogin(role);
    if (role === 'candidate') navigate('/dashboard/candidate');
    else if (role === 'company') navigate('/dashboard/company');
    else if (role === 'admin') navigate('/dashboard/admin');
  }

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Select Role</Form.Label>
          <Form.Select value={role} onChange={e => setRole(e.target.value)}>
            <option value="candidate">Candidate</option>
            <option value="company">Company</option>
            <option value="admin">Admin</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email or Username</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter email or username"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
      {/* For demo you can pre-fill or ignore inputs */}
    </Container>
  );
}
