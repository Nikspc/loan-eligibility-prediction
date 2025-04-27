import React, { useState } from 'react';
import axios from 'axios';

const LoanEligibilityForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    employment_status: '',
    credit_score: '',
    existing_loans: '',
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/predict-loan/', formData);
      setResult(response.data);
    } catch (error) {
      console.error('There was an error with the API request:', error);
    }
  };

  return (
    <div>
      <h1>Loan Eligibility Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Income:</label>
          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Employment Status:</label>
          <input
            type="text"
            name="employment_status"
            value={formData.employment_status}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Credit Score:</label>
          <input
            type="number"
            name="credit_score"
            value={formData.credit_score}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Existing Loans:</label>
          <input
            type="number"
            name="existing_loans"
            value={formData.existing_loans}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {result && (
        <div>
          <h3>Eligibility Result:</h3>
          <p>{result.eligible ? 'Eligible' : 'Not Eligible'} for the loan</p>
        </div>
      )}
    </div>
  );
};

export default LoanEligibilityForm;