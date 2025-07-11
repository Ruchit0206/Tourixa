// MuseumPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "../layouts/PageLayout";

const museumsData = [
  {
    id: 1,
    name: "Visakha Museum",
    state: "Visakhapatnam, Andhra Pradesh",
    link: "local",
    image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/29/b7dfad80b11f8c67c6fceb98deda1aec_1000x1000.jpg",
    description: "A maritime museum displaying artifacts of the region’s naval history.",
    map: "https://maps.google.com/?q=Visakha+Museum+Visakhapatnam"
  },
  {
    id: 2,
    name: "Victoria Jubilee Museum",
    state: "Vijayawada, Andhra Pradesh",
    link: "local",
    image: "https://tse2.mm.bing.net/th/id/OIP.-UkDfd-KD7slsExzZKOOHAHaFA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Also known as Bapu Museum, it showcases ancient sculptures and historical relics.",
    map: "https://maps.google.com/?q=Victoria+Jubilee+Museum+Vijayawada"
  },
  {
    id: 3,
    name: "Tribal Museum",
    state: "Araku Valley, Andhra Pradesh",
    link: "local",
    image: "https://www.connectingtraveller.com/images/localtip/1631105715images%20(15).jpeg",
    description: "Dedicated to the tribal cultures of Andhra Pradesh, with traditional artifacts and huts.",
    map: "https://maps.google.com/?q=Tribal+Museum+Araku+Valley"
  },
  {
    id: 4,
    name: "Jawaharlal Nehru State Museum",
    state: "Itanagar, Arunachal Pradesh",
    link: "local",
    image: "https://tse2.mm.bing.net/th/id/OIP.cqS-CgUacwlgg6TImSgDNwAAAA?r=0&w=360&h=240&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Cultural and archaeological collections of Arunachal Pradesh.",
    map: "https://maps.google.com/?q=Jawaharlal+Nehru+State+Museum+Itanagar"
  },
  {
    id: 5,
    name: "Assam State Museum",
    state: "Guwahati, Assam",
    link: "http://axomuseum.in",
    image: "https://www.connectingtraveller.com/images/localtip/1633961530Assam-State-Museum-in-Guwahati.jpg",
    description: "Features sculptures, epigraphy, and ethnographic displays from Assam’s history.",
    map: "https://maps.google.com/?q=Assam+State+Museum+Guwahati"
  },
  {
    id: 6,
    name: "Srimanta Sankaradeva Kalakshetra Museum",
    state: "Guwahati, Assam",
    link: "https://kalakshetraonline.in",
    image: "https://www.sankaradevakalakshetra.com/assets/resources/2020/11/ssk3.jpg",
    description: "A cultural institution preserving the legacy of Srimanta Sankardeva through art and exhibits.",
    map: "https://maps.google.com/?q=Srimanta+Sankaradeva+Kalakshetra+Museum+Guwahati"
  },
  {
    id: 7,
    name: "Bihar Museum",
    state: "Patna, Bihar",
    link: "https://www.biharmuseum.org",
    image: "https://tse3.mm.bing.net/th/id/OIP.HrTtSKbIPliEFfxgK45O-wHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A modern museum showcasing the rich heritage and ancient history of Bihar.",
    map: "https://maps.google.com/?q=Bihar+Museum+Patna"
  },
  {
    id: 8,
    name: "Patna Museum",
    state: "Patna, Bihar",
    link: "https://www.biharmuseum.org",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/1e/f3/45/the-building.jpg?w=1200&h=-1&s=1",
    description: "A colonial-era museum featuring historical artifacts from the Mauryan to British periods.",
    map: "https://maps.google.com/?q=Patna+Museum"
  },
  {
    id: 9,
    name: "Vaishali Museum",
    state: "Vaishali, Bihar",
    link: "https://asivaishalimuseum.com",
    image: "https://tse1.mm.bing.net/th/id/OIP.5OBWIwPZY3f4ndx2Mp-wiAHaFG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Contains historical artifacts from the time of Lord Buddha and ancient Vaishali.",
    map: "https://maps.google.com/?q=Vaishali+Museum"
  },
  {
    id: 10,
    name: "Nalanda Archaeological Museum",
    state: "Nalanda, Bihar",
    link: "local",
    image: "https://tse2.mm.bing.net/th/id/OIP.lNyU1QaBFACz1ceaTyteuQHaEL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Houses artifacts and sculptures from the Nalanda Mahavihara ruins and nearby excavations.",
    map: "https://maps.google.com/?q=Nalanda+Archaeological+Museum"
  },
  {
    id: 11,
    name: "Mahant Ghasidas Memorial Museum",
    state: "Raipur, Chhattisgarh",
    link: "http://www.cgculture.in",
    image: "https://static-blog.treebo.com/wp-content/uploads/2023/01/Mahant-Ghasidas-Memorial-Museum_facebook.com_.jpg",
    description: "Exhibits archaeological and anthropological artifacts from central India.",
    map: "https://maps.google.com/?q=Mahant+Ghasidas+Museum+Raipur"
  },
  {
    id: 12,
    name: "Purkhouti Muktangan",
    state: "Naya Raipur, Chhattisgarh",
    link: "http://www.cgculture.in",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/41/b3/e3/worli-art-entrance.jpg?w=1200&h=1200&s=1",
    description: "An open-air museum showcasing tribal culture and rural traditions.",
    map: "https://maps.google.com/?q=Purkhouti+Muktangan+Naya+Raipur"
  },
  {
    id: 13,
    name: "Goa State Museum",
    state: "Panaji, Goa",
    link: "https://goamuseum.gov.in",
    image: "https://tse2.mm.bing.net/th/id/OIP.ohsLNLfVxDvT0BXpedMhYAHaEw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Covers Goa’s art, culture, and history with various thematic galleries.",
    map: "https://maps.google.com/?q=Goa+State+Museum+Panaji"
  },
  {
    id: 14,
    name: "Naval Aviation Museum",
    state: "Vasco da Gama, Goa",
    link: "https://goa-tourism.org.in/",
    image: "https://tse2.mm.bing.net/th/id/OIP.oArVyU3IWfFe0TQ85TQEDwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "India’s only Naval Aviation museum featuring aircraft and naval equipment.",
    map: "https://maps.google.com/?q=Naval+Aviation+Museum+Goa"
  },
  {
    id: 15,
    name: "Lakshi Vilas Palace",
    state: "Vadodara, Gujarat",
    link: "https://lvpbooking.gaekwarenterprise.com/homepage",
    image: "https://tse3.mm.bing.net/th/id/OIP.8Won2pNbZwTJifyDG1smDgHaE4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A grand royal residence with an art gallery and museum section.",
    map: "https://maps.google.com/?q=Lakshmi+Vilas+Palace+Vadodara"
  },
  {
    id: 16,
    name: "Calico Museum of Textiles",
    state: "Ahmedabad, Gujarat",
    link: "https://www.calicomuseum.org/information-for-visitors/tour-booking",
    image: "https://tse3.mm.bing.net/th/id/OIP.isYAV_6e7GYdFLG03CIrOwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "One of India’s finest textile museums with rare fabrics and weaving tools.",
    map: "https://maps.google.com/?q=Calico+Museum+of+Textiles+Ahmedabad"
  },
  {
    id: 17,
    name: "Vechar Utensil Museum",
    state: "Ahmedabad, Gujarat",
    link: "local",
    image: "https://tse3.mm.bing.net/th/id/OIP.Nx0CaM3AnlsQoppM-uvjLQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "An open-air museum displaying traditional and historic kitchen utensils.",
    map: "https://maps.google.com/?q=Vechar+Utensil+Museum+Ahmedabad"
  },
  {
    id: 18,
    name: "Lakhota Museum",
    state: "Jamnagar, Gujarat", 
    link: "local",
    image: "https://www.gujaratpackage.com/wp-content/uploads/2019/07/Lakhota-Lake-Lakhota-Museum.jpg",
    description: "Located inside Lakhota Fort, showcasing artifacts of the princely state.",
    map: "https://maps.google.com/?q=Lakhota+Museum+Jamnagar"
  },
  {
    id: 19,
    name: "Kutch Museum",
    state: "Bhuj, Gujarat",
    link: "https://archaeologymuseum.gujarat.gov.in/Museum/kutch.html",
    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/kutch-museum/Kutch-Museum-Banner.jpg",
    description: "Gujarat’s oldest museum with tribal artifacts and regional history.",
    map: "https://maps.google.com/?q=Kutch+Museum+Bhuj"
  },
  {
    id: 20,
    name: "Watson Museum",
    state: "Rajkot, Gujarat",
    link: "local",
    image: "https://tse3.mm.bing.net/th/id/OIP.mBnidLy1o9tY5saikfBaLQHaCt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Houses colonial history collections, textiles, and local heritage exhibits.",
    map: "https://maps.google.com/?q=Watson+Museum+Rajkot"
  },
  {
    id: 21,
    name: "Baroda Museum and Picture Gallery",
    state: "Vadodara, Gujarat",
    link: "local",
    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/baroda-museum-and-picture-gallery/gallery/Baroda-Museum-And-Picture-Gallery-(7).jpg", 
    description: "Inspired by London’s Science Museum, it displays paintings and natural history.",
    map: "https://maps.google.com/?q=Baroda+Museum+Vadodara"
  },
  {
    id: 22,
    name: "Maharaja Fatehsingh Museum",
    state: "Vadodara, Gujarat",
    link: "local",
    image: "https://tse3.mm.bing.net/th/id/OIP.ykYPMRcPlDl0A0TW0lqOGQHaEC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    description: "Located inside the palace, featuring European and Indian artworks.",
    map: "https://maps.google.com/?q=Maharaja+Fatehsingh+Museum+Vadodara"
  },
  {
    id: 23,
    name: "Sri Krishna Museum",
    state: "Kurukshetra, Haryana",
    link: "local",
    image: "https://tse2.mm.bing.net/th/id/OIP.5k96ojSxNZnODnho6yGHOAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Dedicated to Lord Krishna, with artifacts and exhibits from the Mahabharata.",
    map: "https://maps.google.com/?q=Sri+Krishna+Museum+Kurukshetra"
  },
  {
    id: 24,
    name: "Panipat Museum",
    state: "Panipat, Haryana",
    link: "local", 
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/5a/3a/c5/panipat-museum-entrance.jpg?w=1200&h=-1&s=1",
    description: "Focuses on the three historic battles of Panipat with paintings and weapons.",
    map: "https://maps.google.com/?q=Panipat+Museum"
  },
  {
    id: 25,
    name: "State Museum",
    state: "Shimla, Himachal Pradesh",
    link: "local",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/shimla/mmt/activities/m_Shimla%20State%20Museum-1_l_360_640.jpg", 
    description: "Displays Himachal’s cultural heritage, archaeology, and miniature paintings.",
    map: "https://maps.google.com/?q=State+Museum+Shimla"
  },
  {
    id: 26,
    name: "Tibetan Museum",
    state: "Dharamshala, Himachal Pradesh",
    link: "local", 
    image: "https://tse4.mm.bing.net/th/id/OIP.P4-fCATSeo9XCcMnZL_c0QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Chronicles the Tibetan exile experience with photo exhibitions and stories.",
    map: "https://maps.google.com/?q=Tibetan+Museum+Dharamshala"
  },
  {
    id: 27,
    name: "State Museum Hotwar",
    state: "Ranchi, Jharkhand",
    link: "local", 
    image: "https://dynamic.tourtravelworld.com/hotspot-images/state-museum-hotwar-ranchi-5796.jpg",
    description: "Displays archaeological treasures and tribal culture from Jharkhand.",
    map: "https://maps.google.com/?q=State+Museum+Hotwar+Ranchi"
  },
  {
    id: 28,
    name: "Tribal Research Institute Museum",
    state: "Ranchi, Jharkhand",
    link: "free", 
    image: "https://superbcollections.com/wp-content/uploads/2023/09/1602597231_tribal-research-institute-and-museum-ranchi-gpo-ranchi-tourist-attraction-3nmwful.jpg",
    description: "Free-entry museum showcasing tribal life, musical instruments, and paintings.",
    map: "https://maps.google.com/?q=Tribal+Research+Institute+Museum+Ranchi"
  },
  {
    id: 29,
    name: "Government Museum",
    state: "Bengaluru, Karnataka",
    link: "local",
    image: "https://bangaloretourism.in/images/v2/headers/government-museum-bangalore-timings-entry-fee-bangalore-tourism-header-cr-skylinegtr.jpg",
    description: "One of the oldest museums in South India, known for geology and sculpture.",
    map: "https://maps.google.com/?q=Government+Museum+Bengaluru"
  },
  {
    id: 30,
    name: "Visvesvaraya Industrial and Technological Museum",
    state: "Bengaluru, Karnataka",
    link: "https://www.vismuseum.gov.in/ticket",
    image: "https://www.hoteldekho.com/storage/img/tourattraction/1645104045Visvesvaraya-Industrial-and-Technological-Museum.jpg",
    description: "Interactive science museum named after Sir M. Visvesvaraya.",
    map: "https://maps.google.com/?q=Visvesvaraya+Museum+Bengaluru"
  },
  {
    id: 31,
    name: "Indira Gandhi Musical Fountain and Museum",
    state: "Bengaluru, Karnataka",
    link: "local",
    image: "https://www.connectingtraveller.com/images/localtip/1674850342Indira-Gandhi-Musical-Fountain-Park.jpg",
    description: "Combines a musical fountain show with a small museum on Indian science.",
    map: "https://maps.google.com/?q=Indira+Gandhi+Musical+Fountain+Bengaluru"
  },
  {
    id: 32,
    name: "Karnataka Folk Museum",
    state: "Bengaluru, Karnataka",
    link: "local",
    image: "https://im.whatshot.in/img/2022/Sep/1493380206-karnataka-folk-museum-pic-source-wikimedia-1663063510.jpg",
    description: "Preserves folk art, dance costumes, and instruments of Karnataka.",
    map: "https://maps.google.com/?q=Karnataka+Folk+Museum+Bengaluru"
  },
  {
    id: 33,
    name: "Napier Museum",
    state: "Thiruvananthapuram, Kerala",
    link: "local",
    image: "https://www.dtpcthiruvananthapuram.com/uploads/picture_gallery/gallery_images/napier-musieum-20230517090726974613.webp",
    description: "Famous for Indo-Saracenic architecture and collections of bronze idols.",
    map: "https://maps.google.com/?q=Napier+Museum+Thiruvananthapuram"
  },
  {
    id: 34,
    name: "Hill Palace Museum",
    state: "Kochi, Kerala",
    link: "local",
    image: "https://tse2.mm.bing.net/th/id/OIP.lFZIJQVEvp6y9sDE86K6WQHaDP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Former royal residence with crown jewels, weapons, and murals.",
    map: "https://maps.google.com/?q=Hill+Palace+Museum+Kochi"
  },
  {
    id: 35,
    name: "Kerala Folklore Museum",
    state: "Kochi, Kerala",
    link: "https://kochifolkloreodeum.com/make-a-booking/",
    image: "https://tse1.mm.bing.net/th/id/OIP.CeZaTUmn6f0J2jIwTC33VwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Private museum showcasing antiques, sculptures, and folk art.",
    map: "https://maps.google.com/?q=Kerala+Folklore+Museum+Kochi"
  },
  {
    id: 36,
    name: "Indo-Portuguese Museum",
    state: "Fort Kochi, Kerala",
    link: "local",
    image: "https://i.pinimg.com/originals/d3/ed/9d/d3ed9d35a4e92ca142b9a7127ad9f85f.jpg",
    description: "Explores the Indo-Portuguese Christian art heritage of Kerala.",
    map: "https://maps.google.com/?q=Indo+Portuguese+Museum+Kochi"
  },
  {
    id: 37,
    name: "State Museum",
    state: "Bhopal, Madhya Pradesh",
    link: "https://www.mptourism.com/state-museum-bhopal.html",
    image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/29/ba4c916b8ec81c3163d177fa074cd1fe_1000x1000.jpg",
    description: "Archaeological artifacts and tribal arts housed in a modern structure.",
    map: "https://maps.google.com/?q=State+Museum+Bhopal"
  },
  {
    id: 38,
    name: "Tribal Museum",
    state: "Bhopal, Madhya Pradesh",
    link: "local",
    image: "https://tse2.mm.bing.net/th/id/OIP.GEqcp6RUU_PG4I6gXEwqjAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Visually immersive galleries on Madhya Pradesh’s tribal communities.",
    map: "https://maps.google.com/?q=Tribal+Museum+Bhopal"
  },
  {
    id: 39,
    name: "Manav Sangrahalaya (Museum of Mankind)",
    state: "Bhopal, Madhya Pradesh",
    link: "https://igrms.gov.in/en/visiting/e-ticketing",
    image: "https://www.joonsquare.com/usermanage/image/business/museum-of-mankind-manav-sangrahalaya-bhopal-58713/museum-of-mankind-manav-sangrahalaya-bhopal-museum-of-mankind-manav-sangrahalaya-04.jpg",
    description: "An open-air museum showcasing diverse human cultures across India.",
    map: "https://maps.google.com/?q=Manav+Sangrahalaya+Bhopal"
  },
  {
    id: 40,
    name: "Rani Durgavati Museum",
    state: "Jabalpur, Madhya Pradesh",
    link: "local",
    image: "https://tse4.mm.bing.net/th/id/OIP.g1jACvPLww5CXq55g1e_wQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Named after Rani Durgavati, displays local sculptures and paintings.",
    map: "https://maps.google.com/?q=Rani+Durgavati+Museum+Jabalpur"
  },
  {
    id: 41,
    name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    state: "Mumbai, Maharashtra",
    link: "https://maharajsangrahalay.mobirisesite.com",
    image: "https://as2.ftcdn.net/v2/jpg/02/17/68/51/1000_F_217685164_GOPj5Ucz1HSZHdd4koNzt1dqa8mK7FZD.jpg",
    description: "One of India’s premier museums featuring art, archaeology, and history.",
    map: "https://maps.google.com/?q=Chhatrapati+Shivaji+Maharaj+Vastu+Sangrahalaya+Mumbai"
  },
  {
    id: 42,
    name: "Dr. Bhau Daji Lad Museum",
    state: "Mumbai, Maharashtra",
    link: "local",
    image: "https://sothebys.brightspotcdn.com/b8/6b/e8faa303421cbc019aa89ee8b0a1/exterior-view-of-the-museum-dr.%20Bhau%20Daji%20Lad%20Mumbai%20City%20Museum.jpg",
    description: "Mumbai’s oldest museum with decorative arts, models, and photographs.",
    map: "https://maps.google.com/?q=Dr.+Bhau+Daji+Lad+Museum+Mumbai"
  },
  {
    id: 43,
    name: "Pune Raja Dinkar Kelkar Museum",
    state: "Pune, Maharashtra",
    link: "https://www.rajakelkarmuseum.org/museum-tickets-2",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1c/9e/d5/93/raja-dinkar-kelkar-museum.jpg",
    description: "Dedicated to Indian decorative arts collected by Dr. D.G. Kelkar.",
    map: "https://maps.google.com/?q=Raja+Dinkar+Kelkar+Museum+Pune"
  },
  {
    id: 44,
    name: "Shivaji Maharaj Museum of Indian History",
    state: "Pune, Maharashtra",
    link: "local",
    image: "https://image.shutterstock.com/image-photo/chhatrapati-shivaji-maharaj-vastu-sangrahalaya-600w-1808307988.jpg",
    description: "Highlights Indian warriors, dynasties, and unsung heroes.",
    map: "https://maps.google.com/?q=Shivaji+Maharaj+Museum+Pune"
  },
  {
    id: 45,
    name: "Nagpur Central Museum",
    state: "Nagpur, Maharashtra",
    link: "local",
    image: "https://tripxl.com/blog/wp-content/uploads/2025/01/Nagpur-Central-Museum-cp-1-840x425.jpg",
    description: "Popularly known as Ajab Bangla, displays historical and zoological artifacts.",
    map: "https://maps.google.com/?q=Central+Museum+Nagpur"
  },
  {
    id: 46,
    name: "Manipur State Museum",
    state: "Imphal, Manipur",
    link: "local",
    image: "https://live.staticflickr.com/65535/52338635208_2cf363a484_b.jpg",
    description: "Displays rare manuscripts, tribal ornaments, and weapons.",
    map: "https://maps.google.com/?q=Manipur+State+Museum+Imphal"
  },
  {
    id: 47,
    name: "Captain Williamson Sangma State Museum",
    state: "Shillong, Meghalaya",
    link: "local",
    image: "https://tse3.mm.bing.net/th/id/OIP.Mce5g49J1llHbReir2sB8gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Preserves tribal traditions and the lifestyle of Meghalaya.",
    map: "https://maps.google.com/?q=Williamson+Sangma+Museum+Shillong"
  },
  {
    id: 48,
    name: "Don Bosco Museum",
    state: "Shillong, Meghalaya",
    link: "local",
    image: "https://greatindianjourney.files.wordpress.com/2015/08/don-bosco-museum.jpg?w=500",
    description: "Seven-floor museum exhibiting North-East Indian cultures.",
    map: "https://maps.google.com/?q=Don+Bosco+Museum+Shillong"
  },
  {
    id: 49,
    name: "Mizoram State Museum",
    state: "Aizawl, Mizoram",
    link: "local",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/aizwal/mmt/activities/m_activities_aizawl_mizoram_state_museum_l_415_624.jpg",
    description: "Represents Mizo heritage with costumes, weapons, and musical instruments.",
    map: "https://maps.google.com/?q=Mizoram+State+Museum+Aizawl"
  },
  {
    id: 50,
    name: "Nagaland State Museum",
    state: "Kohima, Nagaland",
    link: "local",
    image: "https://tse1.mm.bing.net/th/id/OIP.BDDXZFbCgQP2FGWleRLH2AHaE5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Ethnographic museum with Naga tribal relics, jewelry, and attire.",
    map: "https://maps.google.com/?q=Nagaland+State+Museum+Kohima"
  },
   {
    id: 51,
    name: "Odisha State Museum",
    state: "Bhubaneswar, Odisha",
    link: "local",
    image: "https://tse4.mm.bing.net/th/id/OIP.QtPWeRcJ7lz95nIumuGSnAHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Displays regional epigraphy, coins, and palm-leaf manuscripts.",
    map: "https://maps.google.com/?q=Odisha+State+Museum+Bhubaneswar"
  },
  {
    id: 52,
    name: "Tribal Museum",
    state: "Bhubaneswar, Odisha",
    link: "local",
    image: "https://i0.wp.com/ebhubaneswar.com/wp-content/uploads/2022/05/m2.jpg?ssl=1",
    description: "Dedicated to Odisha’s tribes with costumes, tools, and music.",
    map: "https://maps.google.com/?q=Tribal+Museum+Bhubaneswar"
  },
  {
    id: 53,
    name: "Konark Archaeological Museum",
    state: "Konark, Odisha",
    link: "local",
    image: "https://www.trawell.in/admin/images/upload/403298249Konark_Museum_Main.jpg",
    description: "Houses sculptures excavated from the Sun Temple complex.",
    map: "https://maps.google.com/?q=Konark+Archaeological+Museum"
  },
  {
    id: 54,
    name: "Punjab State Museum",
    state: "Chandigarh, Punjab",
    link: "local",
    image: "https://anchorage42.com/wp-content/uploads/2023/02/Chandigarh-Museum.jpg",
    description: "Focuses on Punjab’s cultural past with paintings and crafts.",
    map: "https://maps.google.com/?q=Punjab+State+Museum+Chandigarh"
  },
  {
    id: 55,
    name: "Partition Museum",
    state: "Amritsar, Punjab",
    link: "https://www.partitionmuseum.org",
    image: "https://cdn.getyourguide.com/img/location/5d2aeca1e48f6-wide.jpeg/88.jpg",
    description: "First museum in the world dedicated to the Partition of India.",
    map: "https://maps.google.com/?q=Partition+Museum+Amritsar"
  },
  {
    id: 56,
    name: "Virast-e-Khalsa",
    state: "Anandpur Sahib, Punjab",
    link: "local",
    image: "https://th.bing.com/th/id/R.2e81285cc49ab5a715bfd376402030f4?rik=r13V6Hzcy9srJQ&riu=http%3a%2f%2fi1.wp.com%2fdesitraveler.com%2fwp-content%2fuploads%2f2016%2f01%2fVirasat-e-khalsa-9.jpg%3fw%3d1024&ehk=7wnlsO9c4yCTclklQsvPZG8wJIeV0S1zxsPOERcnuAc%3d&risl=&pid=ImgRaw&r=0",
    description: "Modern museum on Sikh heritage and Guru Gobind Singh’s legacy.",
    map: "https://maps.google.com/?q=Virast-e-Khalsa+Anandpur+Sahib"
  },
  {
    id: 57,
    name: "Albert Hall Museum",
    state: "Jaipur, Rajasthan",
    link: "local",
    image: "https://jaipurtourism.co.in/images/places-to-visit/header/albert-hall-museum-jaipur-entry-fee-timings-holidays-reviews-header.jpg",
    description: "Iconic Indo-Saracenic museum with arts, crafts, and weapons.",
    map: "https://maps.google.com/?q=Albert+Hall+Museum+Jaipur"
  },
  {
    id: 58,
    name: "City Palace Museum",
    state: "Jaipur & Udaipur, Rajasthan",
    link: "https://www.thecitypalacejaipur.com/ticket",
    image: "https://citypalacemuseum.org/img/about.jpg",
    description: "Grand museum inside City Palaces of Jaipur and Udaipur.",
    map: "https://maps.google.com/?q=City+Palace+Museum+Jaipur"
  },
  {
    id: 59,
    name: "Mehrangarh Fort Museum",
    state: "Jodhpur, Rajasthan",
    link: "https://www.mehrangarh.org/visit/mehrangarh-museum",
    image: "https://c8.alamy.com/comp/2CW483D/mehrangarh-fort-the-intricacies-in-architecture-2CW483D.jpg",
    description: "Famous for Rajput weaponry, textiles, and palanquins.",
    map: "https://maps.google.com/?q=Mehrangarh+Fort+Museum+Jodhpur"
  },
  {
    id: 60,
    name: "Junagarh Fort Museum",
    state: "Bikaner, Rajasthan",
    link: "local",
    image: "https://th.bing.com/th/id/R.e57ff7d4eceb2a4f8b8d3f28bdddca80?rik=V2okkNAXFCltRQ&riu=http%3a%2f%2fwww.go2india.in%2frajasthan%2fimages%2fb-junagarh-fort-inside.jpg&ehk=pALbydqflpYcRKMIA7sfQ7DIneEUXrsl0uoJf18WsdE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    description: "Features artifacts and weapons from the Bikaner royal era.",
    map: "https://maps.google.com/?q=Junagarh+Fort+Museum+Bikaner"
  },
  {
    id: 61,
    name: "Namgyal Institute of Tibetology",
    state: "Gangtok, Sikkim",
    link: "local",
    image: "https://1001things.org/wp-content/uploads/2021/09/Namgyal-Institute-of-Tibetology1.jpg",
    description: "Preserves Buddhist manuscripts, statues, and thangkas.",
    map: "https://maps.google.com/?q=Namgyal+Institute+of+Tibetology+Gangtok"
  },
  {
    id: 62,
    name: "Government Museum (Egmore)",
    state: "Chennai, Tamil Nadu",
    link: "https://chennaimuseum.web-trendz.com/online-booking",
    image: "https://th.bing.com/th/id/R.9bf2254fd98192e7df01228674b578b2?rik=6R6cmhrzkiTgEQ&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fD4XNHA%2fstate-government-museum-located-in-egmore-chennai-madras-india-tamil-D4XNHA.jpg&ehk=1%2bo7iqg4IpGjl6p72L%2fgIehL9tz6lUyd%2bKMDjszlHqU%3d&risl=&pid=ImgRaw&r=0",
    description: "Houses archaeological finds, bronze icons, and a children’s museum.",
    map: "https://maps.google.com/?q=Government+Museum+Egmore+Chennai"
  },
  {
    id: 63,
    name: "Fort Museum",
    state: "Chennai, Tamil Nadu",
    link: "local",
    image: "https://optimatravels.com/images/chennai-images/fort-st-george-museumchennai.jpg",
    description: "Located inside Fort St. George, showcasing colonial-era relics.",
    map: "https://maps.google.com/?q=Fort+Museum+Chennai"
  },
  {
    id: 64,
    name: "Regional Railway Museum",
    state: "Chennai, Tamil Nadu",
    link: "local",
    image: "https://www.treebo.com/blog/wp-content/uploads/2018/07/Regional-Railway-Museum-740x494.jpg",
    description: "Features vintage locomotives, coaches, and railway memorabilia.",
    map: "https://maps.google.com/?q=Regional+Railway+Museum+Chennai"
  },
  {
    id: 65,
    name: "Government Museum",
    state: "Pudukkottai, Tamil Nadu",
    link: "local",
    image: "https://tse1.mm.bing.net/th/id/OIP.CCP2VlX2p8Rvr6F9JBZiigHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Showcases prehistoric and Chola dynasty artifacts.",
    map: "https://maps.google.com/?q=Government+Museum+Pudukkottai"
  },
  {
    id: 66,
    name: "Salar Jung Museum",
    state: "Hyderabad, Telangana",
    link: "https://www.salarjungmuseum.in/Hours-and-admission.html",
    image: "https://tse4.mm.bing.net/th/id/OIP.XjjrHANEqj6tqTKyP19NqAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "World-renowned museum with rare art, manuscripts, and sculptures.",
    map: "https://maps.google.com/?q=Salar+Jung+Museum+Hyderabad"
  },
  {
    id: 67,
    name: "Telangana State Archaeology Museum",
    state: "Hyderabad, Telangana",
    link: "local",
    image: "https://nishnaiholidays.com/wp-content/uploads/2023/01/Telangana-State-Archaeology-Museum-Hyderabad.jpg",
    description: "Features Buddhist artifacts, coins, and sculptures from Telangana.",
    map: "https://maps.google.com/?q=Telangana+State+Archaeology+Museum+Hyderabad"
  },
  {
    id: 68,
    name: "Sudha Car Museum",
    state: "Hyderabad, Telangana",
    link: "local",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/e1/a7/1a/sudha-cars-museum.jpg",
    description: "A quirky museum with cars shaped like everyday objects.",
    map: "https://maps.google.com/?q=Sudha+Car+Museum+Hyderabad"
  },
  {
    id: 69,
    name: "Tripura State Museum",
    state: "Agartala, Tripura",
    link: "local",
    image: "https://i.pinimg.com/originals/b9/03/88/b9038858a72a72f60dc96b689ac936d9.jpg",
    description: "Features collections on Tripuri culture, tribal life, and archaeology.",
    map: "https://maps.google.com/?q=Tripura+State+Museum+Agartala"
  },
  {
    id: 70,
    name: "State Museum",
    state: "Lucknow, Uttar Pradesh",
    link: "local",
    image: "https://static.toiimg.com/photo/47958891/.jpg",
    description: "Houses archaeological treasures, coins, and miniature paintings.",
    map: "https://maps.google.com/?q=State+Museum+Lucknow"
  },
  {
    id: 71,
    name: "Sarnath Museum",
    state: "Varanasi, Uttar Pradesh",
    link: "https://asisarnathcircle.in/visitorinformation.php",
    image: "https://tse2.mm.bing.net/th/id/OIP.kxiyg9AXsY0wsSVZIGPCfQHaCx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Famous for the Lion Capital of Ashoka and Buddhist relics.",
    map: "https://maps.google.com/?q=Sarnath+Museum+Varanasi"
  },
  {
    id: 72,
    name: "Allahabad Museum",
    state: "Prayagraj, Uttar Pradesh",
    link: "local",
    image: "https://www.trawell.in/admin/images/upload/630209362Allahabad_Museum.jpg",
    description: "Rich in historical documents, sculptures, and artwork.",
    map: "https://maps.google.com/?q=Allahabad+Museum+Prayagraj"
  },
  {
    id: 73,
    name: "G.B. Pant Government Museum",
    state: "Almora, Uttarakhand",
    link: "local",
    image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/16/3347b676c5b7d129399f1fc749c102a3_1000x1000.jpg",
    description: "Showcases Kumaon’s folk culture, art, and archaeological finds.",
    map: "https://maps.google.com/?q=G.B.+Pant+Government+Museum+Almora"
  },
  {
    id: 74,
    name: "Forest Research Institute Museum",
    state: "Dehradun, Uttarakhand",
    link: "local",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/92/a1/d1/img-20180831-171655777.jpg?w=900&h=500&s=1",
    description: "Dedicated to forestry, wildlife, and environmental conservation.",
    map: "https://maps.google.com/?q=Forest+Research+Institute+Museum+Dehradun"
  },
  {
    id: 75,
    name: "Indian Museum",
    state: "Kolkata, West Bengal",
    link: "https://indianmuseumkolkata.org",
    image: "https://indianmuseumkolkata.org/im_cont/uploads/2022/04/banner2.jpg",
    description: "India’s oldest museum with Egyptian mummies, fossils, and ornaments.",
    map: "https://maps.google.com/?q=Indian+Museum+Kolkata"
  },
  {
    id: 76,
    name: "Birla Industrial & Technological Museum",
    state: "Kolkata, West Bengal",
    link: "local",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Birla_Industrial_%26_Technological_Museum%2C_Kolkata.jpg",
    description: "Interactive museum focusing on science and technology education.",
    map: "https://maps.google.com/?q=Birla+Industrial+Technological+Museum+Kolkata"
  },
  {
    id: 77,
    name: "Rabindra Bharati Museum",
    state: "Kolkata, West Bengal",
    link: "local",
    image: "https://shop.museumsofindia.org/sites/default/files/2017-11/RBU-2.jpg",
    description: "Located in Tagore’s house, displaying his life and works.",
    map: "https://maps.google.com/?q=Rabindra+Bharati+Museum+Kolkata"
  },
  {
    id: 78,
    name: "Victoria Memorial Hall",
    state: "Kolkata, West Bengal",
    link: "https://victoriamemorial-cal.org/coming-soon/?utm_source=chatgpt.com",
    image: "https://cdn.britannica.com/74/127174-050-4E634E93/Victoria-Memorial-Hall-Kolkata-India-West-Bengal.jpg",
    description: "Colonial-era memorial housing paintings, artifacts, and gardens.",
    map: "https://maps.google.com/?q=Victoria+Memorial+Hall+Kolkata"
  },
  {
    id: 79,
    name: "National Museum",
    state: "New Delhi, Delhi (UT)",
    link: "https://nationalmuseumindia.gov.in/en/online-ticket-booking?utm_source=chatgpt.com",
    image: "https://delhitourism.travel/images/places-to-visit/headers/national-museum-of-india-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    description: "Houses over 200,000 works from prehistoric to modern times.",
    map: "https://maps.google.com/?q=National+Museum+New+Delhi"
  },
  {
    id: 80,
    name: "National Gallery of Modern Art (NGMA)",
    state: "New Delhi, Delhi (UT)",
    link: "local",
    image: "https://www.delhitourism.com/images/attraction/attraction-details/70b7194ceb572c10e2c7f03aa68682a5.jpeg",
    description: "Modern Indian art from 1850s to contemporary works.",
    map: "https://maps.google.com/?q=NGMA+New+Delhi"
  },
  {
    id: 81,
    name: "National Rail Museum",
    state: "New Delhi, Delhi (UT)",
    link: "https://nrmindia.org",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigaUkQfVpumGpcaIyoye9zTlnpHjpN9gMQ9s4mfszeqKVix7co4-W8AlE9h9mBZUdukg&usqp=CAU",
    description: "Showcases Indian Railways history with locomotives and models.",
    map: "https://maps.google.com/?q=National+Rail+Museum+New+Delhi"
  },
  {
    id: 82,
    name: "Crafts Museum",
    state: "New Delhi, Delhi (UT)",
    link: "https://nationalcraftsmuseum.nic.in/plan-your-visit",
    image: "https://nationalcraftsmuseum.nic.in/uploads/locations/169390526769CDP.jpg",
    description: "Exhibits traditional Indian crafts, textiles, and village huts.",
    map: "https://maps.google.com/?q=Crafts+Museum+Delhi"
  },
  {
    id: 83,
    name: "Gandhi Museum",
    state: "Rajghat, Delhi (UT)",
    link: "local",
    image: "https://www.mkgandhi.org/images/ngm.jpg",
    description: "Dedicated to Mahatma Gandhi’s life, letters, and relics.",
    map: "https://maps.google.com/?q=Gandhi+Museum+Rajghat+Delhi"
  },
  {
    id: 84,
    name: "Puducherry Museum",
    state: "Puducherry (UT)",
    link: "local",
    image: "https://s3.eu-west-2.amazonaws.com/tripspell/EXPERIENCE/pondicherry-museum-pondicherry/description/0_high",
    description: "French colonial furniture, Roman artifacts, and sculpture displays.",
    map: "https://maps.google.com/?q=Puducherry+Museum"
  },
  {
    id: 85,
    name: "St. Thomas Church Museum",
    state: "Diu (UT)",
    link: "local",
    image: "https://avathioutdoors.gumlet.io/travelGuide/dev/diu_P8432.jpg",
    description: "Housed in a Gothic church, it showcases wooden carvings and religious art.",
    map: "https://maps.google.com/?q=St.+Thomas+Church+Museum+Diu"
  }
];


const getBadge = (link) => {
  if (link === "free") return { label: "Free", color: "bg-green-100 text-green-700" };
  if (link === "local") return { label: "Offline Booking", color: "bg-yellow-100 text-yellow-700" };
  if (link.startsWith("http")) return { label: "Online Booking", color: "bg-blue-100 text-blue-700" };
  return { label: "Unknown", color: "bg-gray-100 text-gray-700" };
};

const MuseumModal = ({ museum, onClose, onBook }) => {
  const googleMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${museum.name}, ${museum.state}`
  )}&output=embed`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-3xl relative overflow-y-auto max-h-[90vh] mt-10 sm:mt-10"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={museum.image || "https://via.placeholder.com/400x300?text=Museum+Image"}
            alt={museum.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-1">
              {museum.name}
            </h2>
            <p className="text-gray-700 mb-2">
              📍 <strong>State:</strong> {museum.state}
            </p>
            <p className="text-gray-700 mb-2">
              🕒 <strong>Opening Hours:</strong> 10:00 AM – 6:00 PM
            </p>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed tracking-wide">
              {museum.description}
            </p>
            <button
              onClick={() => onBook(museum.link, museum.name)}
              className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow-md shadow-indigo-300 transition font-medium"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            📍 Location on Map
          </h3>
          <div className="w-full h-64">
            <iframe
              src={googleMapUrl}
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


const MuseumPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedMuseum, setSelectedMuseum] = useState(null);

  const handleBookClick = (link, name) => {
    if (link === "local") {
      alert(`You can book the ticket for "${name}" by going there.`);
    } else if (link === "free") {
      alert(`The ticket for "${name}" is free. No booking required.`);
    } else if (link && link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      alert(`No booking information available for "${name}".`);
    }
  };

  const filteredMuseums = museumsData
    .filter((museum) => {
      const query = searchQuery.toLowerCase();
      return (
        museum.name.toLowerCase().includes(query) ||
        museum.state.toLowerCase().includes(query)
      );
    })
    .filter((museum) => {
      if (filterType === "all") return true;
      if (filterType === "free") return museum.link === "free";
      if (filterType === "local") return museum.link === "local";
      if (filterType === "online") return museum.link.startsWith("http");
      return false;
    });

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-100 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Discover the Best Museums</h1>
          <p className="text-lg opacity-90">
            Book online, go local, or enjoy free entries — all in one place!
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-10 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="🔍 Search Museum..."
            className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="all">All Types</option>
            <option value="free">Free</option>
            <option value="local">Offline Booking</option>
            <option value="online">Online Booking</option>
          </select>
        </div>

        <div className="grid max-w-6xl mx-auto px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {filteredMuseums.map((museum, index) => {
            const badge = getBadge(museum.link);
            return (
              <motion.div
                key={museum.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group flex flex-col border border-gray-200"
              >
                <img
                  src={museum.image || "https://via.placeholder.com/400x300?text=Museum+Image"}
                  alt={museum.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl font-bold text-blue-700 mb-1 group-hover:underline decoration-indigo-400">
                      {museum.name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Place:</span> {museum.state}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => handleBookClick(museum.link, museum.name)}
                      className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 hover:shadow-md shadow-indigo-200 transition text-sm font-medium"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => setSelectedMuseum(museum)}
                      className="flex-1 bg-gray-100 border text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition text-sm font-medium"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {filteredMuseums.length === 0 && (
            <p className="text-gray-500 col-span-full text-center mt-6">
              No museums found matching your criteria.
            </p>
          )}
        </div>

        <AnimatePresence>
          {selectedMuseum && (
            <MuseumModal
              museum={selectedMuseum}
              onClose={() => setSelectedMuseum(null)}
              onBook={handleBookClick}
            />
          )}
        </AnimatePresence>
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

export default MuseumPage;
