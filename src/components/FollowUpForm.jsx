import React, { useState } from 'react';

const FollowUpForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    interestedIn: '',
    note: '',
    scheduledDate: '',
    brokerID: '',
    clientEmail: '',
    propertyID: '',
    status: 'pending',
    hostID: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setMessage('');

    try {
        const response = await fetch(
            `https://cors-anywhere.herokuapp.com/${encodeURIComponent(
              'https://script.google.com/macros/s/AKfycbz_ttqSToHOVk0Y8c1WVE1YkOA63YLHaRrS-YI_vklE7OpUiCNssHrN65TYSoEFEZ_Ujw/exec?action=createFollowup'
            )}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData)
            }
          );

      const result = await response.json();
      
      if (result.result === 'success') {
        setMessage('Follow-up created successfully!');
        setFormData({
          clientName: '',
          phone: '',
          interestedIn: '',
          note: '',
          scheduledDate: '',
          brokerID: '',
          clientEmail: '',
          propertyID: '',
          status: 'pending',
          hostID: ''
        });
      } else {
        throw new Error(result.message || 'Failed to create follow-up');
      }
    } catch (error) {
      setIsError(true);
      setMessage(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Create New Follow-up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Client Name*:
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Phone*:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Interested In*:
            <input
              type="text"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Note*:
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Scheduled Date*:
            <input
              type="datetime-local"
              name="scheduledDate"
              value={formData.scheduledDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Client Email:
            <input
              type="email"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Broker ID:
            <input
              type="text"
              name="brokerID"
              value={formData.brokerID}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Property ID:
            <input
              type="text"
              name="propertyID"
              value={formData.propertyID}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="canceled">Canceled</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Host ID:
            <input
              type="text"
              name="hostID"
              value={formData.hostID}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Create Follow-up</button>
        
        {message && (
          <div className={`message ${isError ? 'error' : 'success'}`}>
            {message}
          </div>
        )}
      </form>

      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }

        .form-group {
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        label {
          font-weight: bold;
        }

        input, textarea, select {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 100%;
        }

        button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }

        button:hover {
          background-color: #45a049;
        }

        .message {
          margin-top: 15px;
          padding: 10px;
          border-radius: 4px;
        }

        .success {
          background-color: #dff0d8;
          color: #3c763d;
        }

        .error {
          background-color: #f2dede;
          color: #a94442;
        }
      `}</style>
    </div>
  );
};

export default FollowUpForm;