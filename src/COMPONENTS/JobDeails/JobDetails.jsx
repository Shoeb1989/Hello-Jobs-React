import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApp } from '../Utlity/LocalStroge';


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const notify = () => {
        saveJobApp(idInt);
        toast("Apply Done");
    }
    return (
        <div> 
              <h6 className='text-5xl '>JOB DETAILS</h6>
            <div className='grid gap-4 md:grid-cols-4' >
               <div className='border md:col-span-3 ' >
                <h2 className="text-4xl"><span className='text-4xl-bold' >Description:</span> <span className='text-2xl' > {job.job_description} </span></h2>
                <h2>Job Details : {job.job_title}</h2> <br />
                <p><span className='text-4xl' >Job Responsiblity:</span> <span className='text-2xl'>  {job.job_responsibility} </span> </p>
                <p><span className='text-4xl' >Job Responsiblity:</span> <span className='text-2xl'></span> </p>
                <p>{job.company_name}</p>
               </div>
               <div className='border ' >
                  <h2 className="text-2xl">Side things</h2>
                  <button onClick={notify} className='btn btn-primary w-full' >Apply Now</button>
               </div>
               <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;