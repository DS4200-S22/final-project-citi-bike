let my_map = L.map("map").setView([40.7831, -73.984016], 12); 

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(my_map);

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
ss_marker_2.bindPopup("<b> 5 Ave & E 72 St', 'Starting Rides: 50', 'Riders: 3 Members, 47 Casual</b>");
ss_marker_3.bindPopup("<b> 34 Ave & 31 St', 'Starting Rides: 25', 'Riders: 13 Members, 12 Casual</b>");
ss_marker_4.bindPopup("<b> Bond St & Fulton St', 'Starting Rides: 23', 'Riders: 17 Members, 6 Casual </b>");
ss_marker_5.bindPopup("<b> W 84 St & Broadway', 'Starting Rides: 21', 'Riders: 20 Members, 1 Casual </b>");
ss_marker_6.bindPopup("<b> Allen St & Hester St', 'Starting Rides: 17', 'Riders: 9 Members, 8 Casual</b> "); 
ss_marker_7.bindPopup("<b> Kane St & Clinton St', 'Starting Rides: 16', 'Riders: 7 Members, 9 Casual </b>" ); 
ss_marker_8.bindPopup("<b> W 100 St & Manhattan Ave', 'Starting Rides: 16', 'Riders: 13 Members, 3 Casual </b>");
ss_marker_9.bindPopup("<b> 6 Ave & Broome St', 'Starting Rides: 16', 'Riders: 13 Members, 3 Casual </b>"); 
ss_marker_10.bindPopup("<b> Delancey St & Eldridge St', 'Starting Rides: 14', 'Riders: 2 Members, 12 Casual</b>"); 
