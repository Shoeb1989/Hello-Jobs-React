import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./COMPONENTS/Root/Root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./COMPONENTS/Home/Home";
import AppliedJobs from "./COMPONENTS/AppliedJob/AppliedJobs";
import Error from "./COMPONENTS/Error/Error";
import JobDetails from "./COMPONENTS/JobDeails/JobDetails";
import Featurejob from "./COMPONENTS/FeatureJOb/Featurejob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch ('/jobs.json')
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      },
      {
        path:'/jobs',
        element:<Featurejob/>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);