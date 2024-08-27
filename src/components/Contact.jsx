import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_uxko2fj'; // Your Service ID
    const TEMPLATE_ID = 'template_ts01l9h'; // Your Template ID
    const USER_ID = 'ZGwdS5GLCAogluVhu'; // Replace with your actual User ID

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        alert('Message sent successfully to lutherbenny110@gmail.com!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        alert(`Failed to send the message: ${error.text}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white text-gray-900 rounded-lg shadow-lg flex justify-between">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-orange-400">Contact Me</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="flex flex-col justify-between ml-8">
          <div className="mb-6 p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md">
            <p className="flex items-center mb-4"><i className="fas fa-envelope mr-4"></i> lutherbenny110@gmail.com</p>
            <p className="flex items-center mb-4"><i className="fas fa-phone-alt mr-4"></i> +91-9788696900</p>
            <p className="flex items-center"><i className="fas fa-map-marker-alt mr-4"></i>  Ambur, Tirupathur District</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/lutherBenny" className="bg-orange-400 p-2 rounded-full hover:bg-orange-500"><i className="fab fa-github text-xl"></i></a>
            <a href="https://www.linkedin.com/in/lutherbenny10?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNwGofkUGS0GGUocI41Sm4A%3D%3D" className="bg-orange-400 p-2 rounded-full hover:bg-orange-500"><i className="fab fa-linkedin text-xl"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
