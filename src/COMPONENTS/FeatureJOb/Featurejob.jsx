import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Featurejob = () => { 

    const [jobs, setJobs] = useState([]);
    
    const [dataLength, setDatalength] = useState(4);
     
    
    useEffect (() => {
        fetch('jobs.json')
        .then( res => res.json())
        .then ( data => setJobs(data));

     }, [])

    return (
         <div>
            <div className="text-center">
                <h2 className="text-center text-4xl text-black font-semibold">Featured Jobs</h2>
                <p className="text-base text-black my-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-10 bg-white ">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className=' flex justify-center mb-8 '>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDatalength(jobs.length)} className="btn btn-primary bg-gradient-to-r from-indigo-500 to-purple-800">Show All Jobs</button>
            </div>
            </div>
        </div>
    );
};

export default Featurejob;