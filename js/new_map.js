let my_map = L.map("map").setView([40.7841, -73.984016], 12); 

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(my_map);


L.marker([475500254, -73.98014437], {icon: my_icon}).addTo(my_map); 

//markers for start stations
let ss_marker_1 = L.marker([40.72621788, -73.98379855]).addTo(my_map); 
let ss_marker_2 = L.marker([40.772828, -73.966853]).addTo(my_map); 
let ss_marker_3 = L.marker([40.759604471387945, -73.92714411020279]).addTo(my_map); 
let ss_marker_4 = L.marker([40.68962188790333, -73.98304268717766]).addTo(my_map); 
let ss_marker_5 = L.marker([40.7867947, -73.977112]).addTo(my_map);
let ss_marker_6 = L.marker([40.71605866, -73.99190759]).addTo(my_map);
let ss_marker_7 = L.marker([40.6861758, -73.99645295]).addTo(my_map); 
let ss_marker_8 = L.marker([40.795, -73.9645]).addTo(my_map); 
let ss_marker_9 = L.marker([40.72431, -74.00473]).addTo(my_map); 
let ss_marker_10 = L.marker([40.719383, -73.991479]).addTo(my_map); 


ss_marker_1.bindPopup("<b> E 7 & Avenue A, Starting Rides: 53, Riders: 45 Member, 8 Casual</b>");
ss_marker_2.bindPopup("<b> 5 Ave & E 72 St, Starting Rides: 50, Riders: 3 Members, 47 Casual</b>");
ss_marker_3.bindPopup("<b> 34 Ave & 31 St, Starting Rides: 25, Riders: 13 Members, 12 Casual</b>");
ss_marker_4.bindPopup("<b> Bond St & Fulton St, Starting Rides: 23, Riders: 17 Members, 6 Casual </b>");
ss_marker_5.bindPopup("<b> W 84 St & Broadway, Starting Rides: 21, Riders: 20 Members, 1 Casual </b>");
ss_marker_6.bindPopup("<b> Allen St & Hester St, Starting Rides: 17, Riders: 9 Members, 8 Casual</b> "); 
ss_marker_7.bindPopup("<b> Kane St & Clinton St, Starting Rides: 16, Riders: 7 Members, 9 Casual </b>" ); 
ss_marker_8.bindPopup("<b> W 100 St & Manhattan Ave, 'Starting Rides: 16, Riders: 13 Members, 3 Casual </b>");
ss_marker_9.bindPopup("<b> 6 Ave & Broome St, Starting Rides: 16, 'Riders: 13 Members, 3 Casual </b>"); 
ss_marker_10.bindPopup("<b> Delancey St & Eldridge St, Starting Rides: 14, Riders: 2 Members, 12 Casual</b>"); 

//markers for end stations

let es_marker_1 = L.marker([40.75500254, -73.98014437]).addTo(my_map); 
let es_marker_2 = L.marker([40.754164, -73.908906]).addTo(my_map); 
let es_marker_3 = L.marker([40.72621788, -73.98379855]).addTo(my_map); 
let es_marker_4 = L.marker([40.68539567, -73.97431458]).addTo(my_map); 
let es_marker_5 = L.marker([40.742753828659026, -74.00747358798981]).addTo(my_map);
let es_marker_6 = L.marker([40.7505853470315, -73.9946848154068]).addTo(my_map);
let es_marker_7 = L.marker([40.7462009, -73.988557235]).addTo(my_map); 
let es_marker_8 = L.marker([40.72621788, -73.98379855]).addTo(my_map); 
let es_marker_9 = L.marker([40.68539567, -73.97431458]).addTo(my_map); 
let es_marker_10 = L.marker([40.70112, -73.93039]).addTo(my_map); 

es_marker_1.bindPopup("<b> Grand Army Plaza and Central Park South', 'Ending Rides: 105', 'Riders: 63 Casual</b>");
es_marker_2.bindPopup("<b> 34 Ave & 38 St','Ending Rides: 50', 'Riders: 31 Members, 19 Casual</b>");
es_marker_3.bindPopup("<b> 1 Ave & E 18 St','Ending Rides: 50', 'Riders: 34 Members, 15 Casual</b>");
es_marker_4.bindPopup("<b> Clinton St & Joralemon St','Ending Rides: 47', 'Riders: 30 Members, 17 Casual </b>");
es_marker_5.bindPopup("<b> MacDougal St & Prince St','Ending Rides: 43', 'Riders: 28 Members, 15 Casual </b>");
es_marker_6.bindPopup("<b> W 16 St & The High Line','Ending Rides: 38', 'Riders: 24 Members, 14 Casual </b> "); 
es_marker_7.bindPopup("<b> W 47 & 6 Ave','Ending Rides: 36', 'Riders: 16 Members, 20 Casual </b>" ); 
es_marker_8.bindPopup("<b> E 11 & Avenue B','Ending Rides: 34', 'Riders: 25 Members, 9 Casual </b>");
es_marker_9.bindPopup("<b> Baltic St & 5 Ave','Ending Rides: 24', 'Riders: 12 Members, 0 Casual </b>"); 
es_marker_10.bindPopup("<b> Prospect Pl & 6 Ave','Ending Rides: 19', 'Riders: 10 Members, 0 Casual </b>"); 




