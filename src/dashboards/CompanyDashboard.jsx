import { Table, Button, Container } from 'react-bootstrap';

export default function CompanyDashboard() {
  // Mock posted jobs data
  const postedJobs = [
    { id: 1, title: 'React Developer', applicants: 5 },
    { id: 2, title: 'Laravel Developer', applicants: 3 },
  ];

  // Mock applicants data
  const jobApplicants = [
    { id: 1, name: 'John Doe', jobTitle: 'React Developer', status: 'Pending' },
    { id: 2, name: 'Jane Smith', jobTitle: 'Laravel Developer', status: 'Pending' },
  ];

  return (
    <Container className="mt-4">
      <h2>Company Dashboard</h2>

      {/* Post Job Form */}
      <h4 className="mt-4">Post a New Job</h4>
      <form className="mb-5" style={{ maxWidth: '500px' }}>
        <input className="form-control mb-2" placeholder="Job Title" />
        <textarea className="form-control mb-2" placeholder="Description"></textarea>
        <input className="form-control mb-2" placeholder="Location" />
        <input className="form-control mb-2" placeholder="Salary" />
        <Button variant="success">Post Job</Button>
      </form>

      {/* My Posted Jobs */}
      <h4>My Posted Jobs</h4>
      <Table bordered striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Job Title</th>
            <th>Applicants</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {postedJobs.map((job, idx) => (
            <tr key={job.id}>
              <td>{idx + 1}</td>
              <td>{job.title}</td>
              <td>{job.applicants}</td>
              <td>
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Applicants List */}
      <h4 className="mt-5">Applicants List</h4>
      <Table bordered striped hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Status</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {jobApplicants.map(applicant => (
            <tr key={applicant.id}>
              <td>{applicant.name}</td>
              <td>{applicant.jobTitle}</td>
              <td>{applicant.status}</td>
              <td>
                <Button variant="success" size="sm">Accept</Button>
              </td>
              <td>
                <Button variant="danger" size="sm">Reject</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
