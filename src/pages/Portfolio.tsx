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
    { id: 'jXdkTRF7-wk', title: 'Negative (Official Video) |