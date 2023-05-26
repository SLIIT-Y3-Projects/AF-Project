import React from "react";
import EditProfile from "../manage-users/ManageUsers";

import { CustomerProvider } from "../../contexts/CustomerContext";

const index = () => {
    return (
        <CustomerProvider>
            <EditProfile />
            
        </CustomerProvider>
    );
};

export default index;