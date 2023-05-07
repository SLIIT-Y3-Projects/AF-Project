import React from "react";
import EditComplaint from "./EditComplaint";
import { ComplaintProvider } from "../../contexts/ComplaintContext"; 
const index = () => {
    return (
        <ComplaintProvider>
            <EditComplaint/>
        </ComplaintProvider>
       
    );
};

export default index;