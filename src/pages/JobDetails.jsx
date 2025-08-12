import { Container, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

export default function JobDetails() {
  const { id } = useParams();

  const job = {
    title: 'Frontend Developer',
    company: 'ABC Corp',
    location: 'Remote',
    salary: '₹50,000',
    description: 'We are looking for a skilled frontend developer with React experience.'
  };

  return (
    <Container className="mt-4">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p>{job.description}</p>
      <Button variant="success" className="me-2">Apply Now</Button>
      <Button as={Link} to="/" variant="secondary">Back to Jobs</Button>
    </Container>
  );
}
