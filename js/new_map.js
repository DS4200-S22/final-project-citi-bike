let my_map = L.map("map").setView([40.7831, 73.9712], 10); 

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(my_map);

let ss_marker_1 = L.marker([40.72621788, -73.98379855]).addTo(my_map); 
let ss_marker_2 = L.marker([40.772828, -73.966853]).addTo(my_map); 
let ss_marker_3 = L.marker([[40.759604471387945, -73.92714411020279]]).addTo(my_map); 

ss_marker_1.bindPopup("<b> E 7 & Avenue A, Starting Rides: 53, Riders: 45 Member, 8 Casual</b>")
ss_marker_2.bindPopup("<b> 5 Ave & E 72 St', 'Starting Rides: 50', 'Riders: 3 Members, 47 Casual</b>")
ss_marker_3.bindPopup("<b> 34 Ave & 31 St', 'Starting Rides: 25', 'Riders: 13 Members, 12 Casual")
