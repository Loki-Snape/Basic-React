import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    return(
        <div className="bg-gray-500 text-3xl text-white px-180 py-8">User: {userid}</div>
    )
}

export default User