import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Carousel } from 'primereact/carousel';
import { Toast } from 'primereact/toast';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { TypeAnimation } from 'react-type-animation';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PageLayout from '../layouts/PageLayout';

const themes = [
  {
    title: 'Zen & Reboot',
    description: 'Mindful escapes with yoga, meditation, and nature retreats.',
    image: '/images/first.jpg',
  },
  {
    title: 'Adventure + Innovation',
    description: 'Exciting team building activities mixed with brainstorming events.',
    image: '/images/second.png',
  },
  {
    title: 'Work Hard, Party Harder',
    description: 'A perfect mix of productivity and nightlife experiences.',
    image: '/images/third.webp',
  },
  {
    title: 'Offsite Shark Tank',
    description: 'Startup-themed retreats with pitching challenges and mentoring.',
    image: '/images/fourth.webp',
  },
  {
    title: 'Leadership Recharge',
    description: 'Executive getaways for CEOs and leaders with mindfulness and strategy.',
    image: '/images/leadership.jpg',
  },
  {
    title: 'Women in Leadership',
    description: 'Empowerment retreats tailored for women-led teams.',
    image: '/images/women-lead.jpg',
  },
  {
    title: 'Silent Strategy Retreat',
    description: 'Deep planning getaways with no devices and full focus.',
    image: '/images/strategy.jpg',
  },
  {
    title: 'Sales Booster Camp',
    description: 'High-energy experiences to fire up your sales team.',
    image: '/images/sales-camp.jpg',
  },
  {
    title: 'Remote Reconnect',
    description: 'Bring remote teams together with fun and bonding.',
    image: '/images/remote-team.jpg',
  },
  {
    title: 'Culture Fusion Retreat',
    description: 'Celebrate team diversity through unique bonding events.',
    image: '/images/culture-fusion.jpg',
  },
  {
    title: 'Innovation Lab Offsite',
    description: 'Build real solutions in a startup-style offsite.',
    image: '/images/innovation-lab.jpg',
  },
  {
    title: 'Wellness & Workflows',
    description: 'Balance your team’s productivity with wellness sessions.',
    image: '/images/wellness-work.jpg',
  },
];

const testimonials = [
  {
    name: 'Ravi Sharma',
    text: 'Tourixa helped our team reconnect and reboot with their Zen package.',
    image: '/images/first.jpg',
  },
  {
    name: 'Priya Mehta',
    text: 'The Adventure & Innovation retreat was next-level fun and productive!',
    image: '/images/second.png',
  },
  {
    name: 'Aman Verma',
    text: 'Tourixa’s Offsite Shark Tank concept boosted our startup creativity.',
    image: '/images/third.webp',
  },
];

const CorporatePackages = () => {
  const [visible, setVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const toast = useRef(null);

  const openForm = (themeTitle) => {
    setSelectedTheme(themeTitle);
    setVisible(true);
  };

  const closeForm = () => {
    setVisible(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        confetti();
        toast.current?.show({
          severity: 'success',
          summary: 'Inquiry Sent',
          detail: `Thanks for choosing "${selectedTheme}"`,
          life: 3000,
        });
        setTimeout(() => {
          setSent(false);
          setVisible(false);
        }, 1500);
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setLoading(false);
      });
  };

  const testimonialTemplate = (testimonial) => (
    <div className="text-center p-4 border rounded-lg shadow bg-white mx-2">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 mx-auto rounded-full mb-2 object-cover"
      />
      <p className="text-gray-600 text-sm italic mb-2">"{testimonial.text}"</p>
      <h3 className="text-gray-800 font-semibold">{testimonial.name}</h3>
    </div>
  );

  return (
    <PageLayout>
    <div className="bg-[#f9fafb] py-12 px-4 md:px-10 min-h-screen">
      <Toast ref={toast} />

  <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
  Corporate Packages
</h1>
<p className="text-center text-lg md:text-2xl text-gray-600 mb-12">
  <TypeAnimation
    sequence={[
      'Team Retreat Themes',
      2000,
      'Build. Bond. Break.',
      2000,
      'Unwind with Purpose',
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="inline-block"
  />
</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-transparent hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={theme.image}
              alt={theme.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{theme.title}</h2>
              <p className="text-gray-600 text-sm mb-5">{theme.description}</p>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/91YOURNUMBER?text=Hi! I'm interested in the ${theme.title} package from Tourixa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-all"
                >
                  <i className="pi pi-whatsapp"></i> WhatsApp Inquiry
                </a>

                <button
                  onClick={() => openForm(theme.title)}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-all duration-200"
                >
                  <i className="pi pi-envelope"></i> Send Inquiry
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">What Teams Are Saying</h2>
      <Carousel
        value={testimonials}
        itemTemplate={testimonialTemplate}
        numVisible={1}
        numScroll={1}
        circular
        autoplayInterval={4000}
        showIndicators={false}
      />

      {/* General Inquiry Form */}
      <div className="mt-20 bg-white rounded-lg shadow p-6 md:p-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">General Inquiry</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div className="flex flex-col">
            <label htmlFor="name2" className="mb-1 font-medium text-gray-700">Your Name</label>
            <InputText
              id="name2"
              name="user_name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email2" className="mb-1 font-medium text-gray-700">Email</label>
            <InputText
              id="email2"
              name="user_email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message2" className="mb-1 font-medium text-gray-700">Message</label>
            <InputTextarea
              id="message2"
              name="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all duration-300"
          >
            {loading ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>

      {/* Modal Form */}
      <Dialog
        header={`Inquiry for ${selectedTheme}`}
        visible={visible}
        onHide={closeForm}
        className="w-full md:w-2/3 lg:w-1/2"
      >
        <div className="p-6">
          {sent ? (
            <div className="text-center text-green-600 text-lg font-semibold">
              🎉 Message Sent Successfully!
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <input type="hidden" name="package" value={selectedTheme} />

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 font-medium text-gray-700">Your Name</label>
                <InputText
                  id="name"
                  name="user_name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
                <InputText
                  id="email"
                  name="user_email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 font-medium text-gray-700">What do you want in this package?</label>
                <InputTextarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all duration-300"
              >
                {loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </Dialog>
    </div>
    </PageLayout>
  );
};

export default CorporatePackages;
