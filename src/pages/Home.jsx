import JobCard from '../components/JobCard';

export default function Home() {
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'ABC Corp', location: 'Remote', salary: '₹50,000' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Ltd', location: 'Bangalore', salary: '₹60,000' },
    { id: 3, title: 'UI Designer', company: 'LMN Pvt Ltd', location: 'Mumbai', salary: '₹40,000' },
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Latest Jobs</h1>
      <div className="row">
        {jobs.map(job => (
          <div key={job.id} className="col-md-4">
            <JobCard {...job} />
          </div>
        ))}
      </div>
    </div>
  );
}
