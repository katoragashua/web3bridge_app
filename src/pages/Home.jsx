import React, { useContext } from "react";
import { Context } from "../Context";
import { nanoid } from "nanoid";

const Home = () => {
  const { addStudent } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const studentData = Object.fromEntries(formData);
    addStudent({ ...studentData, id: nanoid() });
    e.reset();
  };

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit} className="grid">
        <label htmlFor="firstname">Firstname:</label>
        <input type="text" id="firstname" name="firstname" required />
        <label htmlFor="lastname">Lastname:</label>
        <input type="text" id="lastname" name="lastname" required />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" min="0" required />
        <label htmlFor="sex">Sex:</label>
        <div className="flex gap-2">
          <small>
            Male
            <input type="radio" id="male" name="sex" value="male" required  className="ml-3" />
          </small>
          <small>
            Female
            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              required className="ml-3" 
            />
          </small>
        </div>
        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" required min={1} max={4} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
