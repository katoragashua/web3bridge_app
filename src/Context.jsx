import React, { useEffect, useState } from "react";
export const Context = React.createContext();
const { Provider } = Context;

export const ContextProvider = ({ children }) => {
  const [students, setStudents] = useState(() => []);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  console.log(students);
  

  return (
    <Provider value={{addStudent, students}} >
      {children}
    </Provider>
  );
};

export default ContextProvider;
