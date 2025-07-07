// BusinessMeeting.jsx
import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PageLayout from '../layouts/PageLayout';

const testimonialData = [
  {
    name: 'Mehul Trivedi',
    text: 'The business meeting setup at Tourixaa exceeded expectations. The working space was professional and perfectly arranged.',
    role: 'CEO, NexaTech Pvt. Ltd.',
    image: 'https://randomuser.me/api/portraits/men/51.jpg',
    color: 'emerald',
  },
  {
    name: 'Riya Shah',
    text: 'Our metro city meeting was seamless and well-coordinated. The stay arrangements were also on point.',
    role: 'Operations Lead, InnoWave Solutions',
    image: 'https://randomuser.me/api/portraits/women/60.jpg',
    color: 'purple',
  },
  {
    name: 'Amit Bansal',
    text: 'Tourixaa’s beach resort setup for our strategy session was both relaxing and productive. Highly recommend their service.',
    role: 'Manager, BuildSmart Ltd.',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    color: 'blue',
  },
];

const BusinessMeeting = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customInputs, setCustomInputs] = useState({ location: false, type: false, stay: false });
  const form = useRef();
  const toast = useRef(null);

  const handleDropdownChange = (e, field) => {
    setCustomInputs(prev => ({ ...prev, [field]: e.target.value === 'Other' }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setLoading(false);
        setSent(true);
        confetti();
        toast.current?.show({
          severity: 'success',
          summary: 'Inquiry Sent',
          detail: `Thank you!`,
          life: 3000,
        });
        setTimeout(() => setSent(false), 3000);
        form.current.reset();
        setCustomInputs({ location: false, type: false, stay: false });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setLoading(false);
      });
  };

  return (
    <PageLayout>
      <Toast ref={toast} />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 md:px-10 min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-2">Business Meeting Plans</h1>
        <p className="text-center text-xl md:text-2xl text-indigo-600 mb-12">
          <TypeAnimation
            sequence={[
              'Plan Smart. Meet Effectively.', 2000,
              'Boost Collaboration with the Right Setup.', 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-xl overflow-hidden shadow-xl w-full h-full">
            <img
              src="/images/first.jpg"
              alt="Business Meeting"
              className="w-full h-full object-cover aspect-video lg:aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-10 rounded-3xl shadow-2xl space-y-6 border border-gray-200 w-full"
          >
            <h2 className="text-2xl font-semibold text-center text-indigo-800">Business Meeting Inquiry Form</h2>
            <p className="text-center text-gray-600 text-sm md:text-base mt-2">
              Share your business meeting requirements and we’ll handle the rest.
            </p>

            <div>
              <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <InputText id="company_name" name="company_name" type="text" placeholder="Enter company name" required className="w-full border border-gray-300 p-2 rounded-lg" />
            </div>

            <div>
              <label htmlFor="company_email" className="block text-sm font-medium text-gray-700 mb-1">Company Email ID</label>
              <InputText id="company_email" name="company_email" type="email" placeholder="Enter official email" required className="w-full border border-gray-300 p-2 rounded-lg" />
            </div>

            <div>
              <label htmlFor="team_size" className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
              <InputText id="team_size" name="team_size" type="number" placeholder="e.g., 25" required className="w-full border border-gray-300 p-2 rounded-lg" />
            </div>

            {/* Location Dropdown */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select id="location" name="location" required onChange={(e) => handleDropdownChange(e, 'location')} className="w-full border border-gray-300 p-2 rounded-lg">
                <option value="">Select a location type</option>
                <option value="Hill Station Resort">Hill Station Resort</option>
                <option value="Nature">Nature</option>
                <option value="Metro City">Metro City</option>
                <option value="Beach Resorts">Beach Resorts</option>
                <option value="Other">Other</option>
              </select>
              {customInputs.location && (
                <InputText name="location_other" placeholder="Enter your location preference" className="w-full mt-2 border border-gray-300 p-2 rounded-lg" />
              )}
            </div>

            {/* Type Dropdown */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Setup Type</label>
              <select id="type" name="type" required onChange={(e) => handleDropdownChange(e, 'type')} className="w-full border border-gray-300 p-2 rounded-lg">
                <option value="">Select setup type</option>
                <option value="Conference Hall">Conference Hall</option>
                <option value="Working Setup">Working Setup</option>
                <option value="Other">Other</option>
              </select>
              {customInputs.type && (
                <InputText name="type_other" placeholder="Enter your setup preference" className="w-full mt-2 border border-gray-300 p-2 rounded-lg" />
              )}
            </div>

            {/* Stay Option Dropdown */}
            <div>
              <label htmlFor="stay_option" className="block text-sm font-medium text-gray-700 mb-1">Stay Option</label>
              <select id="stay_option" name="stay_option" required onChange={(e) => handleDropdownChange(e, 'stay')} className="w-full border border-gray-300 p-2 rounded-lg">
                <option value="">Do you require stay?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Other">Other</option>
              </select>
              {customInputs.stay && (
                <InputText name="stay_other" placeholder="Enter your stay preference" className="w-full mt-2 border border-gray-300 p-2 rounded-lg" />
              )}
            </div>

            <div>
              <label htmlFor="setup_description" className="block text-sm font-medium text-gray-700 mb-1">Setup Description</label>
              <InputTextarea id="setup_description" name="setup_description" rows={3} placeholder="Describe specific setup needs or other preferences" required className="w-full border border-gray-300 p-2 rounded-lg" />
            </div>

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-all duration-300">
              {loading ? 'Sending...' : 'Submit Inquiry'}
            </button>

            {sent && (
              <div className="text-green-600 text-center font-semibold pt-2">
                ✅ We’ll reach out shortly to finalize your meeting setup.
              </div>
            )}
          </form>
        </div>

        <section className="py-20 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
              Testimonials on Our Meeting Arrangements
            </h2>
            <p className="text-indigo-600 max-w-2xl mx-auto mb-12">
              See how companies created meaningful business experiences with our setups.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialData.map((item, index) => (
                <div key={index} className="bg-white border border-indigo-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500" />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-indigo-800">{item.name}</h4>
                      <p className="text-sm text-indigo-600">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">“{item.text}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default BusinessMeeting;