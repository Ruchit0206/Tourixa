



// All imports remain same
import React, { useState, useRef } from "react";
// import "./index.css"
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import PageLayout from "../layouts/PageLayout";
const data = {
  "Old Cultures": [
    {
    title: "Adivasi (Central India)",
    location: "Gond, Bhil, Baiga, Santhal, Oraon, Munda, etc.",
    image: "https://tse1.mm.bing.net/th/id/OIP.qX7m-laBmZJMAc6-hVBTaAHaE4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    bullets: [
      "Rich traditions of animism, nature worship, forest medicine, and oral epics",
      "Vanishing due to deforestation, migration, and cultural dilution",
      "Language, dress, totem worship, and sacred groves are being lost"
    ]
  },
  {
    title: "The Cholanaikkans",
    location: "Nilambur, Kerala",
    image: "https://www.nilamburtourism.com/images/21.jpg",
    bullets: [
      "One of India’s most primitive tribes, forest dwellers in Nilambur",
      "Speak an unwritten language, live in rock shelters, no permanent homes",
      "Believed to be India’s last hunter-gatherers"
    ]
  },
  {
    title: "The Sentinelese",
    location: "North Sentinel Island, Andaman",
    image: "https://greekreporter.com/wp-content/uploads/2023/01/Sentinelese_Tribals_Andaman_Image_Credits_Ministey_of_Tribal_Affairs_Government_of_India.jpg",
    bullets: [
      "Live in total isolation, speak an unrecorded language",
      "Considered the last uncontacted tribe on Earth",
      "Protected, but under threat from environmental and illegal encroachment"
    ]
  },
  {
    title: "Baiga Tribe",
    location: "Madhya Pradesh & Chhattisgarh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Art_of_Tattooing.jpg/500px-Art_of_Tattooing.jpg",
    bullets: [
      "Known for tattoo art, fire dance, and forest medicine",
      "Traditionally didn’t plough land – considered it wounding Mother Earth",
      "Now forced into farming and settlements"
    ]
  },
  {
    title: "Toda Tribe",
    location: "Nilgiris, Tamil Nadu",
    image: "https://tse2.mm.bing.net/th/id/OIP.eaSwUeP1bJAismvf5S-9fAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    bullets: [
      "Indigenous pastoralists with sacred buffalo rituals",
      "Beautiful barrel-shaped huts, intricate embroidery (pukhoor)",
      "Unique Toda language, now endangered"
    ]
  },
  {
    title: "Sarna Religion Tribes",
    location: "Jharkhand, Chhattisgarh, Odisha",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Sarna_worshippers_following_their_religious_rites.jpg/500px-Sarna_worshippers_following_their_religious_rites.jpg",
    bullets: [
      "Practiced by Munda, Ho, Oraon tribes",
      "Nature-based religion centered on Sarna sthal (sacred groves)",
      "Struggling for recognition in census data"
    ]
  },
  {
    title: "Lambani (Banjara) Community",
    location: "Karnataka, Maharashtra, Telangana",
    image: "https://tse4.mm.bing.net/th/id/OIP.izBz4Xgk07XixGOiBXW4ZgHaE3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    bullets: [
      "Nomadic gypsies with colorful dress, jewelry, and mirror embroidery",
      "Speak Gor Boli, an Indo-Romani language",
      "Facing cultural erosion due to migration and mainstreaming"
    ]
  },
  {
    title: "Chhau & Paika Warrior Traditions",
    location: "Odisha, Jharkhand",
    image: "https://tse3.mm.bing.net/th/id/OIP.YgJYxP3IrTDSBFlWA4j3iwHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    bullets: [
      "Dance-martial arts fusion used in tribal storytelling",
      "Symbol of resistance and spiritual power",
      "Now mostly performed for tourism"
    ]
  },
  {
    title: "Siddi Tribe",
    location: "Gujarat, Karnataka",
    image: "https://s3.youthkiawaaz.com/wp-content/uploads/2020/07/15153345/siddi-2.jpg",
    bullets: [
      "Descendants of East African Bantu slaves",
      "Retain African dance, music, and warrior rituals",
      "Culturally isolated and forgotten in India"
    ]
  },
  {
    title: "Raji & Banrawat Tribes",
    location: "Uttarakhand",
    image: "https://www.uttarakhandi.com/wp-content/uploads/raji-min-1140x430.png",
    bullets: [
      "Semi-nomadic forest tribes",
      "Speak their own languages, rely on wild food and bamboo craft",
      "Recognized as particularly vulnerable tribal groups (PVTGs)"
    ]
  },
  {
    title: "Juang & Kharia Tribes",
    location: "Odisha",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Juang.jpg/500px-Juang.jpg",
    bullets: [
      "Known for drum-dancing, leaf-dress traditions, and oral lore",
      "Strong spirit worship and jungle-rooted lifestyle",
      "Rapid cultural loss due to industrial displacement"
    ]
  }
  ],
  "Remote Villages": [
    {
    title: "Turtuk",
    location: "Ladakh",
    image: "https://thelandofwanderlust.com/wp-content/uploads/2014/03/Turtuk.jpg",
    bullets: [
      "Last village on Indian side of LOC",
      "Balti culture, apricot orchards, Nubra valley views"
    ]
  },
  {
    title: "Chitkul",
    location: "Himachal Pradesh",
    image: "https://as2.ftcdn.net/jpg/05/59/73/15/1000_F_559731572_suMpOWHbcecim7ps0HMgKZ6s3xapbMin.jpg",
    bullets: [
      "Last inhabited village on Indo-Tibet border",
      "Wooden houses, Baspa river, snow-peaks"
    ]
  },
  {
    title: "Mana",
    location: "Uttarakhand",
    image: "https://taleof2backpackers.com/wp-content/uploads/2021/01/Mana-village-Uttarakhand-1.jpg",
    bullets: [
      "Mythological significance, near Badrinath",
      "Last Indian village before Tibet"
    ]
  },
  {
    title: "Kalap",
    location: "Uttarakhand",
    image: "https://tse3.mm.bing.net/th/id/OIP.yebgyYmT0Hv_QnsDd8FHEAHaE7",
    bullets: [
      "Accessible by trek only",
      "Untouched by tourism, ideal for rural life experience"
    ]
  },
  {
    title: "Warwan Valley",
    location: "Jammu & Kashmir",
    image: "https://tse4.mm.bing.net/th/id/OIP.DI1M6XxO_IK0goX8Zm2M6wHaEK",
    bullets: [
      "Remote and untouched valley in Kishtwar",
      "Beautiful meadows, very few tourists"
    ]
  },
  {
    title: "Ziro",
    location: "Arunachal Pradesh",
    image: "https://arunachal24.in/wp-content/uploads/2022/09/ziro-heaven-on-earth.jpg",
    bullets: [
      "Apatani tribal culture, rice fields",
      "Famous for indie music festival"
    ]
  },
  {
    title: "Mechuka",
    location: "Arunachal Pradesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Menchukha_Town_at_the_Dusk.jpg/500px-Menchukha_Town_at_the_Dusk.jpg",
    bullets: [
      "Wooden homes, Monpa tribal culture",
      "Near Indo-China border"
    ]
  },
  {
    title: "Majuli",
    location: "Assam",
    image: "https://tse4.mm.bing.net/th/id/OIP.ZPc4DiDYrvUNGpZIDw642AHaEK",
    bullets: [
      "World's largest river island",
      "Famous for Satras and Mising tribes"
    ]
  },
  {
    title: "Dzongu",
    location: "Sikkim",
    image: "https://www.riddhimart.com/DestImages/Dzongu-dzongu-sikkim-tourism.JPG",
    bullets: [
      "Reserved area for Lepcha tribe",
      "Hot springs, waterfalls, monastery stays"
    ]
  },
  {
    title: "Tawang",
    location: "Arunachal Pradesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/TawangMonastery-ArunachalPradesh-1.jpg/500px-TawangMonastery-ArunachalPradesh-1.jpg",
    bullets: [
      "High-altitude town with stunning monasteries",
      "Spiritual and scenic"
    ]
  },
  {
    title: "Kibithu",
    location: "Arunachal Pradesh",
    image: "https://tse4.mm.bing.net/th/id/OIP.C4K77GE88DymGuN-IHKLGQHaDa",
    bullets: [
      "Easternmost village near China border",
      "Gorgeous valley views, Mishmi tribe"
    ]
  },
  {
    title: "Daporijo",
    location: "Arunachal Pradesh",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/1f/f1/26/daporijo-island.jpg",
    bullets: [
      "Surrounded by tribal villages (Tagin, Galo)",
      "Bamboo houses, hanging bridges"
    ]
  },
  {
    title: "Anini",
    location: "Arunachal Pradesh",
    image: "https://tse4.mm.bing.net/th/id/OIP.anRfPS1J00fCWdK0sWOy8QHaFI",
    bullets: [
      "Remote Dibang Valley village",
      "Idu Mishmi tribe, snow in winters"
    ]
  },
  {
    title: "Mon",
    location: "Nagaland",
    image: "https://chaloghumane.com/wp-content/uploads/2021/08/mon-nagaland.jpg",
    bullets: [
      "Home of Konyak headhunter tribe",
      "Tattooed elders, tribal festivals"
    ]
  },
  {
    title: "Lachung & Yumthang Valley",
    location: "North Sikkim",
    image: "https://www.honeymoonbug.com/blog/wp-content/uploads/2022/07/gurudongmar-lake-lachen-sikkim.jpg",
    bullets: [
      "Snow-peaks, hot springs, rhododendrons",
      "Close to Zero Point"
    ]
  },
  {
    title: "Longwa",
    location: "Nagaland",
    image: "https://footloosedev.com/wp-content/uploads/longwa-1440x680.jpg",
    bullets: [
      "Village lies on India–Myanmar border",
      "Traditional houses, handmade guns"
    ]
  },
  {
    title: "Lachen",
    location: "Sikkim",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/a5/e1/07/lachen-village-at-north.jpg",
    bullets: [
      "Gateway to Gurudongmar Lake",
      "Snow all around, peaceful homes"
    ]
  },
  {
    title: "Mawlynnong",
    location: "Meghalaya",
    image: "https://tse2.mm.bing.net/th/id/OIP.cSNIkUijPv9cpMqEZicC9AHaFj",
    bullets: [
      "Cleanest village in Asia",
      "Sky View point, Khasi culture"
    ]
  },
  {
    title: "Hodka",
    location: "Gujarat – Kutch",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/2a/a3/aa/getlstd-property-photo.jpg",
    bullets: [
      "Bhungas in the desert",
      "Traditional crafts & local art"
    ]
  },
  {
    title: "Bera",
    location: "Rajasthan",
    image: "https://tse1.mm.bing.net/th/id/OIP._pKXt-V5fEz0AxzxJDOuKAAAAA",
    bullets: [
      "Known for leopard sightings",
      "Jawai Bandh rocky hills"
    ]
  },
  {
    title: "Gandikota",
    location: "Andhra Pradesh",
    image: "https://i.pinimg.com/736x/a3/53/e4/a353e4e4cefd1f65b9c782fab6bf8296--temples.jpg",
    bullets: [
      "Grand Canyon of India",
      "Ancient forts & temples"
    ]
  },
  {
    title: "Agumbe",
    location: "Karnataka",
    image: "https://static.india.com/wp-content/uploads/2023/08/Agumbe-Karnataka-Where-Cherrapunji-Meets-the-Western-Ghats-3-Reasons-You-Should-Visit-The-Place.png",
    bullets: [
      "Rainforest village, king cobra habitat",
      "“Cherrapunji of South”"
    ]
  },
  {
    title: "Araku Valley",
    location: "Andhra Pradesh",
    image: "https://pickyourtrail.com/blog/wp-content/uploads/2020/09/Araku_valley_view.jpg",
    bullets: [
      "Tribal villages, coffee plantations",
      "Scenic rail route"
    ]
  },
  {
    title: "Valparai",
    location: "Tamil Nadu",
    image: "https://keralabee.com/wp-content/uploads/2023/04/1681759682968-822x1024.jpg",
    bullets: [
      "Lush tea estates, elephants",
      "Hidden waterfalls"
    ]
  },
  {
    title: "Poombarai",
    location: "Tamil Nadu",
    image: "https://assets.cntraveller.in/photos/627a566c74266e7300892c6e/16:9/w_1024%2Cc_limit/Poombarai%2520village%2520lead%2520image.jpg",
    bullets: [
      "Terraced hills near Kodaikanal",
      "Ancient temples & peaceful views"
    ]
  },
  {
    title: "Kurangani",
    location: "Tamil Nadu",
    image: "https://thumbs.dreamstime.com/b/kurangani-tamil-nadu-hidden-beauty-western-ghats-148388604.jpg",
    bullets: [
      "Western Ghats trek base",
      "Forests, waterfalls, peace",
      
    ]
  },
  {
    title: "Vypin Island",
    location: "Kerala",
    image: "https://tripinic.com/wp-content/uploads/2022/05/Vypin-Island.jpg",
    bullets: [
      "Backwaters & Chinese fishing nets",
      "Scenic coastal villages"
    ]
  }
  ],
};

export default function ForgottenTraditionPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [showMoreDialog, setShowMoreDialog] = useState(false);
  const [moreItem, setMoreItem] = useState(null);
  const [formData, setFormData] = useState({ category: Object.keys(data)[0] });
  const [loading, setLoading] = useState(false);
  const toast = useRef(null);

  const filteredData = (category) =>
    data[category].filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <PageLayout>
      <Toast ref={toast} />
      <section className="font-sans py-8 px-4 lg:px-24 bg-orange-50 min-h-screen">
        <h2 className="text-4xl font-bold text-center text-orange-900 mb-6">
          Forgotten Traditions
        </h2>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-lg">
            <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <InputText
              className="pl-10 pr-4 py-2 w-full border border-orange-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for traditions or places..."
            />
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          {Object.keys(data).map((category, idx) => (
            <Button
              key={category}
              label={category}
              className={`rounded-full px-6 py-2 text-sm font-medium border-none shadow-md transition-all duration-200 ${
                activeIndex === idx ? "bg-orange-600 text-white" : "bg-white text-orange-700"
              }`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData(Object.keys(data)[activeIndex]).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 space-y-4 flex flex-col justify-between flex-grow font-sans">
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <i className="pi pi-map-marker text-pink-500" />
                  {item.location}
                </div>

                <h3 className="text-xl font-bold text-blue-800">{item.title}</h3>

               {/* First bullet only */}
{item.bullets && item.bullets.length > 0 && (
  <ul className="text-gray-700 text-sm space-y-1">
    <li className="flex gap-2 items-start">
      <span className="text-blue-700 text-xs mt-1">🏛️</span>
      <span>{item.bullets[0]}</span>
    </li>
  </ul>
)}


                {/* See More */}
                {item.bullets?.length > 1 && (
  <button
    onClick={() => {
      setMoreItem(item);
      setShowMoreDialog(true);
    }}
    className="text-blue-500 text-sm underline hover:text-blue-600 transition self-start"
  >
    See more
  </button>
)}


                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200">#UPHeritage</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200">#HistoricIndia</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200">#FullPack</span>
                </div>

                {/* Price */}
                <div className="pt-2 text-sm font-medium text-green-700">
                  Starting at <span className="font-bold text-green-800">₹5000</span>{" "}
                  <span className="line-through text-gray-400 ml-1">₹6000</span>
                </div>

                {/* Book Now Button */}
                <Button
                  label="Book Now"
                  className="w-full mt-3 justify-center text-white font-semibold text-base rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 border-none hover:from-indigo-600 hover:to-blue-700 px-2 py-2"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredData(Object.keys(data)[activeIndex]).length === 0 && (
          <p className="text-center text-gray-500 mt-6">No results found.</p>
        )}

        {/* Modal for See More */}
        <Dialog
          header={moreItem?.title}
          visible={showMoreDialog}
          style={{ width: "100%", maxWidth: "500px" }}
          onHide={() => setShowMoreDialog(false)}
          className="p-fluid rounded-xl"
        >
          {moreItem && (
            <div className="space-y-4">
              <img src={moreItem.image} alt={moreItem.title} className="rounded-lg w-full h-56 object-cover" />
              <p className="text-sm text-gray-600"><i className="pi pi-map-marker text-pink-500" /> {moreItem.location}</p>
              <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm">
                {moreItem.bullets?.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          )}
        </Dialog>
      </section>
    </PageLayout>
  );
}
