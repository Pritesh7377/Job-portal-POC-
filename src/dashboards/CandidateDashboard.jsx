import { Table, Button, Container } from 'react-bootstrap';

export default function CandidateDashboard() {
  // Mock applied jobs data (replace with API data later)
  const appliedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'ABC Corp', status: 'Pending' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Ltd', status: 'Accepted' },
  ];

  return (
    <Container className="mt-4">
      <h2>Candidate Dashboard</h2>

      {/* Applied Jobs Table */}
      <h4 className="mt-4">My Applied Jobs</h4>
      <Table striped bordered hover responsive>
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
          {appliedJobs.map((job, idx) => (
            <tr key={job.id}>
              <td>{idx + 1}</td>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.status}</td>
              <td>
                {job.status === 'Pending' && (
                  <Button variant="danger" size="sm">Cancel</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Profile Update Form */}
      <h4 className="mt-5">Profile Details</h4>
      <form className="mt-3" style={{ maxWidth: '500px' }}>
        <input className="form-control mb-2" placeholder="Full Name" defaultValue="John Doe" />
        <input className="form-control mb-2" placeholder="Age" defaultValue="28" />
        <select className="form-control mb-2" defaultValue="Male">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <textarea className="form-control mb-2" placeholder="Education Details">B.Tech in Computer Science</textarea>
        <Button variant="primary">Update Profile</Button>
      </form>
    </Container>
  );
}
