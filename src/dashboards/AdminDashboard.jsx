import { Table, Button, Container } from 'react-bootstrap';

export default function AdminDashboard() {
  // Static mock data for now – will replace with real API calls later
  const users = [
    { id: 1, name: 'John Doe', role: 'Candidate' },
    { id: 2, name: 'Acme Corp', role: 'Company' },
  ];

  const jobs = [
    { id: 1, title: 'Backend Developer', company: 'ABC Corp' },
    { id: 2, title: 'UI Designer', company: 'XYZ Ltd' },
  ];

  return (
    <Container className="mt-4">
      <h2>Admin Dashboard</h2>

      {/* Manage Users Section */}
      <h4 className="mt-4">Manage Users</h4>
      <Table bordered striped responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="danger" size="sm">
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Manage Jobs Section */}
      <h4 className="mt-5">Manage Jobs</h4>
      <Table bordered striped responsive>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>
                <Button variant="danger" size="sm">
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
