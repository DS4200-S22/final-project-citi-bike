// set width and height of svg
const width = 460
const height = 400

// The svg
const svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

// Map and projection
const projection = d3.geoMercator()
    .center([40.72621788,  -73.98379855])                // GPS of location to zoom on
    .scale(1020)                       // This is like the zoom
    .translate([ width/2, height/2 ])

// Create data for circles:
const markers = [
  //starting stationd 
  {long: 40.72621788, lat: -73.98379855, name: "E 7 & Avenue A"}, // corsica
  {long: 40.772828, lat: -73.966853, name: "5 Ave & E 72 St"}, // nice
  {long: 40.759604471387945, lat: -73.92714411020279, name: "34 Ave & 31 St"}, // Paris

  // ending stations 
  {long: 40.75500254, lat: -73.98014437, name: "Grand Army Plaza and Central Park South"},
  {long: 40.754164, lat: -73.908906, name: "34 Ave & 38 St"},
  {long: 40.72621788, lat: -73.98379855, name: "1 Ave & E 18 St"},
 
];

// Load external data and boot
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then( function(data){

    // Filter data
    data.features = data.features.filter( d => d.properties.name=="France")

    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .join("path")
          .attr("fill", "#b8b8b8")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "black")
        .style("opacity", .3)

    // create a tooltip
    const Tooltip = d3.select("#my_dataviz")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 1)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function(event, d) {
      Tooltip.style("opacity", 1)
    }
    var mousemove = function(event, d) {
      Tooltip
        .html(d.name + "<br>" + "long: " + d.long + "<br>" + "lat: " + d.lat)
        .style("left", (event.x)/2 + "px")
        .style("top", (event.y)/2 - 30 + "px")
    }
    var mouseleave = function(event, d) {
      Tooltip.style("opacity", 0)
    }

    // Add circles:
    svg
      .selectAll("myCircles")
      .data(markers)
      .join("circle")
        .attr("cx", d => projection([d.long, d.lat])[0])
        .attr("cy", d => projection([d.long, d.lat])[1])
        .attr("r", 14)
        .attr("class", "circle")
        .style("fill", "69b3a2")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 3)
        .attr("fill-opacity", .4)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)

})
