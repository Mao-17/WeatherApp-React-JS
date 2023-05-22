import React, { useState } from 'react';

const Form = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputValue);
    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter city name or ZIP code"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
