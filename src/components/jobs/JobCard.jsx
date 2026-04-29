const JobCard = ({job = {}}) => {
    if (!Object.keys(job).length) {
        return <p>Empty Job</p>;
    }

    // mock Api jobs
    // id : 3, 
    // title: "Backend Engineer",
    // company: "Netflix",
    // type: "hybrid", 
    // state: "Bengaluru",
    // country: "India",
    // country_code: "ind",
    // created_at: "timestamp",
    // updated_at: "timestamp"
    return (
        <div>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.type}</p>
            <p>{job.state}</p>
            <p>{job.country}</p>
            <p>{job.contry_code}</p>
        </div>
    );
}

export default JobCard;