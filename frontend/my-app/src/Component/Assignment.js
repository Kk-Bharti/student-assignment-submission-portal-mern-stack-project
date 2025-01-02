import React, { useState } from 'react';
import './Assignment.css'


function AssignmentSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Send form data to your backend API
    const response = await fetch('/api/submit-assignment', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Handle successful submission, e.g., show a success message or redirect
      setIsSubmitting(false);
      alert('Assignment submitted successfully!');
      // You can use window.location.href to redirect or a library like react-router-dom
      // window.location.href = '/success-page';
    } else {
      // Handle errors, e.g., show an error message
      setIsSubmitting(false);
      alert('Error submitting assignment. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="assignment-form">
      <div className="form-group">
        <label htmlFor="title">Assignment Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="file">File Upload:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={isSubmitting} className="submit-btn">
        {isSubmitting ? 'Submitting...' : 'Submit Assignment'}
      </button>
    </form>
  );
}

export default AssignmentSubmissionForm;