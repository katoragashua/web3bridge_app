import React, { useContext } from "react";
import { Context } from "../Context";

const Home = () => {
  const { addStudent } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const studentData = Object.fromEntries(formData);
    console.log(studentData);
  };

  //   const [student, setStudent] = React.useState()

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" min="0" required />
        <label htmlFor="sex">Sex:</label>
        <input type="radio" id="male" name="sex" value="male" required />
        <input type="radio" id="female" name="sex" value="female" required />
        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" required min={1} max={4} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
