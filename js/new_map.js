let my_map = L.map("map").setView([40.7841, -73.984016], 12); 

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(my_map);

let greenIcon =  new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41], 
    popupAnchor: [1, -34], 
    shadowSize: [41, 41], 
}); 


//markers for start stations
let ss_marker_1 = L.marker([40.72621788, -73.98379855]).addTo(my_map); 
let ss_marker_2 = L.marker([40.772828, -73.966853]).addTo(my_map); 
let ss_marker_3 = L.marker([40.759604471387945, -73.92714411020279]).addTo(my_map); 
let ss_marker_4 = L.marker([40.68962188790333, -73.98304268717766]).addTo(my_map); 
let ss_marker_5 = L.marker([40.7867947, -73.977112]).addTo(my_map);


ss_marker_1.bindPopup("<b> E 7 & Avenue A, Starting Rides: 53, Riders: 45 Member, 8 Casual</b>");
ss_marker_2.bindPopup("<b> 5 Ave & E 72 St, Starting Rides: 50, Riders: 3 Members, 47 Casual</b>");
ss_marker_3.bindPopup("<b> 34 Ave & 31 St, Starting Rides: 25, Riders: 13 Members, 12 Casual</b>");
ss_marker_4.bindPopup("<b> Bond St & Fulton St, Starting Rides: 23, Riders: 17 Members, 6 Casual </b>");
ss_marker_5.bindPopup("<b> W 84 St & Broadway, Starting Rides: 21, Riders: 20 Members, 1 Casual </b>");


let es_marker_1 = L.marker([40.75500254, -73.98014437], {icon: greenIcon}).addTo(my_map); 
let es_marker_2 = L.marker([40.754164, -73.908906]).addTo(my_map); 
let es_marker_3 = L.marker([40.72621788, -73.98379855]).addTo(my_map); 
let es_marker_4 = L.marker([40.68539567, -73.97431458]).addTo(my_map); 
let es_marker_5 = L.marker([40.742753828659026, -74.00747358798981]).addTo(my_map);


es_marker_1.bindPopup("<b> Grand Army Plaza and Central Park South', 'Ending Rides: 105', 'Riders: 63 Casual</b>");
es_marker_2.bindPopup("<b> 34 Ave & 38 St','Ending Rides: 50', 'Riders: 31 Members, 19 Casual</b>");
es_marker_3.bindPopup("<b> 1 Ave & E 18 St','Ending Rides: 50', 'Riders: 34 Members, 15 Casual</b>");
es_marker_4.bindPopup("<b> Clinton St & Joralemon St','Ending Rides: 47', 'Riders: 30 Members, 17 Casual </b>");
es_marker_5.bindPopup("<b> MacDougal St & Prince St','Ending Rides: 43', 'Riders: 28 Members, 15 Casual </b>");



