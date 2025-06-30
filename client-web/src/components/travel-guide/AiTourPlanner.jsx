import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import PageLayout from "../layouts/PageLayout";

const monthPlaces = {
  January: ["Goa", "Jaipur", "Kutch"],
  February: ["Udaipur", "Ranthambore", "Khajuraho"],
  March: ["Holi in Mathura", "Rishikesh", "Varanasi"],
  April: ["Darjeeling", "Nainital", "Coorg"],
  May: ["Manali", "Shimla", "Sikkim"],
  June: ["Ladakh", "Spiti Valley", "Auli"],
  July: ["Munnar", "Mahabaleshwar", "Shillong"],
  August: ["Wayanad", "Cherrapunji", "Valley of Flowers"],
  September: ["Ziro Valley", "Udaipur", "Pondicherry"],
  October: ["Hampi", "Jodhpur", "Kolkata"],
  November: ["Pushkar", "Jaisalmer", "Sundarbans"],
  December: ["Rann of Kutch", "Auli", "Goa"]
};

export default function AITourPlannerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    style: "",
    duration: "",
    budget: "",
    month: "January",
    destination: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    const { style, duration, budget, month, destination, notes } = form;
    const travelPlan = `🌍 Destination: ${destination || "a scenic place in India"}  
📆 Duration: ${duration || "5"} Days  
💸 Budget: ₹${budget || "20,000"}  
🏬 Travel Style: ${style || "Relaxation"}  

Day 1:  
• Arrival and check-in at a local stay  
• Explore nearby attractions or markets  

Day 2:  
• Adventure activity like rafting, trekking or beach walk  
• Try local food and relax by evening  

Day 3:  
• Visit heritage or natural spots  
• Optional guided tour or wellness session  

Day 4:  
• Leisure morning and optional excursion  
• Local souvenir shopping  

Day 5:  
• Free morning for relaxation  
• Departure  

📝 Tip: ${notes || "Pack light and carry essentials based on weather."}`;

    setTimeout(() => {
      setResponse(travelPlan);
      setLoading(false);
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-4 sm:p-6 relative overflow-hidden">
        <img src="rafkti.svg" alt="AI Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none z-0" />

        {/* Month selection and places at the top */}
        <div className="relative z-10 max-w-4xl mx-auto mt-6 animate-fade-in">
          <div className="bg-gradient-to-br from-[#1a1a40] to-[#0f172a] p-8 rounded-3xl shadow-2xl border border-blue-700 backdrop-blur-md">
            <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 tracking-wide">
              🔍 Discover AI Picks by Month
            </h2>
            <div className="flex justify-center">
              <select
                id="monthSelect"
                value={form.month}
                onChange={handleChange}
                name="month"
                className="w-full sm:w-2/3 bg-[#1f2937] text-white border border-cyan-500 rounded-2xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-inner hover:shadow-lg transition"
              >
                {Object.keys(monthPlaces).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Suggested Places for Selected Month */}
        {form.month && monthPlaces[form.month] && (
          <div className="relative z-10 max-w-6xl mx-auto mt-10 animate-fade-in">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ✨ Top AI Picks for {form.month}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {monthPlaces[form.month].map((place) => (
                <div
                  key={place}
                  className="bg-gradient-to-tr from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-cyan-500 shadow-lg hover:shadow-2xl hover:border-cyan-400 transition transform hover:scale-105 text-center"
                >
                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    {place}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tour Planner Form */}
        <div className="relative z-10 max-w-3xl mx-auto bg-[#1e293b] mt-12 p-6 sm:p-8 rounded-xl shadow-2xl border border-blue-600 animate-fade-in">
          <div className="absolute top-4 right-4 text-cyan-500">
            <Sparkles size={28} className="animate-pulse" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-cyan-400 mb-6">
            🤖 AI-Powered Tour Planner
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full bg-gray-800 text-white border border-blue-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="w-full bg-gray-800 text-white border border-blue-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <select name="style" value={form.style} onChange={handleChange} required className="w-full bg-gray-800 text-white border border-blue-500 rounded px-4 py-2">
              <option value="">Select Travel Style</option>
              <option value="Beach">Beach</option>
              <option value="Mountains">Mountains</option>
              <option value="Adventure">Adventure</option>
              <option value="Culture">Culture</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Luxury">Luxury</option>
            </select>
            <input type="number" name="duration" placeholder="Duration (in days)" value={form.duration} onChange={handleChange} required className="w-full bg-gray-800 text-white border border-blue-500 rounded px-4 py-2" />
            <input type="number" name="budget" placeholder="Budget (in ₹ or $)" value={form.budget} onChange={handleChange} required className="w-full bg-gray-800 text-white border border-blue-500 rounded px-4 py-2" />
            <input type="text" name="destination" placeholder="Preferred Destination (optional)" value={form.destination} onChange={handleChange} className="w-full bg-gray-800 text-white border border-blue-500 rounded px-4 py-2" />
            <textarea name="notes" placeholder="Any special notes or preferences?" value={form.notes} onChange={handleChange} rows={4} className="w-full bg-gray-800 text-white border border-blue-500 rounded px-4 py-2"></textarea>

            <button type="submit" className="w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition font-bold shadow-md">
              {loading ? "Generating..." : "Get My Tour Plan"}
            </button>
          </form>

          {loading && (
            <div className="text-center mt-6 text-cyan-400 font-medium animate-pulse">
              ⏳ Generating your smart itinerary...
            </div>
          )}

          {response && (
            <div className="mt-6 bg-gray-800 border border-cyan-500 text-cyan-200 p-4 rounded shadow-md animate-fade-in">
              <h3 className="font-semibold mb-2 text-cyan-300">Suggested Plan:</h3>
              <p className="whitespace-pre-wrap leading-relaxed">{response}</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}