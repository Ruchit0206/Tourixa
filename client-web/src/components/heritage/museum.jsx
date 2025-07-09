import React, { useState } from "react";

const museumsData = [
    {
        "id": 1,
        "name": "Visakha Museum",
        "state": "Visakhapatnam, Andhra Pradesh",
        "link": "local",
        "image": "",
        "description": "A maritime museum displaying artifacts of the region’s naval history.",
        "map": "https://maps.google.com/?q=Visakha+Museum+Visakhapatnam"
    },
    {
        "id": 2,
        "name": "Victoria Jubilee Museum",
        "state": "Vijayawada, Andhra Pradesh",
        "link": "local",
        "image": "",
        "description": "Also known as Bapu Museum, it showcases ancient sculptures and historical relics.",
        "map": "https://maps.google.com/?q=Victoria+Jubilee+Museum+Vijayawada"
    },
    {
        "id": 3,
        "name": "Tribal Museum",
        "state": "Araku Valley, Andhra Pradesh",
        "link": "local",
        "image": "",
        "description": "Dedicated to the tribal cultures of Andhra Pradesh, with traditional artifacts and huts.",
        "map": "https://maps.google.com/?q=Tribal+Museum+Araku+Valley"
    },
    {
        "id": 4,
        "name": "Jawaharlal Nehru State Museum",
        "state": "Itanagar, Arunachal Pradesh",
        "link": "local",
        "image": "",
        "description": "Cultural and archaeological collections of Arunachal Pradesh.",
        "map": "https://maps.google.com/?q=Jawaharlal+Nehru+State+Museum+Itanagar"
    },
    {
        "id": 5,
        "name": "Assam State Museum",
        "state": "Guwahati, Assam",
        "link": "http://axomuseum.in",
        "image": "",
        "description": "Features sculptures, epigraphy, and ethnographic displays from Assam’s history.",
        "map": "https://maps.google.com/?q=Assam+State+Museum+Guwahati"
    },
    {
        "id": 6,
        "name": "Srimanta Sankaradeva Kalakshetra Museum",
        "state": "Guwahati, Assam",
        "link": "https://kalakshetraonline.in",
        "image": "",
        "description": "A cultural institution preserving the legacy of Srimanta Sankardeva through art and exhibits.",
        "map": "https://maps.google.com/?q=Srimanta+Sankaradeva+Kalakshetra+Museum+Guwahati"
    },
    {
        "id": 7,
        "name": "Bihar Museum",
        "state": "Patna, Bihar",
        "link": "https://www.biharmuseum.org",
        "image": "",
        "description": "A modern museum showcasing the rich heritage and ancient history of Bihar.",
        "map": "https://maps.google.com/?q=Bihar+Museum+Patna"
    },
    {
        "id": 8,
        "name": "Patna Museum",
        "state": "Patna, Bihar",
        "link": "https://www.biharmuseum.org",
        "image": "",
        "description": "A colonial-era museum featuring historical artifacts from the Mauryan to British periods.",
        "map": "https://maps.google.com/?q=Patna+Museum"
    },
    {
        "id": 9,
        "name": "Vaishali Museum",
        "state": "Vaishali, Bihar",
        "link": "https://asivaishalimuseum.com",
        "image": "",
        "description": "Contains historical artifacts from the time of Lord Buddha and ancient Vaishali.",
        "map": "https://maps.google.com/?q=Vaishali+Museum"
    },
    {
        "id": 10,
        "name": "Nalanda Archaeological Museum",
        "state": "Nalanda, Bihar",
        "link": "local",
        "image": "",
        "description": "Houses artifacts and sculptures from the Nalanda Mahavihara ruins and nearby excavations.",
        "map": "https://maps.google.com/?q=Nalanda+Archaeological+Museum"
    },
  // Continue this with previous array
 {
  id: 11,
  name: 'Mahant Ghasidas Memorial Museum',
  state: 'Raipur, Chhattisgarh',
  link: 'http://www.cgculture.in',
  image: '',
  description: 'Exhibits archaeological and anthropological artifacts from central India.',
  map: 'https://maps.google.com/?q=Mahant+Ghasidas+Museum+Raipur'
},
{
  id: 12,
  name: 'Purkhouti Muktangan',
  state: 'Naya Raipur, Chhattisgarh',
  link: 'http://www.cgculture.in',
  image: '',
  description: 'An open-air museum showcasing tribal culture and rural traditions.',
  map: 'https://maps.google.com/?q=Purkhouti+Muktangan+Naya+Raipur'
},
{
  id: 13,
  name: 'Goa State Museum',
  state: 'Panaji, Goa',
  link: 'https://goamuseum.gov.in',
  image: '',
  description: 'Covers Goa’s art, culture, and history with various thematic galleries.',
  map: 'https://maps.google.com/?q=Goa+State+Museum+Panaji'
},
{
  id: 14,
  name: 'Naval Aviation Museum',
  state: 'Vasco da Gama, Goa',
  link: 'https://goa-tourism.org.in/',
  image: '',
  description: 'India’s only Naval Aviation museum featuring aircraft and naval equipment.',
  map: 'https://maps.google.com/?q=Naval+Aviation+Museum+Goa'
},
{
  id: 15,
  name: 'Lakshi Vilas Palace',
  state: 'Vadodara, Gujarat',
  link: 'https://lvpbooking.gaekwarenterprise.com/homepage',
  image: '',
  description: 'A grand royal residence with an art gallery and museum section.',
  map: 'https://maps.google.com/?q=Lakshmi+Vilas+Palace+Vadodara'
},
{
  id: 16,
  name: 'Calico Museum of Textiles',
  state: 'Ahmedabad, Gujarat',
  link: 'https://www.calicomuseum.org/information-for-visitors/tour-booking',
  image: '',
  description: 'One of India’s finest textile museums with rare fabrics and weaving tools.',
  map: 'https://maps.google.com/?q=Calico+Museum+of+Textiles+Ahmedabad'
},
{
  id: 17,
  name: 'Vechar Utensil Museum',
  state: 'Ahmedabad, Gujarat',
  link: 'local',
  image: '',
  description: 'An open-air museum displaying traditional and historic kitchen utensils.',
  map: 'https://maps.google.com/?q=Vechar+Utensil+Museum+Ahmedabad'
},
{
  id: 18,
  name: 'Lakhota Museum',
  state: 'Jamnagar, Gujarat',
  link: 'local',
  image: '',
  description: 'Located inside Lakhota Fort, showcasing artifacts of the princely state.',
  map: 'https://maps.google.com/?q=Lakhota+Museum+Jamnagar'
},
{
  id: 19,
  name: 'Kutch Museum',
  state: 'Bhuj, Gujarat',
  link: 'https://archaeologymuseum.gujarat.gov.in/Museum/kutch.html',
  image: '',
  description: 'Gujarat’s oldest museum with tribal artifacts and regional history.',
  map: 'https://maps.google.com/?q=Kutch+Museum+Bhuj'
},
{
  id: 20,
  name: 'Watson Museum',
  state: 'Rajkot, Gujarat',
  link: 'local',
  image: '',
  description: 'Houses colonial history collections, textiles, and local heritage exhibits.',
  map: 'https://maps.google.com/?q=Watson+Museum+Rajkot'
},

 {
  id: 21,
  name: 'Baroda Museum and Picture Gallery',
  state: 'Vadodara, Gujarat',
  link: 'local',
  image: '',
  description: 'Inspired by London’s Science Museum, it displays paintings and natural history.',
  map: 'https://maps.google.com/?q=Baroda+Museum+Vadodara'
},
{
  id: 22,
  name: 'Maharaja Fatehsingh Museum',
  state: 'Vadodara, Gujarat',
  link: 'local',
  image: '',
  description: 'Located inside the palace, featuring European and Indian artworks.',
  map: 'https://maps.google.com/?q=Maharaja+Fatehsingh+Museum+Vadodara'
},
{
  id: 23,
  name: 'Sri Krishna Museum',
  state: 'Kurukshetra, Haryana',
  link: 'local',
  image: '',
  description: 'Dedicated to Lord Krishna, with artifacts and exhibits from the Mahabharata.',
  map: 'https://maps.google.com/?q=Sri+Krishna+Museum+Kurukshetra'
},
{
  id: 24,
  name: 'Panipat Museum',
  state: 'Panipat, Haryana',
  link: 'local',
  image: '',
  description: 'Focuses on the three historic battles of Panipat with paintings and weapons.',
  map: 'https://maps.google.com/?q=Panipat+Museum'
},
{
  id: 25,
  name: 'State Museum',
  state: 'Shimla, Himachal Pradesh',
  link: 'local',
  image: '',
  description: 'Displays Himachal’s cultural heritage, archaeology, and miniature paintings.',
  map: 'https://maps.google.com/?q=State+Museum+Shimla'
},
{
  id: 26,
  name: 'Tibetan Museum',
  state: 'Dharamshala, Himachal Pradesh',
  link: 'local',
  image: '',
  description: 'Chronicles the Tibetan exile experience with photo exhibitions and stories.',
  map: 'https://maps.google.com/?q=Tibetan+Museum+Dharamshala'
},
{
  id: 27,
  name: 'State Museum Hotwar',
  state: 'Ranchi, Jharkhand',
  link: 'local',
  image: '',
  description: 'Displays archaeological treasures and tribal culture from Jharkhand.',
  map: 'https://maps.google.com/?q=State+Museum+Hotwar+Ranchi'
},
{
  id: 28,
  name: 'Tribal Research Institute Museum',
  state: 'Ranchi, Jharkhand',
  link: 'free',
  image: '',
  description: 'Free-entry museum showcasing tribal life, musical instruments, and paintings.',
  map: 'https://maps.google.com/?q=Tribal+Research+Institute+Museum+Ranchi'
},
{
  id: 29,
  name: 'Government Museum',
  state: 'Bengaluru, Karnataka',
  link: 'local',
  image: '',
  description: 'One of the oldest museums in South India, known for geology and sculpture.',
  map: 'https://maps.google.com/?q=Government+Museum+Bengaluru'
},
{
  id: 30,
  name: 'Visvesvaraya Industrial and Technological Museum',
  state: 'Bengaluru, Karnataka',
  link: 'https://www.vismuseum.gov.in/ticket',
  image: '',
  description: 'Interactive science museum named after Sir M. Visvesvaraya.',
  map: 'https://maps.google.com/?q=Visvesvaraya+Museum+Bengaluru'
},

 {
  id: 31,
  name: 'Indira Gandhi Musical Fountain and Museum',
  state: 'Bengaluru, Karnataka',
  link: 'local',
  image: '',
  description: 'Combines a musical fountain show with a small museum on Indian science.',
  map: 'https://maps.google.com/?q=Indira+Gandhi+Musical+Fountain+Bengaluru'
},
{
  id: 32,
  name: 'Karnataka Folk Museum',
  state: 'Bengaluru, Karnataka',
  link: 'local',
  image: '',
  description: 'Preserves folk art, dance costumes, and instruments of Karnataka.',
  map: 'https://maps.google.com/?q=Karnataka+Folk+Museum+Bengaluru'
},
{
  id: 33,
  name: 'Napier Museum',
  state: 'Thiruvananthapuram, Kerala',
  link: 'local',
  image: '',
  description: 'Famous for Indo-Saracenic architecture and collections of bronze idols.',
  map: 'https://maps.google.com/?q=Napier+Museum+Thiruvananthapuram'
},
{
  id: 34,
  name: 'Hill Palace Museum',
  state: 'Kochi, Kerala',
  link: 'local',
  image: '',
  description: 'Former royal residence with crown jewels, weapons, and murals.',
  map: 'https://maps.google.com/?q=Hill+Palace+Museum+Kochi'
},
{
  id: 35,
  name: 'Kerala Folklore Museum',
  state: 'Kochi, Kerala',
  link: 'https://kochifolkloreodeum.com/make-a-booking/',
  image: '',
  description: 'Private museum showcasing antiques, sculptures, and folk art.',
  map: 'https://maps.google.com/?q=Kerala+Folklore+Museum+Kochi'
},
{
  id: 36,
  name: 'Indo-Portuguese Museum',
  state: 'Fort Kochi, Kerala',
  link: 'local',
  image: '',
  description: 'Explores the Indo-Portuguese Christian art heritage of Kerala.',
  map: 'https://maps.google.com/?q=Indo+Portuguese+Museum+Kochi'
},
{
  id: 37,
  name: 'State Museum',
  state: 'Bhopal, Madhya Pradesh',
  link: 'https://www.mptourism.com/state-museum-bhopal.html',
  image: '',
  description: 'Archaeological artifacts and tribal arts housed in a modern structure.',
  map: 'https://maps.google.com/?q=State+Museum+Bhopal'
},
{
  id: 38,
  name: 'Tribal Museum',
  state: 'Bhopal, Madhya Pradesh',
  link: 'local',
  image: '',
  description: 'Visually immersive galleries on Madhya Pradesh’s tribal communities.',
  map: 'https://maps.google.com/?q=Tribal+Museum+Bhopal'
},
{
  id: 39,
  name: 'Manav Sangrahalaya (Museum of Mankind)',
  state: 'Bhopal, Madhya Pradesh',
  link: 'https://igrms.gov.in/en/visiting/e-ticketing',
  image: '',
  description: 'An open-air museum showcasing diverse human cultures across India.',
  map: 'https://maps.google.com/?q=Manav+Sangrahalaya+Bhopal'
},
{
  id: 40,
  name: 'Rani Durgavati Museum',
  state: 'Jabalpur, Madhya Pradesh',
  link: 'local',
  image: '',
  description: 'Named after Rani Durgavati, displays local sculptures and paintings.',
  map: 'https://maps.google.com/?q=Rani+Durgavati+Museum+Jabalpur'
},

 {
  id: 41,
  name: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya',
  state: 'Mumbai, Maharashtra',
  link: 'https://maharajsangrahalay.mobirisesite.com',
  image: '',
  description: 'One of India’s premier museums featuring art, archaeology, and history.',
  map: 'https://maps.google.com/?q=Chhatrapati+Shivaji+Maharaj+Vastu+Sangrahalaya+Mumbai'
},
{
  id: 42,
  name: 'Dr. Bhau Daji Lad Museum',
  state: 'Mumbai, Maharashtra',
  link: 'local',
  image: '',
  description: 'Mumbai’s oldest museum with decorative arts, models, and photographs.',
  map: 'https://maps.google.com/?q=Dr.+Bhau+Daji+Lad+Museum+Mumbai'
},
{
  id: 43,
  name: 'Pune Raja Dinkar Kelkar Museum',
  state: 'Pune, Maharashtra',
  link: 'https://www.rajakelkarmuseum.org/museum-tickets-2',
  image: '',
  description: 'Dedicated to Indian decorative arts collected by Dr. D.G. Kelkar.',
  map: 'https://maps.google.com/?q=Raja+Dinkar+Kelkar+Museum+Pune'
},
{
  id: 44,
  name: 'Shivaji Maharaj Museum of Indian History',
  state: 'Pune, Maharashtra',
  link: 'local',
  image: '',
  description: 'Highlights Indian warriors, dynasties, and unsung heroes.',
  map: 'https://maps.google.com/?q=Shivaji+Maharaj+Museum+Pune'
},
{
  id: 45,
  name: 'Nagpur Central Museum',
  state: 'Nagpur, Maharashtra',
  link: 'local',
  image: '',
  description: 'Popularly known as Ajab Bangla, displays historical and zoological artifacts.',
  map: 'https://maps.google.com/?q=Central+Museum+Nagpur'
},
{
  id: 46,
  name: 'Manipur State Museum',
  state: 'Imphal, Manipur',
  link: 'local',
  image: '',
  description: 'Displays rare manuscripts, tribal ornaments, and weapons.',
  map: 'https://maps.google.com/?q=Manipur+State+Museum+Imphal'
},
{
  id: 47,
  name: 'Captain Williamson Sangma State Museum',
  state: 'Shillong, Meghalaya',
  link: 'local',
  image: '',
  description: 'Preserves tribal traditions and the lifestyle of Meghalaya.',
  map: 'https://maps.google.com/?q=Williamson+Sangma+Museum+Shillong'
},
{
  id: 48,
  name: 'Don Bosco Museum',
  state: 'Shillong, Meghalaya',
  link: 'local',
  image: '',
  description: 'Seven-floor museum exhibiting North-East Indian cultures.',
  map: 'https://maps.google.com/?q=Don+Bosco+Museum+Shillong'
},
{
  id: 49,
  name: 'Mizoram State Museum',
  state: 'Aizawl, Mizoram',
  link: 'local',
  image: '',
  description: 'Represents Mizo heritage with costumes, weapons, and musical instruments.',
  map: 'https://maps.google.com/?q=Mizoram+State+Museum+Aizawl'
},
{
  id: 50,
  name: 'Nagaland State Museum',
  state: 'Kohima, Nagaland',
  link: 'local',
  image: '',
  description: 'Ethnographic museum with Naga tribal relics, jewelry, and attire.',
  map: 'https://maps.google.com/?q=Nagaland+State+Museum+Kohima'
},
{
  id: 51,
  name: 'Odisha State Museum',
  state: 'Bhubaneswar, Odisha',
  link: 'local',
  image: '',
  description: 'Displays regional epigraphy, coins, and palm-leaf manuscripts.',
  map: 'https://maps.google.com/?q=Odisha+State+Museum+Bhubaneswar'
},
{
  id: 52,
  name: 'Tribal Museum',
  state: 'Bhubaneswar, Odisha',
  link: 'local',
  image: '',
  description: 'Dedicated to Odisha’s tribes with costumes, tools, and music.',
  map: 'https://maps.google.com/?q=Tribal+Museum+Bhubaneswar'
},
{
  id: 53,
  name: 'Konark Archaeological Museum',
  state: 'Konark, Odisha',
  link: 'local',
  image: '',
  description: 'Houses sculptures excavated from the Sun Temple complex.',
  map: 'https://maps.google.com/?q=Konark+Archaeological+Museum'
},
{
  id: 54,
  name: 'Punjab State Museum',
  state: 'Chandigarh, Punjab',
  link: 'local',
  image: '',
  description: 'Focuses on Punjab’s cultural past with paintings and crafts.',
  map: 'https://maps.google.com/?q=Punjab+State+Museum+Chandigarh'
},
{
  id: 55,
  name: 'Partition Museum',
  state: 'Amritsar, Punjab',
  link: 'https://www.partitionmuseum.org',
  image: '',
  description: 'First museum in the world dedicated to the Partition of India.',
  map: 'https://maps.google.com/?q=Partition+Museum+Amritsar'
},
{
  id: 56,
  name: 'Virast-e-Khalsa',
  state: 'Anandpur Sahib, Punjab',
  link: 'local',
  image: '',
  description: 'Modern museum on Sikh heritage and Guru Gobind Singh’s legacy.',
  map: 'https://maps.google.com/?q=Virast-e-Khalsa+Anandpur+Sahib'
},
{
  id: 57,
  name: 'Albert Hall Museum',
  state: 'Jaipur, Rajasthan',
  link: 'local',
  image: '',
  description: 'Iconic Indo-Saracenic museum with arts, crafts, and weapons.',
  map: 'https://maps.google.com/?q=Albert+Hall+Museum+Jaipur'
},
{
  id: 58,
  name: 'City Palace Museum',
  state: 'Jaipur & Udaipur, Rajasthan',
  link: 'https://www.thecitypalacejaipur.com/ticket',
  image: '',
  description: 'Grand museum inside City Palaces of Jaipur and Udaipur.',
  map: 'https://maps.google.com/?q=City+Palace+Museum+Jaipur'
},
{
  id: 59,
  name: 'Mehrangarh Fort Museum',
  state: 'Jodhpur, Rajasthan',
  link: 'https://www.mehrangarh.org/visit/mehrangarh-museum',
  image: '',
  description: 'Famous for Rajput weaponry, textiles, and palanquins.',
  map: 'https://maps.google.com/?q=Mehrangarh+Fort+Museum+Jodhpur'
},
{
  id: 60,
  name: 'Junagarh Fort Museum',
  state: 'Bikaner, Rajasthan',
  link: 'local',
  image: '',
  description: 'Features artifacts and weapons from the Bikaner royal era.',
  map: 'https://maps.google.com/?q=Junagarh+Fort+Museum+Bikaner'
},
{
  id: 61,
  name: 'Namgyal Institute of Tibetology',
  state: 'Gangtok, Sikkim',
  link: 'local',
  image: '',
  description: 'Preserves Buddhist manuscripts, statues, and thangkas.',
  map: 'https://maps.google.com/?q=Namgyal+Institute+of+Tibetology+Gangtok'
},
{
  id: 62,
  name: 'Government Museum (Egmore)',
  state: 'Chennai, Tamil Nadu',
  link: 'https://chennaimuseum.web-trendz.com/online-booking',
  image: '',
  description: 'Houses archaeological finds, bronze icons, and a children’s museum.',
  map: 'https://maps.google.com/?q=Government+Museum+Egmore+Chennai'
},

 {
  id: 63,
  name: 'Fort Museum',
  state: 'Chennai, Tamil Nadu',
  link: 'local',
  image: '',
  description: 'Located inside Fort St. George, showcasing colonial-era relics.',
  map: 'https://maps.google.com/?q=Fort+Museum+Chennai'
},
{
  id: 64,
  name: 'Regional Railway Museum',
  state: 'Chennai, Tamil Nadu',
  link: 'local',
  image: '',
  description: 'Features vintage locomotives, coaches, and railway memorabilia.',
  map: 'https://maps.google.com/?q=Regional+Railway+Museum+Chennai'
},
{
  id: 65,
  name: 'Government Museum',
  state: 'Pudukkottai, Tamil Nadu',
  link: 'local',
  image: '',
  description: 'Showcases prehistoric and Chola dynasty artifacts.',
  map: 'https://maps.google.com/?q=Government+Museum+Pudukkottai'
},
{
  id: 66,
  name: 'Salar Jung Museum',
  state: 'Hyderabad, Telangana',
  link: 'https://www.salarjungmuseum.in/Hours-and-admission.html',
  image: '',
  description: 'World-renowned museum with rare art, manuscripts, and sculptures.',
  map: 'https://maps.google.com/?q=Salar+Jung+Museum+Hyderabad'
},
{
  id: 67,
  name: 'Telangana State Archaeology Museum',
  state: 'Hyderabad, Telangana',
  link: 'local',
  image: '',
  description: 'Features Buddhist artifacts, coins, and sculptures from Telangana.',
  map: 'https://maps.google.com/?q=Telangana+State+Archaeology+Museum+Hyderabad'
},
{
  id: 68,
  name: 'Sudha Car Museum',
  state: 'Hyderabad, Telangana',
  link: 'local',
  image: '',
  description: 'A quirky museum with cars shaped like everyday objects.',
  map: 'https://maps.google.com/?q=Sudha+Car+Museum+Hyderabad'
},
{
  id: 69,
  name: 'Tripura State Museum',
  state: 'Agartala, Tripura',
  link: 'local',
  image: '',
  description: 'Features collections on Tripuri culture, tribal life, and archaeology.',
  map: 'https://maps.google.com/?q=Tripura+State+Museum+Agartala'
},
{
  id: 70,
  name: 'State Museum',
  state: 'Lucknow, Uttar Pradesh',
  link: 'local',
  image: '',
  description: 'Houses archaeological treasures, coins, and miniature paintings.',
  map: 'https://maps.google.com/?q=State+Museum+Lucknow'
},
{
  id: 71,
  name: 'Sarnath Museum',
  state: 'Varanasi, Uttar Pradesh',
  link: 'https://asisarnathcircle.in/visitorinformation.php',
  image: '',
  description: 'Famous for the Lion Capital of Ashoka and Buddhist relics.',
  map: 'https://maps.google.com/?q=Sarnath+Museum+Varanasi'
},
{
  id: 72,
  name: 'Allahabad Museum',
  state: 'Prayagraj, Uttar Pradesh',
  link: 'local',
  image: '',
  description: 'Rich in historical documents, sculptures, and artwork.',
  map: 'https://maps.google.com/?q=Allahabad+Museum+Prayagraj'
},
{
  id: 73,
  name: 'G.B. Pant Government Museum',
  state: 'Almora, Uttarakhand',
  link: 'local',
  image: '',
  description: 'Showcases Kumaon’s folk culture, art, and archaeological finds.',
  map: 'https://maps.google.com/?q=G.B.+Pant+Government+Museum+Almora'
},
{
  id: 74,
  name: 'Forest Research Institute Museum',
  state: 'Dehradun, Uttarakhand',
  link: 'local',
  image: '',
  description: 'Dedicated to forestry, wildlife, and environmental conservation.',
  map: 'https://maps.google.com/?q=Forest+Research+Institute+Museum+Dehradun'
},
{
  id: 75,
  name: 'Indian Museum',
  state: 'Kolkata, West Bengal',
  link: 'https://indianmuseumkolkata.org',
  image: '',
  description: 'India’s oldest museum with Egyptian mummies, fossils, and ornaments.',
  map: 'https://maps.google.com/?q=Indian+Museum+Kolkata'
},
{
  id: 76,
  name: 'Birla Industrial & Technological Museum',
  state: 'Kolkata, West Bengal',
  link: 'local',
  image: '',
  description: 'Interactive museum focusing on science and technology education.',
  map: 'https://maps.google.com/?q=Birla+Industrial+Technological+Museum+Kolkata'
},
{
  id: 77,
  name: 'Rabindra Bharati Museum',
  state: 'Kolkata, West Bengal',
  link: 'local',
  image: '',
  description: 'Located in Tagore’s house, displaying his life and works.',
  map: 'https://maps.google.com/?q=Rabindra+Bharati+Museum+Kolkata'
},
{
  id: 78,
  name: 'Victoria Memorial Hall',
  state: 'Kolkata, West Bengal',
  link: 'https://victoriamemorial-cal.org/coming-soon/?utm_source=chatgpt.com',
  image: '',
  description: 'Colonial-era memorial housing paintings, artifacts, and gardens.',
  map: 'https://maps.google.com/?q=Victoria+Memorial+Hall+Kolkata'
},
{
  id: 79,
  name: 'National Museum',
  state: 'New Delhi, Delhi (UT)',
  link: 'https://nationalmuseumindia.gov.in/en/online-ticket-booking?utm_source=chatgpt.com',
  image: '',
  description: 'Houses over 200,000 works from prehistoric to modern times.',
  map: 'https://maps.google.com/?q=National+Museum+New+Delhi'
},
{
  id: 80,
  name: 'National Gallery of Modern Art (NGMA)',
  state: 'New Delhi, Delhi (UT)',
  link: 'local',
  image: '',
  description: 'Modern Indian art from 1850s to contemporary works.',
  map: 'https://maps.google.com/?q=NGMA+New+Delhi'
},
{
  id: 81,
  name: 'National Rail Museum',
  state: 'New Delhi, Delhi (UT)',
  link: 'https://nrmindia.org',
  image: '',
  description: 'Showcases Indian Railways history with locomotives and models.',
  map: 'https://maps.google.com/?q=National+Rail+Museum+New+Delhi'
},
{
  id: 82,
  name: 'Crafts Museum',
  state: 'New Delhi, Delhi (UT)',
  link: 'https://nationalcraftsmuseum.nic.in/plan-your-visit',
  image: '',
  description: 'Exhibits traditional Indian crafts, textiles, and village huts.',
  map: 'https://maps.google.com/?q=Crafts+Museum+Delhi'
},
{
  id: 83,
  name: 'Gandhi Museum',
  state: 'Rajghat, Delhi (UT)',
  link: 'local',
  image: '',
  description: 'Dedicated to Mahatma Gandhi’s life, letters, and relics.',
  map: 'https://maps.google.com/?q=Gandhi+Museum+Rajghat+Delhi'
},
{
  id: 84,
  name: 'Puducherry Museum',
  state: 'Puducherry (UT)',
  link: 'local',
  image: '',
  description: 'French colonial furniture, Roman artifacts, and sculpture displays.',
  map: 'https://maps.google.com/?q=Puducherry+Museum'
},
{
  id: 85,
  name: 'St. Thomas Church Museum',
  state: 'Diu (UT)',
  link: 'local',
  image: '',
  description: 'Housed in a Gothic church, it showcases wooden carvings and religious art.',
  map: 'https://maps.google.com/?q=St.+Thomas+Church+Museum+Diu'
},

];

const getBadge = (link) => {
  if (link === "free")
    return { label: "Free", color: "bg-green-100 text-green-700" };
  if (link === "local")
    return { label: "Offline Booking", color: "bg-yellow-100 text-yellow-700" };
  if (link.startsWith("http"))
    return { label: "Online Booking", color: "bg-blue-100 text-blue-700" };
  return { label: "Unknown", color: "bg-gray-100 text-gray-700" };
};

const MuseumModal = ({ museum, onClose, onBook }) => {
  const googleMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${museum.name}, ${museum.state}`
  )}&output=embed`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-3xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Modal Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Image */}
          <img
            src={museum.image}
            alt={museum.name}
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* Right: Details */}
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

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              {museum.description}
            </p>

            <button
              onClick={() => onBook(museum.link, museum.name)}
              className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition font-medium"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Google Map */}
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
      </div>
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

  const filterByType = (museum) => {
    if (filterType === "all") return true;
    if (filterType === "free") return museum.link === "free";
    if (filterType === "local") return museum.link === "local";
    if (filterType === "online") return museum.link.startsWith("http");
    return false;
  };

  const filteredMuseums = museumsData
    .filter((museum) =>
      museum.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(filterByType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Discover the Best Museums</h1>
        <p className="text-lg opacity-90">
          Book online, go local, or enjoy free entries — all in one place!
        </p>
      </div>

      {/* Search & Filter */}
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

      {/* Museum Cards */}
    <div className="grid max-w-6xl mx-auto px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
  {filteredMuseums.map((museum) => {
    const badge = getBadge(museum.link);
    return (
      <div
        key={museum.id}
        className="bg-white rounded-2xl shadow-xl overflow-hidden border hover:shadow-2xl transition-all duration-300 group flex flex-col"
      >
        <img
          src={museum.image}
          alt={museum.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Card Content with full height */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-1">
              {museum.name}
            </h2>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">State:</span> {museum.state}
            </p>
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${badge.color}`}
            >
              {badge.label}
            </span>
          </div>

          {/* Buttons always at the bottom */}
          <div className="flex gap-2 mt-auto">
            <button
              onClick={() => handleBookClick(museum.link, museum.name)}
              className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition text-sm font-medium"
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
      </div>
    );
  })}

  {filteredMuseums.length === 0 && (
    <p className="text-gray-500 col-span-full text-center mt-6">
      No museums found matching your criteria.
    </p>
  )}
</div>


      {/* Modal */}
      {selectedMuseum && (
        <MuseumModal
          museum={selectedMuseum}
          onClose={() => setSelectedMuseum(null)}
          onBook={handleBookClick}
        />
      )}

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 text-center">
        <p className="text-sm">© 2025 Tourixa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MuseumPage;
