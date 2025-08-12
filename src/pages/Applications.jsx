import { Table, Button, Container } from 'react-bootstrap';

export default function Applications() {
  const applications = [
    { id: 1, title: 'React Developer', company: 'ABC Corp', status: 'Pending' },
    { id: 2, title: 'Laravel Backend', company: 'XYZ Ltd', status: 'Accepted' },
  ];

  return (
    <Container className="mt-4">
      <h2>My Applications</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, idx) => (
            <tr key={app.id}>
              <td>{idx + 1}</td>
              <td>{app.title}</td>
              <td>{app.company}</td>
              <td>{app.status}</td>
              <td>
                {app.status === 'Pending' &&
                  <Button variant="danger" size="sm">Cancel</Button>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
