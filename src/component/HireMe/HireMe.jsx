import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './HireMe.css';
import CustomAlert from '../CustomAlert/CustomAlert';

const HireMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [deadline, setDeadline] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);

  const services = [
    'Video Editing',
    'Color Grading',
    'Short-form Reels / TikTok Editing',
    'YouTube Video Editing',
    'Commercial / Brand Ad',
  ];

  const budgets = ['Below $100', '$100 - $300', '$300 - $500', '$500+'];

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) newErrors.name = 'Enter a valid name (letters only, min 2 chars)';
    if (!emailRegex.test(email)) newErrors.email = 'Invalid email address';
    if (phone) {
      const phoneDigits = phone.replace(/\D/g, '');
      if (phoneDigits.length < 10 || phoneDigits.length > 15)
        newErrors.phone = 'Phone must be 10–15 digits';
    }
    if (!service) newErrors.service = 'Select a project type';
    if (!budget) newErrors.budget = 'Select a budget range';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setAlertMessage('⚠️ Please fix the errors before submitting.');
      return;
    }

    // Prepare data
    const templateParams = {
      name,
      email,
      phone,
      service,
      deadline,
      budget,
      message,
    };

    // Send project details to nikesh
    emailjs
      .send('service_v422v2p', 'template_lrxkhqo', templateParams, 'Y5g94hvnv-2wL4DuW')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setAlertMessage('✅ Message sent successfully!');
          setTimeout(() => setIsFormVisible(false), 1000);
        },
        (error) => {
          console.error('FAILED...', error);
          setAlertMessage('❌ Failed to send message. Please try again later.');
        }
      );

       // 2️⃣ Send thank-you email to client
  emailjs
    .send('service_v422v2p', 'template_8y3mzgg',
    templateParams, 'Y5g94hvnv-2wL4DuW')
    .then(
      (response) => {
        console.log('Thank-you email sent to client', response.status);
        setAlertMessage('✅ Message sent successfully! Check your inbox for confirmation.');
        setTimeout(() => setIsFormVisible(false), 1000);
      },
      (error) => {
        console.error('Failed to send thank-you email', error);
        setAlertMessage('❌ Failed to send confirmation email. Please try again.');
      }
    );

  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
  };

  if (!isFormVisible) {
    return (
      <div className="app__hire-form p__roboto">
        <h2 className="app__hire-form-heading">Thank You!</h2>
        <p>Your message has been sent. I will contact you soon.</p>
      </div>
    );
  }

  return (
    <>
      <div className="app__hire-form p__roboto">
        <h2 className="app__hire-form-heading">Let’s Work Together</h2>
        <p className="app__hire-form-subtext">
          Fill out the form below to get in touch about your project or collaboration idea.
        </p>

        <form className="app__hire-form-container" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="app__hire-form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className={errors.name ? 'error' : ''}
              required
            />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="app__hire-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={errors.email ? 'error' : ''}
              required
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>

          {/* Phone */}
          <div className="app__hire-form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number (optional)"
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <small className="error-text">{errors.phone}</small>}
          </div>

          {/* Service */}
          <div className="app__hire-form-group">
            <label htmlFor="service">Type of Project</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={errors.service ? 'error' : ''}
            >
              <option value="">-- Select Project Type --</option>
              {services.map((option, i) => (
                <option key={i} value={option}>{option}</option>
              ))}
            </select>
            {errors.service && <small className="error-text">{errors.service}</small>}
          </div>

          {/* Deadline */}
          <div className="app__hire-form-group">
            <label htmlFor="deadline">Project Deadline</label>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          {/* Budget */}
          <div className="app__hire-form-group">
            <label htmlFor="budget">Estimated Budget</label>
            <select
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={errors.budget ? 'error' : ''}
            >
              <option value="">-- Select Budget Range --</option>
              {budgets.map((range, i) => (
                <option key={i} value={range}>{range}</option>
              ))}
            </select>
            {errors.budget && <small className="error-text">{errors.budget}</small>}
          </div>

          {/* Message */}
          <div className="app__hire-form-group">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me more about your project..."
            />
          </div>

          <button type="submit" className="app__hire-form-submit">Send Message</button>
        </form>
      </div>

      {/* Custom Alert */}
      <CustomAlert message={alertMessage} onClose={() => setAlertMessage('')} />
    </>
  );
};

export default HireMe;
