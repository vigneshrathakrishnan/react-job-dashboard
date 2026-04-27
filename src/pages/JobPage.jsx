import { useState } from "react";
import FilterBar from "../components/jobs/FilterBar"

const JobPage = () => {
    // search, jobtype, location
    const [search, setSearch] = useState("");
    const [jobType, setjobType] = useState("");
    const [location, setLocation] = useState("");

    return (
        <div>
            <h1>Job Page</h1>
            <FilterBar 
                search = { search } 
                setSearch = { setSearch } 
                jobType = { jobType } 
                search = { setSearch}
                location = { location } 
                setLocation = { setLocation } 
            />

        </div>
    );
};

export default JobPage;