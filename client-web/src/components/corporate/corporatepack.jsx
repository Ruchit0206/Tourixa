// CorporatePackages.jsx
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
    name: 'Aarav Mehta',
    text: 'Tourixaa delivered a flawless corporate retreat for our team. From planning to execution, everything was stress-free and enriching.',
    role: 'HR Manager, PixelSoft Pvt. Ltd.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Simran Kaur',
    text: 'Our wellness weekend with Tourixaa was refreshing and perfectly organized. The beachside stay and activities boosted our team’s morale.',
    role: 'Operations Head, BrightEdge Tech',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    name: 'Rahul Desai',
    text: 'We explored nature trails, had amazing local cuisine, and bonded through activities. Tourixaa made it all seamless and memorable.',
    role: 'Director, VisionOne Media',
    image: 'https://randomuser.me/api/portraits/men/64.jpg'
  },
  {
    name: 'Ananya Sharma',
    text: 'The golf and spa retreat was a hit among our executives. Tourixaa’s attention to detail made it feel premium yet personal.',
    role: 'Executive Assistant, CrestCom India',
    image: 'https://randomuser.me/api/portraits/women/72.jpg'
  },
  {
    name: 'Vikram Joshi',
    text: 'We chose Tourixaa for our annual leadership meet. Everything from stay to adventure activities was well curated and team-centric.',
    role: 'Team Lead, CodeNest Solutions',
    image: 'https://randomuser.me/api/portraits/men/59.jpg'
  },
];

const CorporatePackages = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const toast = useRef(null);

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
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setLoading(false);
      });
  };

  return (
    <PageLayout>
      <Toast ref={toast} />
      <div className="bg-gradient-to-br from-yellow-50 via-white to-green-100 py-12 px-4 md:px-10 min-h-screen">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-800 mb-2">Corporate Packages</h1>
        <p className="text-center text-lg md:text-xl text-emerald-600 mb-10">
          <TypeAnimation
            sequence={[
              'Curated Corporate Retreats', 2000,
              'Inspire. Collaborate. Celebrate.', 2000,
              'Work Hard. Retreat Harder.', 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl w-full h-full">
            <img
              src="/images/first.jpg"
              alt="Tourixaa Corporate Retreat"
              className="w-full h-full object-cover aspect-video lg:aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-10 rounded-3xl shadow-xl space-y-6 border border-gray-300 w-full"
          >
            <h2 className="text-2xl font-bold text-center text-emerald-800">Corporate Tour Planning Form</h2>
            <p className="text-center text-gray-600 text-sm md:text-base">
              Share your retreat needs — we'll customize a package just for you.
            </p>

            {[{ id: 'company_name', label: 'Company Name', type: 'text' }, { id: 'company_email', label: 'Company Email ID', type: 'email' }, { id: 'place', label: 'Place Name', type: 'text' }].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
                <InputText
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="members" className="block text-sm font-semibold text-gray-700 mb-1">Number of Members</label>
                <InputText id="members" name="members" type="number" placeholder="e.g., 20" required className="w-full border border-gray-300 p-3 rounded-lg" />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-1">Budget (₹)</label>
                <InputText id="budget" name="budget" type="number" placeholder="e.g., 50000" required className="w-full border border-gray-300 p-3 rounded-lg" />
              </div>
            </div>

            {[{ id: 'stay_option', label: 'Stay Option', placeholder: 'e.g., Premium Villas, Nature, Beach' }, { id: 'explore_options', label: 'Explore Options', placeholder: 'e.g., Golf, Spa, Wine Tasting' }, { id: 'activities', label: 'Activities', placeholder: 'e.g., Trekking, Escape Rooms, Cooking Contests' }].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
                <InputTextarea id={field.id} name={field.id} placeholder={field.placeholder} rows={2} required className="w-full border border-gray-300 p-3 rounded-lg" />
              </div>
            ))}

            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg transition-all duration-300">
              {loading ? 'Sending...' : 'Submit Inquiry'}
            </button>

            {sent && (
              <div className="text-green-600 text-center font-semibold pt-2">
                ✅ Our team will connect to you shortly for full planning.
              </div>
            )}
          </form>
        </div>

        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Hear From Happy Companies</h2>
            <p className="text-emerald-700 max-w-2xl mx-auto mb-12">See how companies like yours experienced transformative retreats with Tourixaa.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialData.map((item, index) => (
                <div key={index} className="bg-white border border-emerald-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500" />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-emerald-800">{item.name}</h4>
                      <p className="text-sm text-emerald-600">{item.role}</p>
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

export default CorporatePackages;