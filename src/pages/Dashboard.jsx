import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <form action="" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" min="0" required />
        <label htmlFor="sex">Sex:</label>
        <input type="radio" id="male" name="sex" value="male" required />
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" name="year" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Dashboard
