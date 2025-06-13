import React, { useState, useEffect } from 'react';
import { ExternalLink, Play, X, Instagram, Youtube, Briefcase } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'direction', name: 'Direction' },
    { id: 'typography', name: 'Lyrical Typography' },
    { id: 'ai-videos', name: 'AI Videos' },
    { id: 'concerts', name: 'Concert Visuals' },
    { id: 'music-videos', name: 'Music Video Edit' },
    { id: 'advertisements', name: 'Advertisements' },
    { id: 'album-covers', name: 'Album Covers & Posters' },
  ];

  // Updated Direction videos with new content
  const directionVideos = [
    { id: 'NThtxVdaMsQ', title: 'NO MERCY | BALI | FOTTY SEVEN | ENZO' },
    { id: 'L44uVE3fW5M', title: 'KAISE KIYA TUNE YE | BALI | ENZO' },
    { id: '5i1D_GA0Fyk', title: 'CHAL THEEK HAI (Official Video) | BALI | RASLA | HINDI RAP | 2020' },
    { id: 'L8V2c8vOhwA', title: 'BEHTAR | VG FT. JADUGAR TAPES & RPS AMAR VIKAL | NJ ART | NAAMCHEEN RECORDS' },
    { id: 'qH1TFIDMK3I', title: 'AAKARSHIT - DUBAI | # VG | NJ ART | NAAMCHEEN RECORDS (Official Music Video)' },
    { id: 'mhQ0Wp-ed80', title: 'AAKARSHIT - KUCH SAAL | ROYAL ANEE | NJ ART | NAAMCHEEN (Official Music Video)' },
    { id: 'iEcj-3_mITQ', title: 'Dollar - Royal Anee x Mirza x Rps Amar Vikal | NJ Art | Naamcheen Records' },
    { id: 'TtjI6MBnTzc', title: 'Extraordinary Girl - Raprogi Feat. Hasal (Official Music Video)' },
    { id: 'UPTAyHD0TI4', title: 'RAAZ | AAKARSHIT | OFFICIAL MUSIC VIDEO | NJArt | NAAMCHEEN RECORDS' },
    { id: 'lZLKVZapiDM', title: 'DUNIYA BEGANI | ROYAL ANEE FT. SMOG DUDE | NJ ART | NAAMCHEEN' },
    { id: 'NIkCJ2IttjA', title: 'Kalam (Official Video) Tkay | Hip Hop | Latest Rap Songs 2019' },
    { id: '-TMtHNcKxbI', title: 'Laadle | Rps Amar Vikal | Rohit Rawat | #VG | New urban Haryanvi song' },
    { id: 'EbjxDE4_OpE', title: 'Tere Ishq Mein | Rps Amar Vikal | #VG | Rohit Rawat' },
    { id: 's3AHJND4Eyg', title: 'AAKARSHIT - SARFIRA | 2018 (prod.NEON)' },
    { id: 'Fn1jK1-xuv0', title: 'Aap Ki Kashish | Vicky Singh Ft. Aakarshit | Aashiq Banaya Aapne Cover' },
    { id: '8HGtwCNTxxs', title: 'High Speed | Rps Amar Vikal #VG | Sunny Chhawari | New Gurjar song' },
    { id: 'dn7PvbXI5iM', title: 'DAB DILLI | SULTAAN | FRESHLEE | OFFICIAL VIDEO | ARTZILLA' },
    { id: 'yv9ddDByzMY', title: 'Sahiba (Official Video) | Ghilaff | Vicky Thakur | Sneha Bisht' },
    { id: 'oBcaWGtff7k', title: 'AAKARSHIT - ZONE | FULL OFFICIAL VIDEO | 2016' },
    { id: 'Fhh8C7mp45o', title: 'PAGAL | RD Prince | ARTISTTAAN | New Hindi Rap Song 2016' },
    { id: 'gkJcaX3W2Yo', title: 'Kaale Kaam | Prism x Deepshit | Official Hip Hop Music Video 2025' },
  ];

  // AI Videos section
  const aiVideos = [
    { id: '8lSss-7mEWA', title: 'JAG SUNA | Ritendra Datta | Nitin Shankar | Mahimma Bhardwaj | Aditya Dev | Apni Dhun' },
  ];

  // Concert Visuals with Google Drive links
  const concertVisuals = [
    {
      title: 'IKKA 2022',
      url: 'https://drive.google.com/drive/folders/1hb9htHlwcyx8h0xrYaXQQ-LJPWS0v5L7',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Live concert visuals for IKKA 2022 tour'
    },
    {
      title: 'Karan Aujla 2024',
      url: 'https://drive.google.com/drive/folders/1gVp7LBBe-RlY8mqnvyFO5F8b3BtaAL28',
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Concert visuals for Karan Aujla 2024 performances'
    },
  ];

  // Advertisement videos
  const advertisementVideos = [
    { id: 'U9OyaeKqnRQ', title: 'Pregakem' },
    { id: 'DlHUSHptMek', title: 'Understanding your First Scan with FreeStyle Libre' },
    { id: 'h34UTWSKOyk', title: 'Limitless | Tridnet Group' },
    { id: 'h34UTWSKOyk', title: 'ICC Mens Champions Trophy 2025' },
    { id: 'xBa6JJEdqcI', title: 'Sharing Data with FreeStyle LibreView' },
  ];

  // Lyrical Typography videos with complete list and correct titles
  const typographyVideos = [
    { id: 'MbbwEXFIKR0', title: 'Hazoor | Official Lyric Video | Shehnaz Akhtar & Sahil Akhtar' },
    { id: 'mdj87Xkncxo', title: 'Jogda | Official Lyric Video | Shehnaz Akhtar & Sahil Akhtar' },
    { id: 'tX3dbNnnMdE', title: 'Ishq | Official Lyric Video | Shehnaz Akhtar & Sahil Akhtar' },
    { id: 'XbvBtZ3EA7Q', title: 'Charkha | Official Lyric Video | Shehnaz Akhtar & Sahil Akhtar' },
    { id: 'FWomz96DvBI', title: 'Kaafi | Official Lyric Video| Shehnaz Akhtar & Sahil Akhtar' },
    { id: 'bOib0rT1CAo', title: 'Na Ja | Dhruv Malik | Official Lyric Video' },
    { id: 'DuV9GDTbuG4', title: 'MERE JAISA NAI | KARMA | Sez on the Beat | Official Visualiser | 2024 |' },
    { id: 'RBqZyxpxV7s', title: 'THEY THEM - KARMA FT. SIKANDER KAHLON | Official Visualizer | 2024 |' },
    { id: 'DNBRdPornn4', title: 'CRY BABIES | KARMA | Sez on the Beat | Official Visualizer | 2024 |' },
    { id: 'e3JsX8gtD8k', title: 'AJI MERA GHANTA | BALI | FOTTY SEVEN | QUAN | JAI VEERU EP' },
    { id: 'tBz4xkiju_4', title: 'Harjas Harjayi feat Abeer Arora - Tera Naam | Official Lyric Video | Album \'X\' ft. Abeer Arora' },
    { id: 'PEzYdNA_7rY', title: 'HARAMZADA | BALI | FOTTY SEVEN | ENZO | JAI VEERU EP' },
    { id: 'Ph30bNfE3K0', title: 'EMIWAY - DHUNDKE DIKHA (DHUNDKE DIKHA EP) (PROD BY ROBERT TAR)' },
    { id: 'M7A2p6AMGTU', title: 'SIDE HO - BALI (Prod. By Enzo)' },
    { id: 'ywaYd-g0IIg', title: 'EMIWAY-KALA DHAN (DEMONETISATION)' },
    { id: 'kmT-oGNh6Q4', title: 'SHOR SHARABA (Official Video) | BALI | QUAN | HINDI RAP | 2020' },
    { id: 'EaOqFvQdZ1k', title: 'SNAKE BITES - KARMA (Official Lyrical Video)' },
    { id: 'o7--e9Giy0w', title: 'Sahi Sahi Sahi ft. Ikka (Prod. Fotty Seven)' },
    { id: 'STdorZW7pHo', title: 'MAN OF THE MATCH | BALI | QUAN' },
    { id: 'pxQyPsw3ro8', title: 'KYON - Official Lyrical Video | B Praak | Payal Dev | Kunaal Vermaa | Aditya Dev | Sad Song' },
    { id: 'i3VdkuvXuM0', title: 'SORT IT OUT - KARMA (Official Lyrical Video)' },
    { id: '6jMInuKHRlE', title: 'Nishu - Ikka (Lyrical Video) | Inflict | NISHU' },
    { id: 'L3oZZKzOpMk', title: 'Kidshot, Lazarus, Talhah Yunus - BOOOM (Official Lyric Video) Prod. Basshole' },
    { id: '2_OzKKU8imE', title: 'Batane Ki Zarurat Nahi - Title Track| G one Policewala Rapper | Straight outta Jammu' },
    { id: 'Ay_coFX3UYQ', title: 'MERI BANDOOK | BOHEMIA | HAJI SPRINGER | PARDHAAN | LYRICAL VIDEO | 2017' },
    { id: 'XfNQkQ96Rtg', title: 'Bande Naamcheen - Aakarshit (Lyric Video) | Kartavya | NJ Art | Latest Rap Song | Naamcheen Records' },
    { id: 'SlnvoMqh5x8', title: 'Doriya - (Lyrical Video) Kartavya | Khaab | Latest Punjabi Song 2021 | New Punjabi Song |' },
    { id: 'rLP5NkNOS5I', title: 'A BAD HUNT - ECSTATIC | OFFICIAL LYRIC VIDEO | LATEST ENGLISH SONG 2023' },
    { id: '_8C79ZihugQ', title: 'AMBARAN - MUHFAAD | GULAB EP | AELAAN RECORDS' },
    { id: 'vcWkIkDtkNQ', title: 'Achyutam Keshavam | Kaun Kehta Hai Bhagwan | Rahul Jain | Best Krishna Bhajan | Devotional Song' },
    { id: 'FZPwWOHpNII', title: 'ENZO - BEQADAR (Official lyrical Video)' },
    { id: 'J6wHXB7EhFE', title: 'EP- Batane Ki Zarurat Nahi | Walk In My Shoes| G-One PoliceWalaRapper Ft San J| Straight Outta Jammu' },
    { id: '_jyqiXBYaow', title: 'Laal Pari - Kartavya (Lyric Video) | Khaab | NJ Art | Latest Punjabi Song 2021 | Naamcheen Records' },
    { id: 's66EgojRAvA', title: 'Kala Khoon - Meine Zeit' },
    { id: 'qk0NlugHMy4', title: 'Holi Hai (Lyric Video) | RPS Amar Vikal X Baazigar | NJ ART | Naamcheen Records | 2021' },
    { id: '3ER9_ZnrgMU', title: 'Om shiv I Anuj Chitlangia I Devesh soni I Shivratri I Mahadev' },
    { id: 'UdUdRoDg0Wc', title: 'RPS Amar Vikal - Haal Jaga (Lyric Video) | # VG | NJ ART | Naamcheen Records | 2021' },
    { id: 'Hv7sc0AVTz8', title: 'Royal Anee - BEAST | Lyric Video | Naamcheen Records | 2021' },
    { id: 'KPPm2CV6wuE', title: 'Khoya ll official lyrical video ll Tarun Rishiraj feat. Rajat Arora ll Hashtag Records' },
    { id: '3HJazFdSZW8', title: 'ATHI & Roshan Jamrock - GIVE LOVE' },
    { id: '5NoyQNpFvas', title: 'Samrat - Panghat' },
    { id: 'iQ-1c6A56ZU', title: 'Sky 38 - LSV [Lab Saade Varge] ft. Harjas Harjaayi | Prod. By LXSH' },
    { id: 'oyPYlelpPzs', title: 'Socha Na Tha ll Tarun Rishiraj ll Hashtag Records (Official lyrical video )' },
    { id: '0JOZiQGCp80', title: 'Kami - AAR Z | Official Lyric Music Video 2020 | Hindi Rnb Song |' },
    { id: 'WrzkRH11WLY', title: 'DHEET | #VG FT. RPS AMAR VIKAL | NJ ART | NAAMCHEEN (Lyric Video)' },
    { id: 'gtxgYIDwkes', title: 'Shaikhspeare - 30 Pe Car (Prod. by Rebel 7) | Lyric Music Video 2020 | Shaikh Them (Pt. 1) Album' },
    { id: 'yDg0Til5CC4', title: 'BAAZIGAR | AAKARSHIT | #VG | NJ ART | NAAMCHEEN (Lyric Video)' },
    { id: 'btD9IqGfWJE', title: 'Ghalib ll Abhi R Wolf ll Priya Andrews ll Tarun Rishiraj ll Hashtag Records' },
    { id: 'oS2F1BUCyDY', title: 'ABOUT ME | ROYAL ANEE | NJ ART | NAAMCHEEN (Lyric Video)' },
    { id: 'b5pIAUBehkc', title: 'Baby Baby : Lil Golu I Likhhari I db I Sumit Banga I Latest Hindi Love Song 2020 I GrapeWine Music' },
    { id: 'j8fx81aJeJc', title: 'KARMA [COVID-19] (Official Lyrical Video) | RPS AMAR VIKAL | NJ ART | NAAMCHEEN' },
    { id: 'LNmd6c_q4es', title: 'IS IT LOVE I Rigul Kalra I Lyrical Video I Sumit Banga I Deep HouseI GrapeWineMusic ILatestHindiSong' },
    { id: 'AAbvNmQ_8H0', title: 'Lyrical: Jungle Hai I Lil Golu I Latest Rap Song  I GrapeWine Music I Lil Golu Rap song 2019-20 I' },
    { id: 'DFYbSKjkKcQ', title: 'Bum Bum Bhole I Lil Golu I Offical Video I Artist Immense I Mahashivratri 2020' },
    { id: '47XoGKFFnJs', title: 'KHILADI || धारा 370 || DHARA 370 || DESH BHAKTI SONG' },
    { id: 'WnSY0N8wtMY', title: 'Apun Chand Pe ( Lyrical ) | Tkay | So Deep | Gaitonde Bhau | Chandrayan 2 | Hindi Rap 2019' },
    { id: 'RnHc7X2uOp8', title: 'BHAI HAI KYA! (LYRICAL) | MUHFAAD | HINDI RAP | 2019' },
    { id: 'fqB9iHrwoa4', title: 'Ghodo Ko Nhi Ghass - Cherry Deep X Rickie Singh (Prod by DrG and Jay Kay)' },
    { id: 'hvA1Iq07RmU', title: 'Childhood | Tkay | Lyrical Video | Rap Song 2019' },
    { id: 'pr6Q0rhu47U', title: 'MEIN HI KYU? | PRINCE | VICKY OBRAY | Official lyrical Video || 2019 ||' },
    { id: 'LCpjTzzdjmw', title: 'Sai hai Sai hai | Hip hop song | Royal d FT Dj skid' },
    { id: 'C37INgd4LZM', title: 'Husan Di Rani - SWARESH |  Kartavya | Official Lyrical Video | Latest  song 2018' },
    { id: 'IudB1TInhR0', title: 'Propose (Lyrical Video) : Vicky Thakur | Punjabi Song' },
    { id: 'CLdgeULQDig', title: 'Jeffrin Jose - Saajna | UrbanBlue Presents | 2018' },
    { id: 'UguTt-1Bsyo', title: 'Girik Aman || PYAR NAI KARNA AYA || Lyrical Video || Kingdeep || Onkar Raj OKR || Yogesh modi' },
    { id: 'w_fdeB2gxdk', title: 'MI GENTE INDIANS | SAWAN | RAP VERSION | LYRICAL VIDEO | 2018' },
    { id: '7D1gI0FRw_E', title: 'Raani Dill Gi | Rapperiya Baalam ft Arjan Singh | Most Romantic Rajasthani Song 2018' },
    { id: 'WDOCD3VQilM', title: 'Queen // Girik Aman // Romantic Song // Latest Punjabi Song 2018 //Muzik amy // asli GOLD// rahul' },
    { id: 'qkg8BsCqj5w', title: 'Bad Thoughts (Lyrical Video) | GLAZRIC ft G Sach | Farrago Music | Rolling Tape Films' },
    { id: '73vUfHLQV8k', title: 'Psychographic Rap Song | RV | RAGA | Official lyrical video |  latest hindi rap 2018 |' },
    { id: 'CzWinFsGBrU', title: 'DEKH NHI SAKDA * FULL OFFICAL VIDEO * NEW LOVE TRACK * SONI SAHAB * WATCH AND SHARE' },
    { id: 'kVEYqp8ze48', title: 'Haraami | Muhfaad | Harjas | Lyrical video' },
    { id: 'zwiU-OvSh18', title: 'Soorme Taksal De | Jimmy Manku | Indie Singh| Religion Punjabi Song | 2017' },
    { id: 'IXj-rn6kJ3E', title: 'New haryanvi hip-hop song 2017●Haandenge●Param Mavi●Kapoor●NJ ART (LYRICAL VIDEO)' },
    { id: 'RXgkqOFHhCM', title: 'Gora Gora Rang - Ajay Yadav (Lyrical Video)' },
    { id: '5R6BgP6IaeM', title: 'Chahat sharma - Pehla Nasha cover 2017' },
    { id: 'x-mGhgHjlws', title: 'Din Shanivaar Da | Rey Rokz & Sam Rox | Lyrical Video | 2017' },
    { id: '37Jnky5U0Ww', title: 'Meri Bandook - PARDHAAN | BOHEMIA | HAJI | 2017' },
    { id: 'FsQZHkAdwag', title: 'DO OR DIE (LYRICAL VIDEO) - ABHI PAYLA (RAAJ JONES X - CLUSIVE)' },
    { id: 'EMQJBo71Pcw', title: 'Akay - Guru Gobind ( Lyrical Video) | A-Kay | Full Audio Song' },
    { id: 'lE2FdLoRCKE', title: 'NOT TO BE FUCKED WITH (LYRICAL VIDEO) - SIKANDER KAHLON (RAAJ JONES EXCLUSIVE) 2016' },
    { id: '7g2IjpyIqrg', title: 'Scene Kya Hai - NUCLEYA X DIVINE (Lyric Video)' },
    { id: 'KJv4TOFrQLM', title: 'SHIVI - Loka Da Ni Pta (Official Lyric Video)' },
    { id: 'VQxIslzqHno', title: 'BHAND HAI | PARDHAAN |  Lyric Video : Naman Jain (NJ Art)' },
    { id: 'VIVC7G-Dvew', title: 'Amazing | Sikander Kahlon | Lyrical Video : Naman Jain (NJ ART)' },
    { id: 'SWfv-3bsVgs', title: 'Yo Yo Honey Singh Tribute (LYRICAL) By EXPRONIC SUMIT ft RAAJ JONES' },
    { id: 'uygU38b5FgY', title: 'BUM BUM BHOLENATH | Legend ft M-Arj | Lyrical Video : Naman Jain (NjArt)' },
    { id: 'D4A2eM87x4w', title: 'Lyrical Game | ISHAAN (IB) FT. VAIBHAV GAUR' },
  ];

  // Music Video Edit collection with all provided videos
  const musicVideos = [
    { id: 'M1cJLf6Cil8', title: 'Blood On Kurta (Official Video) Dc X Sukki | Dehati Flex EP | New Haryanvi Song 2025' },
    { id: 'g7ew0hoP2Cc', title: 'SMOKE - KAHLON FLOW (Music Video) | Prod. RiJ | Desi Hip Hop | 2025' },
    { id: 'oidQ3gTTroc', title: 'Enzo : All Ways (Official Music Video) Diljan | New Punjabi Songs 2023' },
    { id: 'VOMvjZ0Em1U', title: 'Qaab - Toxic Luv [Official Music Video] 2023' },
    { id: 'XiLcFzOn7Ao', title: 'Maan Meri Jaan (African Version) - KING x Rayvanny | Official Lyric Video' },
    { id: 'FjgFpm5Fx2A', title: 'Never Mind | Jaura Phagwara | @LUXERECORDS  | Punjabi Song 2022' },
    { id: '7f6IslT4qDA', title: 'SANKI ( Official Video)  Ikka | Raga | Aghor | Seedhe Maut | Sez on the Beat | Vaksh Vimal | Nishu' },
    { id: 'sXoI2_BLDoU', title: 'AURA (Official Video) ENZO | JAURA PHAGWARA | HARJAS HARJAAYI | LUXE |Latest Punjabi Songs 2022' },
    { id: '3qeu2lzT6LQ', title: 'Qaab, Rebel 7, Smoke & Abix - Scene Change [Official Music Video]' },
    { id: 'evrto2sEJ6c', title: 'Well Known (Full Video) | Vishu OG | DJ Sky | New Haryanvi Songs Haryanavi 2021 | Nav Haryanvi' },
    { id: '3jrC_pS3JLw', title: 'Achieve - Official Video Song | Maninder Bling | Indi Singh | Latest Punjabi Song | Eros Now Music' },
    { id: 'qgdotiMN_S0', title: 'TERI YAAD AAYI (OFFICIAL MUSIC VIDEO) | TEESHOW | ROMANTIC SONG 2021#lovesong#bollywood #2021#viral' },
    { id: 'ZG9JPb7yHBU', title: 'BAALI (Full Video 4K)  : Monty Singh | Royal Anee Music | Megha Mishra | Ravi Rajput | NJ Art' },
    { id: 'CKo23Oe9vhw', title: 'KYA SCENE HAI - VJ-NAAMI X RAAHA ( OFFICIAL MUSIC VIDEO 2020 )' },
    { id: 'Zjia82AIqws', title: 'Psycho Song By Vishu OG | Haryanvi Songs Haryanavi 2020 | Desi Rock | DJ SKY' },
    { id: 'hG2Ylb5vQcU', title: 'Woh Raat | Naveed Ahmed | Siddhant Saran | Harsh Bidla | Latest Hindi Rap Song 2020' },
    { id: 'AdjxV9U1RGc', title: 'Naachona Full Video Song | Jessu Singh | Rajat Walya | Neha Raj | New Hindi song 2020 |Ace Of Sounds' },
    { id: 'Zg0KbSIGsmM', title: 'BEEF I Official Video I BB I Dr. Love I Likhhari I Latest Rap Song 2020 I db I GrapeWine Music' },
    { id: '-KeZHBQjTQw', title: 'Call Karenga (Official Music Video) Roma Sagar ft. Ikka | Latest Punjabi songs 2020' },
    { id: 'l549RsvUunU', title: 'JEET BAWA JEET | LUKKA | YAWAR | MUSIC VIDEO  | 2020' },
    { id: 'v0VxBFr1icc', title: 'Maal Mere Sath | MAGICAL ft. Maindope | Shilpa | Latest Punjabi Songs 2020 | Ace of sounds' },
    { id: 'h0e1MZi6Stg', title: 'KAFILA | AFRANI Ft.JESSU SINGH MUSKAN | NIKHIL CRUZ | LATEST PUNJABI SONG | FULL HD 2020' },
    { id: '0N9gKCsLxU4', title: 'RAP I Lil Golu ft. Dr. Love I Vertical Video I One Take Music Video I Sumit Banga I Artist Immense' },
    { id: 'EcNrDvJie9g', title: 'Phir Se Love (Bachata Dance) | Official Music Video | Expronic Sumit Original | Love n\' Emotion EP1' },
    { id: 'qCiL-hFTcNQ', title: 'Never Ever | Official Video | 2019 | @Dr.Luvofficial   | GD 47 | Galat Gang Records' },
    { id: 'G4iOkonqq6A', title: 'SUNSAAN | SAWAN | JERRY MUZIK | OFFICIAL MUSIC VIDEO | 2019' },
    { id: '2_ZlEKX-hGs', title: 'UP 12 Dobara Full Video Song - Akshay Feat Rapper Tyagi X Akkuru Prod. By Jazz Mafiaa' },
    { id: 'JkBXWpSdWEE', title: 'DANGAL | AAKASH | DEEPSTAR | OFFICIAL MUSIC VIDEO | MAYANKFLASH | DILLI 92 GANG | 2019' },
    { id: 'zN8NFHeD2V4', title: 'Temperature High | (Full HD) | Jimmy Manku |Punjabi Songs 2019' },
    { id: '5yphI0_4M14', title: 'Bhole - Trance 2019 | Official Video | Mr. Diamond' },
    { id: 'jXdkTRF7-wk', title: 'Negative (Official Video) | Vishu OG | Dj Sky | Punjabi Songs 2020 | Desi Rock' },
    { id: 'bqdLktOcnPY', title: 'ZILA BIJNOR - AKKI RAP KING FEAT ANUBHAV JAIN NEW RAP SONG 2019' },
    { id: 'Le5_uBel-eU', title: 'Karte Kalesh | Sweta Chauhan, Firoz Malik, Jessu Singh, Magical | New Haryanvi Songs Haryanavi 2019' },
    { id: 'tuIueNdWDIc', title: 'Jhandoli || Sunder Rajput || Rehan Akhriya || Varun Rawal || Akanksha Soni || Anurag Chauhan' },
    { id: 'vuhFMMr-E5c', title: 'Lakshan| ROYAL ANEE MUSIC | Raaj Jones Fresh | 2019' },
    { id: 'D02NWKs-iqk', title: 'Crime City ( MuzaffarNagar ) UP12 Full Video Song - Akshay Prod. by Jazz Mafiaa' },
    { id: 'qyA9OKjHtaM', title: 'हथियार Weapon Punjabi Song - Vishu | DJ Sky | Punjabi Songs 2019 | Desi Rock' },
    { id: '3YK9NWsu4xE', title: 'BABY GIRL || AKSHAY FEAT RAPSTAR MJ (PROD.BY - JAZZ MAFIAA) VALENTINES SPECIAL || 2019' },
    { id: 'qSzfuZUxhSs', title: '#PRISMANTRA | PRISM ft. Riyaazi |Official Music Video |White horse Studios|2019' },
    { id: '8nZZMPULx3M', title: 'UP 12 Video Song ( MuzaffarNagar 2 ) Akshay (Akki Rap King) Feat Akkuru' },
    { id: 'ZqsUIjHTQdI', title: 'MIRROR | Tkay | Harix | Hip Hop Song | Hindi Rap | Latest Songs 2019' },
    { id: 'AytAwySMvSs', title: 'Zindagi Trikon (Official Video) | GSIR | Mynk Ki Filam | Latest Hindi Rap Song | hip-hop | Rap' },
    { id: 'byX4rwOQuZk', title: 'Sab Slow | BB | Latest Hip Hop Song | Galat Gang Records | Latest Songs 2018' },
    { id: 'A2iUSFCFeyk', title: 'Khush Hoon | Muhfaad | Agsy | Prerna Nepali | Mynk Ki Filam | 2018' },
    { id: '9FSuJLqvE1s', title: 'DELHI KI BAATCHEET | MAGICAL |  OFFICIAL MUSIC VIDEO | 2018' },
    { id: 'hN4lkg5r7BI', title: 'BEWAJAH - SWARESH | Kartavya | Mynk Ki Filam | Latest Hindi Official Music Video 2018' },
    { id: 'p_8YpYjO8CM', title: 'Darubaaz | Sahil Khan, Aannie Kadam | Magical |  Hindi Songs 2018' },
    { id: '8UMWEDpGpsY', title: 'Rishtedaar (Official Music Video) | Risky | Farrago Music | Latest Hindi Rap Song 2018 |' },
    { id: 'aWlv4HLPTj0', title: 'BOLTE GUNGE | Official VIDEO | KALAZONE | RS | 2018 |' },
    { id: 'WOrUt8W47-g', title: 'DESI TUDE | Mukesh Chaudhary, Aman Hundal |  Haryanvi songs Haryanavi 2018 | VOHM' },
    { id: 't1HYXynB7fE', title: 'Memories (Video) | Chahat Sharma  | Latest New Punjabi Songs | Rolling Tape Films | Farrago Music' },
    { id: '8vcrV1ob3Qg', title: 'Muhfaad | Bitch I\'m A Dawgg | Mynk ki filam (Official Music Video) | 2018' },
    { id: '56O2FkLE5Ag', title: 'Mashup 2017 | Funkaar | New Year Party Song | 2018' },
    { id: 'CF6SKMi5MS8', title: 'Bodyguard | Vicky Thakur Ft. Nippu Nepewala | Latest Most Haryanvi songs 2017 | VOHM' },
    { id: 'KjTVfRPCGZY', title: 'STORY OF KAKKARS  ( Chapter 1)  - Tony Kakkar, Neha Kakkar & Sonu Kakkar' },
    { id: 'l4KOZOcgkvc', title: 'Are Bhai Bhai | Muhfaad | Harjas | Mynk ki filam' },
    { id: 'sQDYuq6niHo', title: '2) UP -  AAKARSHIT | #PARADOX |2017' },
    { id: '-eFpNWJgz2M', title: '1) INTRO - AAKARSHIT | #PARADOX | 2017' },
    { id: 'ZxPQp5XZn0w', title: 'DILLI WASI  | SWARESH | Latest Hindi Song 2017' },
    { id: 'ZmYvlSuacAE', title: 'Valentine Day || FULL SONG || Udit Mahana || Sonu Makan || Chirag Mahna || STEELBIRD ENTERTAINMENT' },
    { id: 'qlzPmqKbRDo', title: 'Muhfaad - Sab Mazze Mein' },
    { id: '3I_5nD-ldIk', title: 'Patola | Official Music Video | Anmol Gagan Maan |  Songs 2016 | Jass Records' },
    { id: 'FNEiDR05iAU', title: 'Asardar | Susti Anthem | Official Music Video | Latest Hindi Rap Song 2016 | Desi Hip Hop Inc' },
  ];

  // Album covers and posters data with all images including new ones
  const albumCovers = [
    {
      id: 1,
      image: '/271895266_4911087985623934_2624660907301897446_n.webp',
    },
    {
      id: 2,
      image: '/472125053_18481545793062406_7676319150049329358_n.jpg',
    },
    {
      id: 3,
      image: '/SnapInsta.to_173090840_308200040751966_8679189721205119769_n.jpg',
    },
    {
      id: 4,
      image: '/SnapInsta.to_176520996_1665412927180045_6728980124454699181_n.jpg',
    },
    {
      id: 5,
      image: '/SnapInsta.to_275600141_146335131183628_4164826839623651607_n.jpg',
    },
    {
      id: 6,
      image: '/SnapInsta.to_276003019_488834996058322_6776313799444352570_n.jpg',
    },
    {
      id: 7,
      image: '/SnapInsta.to_290351441_1398438347290547_6745698366078385163_n.jpg',
    },
    {
      id: 8,
      image: '/SnapInsta.to_308028021_4867071576727564_4488088787961724423_n.jpg',
    },
    {
      id: 9,
      image: '/SnapInsta.to_314026947_850130653003703_4847075968031239765_n.jpg',
    },
    {
      id: 10,
      image: '/SnapInsta.to_318135098_674830017452305_6397829693916687356_n copy copy.jpg',
    },
    {
      id: 11,
      image: '/SnapInsta.to_341955428_238375682189322_8903338927072876169_n copy copy.jpg',
    },
    {
      id: 12,
      image: '/SnapInsta.to_358639305_18374822476062406_5771097012007308836_n copy copy.jpg',
    },
    {
      id: 13,
      image: '/SnapInsta.to_411873655_7611697560468dd71_1653460974569319683_n (1) copy copy.jpg',
    },
    {
      id: 14,
      image: '/SnapInsta.to_411873655_761169756046871_1653460974569319683_n.jpg',
    },
    {
      id: 15,
      image: '/SnapInsta.to_426340470_7182970705105711_6488078939018039786_n.jpg',
    },
    {
      id: 16,
      image: '/SnapInsta.to_468209500_18474030433062406_9066135542449298808_n.jpg',
    },
    {
      id: 17,
      image: '/SnapInsta.to_470174654_18477468892062406_4998258246393935202_n.jpg',
    },
    {
      id: 18,
      image: '/SnapInsta.to_471864078_18480106300062406_656075779399158_n.jpg',
    },
    {
      id: 19,
      image: '/SnapInsta.to_504441240_18511530358062406_1162404576387789428_n.jpg',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Sufi Soul Journey',
      category: 'direction',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A cinematic exploration of spiritual awakening through Sufi traditions',
      collaboration: 'Collaboration with Ikka',
      year: '2024',
    },
    {
      id: 2,
      title: 'Urban Poetry',
      category: 'typography',
      image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dynamic typographic animations bringing street poetry to life',
      year: '2024',
    },
    {
      id: 3,
      title: 'Midnight Concert Series',
      category: 'concerts',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Immersive visual experience for live electronic music performances',
      year: '2024',
    },
    {
      id: 4,
      title: 'Dreams in Motion',
      category: 'music-videos',
      image: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Surreal music video exploring the boundaries between dreams and reality',
      year: '2023',
    },
    {
      id: 5,
      title: 'Tech Revolution Campaign',
      category: 'advertisements',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Bold advertising campaign showcasing the future of technology',
      year: '2024',
    },
    {
      id: 6,
      title: 'Hip-Hop Chronicles',
      category: 'direction',
      image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Raw documentary-style direction for underground hip-hop culture',
      collaboration: 'Collaboration with Ikka',
      year: '2023',
    },
    {
      id: 7,
      title: 'Neon Nights Typography',
      category: 'typography',
      image: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cyberpunk-inspired typographic animations for electronic music',
      year: '2024',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const showDirectionVideos = activeCategory === 'direction' || activeCategory === 'all';
  const showTypographyVideos = activeCategory === 'typography' || activeCategory === 'all';
  const showAIVideos = activeCategory === 'ai-videos' || activeCategory === 'all';
  const showConcertVisuals = activeCategory === 'concerts' || activeCategory === 'all';
  const showMusicVideos = activeCategory === 'music-videos' || activeCategory === 'all';
  const showAdvertisements = activeCategory === 'advertisements' || activeCategory === 'all';
  const showAlbumCovers = activeCategory === 'album-covers' || activeCategory === 'all';

  // Handle fullscreen image
  const openFullscreen = (imageSrc: string) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  // Handle escape key to close fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      }
    };

    if (fullscreenImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [fullscreenImage]);

  return (
    <div className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-heading text-6xl md:text-7xl font-normal mb-6 tracking-ultra-wide text-gray-100">
            PORTFOLIO
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed font-sans text-gray-300">
            A curated collection of visual stories, each crafted with passion and precision to create 
            meaningful connections between art and audience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-display font-medium tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Direction Videos Section */}
        {showDirectionVideos && (
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-center mb-12 tracking-widest text-gray-100">
              DIRECTION SHOWCASE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directionVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`group cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres doesn't exist
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <Play className="h-8 w-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      
                      {/* YouTube Link */}
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`Watch ${video.title} on YouTube`}
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-display font-medium uppercase tracking-widest text-gray-400">
                          DIRECTION
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="font-display text-lg font-semibold group-hover:text-gray-300 transition-colors duration-300 tracking-wide text-gray-100 line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Videos Section */}
        {showAIVideos && (
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-center mb-12 tracking-widest text-gray-100">
              AI VIDEOS SHOWCASE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`group cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres doesn't exist
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <Play className="h-8 w-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      
                      {/* YouTube Link */}
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`Watch ${video.title} on YouTube`}
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-display font-medium uppercase tracking-widest text-gray-400">
                          AI VIDEO
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="font-display text-lg font-semibold group-hover:text-gray-300 transition-colors duration-300 tracking-wide text-gray-100 line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Concert Visuals Section */}
        {showConcertVisuals && (
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-center mb-12 tracking-widest text-gray-100">
              CONCERT VISUALS SHOWCASE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {concertVisuals.map((visual, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    {/* Visual Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={visual.thumbnail}
                        alt={visual.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <ExternalLink className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Google Drive Link */}
                      <a
                        href={visual.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`View ${visual.title} on Google Drive`}
                      />
                    </div>

                    {/* Visual Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-display font-medium uppercase tracking-widest text-gray-400">
                          CONCERT VISUALS
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="font-display text-xl font-semibold group-hover:text-gray-300 transition-colors duration-300 tracking-wide text-gray-100 mb-3">
                        {visual.title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed font-sans text-gray-400">
                        {visual.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Advertisements Section */}
        {showAdvertisements && (
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-center mb-12 tracking-widest text-gray-100">
              ADVERTISEMENTS SHOWCASE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advertisementVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`group cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres doesn't exist
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <Play className="h-8 w-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      
                      {/* YouTube Link */}
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`Watch ${video.title} on YouTube`}
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-display font-medium uppercase tracking-widest text-gray-400">
                          ADVERTISEMENT
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="font-display text-lg font-semibold group-hover:text-gray-300 transition-colors duration-300 tracking-wide text-gray-100 line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lyrical Typography Videos Section */}
        {showTypographyVideos && (
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-center mb-12 tracking-widest text-gray-100">
              LYRICAL TYPOGRAPHY SHOWCASE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {typographyVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`group cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres doesn't exist
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <Play className="h-8 w-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      
                      {/* YouTube Link */}
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`Watch ${video.title} on YouTube`}
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-display font-medium uppercase tracking-widest text-gray-400">
                          LYRICAL TYPOGRAPHY
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="font-display text-lg font-semibold group-hover:text-gray-300 transition-colors duration-300 tracking-wide text-gray-100 line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Music Video Edit Section */}
        {showMusicVideos && (
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-center mb-12 tracking-widest text-gray-100">
              MUSIC VIDEO EDIT SHOWCASE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {musicVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`group cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres doesn't exist
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <Play className="h-8 w-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      
                      {/* YouTube Link */}
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`Watch ${video.title} on YouTube`}
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-display font-medium uppercase tracking-widest text-gray-400">
                          MUSIC VIDEO EDIT
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="font-display text-lg font-semibold group-hover:text-gray-300 transition-colors duration-300 tracking-wide text-gray-100 line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Album Covers & Posters Section - 4 columns layout with 150% zoom */}
        {showAlbumCovers && (
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-center mb-12 tracking-widest text-gray-100">
              ALBUM COVERS & POSTERS
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {albumCovers.map((cover, index) => (
                <div
                  key={cover.id}
                  className={`group cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openFullscreen(cover.image)}
                >
                  <div className="aspect-square overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <img
                      src={cover.image}
                      alt={`Album Cover ${cover.id}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        {(activeCategory === 'all' || (activeCategory !== 'direction' && activeCategory !== 'typography' && activeCategory !== 'ai-videos' && activeCategory !== 'concerts' && activeCategory !== 'music-videos' && activeCategory !== 'advertisements' && activeCategory !== 'album-covers')) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-8 w-8 text-white bg-gray-800/80 p-2 rounded-full" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-display font-medium uppercase tracking-widest text-gray-400">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                      <span className="text-sm font-sans text-gray-500">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gray-300 transition-colors duration-300 tracking-wide text-gray-100">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed mb-3 font-sans text-gray-400">
                      {project.description}
                    </p>
                    
                    {project.collaboration && (
                      <p className="text-sm font-display font-medium italic tracking-wide text-gray-300">
                        {project.collaboration}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gray-800 rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            READY TO CREATE SOMETHING EXTRAORDINARY?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-sans text-gray-300">
            Let's collaborate on your next project and bring your creative vision to life 
            through the power of visual storytelling.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-4 rounded-full font-display font-semibold text-lg tracking-wider transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-white text-gray-900"
          >
            START YOUR PROJECT
          </a>
        </div>
      </div>

      {/* Fullscreen Image Modal - 150% zoom and perfectly centered */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-[150%] max-h-[150%] flex items-center justify-center">
            <img
              src={fullscreenImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain"
              style={{ 
                maxWidth: '150vw', 
                maxHeight: '150vh',
                width: 'auto',
                height: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

export default Portfolio

export default Portfolio