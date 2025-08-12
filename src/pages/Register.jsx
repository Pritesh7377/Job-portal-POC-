import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function Register() {
  const [role, setRole] = useState('candidate');

  // Candidate fields
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [education, setEducation] = useState('');
  // Company fields
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');
  // Common
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Demo: just alert registration, no backend yet
    alert(`Registered as ${role}!`);
  }

  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Select Role</Form.Label>
          <Form.Select value={role} onChange={e => setRole(e.target.value)}>
            <option value="candidate">Candidate</option>
            <option value="company">Company</option>
            {/* No admin registration option */}
          </Form.Select>
        </Form.Group>

        {role === 'candidate' && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name"
                value={name} onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter age"
                value={age} onChange={e => setAge(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select value={gender} onChange={e => setGender(e.target.value)}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Form.Control type="text" placeholder="Education details"
                value={education} onChange={e => setEducation(e.target.value)} />
            </Form.Group>
          </>
        )}

        {role === 'company' && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name"
                value={companyName} onChange={e => setCompanyName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Location"
                value={location} onChange={e => setLocation(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>About/Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="About Company"
                value={about} onChange={e => setAbout(e.target.value)} />
            </Form.Group>
          </>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password"
            value={confirm} onChange={e => setConfirm(e.target.value)} />
        </Form.Group>
        <Button variant="success" type="submit" className="w-100">
          Register
        </Button>
      </Form>
    </Container>
  );
}
