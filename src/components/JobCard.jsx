import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function JobCard({ id, title, company, location, salary }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
        <Card.Text>
          Location: {location} <br/>
          Salary: {salary}
        </Card.Text>
        <Button as={Link} to={`/jobs/${id}`} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}
