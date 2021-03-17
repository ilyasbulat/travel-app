import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import CountryPage from './components/CountryPage/CountryPage'
import { Route, Switch } from 'react-router-dom';
import './App.css';

export const LangContext = React.createContext({
  language: localStorage.getItem('lang') || 'en',
  setLanguage: () => {}
});

function App() {

    // const countryCards = [
    //     {
    //         "_id": "1",
    //         "capitalLocation": {
    //           "coordinates": [
    //             12.496365,
    //             41.902782
    //           ],
    //           "type": "Point"
    //         },
    //         "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
    //         "videoUrl": "https://youtu.be/FlRwssZYRM0",
    //         "currency": "EUR",
    //         "ISOCode": "ITA",
    //         "localizations": [
    //           {
    //             "lang": "en",
    //             "capital": "Rome",
    //             "description": "Italy (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]), is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.",
    //             "name": "Italy"
    //           },
    //           {
    //             "lang": "ru",
    //             "capital": "Рим",
    //             "description": "Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.  Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).  Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км.  Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов.  На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству.",
    //             "name": "Италия"
    //           },
    //           {
    //             "lang": "fr",
    //             "capital": "Rome",
    //             "description": "L'Italie /itali/ Écouter (en italien : Italia /iˈtaːlja/ Écouter), en forme longue la République italienne (en italien : Repubblica Italiana /reˈpubblika itaˈljaːna/ Écouter), est un pays d'Europe du Sud correspondant physiquement à une partie continentale, une péninsule située au centre de la mer Méditerranée et une partie insulaire constituée par les deux plus grandes îles de cette mer, la Sicile et la Sardaigne, et beaucoup d'autres îles plus petites (hormis la Corse, française depuis 1768). Elle est rattachée au reste du continent par le massif des Alpes. Le territoire italien correspond approximativement à la région géographique homonyme.",
    //             "name": "Italie"
    //           }
    //         ]
    //     },
    //     {
    //         "_id": "2",
    //         "capitalLocation": {
    //           "coordinates": [
    //             -0.1257,
    //             51.5085,
    //           ],
    //           "type": "Point"
    //         },
    //         "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
    //         "videoUrl": "https://www.youtube.com/watch?v=0kXCPo7c63I",
    //         "currency": "GBP",
    //         "ISOCode": "GBR",
    //         "localizations": [
    //           {
    //             "lang": "en",
    //             "capital": "London",
    //             "description": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK), or Britain, is a sovereign country in north-western Europe, off the north-­western coast of the European mainland. The United Kingdom includes the island of Great Britain, the north-­eastern part of the island of Ireland, and many smaller islands within the British Isles. Northern Ireland shares a land border with the Republic of Ireland. Otherwise, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to the east, the English Channel to the south and the Celtic Sea to the south-west, giving it the 12th-longest coastline in the world. The Irish Sea separates Great Britain and Ireland. The total area of the United Kingdom is 94,000 square miles (240,000 km2).",
    //             "name": "United Kingdom"
    //           },
    //           {
    //             "lang": "ru",
    //             "capital": "Лондон",
    //             "description": "Великобрита́ния (русское название происходит от англ. Great Britain [ˌɡreɪt ˈbrɪtn]), или Соединённое Короле́вство (United Kingdom [jʊnaɪtɪd kɪŋdəm], сокращённо: UK), полная официальная форма — Соединённое Короле́вство Великобрита́нии и Се́верной Ирла́ндии (англ. The United Kingdom of Great Britain and Northern Ireland), — островное государство на северо-западе от континентальной Европы",
    //             "name": "Великобритания"
    //           },
    //           {
    //             "lang": "fr",
    //             "capital": "Londres",
    //             "description": "Le Royaume-Uni (prononcé en français : /ʁwajom‿yni/a Écouter), en forme longue le Royaume-Uni de Grande-Bretagne et d'Irlande du Nordb (en anglais : United Kingdom /juːˌnaɪtɪd ˈkɪŋdəm/c Écouter et United Kingdom of Great Britain and Northern Ireland)d, est un pays d'Europe de l'Ouest, ou selon certaines définitions, d'Europe du Nord, dont le territoire comprend l'île de Grande-Bretagne et la partie nord de l'île d'Irlande, ainsi que de nombreuses petites îles autour de l'archipel. Le territoire du Royaume-Uni partage une frontière terrestre avec la république d'Irlande, et est entouré par l'océan Atlantique au nord, la mer du Nord à l'est, la Manche au sud, la mer Celtique au sud-sud-ouest, la mer d'Irlande au sud-ouest et les mers intérieures de la côte ouest de l'Écosse au nord-ouest",
    //             "name": "Royaume-Uni"
    //           }
    //         ]
    //     },
    //     {
    //         "_id": "3",
    //         "capitalLocation": {
    //           "coordinates": [
    //             -3.7026,
    //             40.4165
    //           ],
    //           "type": "Point"
    //         },
    //         "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
    //         "videoUrl": "https://www.youtube.com/watch?v=IftfIk-pRwI",
    //         "currency": "EUR",
    //         "ISOCode": "ESP",
    //         "localizations": [
    //           {
    //             "lang": "en",
    //             "capital": "Madrid",
    //             "description": "Spain (Spanish: España, [esˈpaɲa] (About this soundlisten)), formally the Kingdom of Spain[13] (Spanish: Reino de España),[a][b] is a country in Southwestern Europe with some pockets of territory across the Strait of Gibraltar and the Atlantic Ocean.[13] Its continental European territory is situated on the Iberian Peninsula. Its territory also includes two archipelagos: the Canary Islands off the coast of North Africa, and the Balearic Islands in the Mediterranean Sea. The African exclaves of Ceuta, Melilla, and Peñón de Vélez de la Gomera[14] make Spain the only European country to have a physical border with an African country (Morocco). Several small islands in the Alboran Sea are also part of Spanish territory.",
    //             "name": "Spain"
    //           },
    //           {
    //             "lang": "ru",
    //             "capital": "Мадрид",
    //             "description": "Испа́ния (исп. España, МФА: [esˈpaɲa]), официально Короле́вство Испа́ния (исп. Reino de España, МФА: [ˈreino ðe esˈpaɲa]) — трансконтинентальное суверенное государство на юго-западе Европы и частично в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть (80 %) Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь 504 782 км² (вместе с небольшими суверенными территориями на африканском побережье, городами Сеута и Мелилья), являясь четвёртой по величине страной в Европе (после России, Украины и Франции).",
    //             "name": "Испания"
    //           },
    //           {
    //             "lang": "fr",
    //             "capital": "Madrid",
    //             "description": "L'Espagne, en forme longue le royaume d'Espagne (respectivement en espagnol : España Écouter et Reino de España), est un pays d'Europe du Sud — et, selon les définitions, d'Europe de l'Ouest — qui occupe la plus grande partie de la péninsule Ibérique. En 2019, il s'agissait du vingt-huitième pays le plus peuplé du monde, avec 47 millions d'habitants.",
    //             "name": "Espagne"
    //           }
    //         ]
    //     },
    //     {
    //         "_id": "4",
    //         "capitalLocation": {
    //           "coordinates": [
    //             23.727539,
    //             37.983810
    //           ],
    //           "type": "Point"
    //         },
    //         "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
    //         "videoUrl": "https://www.youtube.com/watch?v=XhSFK2o-QWM",
    //         "currency": "EUR",
    //         "ISOCode": "GRC",
    //         "localizations": [
    //           {
    //             "lang": "en",
    //             "capital": "Athens",
    //             "description": "Greece (Greek: Ελλάδα, Ellada, [eˈlaða]), also known as Hellas,[b] and officially the Hellenic Republic,[12][c] is a country located in Southeast Europe. Its population is approximately 10.7 million as of 2018; Athens is its largest and capital city, followed by Thessaloniki. Situated on the southern tip of the Balkans, Greece is located at the crossroads of Europe, Asia, and Africa. It shares land borders with Albania to the northwest, North Macedonia and Bulgaria to the north, and Turkey to the northeast. The Aegean Sea lies to the east of the mainland, the Ionian Sea to the west, the Cretan Sea and the Mediterranean Sea to the south. Greece has the longest coastline on the Mediterranean Basin and the 11th longest coastline in the world at 13,676 km (8,498 mi) in length, featuring many islands, of which 227 are inhabited. Eighty percent of Greece is mountainous, with Mount Olympus being the highest peak at 2,918 metres (9,573 ft). The country consists of nine traditional geographic regions: Macedonia, Central Greece, the Peloponnese, Thessaly, Epirus, the Aegean Islands (including the Dodecanese and Cyclades), Thrace, Crete, and the Ionian Islands.",
    //             "name": "Greece"
    //           },
    //           {
    //             "lang": "ru",
    //             "capital": "Афины",
    //             "description": "Гре́ция (греч. Ελλάδα [eˈlaða] Информация о файле слушать, в древности — греч. Ελλάς [eˈlas] Информация о файле слушать), также Тре́тья Гре́ческая респу́блика, официально — Гре́ческая Респу́блика (греч. Ελληνική Δημοκρατία [eliniˈci ðimokraˈtia]) — государство в Южной Европе. Население — 10,8 млн чел. (на 1 января 2017 года, по оценкам Евростата), площадь территории — 131 957 км². Занимает 84-е место в мире по численности населения и 95-е по площади территории.",
    //             "name": "Греция"
    //           },
    //           {
    //             "lang": "fr",
    //             "capital": "Athènes",
    //             "description": "La Grèce, aussi appelée Hellas ou francisé en Hellade, en forme longue la République hellénique, (en grec : Ελλάδα / Elláda ou officiellement Ελληνική Δημοκρατία / Ellinikí Dimokratía, en grec ancien et en katharévousa Ἑλλάς / Hellás) est un pays d’Europe du Sud. D'une superficie de 131 957 km2 pour un peu moins de onze millions d'habitants, le pays partage des frontières terrestres avec l’Albanie, la Macédoine du Nord, la Bulgarie et la Turquie et des frontières maritimes avec Chypre, l'Albanie, l'Italie, la Libye, l'Égypte et la Turquie (cette dernière est la source du contentieux gréco-turc en mer Égée). La mer Ionienne à l'ouest et la mer Égée à l'est, parties de la mer Méditerranée, encadrent le pays dont le cinquième du territoire est constitué de plus de 9 000 îles et îlots dont près de 200 sont habités. De plus, 80 % de son territoire est constitué de montagnes dont la plus haute est le mont Olympe, dont le sommet culmine à 2 917 mètres.",
    //             "name": "Grèce"
    //           }
    //         ]
    //     },
    //     {
    //         "_id": "5",
    //         "capitalLocation": {
    //           "coordinates": [
    //             71.449074,
    //             51.169392
    //           ],
    //           "type": "Point"
    //         },
    //         "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
    //         "videoUrl": "https://www.youtube.com/watch?v=vIo4gU9MHEM",
    //         "currency": "KZT",
    //         "ISOCode": "KAZ",
    //         "localizations": [
    //           {
    //             "lang": "en",
    //             "capital": "Nur-Sultan",
    //             "description": "Kazakhstan, officially the Republic of Kazakhstan, is a transcontinental country mainly located in Central Asia with a smaller portion west of the Ural River in Eastern Europe. It covers a land area of 2,724,900 square kilometres (1,052,100 sq mi), and shares land borders with Russia in the north, China in the east, and Kyrgyzstan, Uzbekistan, and Turkmenistan in the south while also adjoining a large part of the Caspian Sea in the southwest. Kazakhstan does not border Mongolia, although they are only 37 kilometers apart, separated by a short portion of the border between Russia and China.",
    //             "name": "Kazakhstan"
    //           },
    //           {
    //             "lang": "ru",
    //             "capital": "Нур-Султан",
    //             "description": "Казахста́н (каз. Қазақстан, Qazaqstan [qɑzɑqˈstɑn] Информация о файле слушать), официальное название — Респу́блика Казахста́н (каз. Қазақстан Республикасы; Qazaqstan Respublikasy), (аббревиатура РК) — государство в центре Евразии, бо́льшая часть которого относится к Азии, меньшая — к Европе. Площадь территории — 2 724 902 км². Население, по оценке государственного комитета по статистике на 1 октября 2020 года, составляет 18 809 210 человек. Плотность населения является одной из самых низких: менее 7 человек на квадратный километр. Столица — Нур-Султан. Крупнейший город с населением 1,977 млн человек — Алма-Ата. Занимает 9-е место в мире по территории, 2-е место среди стран СНГ (после России), 42-е — по объёму ВВП по ППС и 64-е — по численности населения.",
    //             "name": "Казахстан"
    //           },
    //           {
    //             "lang": "fr",
    //             "capital": "Noursoultan",
    //             "description": "Le Kazakhstan, en forme longue la république du Kazakhstan (en kazakh : Qazaqstan, Қазақстан, /qɑzɑqˈstɑn/ et Qazaqstan Respýblıkasy, Қазақстан Республикасы, en russe : Казахстан, Kazakhstán, /kɐzəxˈstɐn/ et Республика Казахстан, Respoublika Kazakhstán), est un pays situé majoritairement au nord de l'Asie centrale et en partie en Europe de l'Est (à l'ouest du fleuve Oural). Sa capitale est Noursoultan, anciennement nommée Astana.",
    //             "name": "Kazakhstan"
    //           }
    //         ]
    //     },
    //     {
    //         "_id": "6",
    //         "capitalLocation": {
    //           "coordinates": [
    //             2.349014,
    //             48.864716
    //           ],
    //           "type": "Point"
    //         },
    //         "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
    //         "videoUrl": "https://www.youtube.com/watch?v=KglC_fAY9QU",
    //         "currency": "EUR",
    //         "ISOCode": "FRA",
    //         "localizations": [
    //           {
    //             "lang": "en",
    //             "capital": "Paris",
    //             "description": "France (French: [fʁɑ̃s] Listen), officially the French Republic (French: République française), is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories.[XIII] The metropolitan area of France extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans. France borders Belgium, Luxembourg and Germany to the northeast, Switzerland, Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname and Brazil in the Americas. The country's eighteen integral regions (five of which are situated overseas) span a combined area of 643,801 km2 (248,573 sq mi) and a total population of 67.4 million (as of February 2021).[12] France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. Other major urban areas include Lyon, Marseille, Toulouse, Bordeaux, Lille and Nice. France, including its overseas territories, has the most time zones of any country, with a total of twelve.",
    //             "name": "France"
    //           },
    //           {
    //             "lang": "ru",
    //             "capital": "Париж",
    //             "description": "Фра́нция (фр. France, [fʁɑ̃s] Информация о файле слушать), официальное название — Францу́зская Респу́блика[11] (фр. République française, [ʁe.py.blik fʁɑ̃.sɛz] Информация о файле слушать), — трансконтинентальное государство, включающее основную территорию в Западной Европе и ряд заморских регионов и территорий. Столица — Париж. Девиз Республики — «Свобода, равенство, братство», её принцип — правление народа, народом и для народа.",
    //             "name": "Франция"
    //           },
    //           {
    //             "lang": "fr",
    //             "capital": "Paris",
    //             "description": "La France, en forme longue depuis 1875 la République française, est un État souverain transcontinental dont le territoire métropolitain est situé en Europe de l'Ouest. Ce dernier a des frontières terrestres avec la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie, l'Espagne et les deux principautés d'Andorre et de Monaco. La France dispose aussi d'importantes façades maritimes sur l'Atlantique et la Méditerranée. Son territoire ultramarin s'étend dans les océans Indien, Atlantique et Pacifique ainsi qu'en Amérique du Sud, et a des frontières terrestres avec le Brésil, le Suriname et les Pays-Bas.",
    //             "name": "France"
    //           }
    //         ]
    //     },
    //     {
    //         "_id": "7",
    //         "capitalLocation": {
    //           "coordinates": [
    //             127.024612,
    //             37.532600
    //           ],
    //           "type": "Point"
    //         },
    //         "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
    //         "videoUrl": "https://www.youtube.com/watch?v=tV1TxgiZUm0",
    //         "currency": "KRW",
    //         "ISOCode": "KOR",
    //         "localizations": [
    //           {
    //             "lang": "en",
    //             "capital": "Seoul",
    //             "description": "South Korea (Korean: 한국/韓國, RR: Hanguk; literally 남한/南韓, RR: Namhan, or 남조선/南朝鮮, MR: Namchosŏn in North Korean usage), officially the Republic of Korea (ROK; Korean: 대한민국/大韓民國, RR: Daehan Minguk), is a country in East Asia, constituting the southern part of the Korean Peninsula, and sharing a land border with North Korea. 25 million people, around half of the country's population of more than 51 million people, live in the Seoul Capital Area, the fifth-largest metropolitan area in the world.",
    //             "name": "South Korea"
    //           },
    //           {
    //             "lang": "ru",
    //             "capital": "Сеул",
    //             "description": "Респу́блика Коре́я (кор. 대한민국?, 大韓民國? Тэханмингук, устар. Коре́йская Респу́блика) — государство в Восточной Азии, широко известное под неофициальным названием Ю́жная Коре́я. Расположено в южной части Корейского полуострова. Имеет сухопутную границу с Корейской Народно-Демократической Республикой (государства разделены демилитаризованной зоной) и морскую — с Японией. С запада страна омывается Жёлтым морем, с востока — Японским морем, а с юга — Корейским проливом и Восточно-Китайским морем",
    //             "name": "Южная Корея"
    //           },
    //           {
    //             "lang": "fr",
    //             "capital": "Séoul",
    //             "description": "La Corée du Sud (en coréen Hanguk, 한국 (hangeul), 韓國 (hanja) Écouter), officiellement la république de Corée4,5,6 (en coréen Daehan Minguk, 대한민국 (hangeul), 大韓民國 (hanja) Écouter), est un pays d'Asie de l'Est qui couvre la moitié sud de la péninsule coréenne. Sa capitale est Séoul. La langue officielle est le coréen, dont l'écriture est le hangeul ou hangul et la monnaie le won. L'animal représentant le pays est le tigre.",
    //             "name": "Corée du Sud"
    //           }
    //         ]
    //     },
    //     {
    //         "_id": "8",
    //         "capitalLocation": {
    //           "coordinates": [
    //             139.745438,
    //             35.658581
    //           ],
    //           "type": "Point"
    //         },
    //         "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
    //         "videoUrl": "https://www.youtube.com/watch?v=CxuiFNYnEr4",
    //         "currency": "JPY",
    //         "ISOCode": "JPN",
    //         "localizations": [
    //           {
    //             "lang": "en",
    //             "capital": "Tokyo",
    //             "description": "Japan (Japanese: 日本, Nippon [ɲippoꜜɴ] (About this soundlisten) or Nihon [ɲihoꜜɴ] (About this soundlisten)) is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south. Part of the Ring of Fire, Japan spans an archipelago of 6852 islands covering 377,975 square kilometers (145,937 sq mi); the five main islands are Hokkaido, Honshu, Shikoku, Kyushu, and Okinawa. Tokyo is Japan's capital and largest city; other major cities include Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto.",
    //             "name": "Japan"
    //           },
    //           {
    //             "lang": "ru",
    //             "capital": "Токио",
    //             "description": "Япо́ния (яп. 日本 Нихон, Ниппон, букв. «место, где восходит Солнце»[8]), официальное название — Госуда́рство Япо́ния (яп. 日本国 «Нихон коку», «Ниппон коку» (инф.)), — островное государство в Восточной Азии. Находится в Тихом океане к востоку от Японского моря, Китая, Северной и Южной Кореи, России. Занимает территорию от Охотского моря на севере до Восточно-Китайского моря и Тайваня на юге. Поэтическое название — Страна восходящего солнца.",
    //             "name": "Япония"
    //           },
    //           {
    //             "lang": "fr",
    //             "capital": "Tokyo",
    //             "description": "Le Japon, en forme longue l'État du Japon, en japonais Nihon ou Nippon (日本?) et Nihon-koku ou Nippon-koku (日本国?) respectivement, est un pays insulaire de l'Asie de l'Est, situé entre l'océan Pacifique et la mer du Japon, à l'est de la Chine, de la Corée du Sud et de la Russie, et au nord de Taïwan. Étymologiquement, les kanjis (caractères chinois) qui composent le nom du Japon signifient « pays (国, kuni) d'origine (本, hon) du Soleil (日, ni) » ; c'est ainsi que le Japon est désigné comme le « pays du soleil levant ».",
    //             "name": "Japon"
    //           }
    //         ]
    //     },

    // ]

    const [countryCards, setCountryCards] = useState([])
    useEffect(() => {
      fetch(
        `https://rs-travel-app-api.herokuapp.com/countries`,
        {
          method: 'GET',
        }
      )
        .then((res) => res.json())
        .then((data) => setCountryCards(data))
    }, [])
  
   const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en')

  const value = { language, setLanguage }
  console.log('S-T-A-T-E', value)

  return (

   <LangContext.Provider value={value}>
    <Header />
      <Switch>
        <Route exact path="/" component={() => <MainPage countryCards={countryCards} />} />
        <Route path="/country/:id" component={() => <CountryPage countryCards={countryCards} />} />
      </Switch>
    </LangContext.Provider>


    
  )
}

export default App;
