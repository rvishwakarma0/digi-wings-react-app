import React from 'react';
import { Link } from 'react-router-dom'

const AddRequirementButton = () => {

  return (

    <div className="text-center">
      <h2>
        <Link to = "addreq" type="button"> Add Requirement</Link>
      </h2>
    </div>

  );
};

export default AddRequirementButton;
