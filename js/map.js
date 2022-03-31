var width = 460
var height = 400

//the svg 
var svg = d3.select("#my_map")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

//map and projection
var projection = d3.geoMercator()
    .center([4, 47])
    .scale(1020)
    .translate([width/2, height/2])

//create data for circles 
//we will add in the actual data here 
var markers = [
    {long: 9.083, lat: 42.149, name:"Corsica"}, 
    {long: 7.26, lat: 43.71, name:"Nice"}, 
    {long: 2.349, lat: 48.864, name:"Paris"}, 
    {long: -1.397, lat: 43.664, name:"Hossegor"},
    {long: 3.075, lat:50.640, name:"Lille"}, 
    {long: -3.83, lat: 58, name:"Morlaix"}, 

]; 

//load external data 
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function(data){
    data.features = data.features.filter( function(d){return d.properties.name=="France"})

    //draw map 
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .attend("path")
            .attr("fill", "#b8b8b8")
            .attr("d", d3.geoPath()
                .projection(projection)
                )
        .style("stroke", "black")
        .style("opacity", .3)

    //create tooltip 
    var Tooltip = d3.select("#my_map")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 1)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")

    //hover and shit 
    var mouseover = function(d){
        Tooltip.style("opacity", 1)
    }
   var mousemove = function(d){
       Tooltip
            .html(d.name + "<br>" + "long:" + d.long + "<br>" + "lat:" + d.lat)
            .style("left", (d3.mouse(this)[0]+10) + "px")
            .style("top", (d3.mouse(this)[1]) + "px")
   }
   var mouseleave = function(d){
       Tooltip.style("opacity", 0)
   }
   //add circles 
   svg 
    .selectAll("my_circles")
    .data(markers)
    .enter()
    .append("circle")
        .attr("cx",function(d){return projection([d.long, d.lat])[0]})
        .attr("cv",function(d){return projection([d.long, d.lat])[1]})
        .attr("r", 14)
        .attr("class", "circle")
        .style("fill", "69b3a2")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 3)
        .attr("fill-opacity", .4)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave",mouseleave)
})


