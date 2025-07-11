import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import PageLayout from "../layouts/PageLayout";

// ... (Keep the entire data object as-is)
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
      "Forests, waterfalls, peace"
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
   <section className="font-times py-10 px-5 lg:px-20 bg-yellow-50 min-h-screen">

        <h2 className="text-4xl font-bold text-center text-orange-800 mb-6">
          Forgotten Traditions
        </h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <InputText
              className="pl-10 pr-4 py-2 w-full border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search traditions..."
            />
          </div>
        </div>

        {/* Dynamic Tabs */}
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          {Object.keys(data).map((category, catIndex) => (
            <TabPanel key={catIndex} header={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData(category).map((item, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-xl rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="object-cover w-full h-48"
                    />
                    <div className="p-5 space-y-2">
                      <h3 className="text-xl font-semibold-times text-orange-700">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.location}</p>

                      {item.bullets ? (
                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                          {item.bullets.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-700">{item.description}</p>
                      )}

                      <div className="text-green-700 text-sm font-semibold mt-2">
                        🌄 Package starting at ₹7,000
                      </div>
                      <Button
                        label="Book Now"
                        icon="pi pi-check-circle"
                        className="w-full p-button-sm p-button-warning mt-3"
                      />
                    </div>
                  </div>
                ))}
                {filteredData(category).length === 0 && (
                  <p className="col-span-full text-center text-gray-500 mt-4">
                    No traditions found for this search.
                  </p>
                )}
              </div>
            </TabPanel>
          ))}
        </TabView>

        {/* CTA Section */}
        <section className="mt-14 p-8 bg-gradient-to-r from-orange-200 to-yellow-100 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl font-semibold text-orange-800 mb-2">Know a Lost Tradition?</h3>
          <p className="mb-4 text-gray-700">Contribute your story and help preserve cultural heritage.</p>
          <Button
            label="Submit a Tradition"
            icon="pi pi-send"
            className="p-button-warning p-button-raised"
            onClick={() => setShowDialog(true)}
          />
        </section>

        {/* Submit Dialog */}
        <Dialog
          header="Submit a Forgotten Tradition"
          visible={showDialog}
          style={{ width: "100%", maxWidth: "500px" }}
          onHide={() => setShowDialog(false)}
          className="p-fluid rounded-2xl"
        >
        <form
  onSubmit={async (e) => {
    e.preventDefault();
    setLoading(true);
    const formEl = e.target;
    const formData = new FormData(formEl);
    try {
      const response = await fetch("https://formspree.io/f/xeokyowy", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        toast.current.show({
          severity: "success",
          summary: "Submitted!",
          detail: "Thank you for contributing 🎉",
          life: 3000,
        });
        formEl.reset();
        setShowDialog(false);
      } else {
        toast.current.show({
          severity: "error",
          summary: "Oops!",
          detail: "Something went wrong.",
          life: 3000,
        });
      }
    } catch (err) {
      toast.current.show({
        severity: "error",
        summary: "Network Error",
        detail: "Please try again.",
        life: 3000,
      });
    }
    setLoading(false);
  }}
  className="space-y-5 bg-white px-6 py-4 rounded-xl shadow-xl border border-orange-200"
>
  {/* Title */}
  <div>
    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
      Tradition Title <span className="text-red-500">*</span>
    </label>
    <InputText
      id="title"
      name="title"
      className="w-full p-inputtext-sm border border-orange-400 rounded-md"
      required
    />
  </div>

  {/* Location */}
  <div>
    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
      Location <span className="text-red-500">*</span>
    </label>
    <InputText
      id="location"
      name="location"
      className="w-full p-inputtext-sm border border-orange-400 rounded-md"
      required
    />
  </div>

  {/* Category */}
  <div>
    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
      Category
    </label>
    <Dropdown
      id="category"
      name="category"
      className="w-full border border-orange-400 rounded-md"
      value={formData.category}
      options={Object.keys(data)}
      onChange={(e) => setFormData({ ...formData, category: e.value })}
      placeholder="Select category"
    />
  </div>

  {/* Description */}
  <div>
    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
      Description <span className="text-red-500">*</span>
    </label>
    <InputTextarea
      id="description"
      name="description"
      rows={4}
      className="w-full border border-orange-400 rounded-md"
      placeholder="Brief background or story"
      required
    />
  </div>

  {/* Submit Button */}
  <div className="flex justify-end pt-2">
    <Button
      type="submit"
      label={loading ? "Submitting..." : "Submit Tradition"}
      icon={!loading ? "pi pi-send" : null}
      disabled={loading}
      className="bg-orange-500 border-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
    >
      {loading && (
        <ProgressSpinner style={{ width: "18px", height: "18px" }} strokeWidth="4" />
      )}
    </Button>
  </div>
</form>

        </Dialog>
      </section>
    </PageLayout>
  );
}
