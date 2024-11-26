import React, { useEffect, useState } from "react";
export const Context = React.createContext();
const { Provider } = Context;
import data from "./data.json";
import { nanoid } from "nanoid";
export const ContextProvider = ({ children }) => {
  const [students, setStudents] = useState(() => [
    ...data.map((data) => {
      return { ...data, id: nanoid() };
    }),
  ]);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  console.log(students);

  return <Provider value={{ addStudent, students }}>{children}</Provider>;
};

export default ContextProvider;
