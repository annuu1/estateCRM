import React, { useState, useContext } from 'react';
import styles from '../assets/css/form.module.css';
import { DataContext } from '../context/DataContext';

const FormComponent = ({ fields }) => {
  const { scriptURL, brokers, userID } = useContext(DataContext);

  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || '';
      return acc;
    }, {})
  );

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Handle suggestions for brokerID
    if (name === 'brokerID') {
      const filteredSuggestions = brokers.filter((broker) =>
        broker.ID.toString().includes(value) ||
        broker.BrokerName.toLowerCase().includes(value.toLowerCase()) ||
        broker.Phone.toString().includes(value)
      );

      setSuggestions(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSuggestion(suggestion);
    setFormData((prev) => ({
      ...prev,
      brokerID: suggestion.ID,
    }));
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setMessage('');

    try {
      const params = new URLSearchParams(formData).toString();
      const response = await fetch(
        `${scriptURL}?action=createFollowup&${params}`
      );

      const result = await response.json();

      if (result.id) {
        setMessage('Follow-up created successfully!, id: ' + result.id);
        setFormData(fields.reduce((acc, field) => {
          acc[field.name] = field.defaultValue || '';
          return acc;
        }, {}));
      } else {
        throw new Error(result.message || 'Failed to create follow-up');
      }
    } catch (error) {
      setIsError(true);
      setMessage(error.message);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <h2>Create New Follow-up</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className={styles["form-group"]} key={field.name}>
            <label>
              {field.label} {field.required && '*'}:
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  readOnly={field.readOnly}
                />
              )}
            </label>
            {field.name === 'brokerID' && showSuggestions && (
              <div className={styles.suggestions}>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={styles["suggestion-item"]}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.BrokerName + ` (${suggestion.Phone})`}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <button className={styles.submitBtn} type="submit">Create Follow-up</button>

        {message && (
          <div className={`${styles.success} ${styles.message}`}>
            {message}
          </div>
        )}
      </form>
 </div>
  );
};

export default FormComponent;


