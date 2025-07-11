import React, { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "../layouts/PageLayout";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// --- Festival Data ---
const festivalsData = {
  January: ["Sheetla Mata Fair – Haryana", "Banashankari Jatre – Karnataka", "Pongal (TN)", "Lohri (Punjab)", "Makar Sankranti (Gujarat)", "Bihu (Assam)", "Jaipur Lit Fest (Rajasthan)"],
  February: ["Chamundeshwari Festival – Karnataka", "Khatu Shyamji Fair – Rajasthan", "Tara Tarini Yatra – Odisha", "Thaipusam (TN)", "Khajuraho Dance Fest (MP)", "Desert Festival (Rajasthan)"],
  March: ["Chaitra Navratri – All India", "Mariamman Festival – Tamil Nadu", "Nanda Devi Festival – Uttarakhand", "Holi (Mathura, Dwarka)", "Chapchar Kut – Mizoram", "Yaoshang – Manipur", "Gangaur – Rajasthan"],
  April: ["Ambaji Bhadarvi Mela – Gujarat", "Sheetla Ashtami – Haryana", "Shakumbhari Devi Mela – UP", "Baisakhi – Punjab", "Ugadi – Karnataka/AP", "Rama Navami – UP", "Gudi Padwa – Maharashtra"],
  May: ["Mata Mansa Devi Yatra – Haryana", "Muthyalamma Jatara – Andhra Pradesh", "Tara Tarini Chandan Yatra – Odisha", "Thrissur Pooram – Kerala", "Buddha Purnima – Pan India", "Moatsu Festival – Nagaland"],
  June: ["Danteshwari Devi Festival – Chhattisgarh", "Kamakhya Ambubachi Mela – Assam", "Yellamma Devi Mela – Telangana", "Ganga Dussehra – Uttarakhand", "Hemis Festival – Ladakh", "Ambubachi Mela – Assam"],
  July: ["Mahankali Bonalu – Telangana", "Kanaka Durga Utsav – Andhra Pradesh", "Poleramma Jatara – Andhra Pradesh", "Bonalu – Telangana", "Rath Yatra – Odisha"],
  August: ["Ambaji Bhadarvi Poonam Mela – Gujarat", "Tulja Bhavani Festival – Maharashtra", "Brajeshwari Devi Utsav – Himachal Pradesh", "Onam – Kerala"],
  September: ["Pitambara Peeth Utsav – MP", "Kaila Devi Fair – Rajasthan", "Gaura Devi Festival – Uttarakhand", "Ganesh Chaturthi – Maharashtra", "Bathukamma – Telangana", "Nuakhai – Odisha"],
  October: ["Garba – Gujarat", "Durga Puja – West Bengal, Bihar, Jharkhand", "Chamundeshwari Navratri – Karnataka", "Mansa Devi Yatra – HP, Punjab", "Bastar Dussehra – Chhattisgarh", "Pushkar Fair – Rajasthan"],
  November: ["Kali Puja – West Bengal, Assam, Odisha", "Kanyakumari Devi Pooja – Tamil Nadu", "Bhavani Mata Yatra – Maharashtra", "Diwali – Pan India", "Chhath Puja – Bihar/UP", "Wangala – Meghalaya", "Hornbill Prep – Nagaland"],
  December: ["Chintpurni Winter Yatra – Himachal Pradesh", "Khajuraho Dance Fest – MP", "Mariamman Winter Rituals – Tamil Nadu", "Christmas – Goa & Christian states", "Rann Utsav – Gujarat"],
};

const featuredFestivals = [
  { name: "Rann Utsav", location: "Gujarat", image: "https://tse2.mm.bing.net/th/id/OIP.PbK69NtgBo3msqGxDN1yMgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", description: "Cultural magic under the moonlit salt desert of Kutch." },
  { name: "Pushkar Fair", location: "Rajasthan", image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2019/08/Pushkar.jpg?resize=800%2C533&ssl=1", description: "World’s largest camel and cultural fair experience." },
  { name: "Durga Puja", location: "West Bengal", image: "https://pragyata.com/wp-content/uploads/2020/10/Durga-Puja-Odisha.jpg", description: "Divine celebrations filled with music, food, and lights." },
 { name: "Usav", location: "Gujarat", image: "https://blog.zoomin.com/wp-content/uploads/2024/09/durga-pooja-wishes.jpg", description: "Cultural magic under the moonlit salt desert of Kutch." },
  { name: "Pushkar Fair", location: "Rajasthan", image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2019/08/Pushkar.jpg?resize=800%2C533&ssl=1", description: "World’s largest camel and cultural fair experience." },
  { name: "Durga Puja", location: "West Bengal", image: "https://pragyata.com/wp-content/uploads/2020/10/Durga-Puja-Odisha.jpg", description: "Divine celebrations filled with music, food, and lights." }
];

const testimonials = [
  { name: "Aarti Shah", location: "Ahmedabad", review: "Tourixaa made my trip to Rajasthan unforgettable. Everything was well managed!" },
  { name: "Ravi Menon", location: "Bangalore", review: "Loved the cultural experiences and safe transport. Highly recommend Tourixaa!" },
  { name: "Sneha Verma", location: "Lucknow", review: "Booked a festival tour for Diwali with family. It was seamless and budget-friendly." }
];

const FestivalPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const visibleFestivals = selectedMonth
    ? festivalsData[selectedMonth]
    : Object.keys(festivalsData).flatMap((month) =>
        festivalsData[month].map((f) => `${f} | ${month}`)
      );

  const parseFestival = (festivalText) => {
    const [nameLoc, fromMonth] = festivalText.split(" | ");
    const [name, location] = nameLoc.split(/–|\(/);
    const cleanLoc = location?.replace(")", "")?.trim() || "India";

    return {
      name: name.trim(),
      location: cleanLoc,
      month: fromMonth || "",
      hashtags: [
        "#" + cleanLoc.split(" ")[0].toLowerCase(),
        "#" + (name.split(" ")[0] || "festival").toLowerCase(),
      ],
    };
  };

  const festivalTemplate = (festival) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <img src={festival.image} alt={festival.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-purple-800">{festival.name}</h3>
        <p className="text-sm text-gray-600">{festival.location}</p>
        <p className="text-xs text-gray-500 mt-1">{festival.description}</p>
      </div>
    </div>
  );

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          🎊 Tourixaa Festival Calendar
        </h2>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto mb-10">
          <h3 className="text-xl font-bold text-gray-700 mb-4">🌟 Featured Festivals</h3>
          <Carousel
            value={featuredFestivals}
            numVisible={3}
            numScroll={1}
            circular
            autoplayInterval={3000}
            itemTemplate={festivalTemplate}
            responsiveOptions={[
              { breakpoint: '768px', numVisible: 1, numScroll: 1 },
              { breakpoint: '1024px', numVisible: 2, numScroll: 1 }
            ]}
          />
        </div>

        <div className="text-center mb-4 text-gray-600">
          <p className="text-sm italic">
            Starting at ₹3000/- per person <br />
            *(varies based on stay and travel options)*
          </p>
        </div>

        {/* Month Selector */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {Object.keys(festivalsData).map((month) => (
              <button
                key={month}
                onClick={() =>
                  setSelectedMonth(selectedMonth === month ? null : month)
                }
                className={`py-2 text-sm rounded-lg border font-semibold transition-all shadow ${
                  selectedMonth === month
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white text-gray-700 hover:bg-purple-100 border-gray-300"
                }`}
              >
                {month}
              </button>
            ))}
          </div>
          {selectedMonth && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setSelectedMonth(null)}
                className="text-sm text-purple-600 underline hover:text-purple-800"
              >
                Show all festivals
              </button>
            </div>
          )}
        </div>

        {/* Festival Cards */}
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {visibleFestivals.map((festival, index) => {
            const { name, location, hashtags } = parseFestival(festival);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
                <p className="text-sm text-gray-500 mb-3">{location}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {hashtags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-green-600 mb-3">
                  Starting at ₹3000 per person
                </p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 rounded-lg">
                  Book Now
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">💬 What Our Travelers Say</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-4 text-sm text-gray-700 hover:shadow-lg"
              >
                <p className="mb-2 italic">“{t.review}”</p>
                <p className="font-semibold">– {t.name}, {t.location}</p>
              </div>
            ))}
          </div>
        </div>
         <div className="mt-12 bg-yellow-100 text-yellow-900 border-l-4 border-yellow-500 p-4 rounded shadow-sm max-w-3xl mx-auto text-sm leading-relaxed">
          <h4 className="font-bold mb-1">📌 Disclaimer</h4>
          <p>
            The images used on this page are for display purposes only and belong to their respective sources. We do not claim any ownership or copyright. These visuals are used to promote awareness and appreciation of heritage tourism.
          </p>
        </div>
      </div>
      
    </PageLayout>
  );
};

export default FestivalPage;
