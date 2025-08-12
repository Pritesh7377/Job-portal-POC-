import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

// We'll use a mock 'role' prop, but in your app it's passed from App.jsx as login state
export default function Profile({ role = "candidate" }) {
  // Ideally, get role from parent/App via props/context!
  // Example usage: <Profile role={role} />
  
  // Candidate fields
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState('28');
  const [gender, setGender] = useState('Male');
  const [education, setEducation] = useState('B.Tech in Computer Science');
  const [experience, setExperience] = useState('3 years as Full Stack Developer');
  const [email, setEmail] = useState('john@example.com');

  // Company fields
  const [companyName, setCompanyName] = useState('ABC Corp');
  const [location, setLocation] = useState('Mumbai');
  const [about, setAbout] = useState('We build cool stuff.');
  const [companyEmail, setCompanyEmail] = useState('hr@abccorp.com');

  // Admin fields
  const [adminName, setAdminName] = useState('Super Admin');
  const [adminEmail, setAdminEmail] = useState('admin@jobportal.com');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Profile updated (${role})`);
  }

  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <h2>My Profile ({role.charAt(0).toUpperCase() + role.slice(1)})</h2>
      <Form onSubmit={handleSubmit}>
        {role === 'candidate' && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control value={name} onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control value={email} type="email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control value={age} type="number" onChange={e => setAge(e.target.value)} />
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
              <Form.Control value={education} onChange={e => setEducation(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Experience</Form.Label>
              <Form.Control value={experience} onChange={e => setExperience(e.target.value)} />
            </Form.Group>
          </>
        )}
        {role === 'company' && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control value={companyName} onChange={e => setCompanyName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control value={location} onChange={e => setLocation(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>About / Description</Form.Label>
              <Form.Control as="textarea" value={about} onChange={e => setAbout(e.target.value)} rows={3} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control value={companyEmail} type="email" onChange={e => setCompanyEmail(e.target.value)} />
            </Form.Group>
          </>
        )}
        {role === 'admin' && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Admin Name</Form.Label>
              <Form.Control value={adminName} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control value={adminEmail} disabled />
            </Form.Group>
            {/* You can add more admin-only fields if needed */}
          </>
        )}
        <Button type="submit" variant="primary">Save Changes</Button>
      </Form>
    </Container>
  );
}
