// The svg
const svg_map= d3.select("svg"),
    map_width = +svg_map.attr("width"),
    map_height = +svg_map.attr("height");

// Map and projection
const projection = d3.geoMercator()
    .center([2, 47])                // GPS of location to zoom on
    .scale(980)                       // This is like the zoom
    .translate([ map_width/2, map_height/2 ])

// Load external data and boot
d3.json("https://raw.githubusercontent.com/dwillis/nyc-maps/master/boroughs.geojson").then( function(map_data){

    // Filter data
    map_data.features = map_data.features.filter(d => {console.log(d.properties.name); return d.properties.name=="Manhattan"})

    // Draw the map
    svg_map.append("g")
        .selectAll("path")
        .data(map_data.features)
        .join("path")
          .attr("fill", "grey")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
          .style("stroke", "none")
})
