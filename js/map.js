//intialize + add map 
function initialize_Map(){
    //location of uluru
    const uluru = {lat: -25.344, lng: 131.036}; 
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4, 
        center: uluru, 
    }); 
    //the marker
    const marker = new.google.maps.Marker({
        position: uluru, 
        map: map,
    })
}
