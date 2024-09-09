const getStoreJob = () => {
    const  storgejobapp = localStorage.getItem('job-applications');
    if (storgejobapp) {
        return JSON.parse(storgejobapp);
    }

    return [];
}
const saveJobApp = id => {
    const storejobapps = getStoreJob();
     const exists = storejobapps.find(jobId => jobId === id);
    if (!exists) {
        storejobapps.push(id);
        localStorage.setItem('job-applications',JSON.stringify
        (storejobapps))
    }
}

export { getStoreJob ,saveJobApp}