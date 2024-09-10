import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreJob } from '../Utlity/LocalStroge';
import  { MdLocationOn } from "react-icons/md"
import  { AiOutlineDollar } from "react-icons/ai"


const AppliedJobs = () => {

    const jobs = useLoaderData();


    const [appliedJobs, setAppliedJObs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {

        const storedJobIds = getStoreJob();
        if (jobs.length > 0) {
            // 
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)

                }
            }



            setAppliedJObs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }

    }, [jobs])
    return (
        <div>
            <h2 className="text-2xl">Jobs I Applied: {appliedJobs.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">Job Type</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>

                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure className='m-left' >
                                    <img className='w-32 h-24 p-2'
                                        src={job.logo}
                                        alt="jobs" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p>{job.company_name}</p>
                                    <div>
                                        <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 '  >{job.remote_or_onsite}</button>
                                        <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 ' >{job.job_type}</button>
                                    </div>
                                    <div className='mt-4 flex '  >
                                        <h2 className='flex mr-4 ' ><MdLocationOn className='text-2xl' ></MdLocationOn> {job.location} </h2>
                                        <h2 className='flex' ><AiOutlineDollar className='text-2xl' ></AiOutlineDollar> {job.salary} </h2>
                                    </div>
                                </div>
                            </div>






                         {job.remote_or_onsite} </span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;