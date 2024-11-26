import React from "react";
import { Context } from "../Context";
import Student from "../components/Student";

const Dashboard = () => {
  const { students } = React.useContext(Context);
  return (
    <div className="grid gap-12">
      <h1>Students</h1>
      
      <div className="dashboard p-4">
        {students.map((student) => (
          <div key={student.id} className="">
            <Student {...student} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
