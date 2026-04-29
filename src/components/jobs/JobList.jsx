import JobCard from "./JobCard"

const JobList = ({ jobs = [] }) => {
    if (!jobs.length) {
        return <p>No jobs found.</p>;
    } 

    return (
        <div>
            <h2>Job Listing</h2>
            {jobs.map(job => (
                <JobCard key={job.id} job={job}/>
            ))}
        </div>
        
    );

};

export default JobList;