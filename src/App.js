import React, { useState } from 'react';
import './style.css';

export default function App() {
  // const [name, setName] = useState('');
  // const [level, setLevel] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    level: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, level } = inputs;
    alert(`Name entered: ${name} :: ${email} and your level: ${level}`);
  };
  return (
    <div>
      <h3>Charge</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <label htmlFor="name">Email</label>
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <label htmlFor="name">Level</label>
        <input
          type="text"
          name="level"
          value={inputs.level}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
