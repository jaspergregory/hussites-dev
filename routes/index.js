var express = require('express');
var router = express.Router();

var items = [{"end": null, "country": "bohemia", "content": "Hussites inspired by Lollards & John Wycliffe's English Bible.", "start": "1410-01-01", "group": "hussite", "id": 33}, {"end": null, "country": "england", "content": "Lollard Revolt in England", "start": "1413-01-01", "group": "lollards", "id": 34}, {"end": null, "country": "turkey", "content": "Gemistus Pletho writes Emperor with plans to reform Byzantium along the lines of Plato's Republic.", "start": "1415-01-01", "group": "hermetic", "id": 35}, {"end": "1434-01-01", "country": "bohemia", "content": " Hussite Rebellion in Bohemia. -Radical Taborites led by Jan _i_ka. Cathars, Waldensians and Bogomils are said to have joined.", "start": "1419-01-01", "group": "hussite", "id": 36}, {"end": null, "country": "bohemia", "content": "Adamite radicals suppressed by _i_ka", "start": "1421-01-01", "group": "hussite", "id": 37}, {"end": null, "country": "italy", "content": "Cosimo Medici Funds the translation of Plato and Hermetic Corpus by Marsilio Ficino", "start": "1434-01-01", "group": "hermetic", "id": 38}, {"end": null, "country": "italy", "content": "Cosimo appoint Ficino as head of the new Platonic Academy in Florence.", "start": "1434-01-01", "group": "hermetic", "id": 39}, {"end": null, "country": "italy", "content": "Pletho returns to the Peloponnesian peninsula and founds a mystery school in Mistra.", "start": "1434-01-01", "group": "hermetic", "id": 40}, {"end": "1494-01-01", "country": "italy", "content": "Platonic Academy", "start": "1434-01-01", "group": "hermetic", "id": 41}, {"end": null, "country": "bohemia", "content": "Radical Taborites defeated by the Hussite High Church, the Ultaquists.", "start": "1434-01-01", "group": "hussite", "id": 42}, {"end": null, "country": "italy", "content": "Gemistus Pletho meets Cosimo de Medici at Council of Florence.", "start": "1439-01-01", "group": "hermetic", "id": 43}, {"end": null, "country": "turkey", "content": "Constantinople falls, introducing Greek scholarship to the West", "start": "1453-01-01", "group": "hermetic", "id": 44}, {"end": null, "country": "germany", "content": "First Gutenberg Bible in Mainz, the Rhineland, near Frankfurt.", "start": "1455-01-01", "group": "hermetic", "id": 45}, {"end": null, "country": "bohemia", "content": "Communalist Unitas Fratrum, the Unity of Brethren, founded in Bohemia as a remnant of the Radical Taborites", "start": "1467-01-01", "group": "hussite", "id": 46}, {"end": null, "country": "bohemia", "content": "Catholic King of Bohemia begins a kind of counterreformation.", "start": "1478-01-01", "group": "hussite", "id": 47}, {"end": null, "country": "italy", "content": "As head of the Platonic Academy, Ficino publishes Plato and Hermetic Corpus ", "start": "1484-01-01", "group": "hermetic", "id": 48}, {"end": null, "country": "bohemia", "content": "Agreement with Catholics makes Utraquists the party of power", "start": "1485-01-01", "group": "hussite", "id": 49}, {"end": null, "country": "italy", "content": "Giovanni Pico della Mirandola defended his Manifesto of the Renaissance.", "start": "1486-01-01", "group": "hermetic", "id": 50}, {"end": null, "country": "swabia", "content": "Johann Reuchlin brings Hermetic Enlightenment to Swabia, brought before inquisition in 1513.", "start": "1490-01-01", "group": "christian cabala", "id": 51}, {"end": "1500-01-01", "country": "bohemia", "content": "With the Utraquists discredited. Brethren Reform spreads through the towns of Bohemia", "start": "1490-01-01", "group": "hussite", "id": 52}, {"end": null, "country": "swabia", "content": "Swabia will be a center of the Hermetic Enlightenment. During the Pietist period, The Romantic Era, finally giving rise to Hegel\ufffd Political Theology.", "start": "1491-01-01", "group": "christian cabala", "id": 53}, {"end": null, "country": "portugal", "content": "Expulsion of Jews from Spain and Portugal", "start": "1492-01-01", "group": "christian cabala", "id": 54}, {"end": null, "country": "italy", "content": "Florence falls to Charles VII's French Armies, ending the Italian Hermetic Enlightement", "start": "1494-01-01", "group": "hermetic", "id": 55}, {"end": null, "country": "bohemia", "content": "300 to 400 Brethren congregations. Persecution drives many Brethren to Moravia and Silesia", "start": "1500-01-01", "group": "unitas fratrum", "id": 64}, {"end": null, "country": "europe", "content": "Erasmus retranslates Greek bible into Latin", "start": "1516-01-01", "group": "reformed", "id": 65}, {"end": null, "country": "", "content": "Ninety-Five Theses of Martin Luther", "start": "1517-01-01", "group": "lutheran", "id": 66}, {"end": null, "country": "moravia", "content": "Moravia becomes destination for Radical Anabaptists", "start": "1520-01-01", "group": "anabaptist", "id": 67}, {"end": null, "country": "germany", "content": "Muntzer advocates violence in cause of Reform", "start": "1521-01-01", "group": "anabaptist", "id": 68}, {"end": null, "country": "germany", "content": "Luther publishes bible in Common German", "start": "1522-01-01", "group": "lutheran", "id": 69}, {"end": null, "country": "zurich", "content": "Zwingli founds the Zurich Reformation", "start": "1522-01-01", "group": "reformed", "id": 70}, {"end": null, "country": "germany", "content": "Peasant's Revolt", "start": "1524-01-01", "group": "anabaptist", "id": 71}, {"end": null, "country": "england", "content": " Tyndale publishes first Bible based on Greek and Hebrew.", "start": "1526-01-01", "group": "reformed", "id": 72}, {"end": null, "country": "zurich", "content": "Zurich Beeldenstorm", "start": "1523-01-01", "group": "reformed", "id": 73}, {"end": null, "country": "zurich", "content": "Swiss Brethren Anabaptists form in Zurich, because the Reforms are not moving fast enough", "start": "1525-01-01", "group": "reformed", "id": 74}, {"end": null, "country": "munster", "content": "Beeldenstorm in Munster.", "start": "1534-01-01", "group": "anabaptist", "id": 75}, {"end": null, "country": "munster", "content": "Menno Simons converts to Anabaptism and forms Mennonites.", "start": "1535-01-01", "group": "anabaptist", "id": 76}, {"end": null, "country": "england", "content": "English Reformation", "start": "1535-01-01", "group": "reformed", "id": 77}, {"end": null, "country": "germany", "content": "Munster occupied by Dutch Anabaptists. Polygamy legalized and Community of Goods for everyone.", "start": "1535-01-01", "group": "anabaptist", "id": 78}, {"end": null, "country": "holland", "content": "Anabaptists suppressed in Holland.", "start": "1536-01-01", "group": "anabaptist", "id": 79}, {"end": "1600-01-01", "country": "palestine", "content": " Cabalistic Movement in Safed", "start": "1530-01-01", "group": "cabala", "id": 80}, {"end": null, "country": "poland", "content": "Copernicus's heliocentrism published during the Polish Renaissance.", "start": "1543-01-01", "group": "science", "id": 81}, {"end": null, "country": "rome", "content": "Jesuits founded in Rome", "start": "1540-01-01", "group": "jesuit", "id": 82}, {"end": null, "country": "rome", "content": "Papal bull allows Jesuits to expand through the decade.", "start": "1550-01-01", "group": "jesuit", "id": 83}, {"end": null, "country": "germany", "content": "Peace of Augsburg divides Holy Roman Empire between Catholics, Lutherans and the Reformed.", "start": "1550-01-01", "group": "reformed", "id": 84}, {"end": null, "country": "england", "content": "Elisabeth I crowned. She ends radical reformation with a statist church compromise.", "start": "1558-01-01", "group": "reformed", "id": 85}, {"end": "1568-01-01", "country": "france", "content": "Huguenots gain ground in France, especially in the fifties", "start": "1530-01-01", "group": "reformed", "id": 86}, {"end": null, "country": "rome", "content": "Jesuits operate 74 colleges on 3 continents.", "start": "1556-01-01", "group": "jesuit", "id": 87}, {"end": null, "country": "bohemia", "content": "The Jesuits set up shop in Prague", "start": "1566-01-01", "group": "jesuit", "id": 88}, {"end": null, "country": "netherlands", "content": "1566 Beeldenstorm spreads through the Low Countries as Catholic imagery is destroyed.", "start": "1566-01-01", "group": "reformed", "id": 89}, {"end": null, "country": "poland", "content": "1569: 2-3 percent of Poland are Brethren", "start": "1569-01-01", "group": "unitas fratrum", "id": 90}, {"end": null, "country": "france", "content": "1560 Huguenot Iconoclastic Beeldenstorm", "start": "1560-01-01", "group": "reformed", "id": 91}, {"end": null, "country": "bohemia", "content": "1576 The Alchemist Emperor Rudolph II begins a period of Bohemian Enlightenment. Both Brahe and Kepler attended his court. Science and Instrument making flourish", "start": "1576-01-01", "group": "hermetic", "id": 92}, {"end": null, "country": "netherlands", "content": "1572 Sea Beggars take Zeeland", "start": "1572-01-01", "group": "reformed", "id": 93}, {"end": null, "country": "poland", "content": "1573- Statutes of Toleration in Poland-Lithuania.", "start": "1573-01-01", "group": "reformed", "id": 94}, {"end": null, "country": "netherlands", "content": "1585 The Dutch Revolt breaks out.", "start": "1585-01-01", "group": "reformed", "id": 95}, {"end": null, "country": "england", "content": "1588 Spanish Armada destroyed.", "start": "1588-01-01", "group": "reformed", "id": 96}, {"end": null, "country": "netherlands", "content": "1585 Fall of Antwerp leads to flood of refugees to Holland.", "start": "1585-01-01", "group": "reformed", "id": 97}, {"end": "1619-01-01", "country": "netherlands", "content": "1588-1619 The Republican Oldenbarnevelt governs Holland and initiates a ninety year Golden Age of liberty and mercantile growth under the Federal Structure", "start": "1588-01-01", "group": "reformed", "id": 98}, {"end": "1600-01-01", "country": "netherlands", "content": "Maurice van Nassau wins with new tactics", "start": "1590-01-01", "group": "reformed", "id": 99}, {"end": null, "country": "scotland", "content": "1590 First esoteric Mason Lodges in Scotland. It percolates for a century until London Grand Lodge founded in 1717.", "start": "1590-01-01", "group": "masonic", "id": 100}, {"end": null, "country": "italy", "content": "1591 Galileo appointed professor in Pisa", "start": "1591-01-01", "group": "science", "id": 101}, {"end": null, "country": "italy", "content": "1593 Cabbalist Giodano Bruno tried by the Inquisition and Burned at the stake", "start": "1593-01-01", "group": "cabala", "id": 102}, {"end": "1100-01-01", "country": "europe", "content": "11th c. Towns grew enough to host a literate group of heretics", "start": "1000-01-01", "group": "langue duree", "id": 104}, {"end": null, "country": "italy", "content": "1020-21 Jews accused in Rome of mocking crucifix", "start": "1020-01-01", "group": "jews", "id": 105}, {"end": null, "country": "italy", "content": "1057 the Pataria begin preaching in Milan. They gained support from urban poor", "start": "1057-01-01", "group": "paterines", "id": 106}, {"end": "1070-01-01", "country": "italy", "content": "1057-1070 Pataria meld religion and politics in northern Italy", "start": "1057-01-01", "group": "paterines", "id": 107}, {"end": null, "country": "italy", "content": "1095 First Crusade called by pope Urban II", "start": "1095-01-01", "group": "voluntary poverty", "id": 108}, {"end": null, "country": "italy", "content": "1099-1118 Pope Paschal II declares that the Church should divest itself of wealth", "start": "1099-01-01", "group": "voluntary poverty", "id": 109}, {"end": "1100-01-01", "country": "europe", "content": "11th c. Reform Movement puts a strong emphasis on preaching ", "start": "1000-01-01", "group": "reform", "id": 110}, {"end": null, "country": "france", "content": "1015 20 heretics at  came to light at Orleans", "start": "1015-01-01", "group": "", "id": 111}, {"end": null, "country": "france", "content": "1022 First medieval executions for heresy in Orleans", "start": "1022-01-01", "group": "", "id": 112}, {"end": null, "country": "france", "content": "1084 Carthusian Order of Saint Bruno of Cologne founded first hermitage in French Alps, Beginning the Voluntary Poverty Movement", "start": "1084-01-01", "group": "voluntary poverty", "id": 113}, {"end": null, "country": "france", "content": "1098 Citeaux Abbey founded near dijon, beginning Cistercian voluntary poverty reform movement", "start": "1098-01-01", "group": "voluntary poverty", "id": 114}, {"end": "1012-01-01", "country": "france-gremany", "content": "1010-1012 Anti jewish riots in N. France and Germany.", "start": "1010-01-01", "group": "jews", "id": 115}, {"end": null, "country": "north Italy", "content": "1130 Arnold of Brescia, student of Abelard, proclaims the Brescian Commune, takes on Bernard of Clairvaux", "start": "1130-01-01", "group": "paterines", "id": 117}, {"end": null, "country": "rome", "content": "1140 Gratian organizes and rationalizes canon law and melded with Roman law. (Decretum)", "start": "1140-01-01", "group": "catholic", "id": 118}, {"end": "1155-01-01", "country": "rome", "content": "1144-1155 The Roman Commune takes over Rome. Arnold joins", "start": "1144-01-01", "group": "paterines", "id": 119}, {"end": null, "country": "north Italy", "content": "1140s Catharism spreads to Northern Italy", "start": "1140-01-01", "group": "cathar", "id": 120}, {"end": "1183-01-01", "country": "north Italy", "content": "1154-83 Emperor Frederick Barbarossa tries to subjugate North Italian Cities ", "start": "1154-01-01", "group": "paterines", "id": 121}, {"end": null, "country": "north Italy", "content": "Ugo Speroni begins extreme anti clerical movement in late 1170s Lombardy.", "start": "1170-01-01", "group": "paterines", "id": 122}, {"end": null, "country": "france-italy-spain", "content": "Catharism splits between extreme and moderate wings", "start": "1170-01-01", "group": "cathar", "id": 123}, {"end": null, "country": "rome", "content": "1184 at Verona Pope issues decree defining heresy as a legal offense, with support of Emperor Frederick I", "start": "1184-01-01", "group": "catholic", "id": 124}, {"end": null, "country": "france-italy", "content": "After 1184 Waldensians move into the Alps and Lombardy which produced Paterians and Arnold", "start": "1184-01-01", "group": "waldensians", "id": 125}, {"end": null, "country": "south italy", "content": "1183 Joachim of Fiore visited by the Holy Spirit", "start": "1183-01-01", "group": "joachimites", "id": 126}, {"end": "1250-01-01", "country": "south italy", "content": "1194-1250 Frederick II, Holy Roman Emperor, brings early Renaissance to Southern Italy.", "start": "1194-01-01", "group": "renaissance", "id": 127}, {"end": null, "country": "france", "content": "1108 reformist Victorine School forms in Paris Abbey.", "start": "1108-01-01", "group": "scholasticism", "id": 128}, {"end": null, "country": "france", "content": "Bernard of Clairvaux entered Citeaux Abbey in the early 1110s with 30 followers", "start": "1110-01-01", "group": "monastic reform", "id": 129}, {"end": null, "country": "france", "content": "1120 Premonstratensian, Norbertine regular canons founded in northern France. Semi-monastic Augustinians", "start": "1120-01-01", "group": "monastic reform", "id": 130}, {"end": null, "country": "france", "content": "1121 aspects of Abelard's Scholastic teaching condemned.", "start": "1121-01-01", "group": "scholasticism", "id": 131}, {"end": null, "country": "southern france", "content": "1140 Heretic Peter of Bruys (Provencal Alps) dies. Attracted huge crowd in Narbonne, S. France.", "start": "1140-01-01", "group": "heretics", "id": 132}, {"end": null, "country": "france", "content": "1141 Peter Abelard excommunicated after conflict with Bernard of Clairvaux.", "start": "1141-01-01", "group": "scholasticism", "id": 133}, {"end": null, "country": "france", "content": "1145 Heretic Peter of Lausanne (french alps) dies", "start": "1145-01-01", "group": "heretics", "id": 134}, {"end": null, "country": "france", "content": "1173 Valdes has a conversion experience and starts  Lay Literate Reform Movement in Lyons ", "start": "1173-01-01", "group": "waldensians", "id": 135}, {"end": null, "country": "france", "content": "Valdes translates a portion of the Bible into French", "start": "1173-01-01", "group": "waldensians", "id": 136}, {"end": null, "country": "france", "content": "1179 Pope tells Valdes he must have a license to preach", "start": "1179-01-01", "group": "waldensians", "id": 137}, {"end": null, "country": "france", "content": "1180 Valdes preaches justification by illumination, and bible interpretation by individuals under influence of Holy Spirit", "start": "1180-01-01", "group": "waldensians", "id": 138}, {"end": null, "country": "france", "content": "1182 Valdes Excommunicated", "start": "1182-01-01", "group": "waldensians", "id": 139}, {"end": null, "country": "france", "content": "By end of the Century, radical Cathars had taken over from mitigated Cathars.", "start": "1190-01-01", "group": "cathar", "id": 140}, {"end": null, "country": "france", "content": "Pp. 51-54 Russel (1992), great description of Cathar theology.", "start": "1190-01-01", "group": "cathar", "id": 141}, {"end": null, "country": "france-germany-italy-spain", "content": "1160 Catharism has spread to Rhineland, Southern France and Catalonia", "start": "1160-01-01", "group": "cathar", "id": 142}, {"end": "1200-01-01", "country": "europe", "content": "12th Century Scholasticism rises along with dialectical method.", "start": "1100-01-01", "group": "scholasticism", "id": 143}, {"end": "End-01-01", "country": "Country", "content": "Content", "start": "Begin-01-01", "group": "Theme", "id": 144}, {"end": null, "country": "south italy", "content": "1200 Joachimites publish millenarian Liber figurarum.", "start": "1200-01-01", "group": "joachimites", "id": 145}, {"end": null, "country": "italy", "content": "1209 Franciscan order founded", "start": "1209-01-01", "group": "joachimites", "id": 146}, {"end": null, "country": "rome", "content": "1215 decree forbids new spiritual orders. Repeated in 1274", "start": "1215-01-01", "group": "catholic", "id": 147}, {"end": null, "country": "rome-hre", "content": "1230 Laws against Heretics codified by both spiritual and secular authorities", "start": "1230-01-01", "group": "heretics", "id": 148}, {"end": "1241-01-01", "country": "rome-balkans", "content": "1235-1241 Pope Gregory IX sends Hungarian crusade against the Bogomils of the Balkans", "start": "1235-01-01", "group": "bogomil", "id": 149}, {"end": null, "country": "italy", "content": "Joachimism mixes with Franciscans and forms the Spiritual Franciscans", "start": "1240-01-01", "group": "joachimites", "id": 150}, {"end": null, "country": "lombardy", "content": "1260 The Apostolic Brethren founded. The Apostolici believed that the New Age would be ushered in by a return to apostolic purity.", "start": "1260-01-01", "group": "joachimites", "id": 151}, {"end": null, "country": "italy", "content": "1298 Massacre of Jews begins a period of pograms", "start": "1298-01-01", "group": "jews", "id": 152}, {"end": null, "country": "languedoc", "content": "1208 21 year Albegensian Crusade against Cathars launched", "start": "1208-01-01", "group": "cathar", "id": 153}, {"end": null, "country": "south france", "content": "1216 the Order of Preachers (Dominicans) founded to fight Heresy. Leading anti-heresy preachers in Southern France.", "start": "1216-01-01", "group": "scholasticism", "id": 154}, {"end": null, "country": "rome", "content": "1225 Eriugena's 9th c. Neoplatonism condemned as Heretical.", "start": "1225-01-01", "group": "heretics", "id": 155}, {"end": "1270-01-01", "country": "paris", "content": "1250s-60s Aristotelean Realism triumphs at University of Paris. Leading Dominicans were Thomas Aquinas and Albert the Great", "start": "1250-01-01", "group": "scholasticism", "id": 156}, {"end": null, "country": "paris", "content": "1277 Bishop of Paris condemns certain Aristotelian ideas and separates Theology, Philosophy and the Arts.", "start": "1277-01-01", "group": "scholasticism", "id": 157}, {"end": null, "country": "italy", "content": "1274 Spiritualist Franciscans led by Orvi split from Covenantal Franciscans.", "start": "1274-01-01", "group": "joachimites", "id": 158}, {"end": null, "country": "italy", "content": "1270 Orvi argues that Francis had initiated a New Age of Spirit", "start": "1270-01-01", "group": "joachimites", "id": 159}, {"end": "End-01-01", "country": "Country", "content": "Content", "start": "Begin-01-01", "group": "Theme", "id": 160}, {"end": null, "country": "italy", "content": "1300 Apostolici's leader declare them the true church. The New Age would begin when everyone adopted the apostolic life.", "start": "1300-01-01", "group": "joachimites", "id": 161}, {"end": null, "country": "provence-lombardy", "content": "1317 Pope condemns Spirituals, but they remain active in Provence and Lombardy.", "start": "1317-01-01", "group": "joachimites", "id": 162}, {"end": null, "country": "italy", "content": "Spiritualist Angelo da Clareno declares that the Pope and Emperor are followers of the Antichrist.", "start": "1320-01-01", "group": "joachimites", "id": 163}, {"end": null, "country": "rome", "content": "In 1323 Pope John XXII issued a decree stating that Jesus and the Apostles approved of private property. ", "start": "1323-01-01", "group": "joachimites", "id": 164}, {"end": "1417-01-01", "country": "rome", "content": "1378-1417 Great Schism", "start": "1378-01-01", "group": "catholic", "id": 165}, {"end": null, "country": "france", "content": "Marguerite Porete of Hainaut condemned as heretic. She had written spiritual book 'The Mirror of Simple Souls'", "start": "1300-01-01", "group": "heretics", "id": 166}, {"end": null, "country": "france", "content": "1318 Four Spiritualists burned at the stake.", "start": "1318-01-01", "group": "joachimites", "id": 167}, {"end": "1350-01-01", "country": "france", "content": "1348-50 Huge Massacre of Jews, accused of spreading Black Death", "start": "1348-01-01", "group": "jews", "id": 168}, {"end": null, "country": "france", "content": "1358 French Peasant's Rebellion", "start": "1358-01-01", "group": "revolt", "id": 169}, {"end": null, "country": "poland", "content": "1387 Lithuania converts from paganism to Christianity.", "start": "1387-01-01", "group": "catholic", "id": 170}, {"end": "1346-01-01", "country": "bohemia", "content": "1310-1346 John of Bohemia", "start": "1310-01-01", "group": "renaissance", "id": 171}, {"end": "1382-01-01", "country": "hungary", "content": "1342-1382 Louis The Great of Hungary. Takes over Balkans.", "start": "1342-01-01", "group": "renaissance", "id": 172}, {"end": "1379-01-01", "country": "bohemia-hre", "content": "1346-1379 Charles IV turns Prague into capitol of Holy Roman Empire.", "start": "1346-01-01", "group": "renaissance", "id": 173}, {"end": null, "country": "bohemia", "content": "1348 University of Prague founded", "start": "1348-01-01", "group": "renaissance", "id": 174}, {"end": null, "country": "bohemia", "content": "Charles conducts an inquisition to root out Walsensians.", "start": "1350-01-01", "group": "catholic", "id": 175}, {"end": null, "country": "bohemia-hre", "content": "1356 Golden Bull reorganizes HRE. Creates 7 electors and cements Bohemia's influence.", "start": "1356-01-01", "group": "reform", "id": 176}, {"end": null, "country": "england", "content": "1377 Pope Gregory VII condemns Wyclif's views", "start": "1377-01-01", "group": "lollards", "id": 177}, {"end": null, "country": "england", "content": "1377 Wyclif proclaims the infallibility of the Bible", "start": "1377-01-01", "group": "lollards", "id": 178}, {"end": null, "country": "england", "content": "1381 English Peasant's Rebellion", "start": "1381-01-01", "group": "lollards", "id": 179}, {"end": null, "country": "england", "content": "1382 Wyclifians purged from Oxford.", "start": "1382-01-01", "group": "lollards", "id": 180}, {"end": null, "country": "england", "content": "Lollardry takes root as a sort of early Methodism.", "start": "1390-01-01", "group": "lollards", "id": 181}, {"end": null, "country": "england", "content": "Lollards emphasized preaching.", "start": "1390-01-01", "group": "lollards", "id": 182}, {"end": null, "country": "germany", "content": "1329 Meister Eckhart's work condemned as heresy.", "start": "1329-01-01", "group": "heretics", "id": 183}, {"end": null, "country": "germany-netherlands", "content": "Devotio Moderna in Germany and the Netherlands", "start": "1370-01-01", "group": "devotio moderna", "id": 184}, {"end": null, "country": "netherlands", "content": "Gerard Groote founds the Brethren of the Common Life in Deventer. Their schools become famous.", "start": "1370-01-01", "group": "devotio moderna", "id": 185}];

var groups = [{"content": "anabaptist", "value": 1520, "id": "anabaptist"}, {"content": "bogomil", "value": 1235, "id": "bogomil"}, {"content": "cabala", "value": 1530, "id": "cabala"}, {"content": "cathar", "value": 1140, "id": "cathar"}, {"content": "catholic", "value": 1140, "id": "catholic"}, {"content": "christian cabala", "value": 1490, "id": "christian cabala"}, {"content": "devotio moderna", "value": 1370, "id": "devotio moderna"}, {"content": "heretics", "value": 1140, "id": "heretics"}, {"content": "hermetic", "value": 1415, "id": "hermetic"}, {"content": "hussite", "value": 1410, "id": "hussite"}, {"content": "jesuit", "value": 1540, "id": "jesuit"}, {"content": "jews", "value": 1010, "id": "jews"}, {"content": "joachimites", "value": 1183, "id": "joachimites"}, {"content": "langue duree", "value": 1000, "id": "langue duree"}, {"content": "lollards", "value": 1377, "id": "lollards"}, {"content": "lutheran", "value": 1517, "id": "lutheran"}, {"content": "masonic", "value": 1590, "id": "masonic"}, {"content": "monastic reform", "value": 1110, "id": "monastic reform"}, {"content": "paterines", "value": 1057, "id": "paterines"}, {"content": "reform", "value": 1000, "id": "reform"}, {"content": "reformed", "value": 1516, "id": "reformed"}, {"content": "renaissance", "value": 1194, "id": "renaissance"}, {"content": "revolt", "value": 1358, "id": "revolt"}, {"content": "scholasticism", "value": 1100, "id": "scholasticism"}, {"content": "science", "value": 1543, "id": "science"}, {"content": "unitas fratrum", "value": 1500, "id": "unitas fratrum"}, {"content": "voluntary poverty", "value": 1084, "id": "voluntary poverty"}, {"content": "waldensians", "value": 1173, "id": "waldensians"}];

//var groups = [{"content": "anabaptist", "value": 7, "id": "anabaptist"}, {"content": "bogomil", "value": 1, "id": "bogomil"}, {"content": "cabala", "value": 2, "id": "cabala"}, {"content": "cathar", "value": 6, "id": "cathar"}, {"content": "catholic", "value": 6, "id": "catholic"}, {"content": "christian cabala", "value": 3, "id": "christian cabala"}, {"content": "devotio moderna", "value": 2, "id": "devotio moderna"}, {"content": "heretics", "value": 6, "id": "heretics"}, {"content": "hermetic", "value": 12, "id": "hermetic"}, {"content": "hussite", "value": 7, "id": "hussite"}, {"content": "jesuit", "value": 4, "id": "jesuit"}, {"content": "jews", "value": 4, "id": "jews"}, {"content": "joachimites", "value": 12, "id": "joachimites"}, {"content": "langue duree", "value": 1, "id": "langue duree"}, {"content": "lollards", "value": 7, "id": "lollards"}, {"content": "lutheran", "value": 2, "id": "lutheran"}, {"content": "masonic", "value": 1, "id": "masonic"}, {"content": "monastic reform", "value": 2, "id": "monastic reform"}, {"content": "paterines", "value": 6, "id": "paterines"}, {"content": "reform", "value": 2, "id": "reform"}, {"content": "reformed", "value": 18, "id": "reformed"}, {"content": "renaissance", "value": 5, "id": "renaissance"}, {"content": "revolt", "value": 1, "id": "revolt"}, {"content": "scholasticism", "value": 7, "id": "scholasticism"}, {"content": "science", "value": 2, "id": "science"}, {"content": "Theme", "value": 2, "id": "Theme"}, {"content": "unitas fratrum", "value": 2, "id": "unitas fratrum"}, {"content": "voluntary poverty", "value": 4, "id": "voluntary poverty"}, {"content": "waldensians", "value": 6, "id": "waldensians"}];
/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

var storydata = require('../model/story');

var mongoose = require( 'mongoose' );
Story = mongoose.model('Story');

/* GET users listing. */
router.get('/', function(req, res) {
console.log('in get');
  var strOutput;
  Story.find({}, function (err, stories) {
    console.log('in callback');
    if (err) {
     console.log(err);
    } 
    console.log(JSON.stringify(stories));   
    res.render('users', { items: stories, groups: groups });
  });
});

module.exports = router;
