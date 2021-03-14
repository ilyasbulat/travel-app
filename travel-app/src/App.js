import logo from './logo.svg';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import CountryPage from './components/CountryPage/CountryPage'
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

    const countryCards = [
        {
            "_id": "1",
            "capitalLocation": {
              "coordinates": [
                12.496365,
                41.902782
              ],
              "type": "Point"
            },
            "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
            "videoUrl": "https://youtu.be/FlRwssZYRM0",
            "currency": "EUR",
            "ISOCode": "ITA",
            "localizations": [
              {
                "lang": "en",
                "capital": "Rome",
                "description": "Italy (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]), is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.",
                "name": "Italy"
              },
              {
                "lang": "ru",
                "capital": "Рим",
                "description": "Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.  Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).  Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км.  Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов.  На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству.",
                "name": "Италия"
              },
              {
                "lang": "fr",
                "capital": "Rome",
                "description": "L'Italie /itali/ Écouter (en italien : Italia /iˈtaːlja/ Écouter), en forme longue la République italienne (en italien : Repubblica Italiana /reˈpubblika itaˈljaːna/ Écouter), est un pays d'Europe du Sud correspondant physiquement à une partie continentale, une péninsule située au centre de la mer Méditerranée et une partie insulaire constituée par les deux plus grandes îles de cette mer, la Sicile et la Sardaigne, et beaucoup d'autres îles plus petites (hormis la Corse, française depuis 1768). Elle est rattachée au reste du continent par le massif des Alpes. Le territoire italien correspond approximativement à la région géographique homonyme.",
                "name": "Italie"
              }
            ]
        },
        {
            "_id": "2",
            "capitalLocation": {
              "coordinates": [
                -0.1257,
                51.5085,
              ],
              "type": "Point"
            },
            "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
            "videoUrl": "https://youtu.be/FlRwssZYRM0",
            "currency": "EUR",
            "ISOCode": "GBR",
            "localizations": [
              {
                "lang": "en",
                "capital": "London",
                "description": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK), or Britain, is a sovereign country in north-western Europe, off the north-­western coast of the European mainland. The United Kingdom includes the island of Great Britain, the north-­eastern part of the island of Ireland, and many smaller islands within the British Isles. Northern Ireland shares a land border with the Republic of Ireland. Otherwise, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to the east, the English Channel to the south and the Celtic Sea to the south-west, giving it the 12th-longest coastline in the world. The Irish Sea separates Great Britain and Ireland. The total area of the United Kingdom is 94,000 square miles (240,000 km2).",
                "name": "United Kingdom"
              },
              {
                "lang": "ru",
                "capital": "Лондон",
                "description": "Великобрита́ния (русское название происходит от англ. Great Britain [ˌɡreɪt ˈbrɪtn]), или Соединённое Короле́вство (United Kingdom [jʊnaɪtɪd kɪŋdəm], сокращённо: UK), полная официальная форма — Соединённое Короле́вство Великобрита́нии и Се́верной Ирла́ндии (англ. The United Kingdom of Great Britain and Northern Ireland), — островное государство на северо-западе от континентальной Европы",
                "name": "Великобритания"
              },
              {
                "lang": "fr",
                "capital": "Londres",
                "description": "Le Royaume-Uni (prononcé en français : /ʁwajom‿yni/a Écouter), en forme longue le Royaume-Uni de Grande-Bretagne et d'Irlande du Nordb (en anglais : United Kingdom /juːˌnaɪtɪd ˈkɪŋdəm/c Écouter et United Kingdom of Great Britain and Northern Ireland)d, est un pays d'Europe de l'Ouest, ou selon certaines définitions, d'Europe du Nord, dont le territoire comprend l'île de Grande-Bretagne et la partie nord de l'île d'Irlande, ainsi que de nombreuses petites îles autour de l'archipel. Le territoire du Royaume-Uni partage une frontière terrestre avec la république d'Irlande, et est entouré par l'océan Atlantique au nord, la mer du Nord à l'est, la Manche au sud, la mer Celtique au sud-sud-ouest, la mer d'Irlande au sud-ouest et les mers intérieures de la côte ouest de l'Écosse au nord-ouest",
                "name": "Royaume-Uni"
              }
            ]
        },
        {
            "_id": "3",
            "capitalLocation": {
              "coordinates": [
                -3.7026,
                40.4165
              ],
              "type": "Point"
            },
            "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
            "videoUrl": "https://youtu.be/FlRwssZYRM0",
            "currency": "EUR",
            "ISOCode": "ESP",
            "localizations": [
              {
                "lang": "en",
                "capital": "Madrid",
                "description": "Spain (Spanish: España, [esˈpaɲa] (About this soundlisten)), formally the Kingdom of Spain[13] (Spanish: Reino de España),[a][b] is a country in Southwestern Europe with some pockets of territory across the Strait of Gibraltar and the Atlantic Ocean.[13] Its continental European territory is situated on the Iberian Peninsula. Its territory also includes two archipelagos: the Canary Islands off the coast of North Africa, and the Balearic Islands in the Mediterranean Sea. The African exclaves of Ceuta, Melilla, and Peñón de Vélez de la Gomera[14] make Spain the only European country to have a physical border with an African country (Morocco). Several small islands in the Alboran Sea are also part of Spanish territory.",
                "name": "Spain"
              },
              {
                "lang": "ru",
                "capital": "Мадрид",
                "description": "Испа́ния (исп. España, МФА: [esˈpaɲa]), официально Короле́вство Испа́ния (исп. Reino de España, МФА: [ˈreino ðe esˈpaɲa]) — трансконтинентальное суверенное государство на юго-западе Европы и частично в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть (80 %) Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь 504 782 км² (вместе с небольшими суверенными территориями на африканском побережье, городами Сеута и Мелилья), являясь четвёртой по величине страной в Европе (после России, Украины и Франции).",
                "name": "Испания"
              },
              {
                "lang": "fr",
                "capital": "Madrid",
                "description": "L'Espagne, en forme longue le royaume d'Espagne (respectivement en espagnol : España Écouter et Reino de España), est un pays d'Europe du Sud — et, selon les définitions, d'Europe de l'Ouest — qui occupe la plus grande partie de la péninsule Ibérique. En 2019, il s'agissait du vingt-huitième pays le plus peuplé du monde, avec 47 millions d'habitants.",
                "name": "Espagne"
              }
            ]
        },
        {
            "_id": "4",
            "capitalLocation": {
              "coordinates": [
                23.727539,
                37.983810
              ],
              "type": "Point"
            },
            "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
            "videoUrl": "https://youtu.be/FlRwssZYRM0",
            "currency": "EUR",
            "ISOCode": "GRC",
            "localizations": [
              {
                "lang": "en",
                "capital": "Athens",
                "description": "Greece (Greek: Ελλάδα, Ellada, [eˈlaða]), also known as Hellas,[b] and officially the Hellenic Republic,[12][c] is a country located in Southeast Europe. Its population is approximately 10.7 million as of 2018; Athens is its largest and capital city, followed by Thessaloniki. Situated on the southern tip of the Balkans, Greece is located at the crossroads of Europe, Asia, and Africa. It shares land borders with Albania to the northwest, North Macedonia and Bulgaria to the north, and Turkey to the northeast. The Aegean Sea lies to the east of the mainland, the Ionian Sea to the west, the Cretan Sea and the Mediterranean Sea to the south. Greece has the longest coastline on the Mediterranean Basin and the 11th longest coastline in the world at 13,676 km (8,498 mi) in length, featuring many islands, of which 227 are inhabited. Eighty percent of Greece is mountainous, with Mount Olympus being the highest peak at 2,918 metres (9,573 ft). The country consists of nine traditional geographic regions: Macedonia, Central Greece, the Peloponnese, Thessaly, Epirus, the Aegean Islands (including the Dodecanese and Cyclades), Thrace, Crete, and the Ionian Islands.",
                "name": "Greece"
              },
              {
                "lang": "ru",
                "capital": "Афины",
                "description": "Гре́ция (греч. Ελλάδα [eˈlaða] Информация о файле слушать, в древности — греч. Ελλάς [eˈlas] Информация о файле слушать), также Тре́тья Гре́ческая респу́блика, официально — Гре́ческая Респу́блика (греч. Ελληνική Δημοκρατία [eliniˈci ðimokraˈtia]) — государство в Южной Европе. Население — 10,8 млн чел. (на 1 января 2017 года, по оценкам Евростата), площадь территории — 131 957 км². Занимает 84-е место в мире по численности населения и 95-е по площади территории.",
                "name": "Греция"
              },
              {
                "lang": "fr",
                "capital": "Athènes",
                "description": "La Grèce, aussi appelée Hellas ou francisé en Hellade, en forme longue la République hellénique, (en grec : Ελλάδα / Elláda ou officiellement Ελληνική Δημοκρατία / Ellinikí Dimokratía, en grec ancien et en katharévousa Ἑλλάς / Hellás) est un pays d’Europe du Sud. D'une superficie de 131 957 km2 pour un peu moins de onze millions d'habitants, le pays partage des frontières terrestres avec l’Albanie, la Macédoine du Nord, la Bulgarie et la Turquie et des frontières maritimes avec Chypre, l'Albanie, l'Italie, la Libye, l'Égypte et la Turquie (cette dernière est la source du contentieux gréco-turc en mer Égée). La mer Ionienne à l'ouest et la mer Égée à l'est, parties de la mer Méditerranée, encadrent le pays dont le cinquième du territoire est constitué de plus de 9 000 îles et îlots dont près de 200 sont habités. De plus, 80 % de son territoire est constitué de montagnes dont la plus haute est le mont Olympe, dont le sommet culmine à 2 917 mètres.",
                "name": "Grèce"
              }
            ]
        },
        {
            "_id": "5",
            "capitalLocation": {
              "coordinates": [
                71.449074,
                51.169392
              ],
              "type": "Point"
            },
            "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
            "videoUrl": "https://youtu.be/FlRwssZYRM0",
            "currency": "EUR",
            "ISOCode": "KAZ",
            "localizations": [
              {
                "lang": "en",
                "capital": "Nur-Sultan",
                "description": "Italy (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]), is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.",
                "name": "Kazakhstan"
              },
              {
                "lang": "ru",
                "capital": "Рим",
                "description": "Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.  Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).  Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км.  Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов.  На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству.",
                "name": "Италия"
              },
              {
                "lang": "fr",
                "capital": "Madrid",
                "description": "L'Espagne, en forme longue le royaume d'Espagne (respectivement en espagnol : España Écouter et Reino de España), est un pays d'Europe du Sud — et, selon les définitions, d'Europe de l'Ouest — qui occupe la plus grande partie de la péninsule Ibérique. En 2019, il s'agissait du vingt-huitième pays le plus peuplé du monde, avec 47 millions d'habitants.",
                "name": "Espagne"
              }
            ]
        },
        {
            "_id": "6",
            "capitalLocation": {
              "coordinates": [
                2.349014,
                48.864716
              ],
              "type": "Point"
            },
            "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
            "videoUrl": "https://youtu.be/FlRwssZYRM0",
            "currency": "EUR",
            "ISOCode": "FRA",
            "localizations": [
              {
                "lang": "en",
                "capital": "Paris",
                "description": "Italy (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]), is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.",
                "name": "France"
              },
              {
                "lang": "ru",
                "capital": "Рим",
                "description": "Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.  Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).  Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км.  Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов.  На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству.",
                "name": "Италия"
              },
              {
                "lang": "fr",
                "capital": "Madrid",
                "description": "L'Espagne, en forme longue le royaume d'Espagne (respectivement en espagnol : España Écouter et Reino de España), est un pays d'Europe du Sud — et, selon les définitions, d'Europe de l'Ouest — qui occupe la plus grande partie de la péninsule Ibérique. En 2019, il s'agissait du vingt-huitième pays le plus peuplé du monde, avec 47 millions d'habitants.",
                "name": "Espagne"
              }
            ]
        },
        {
            "_id": "7",
            "capitalLocation": {
              "coordinates": [
                127.024612,
                37.532600
              ],
              "type": "Point"
            },
            "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
            "videoUrl": "https://youtu.be/FlRwssZYRM0",
            "currency": "EUR",
            "ISOCode": "KOR",
            "localizations": [
              {
                "lang": "en",
                "capital": "Seoul",
                "description": "Italy (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]), is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.",
                "name": "South Korea"
              },
              {
                "lang": "ru",
                "capital": "Рим",
                "description": "Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.  Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).  Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км.  Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов.  На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству.",
                "name": "Италия"
              },
              {
                "lang": "fr",
                "capital": "Madrid",
                "description": "L'Espagne, en forme longue le royaume d'Espagne (respectivement en espagnol : España Écouter et Reino de España), est un pays d'Europe du Sud — et, selon les définitions, d'Europe de l'Ouest — qui occupe la plus grande partie de la péninsule Ibérique. En 2019, il s'agissait du vingt-huitième pays le plus peuplé du monde, avec 47 millions d'habitants.",
                "name": "Espagne"
              }
            ]
        },
        {
            "_id": "8",
            "capitalLocation": {
              "coordinates": [
                139.745438,
                35.658581
              ],
              "type": "Point"
            },
            "imageUrl": "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
            "videoUrl": "https://youtu.be/FlRwssZYRM0",
            "currency": "EUR",
            "ISOCode": "JPN",
            "localizations": [
              {
                "lang": "en",
                "capital": "Tokyo",
                "description": "Italy (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]), is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.",
                "name": "Japan"
              },
              {
                "lang": "ru",
                "capital": "Рим",
                "description": "Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.  Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).  Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км.  Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов.  На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству.",
                "name": "Италия"
              },
              {
                "lang": "fr",
                "capital": "Madrid",
                "description": "L'Espagne, en forme longue le royaume d'Espagne (respectivement en espagnol : España Écouter et Reino de España), est un pays d'Europe du Sud — et, selon les définitions, d'Europe de l'Ouest — qui occupe la plus grande partie de la péninsule Ibérique. En 2019, il s'agissait du vingt-huitième pays le plus peuplé du monde, avec 47 millions d'habitants.",
                "name": "Espagne"
              }
            ]
        },

    ]


  return (
   <>
    <Header />
    <Switch>
    
      {/* <MainPage /> */}
      {/* <Route exact path="/" component={MainPage} /> */}
      {/* <Route path="/country/:id" component={CountryPage} /> */}
      <Route exact path="/" component={() => <MainPage countryCards={countryCards} />} />
      <Route path="/country/:id" component={() => <CountryPage countryCards={countryCards} />} />
    </Switch>

    </>
  );
}

export default App;
