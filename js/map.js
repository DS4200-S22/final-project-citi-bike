const map_svg = d3.select("svg")   
    map_width =  +map_svg.attr("width")
    map_height = +map_svg.attr("height")

//map and projection
const projection = d3.geoMercator()
    .center([2, 47])
    .scale(980)
    .translate([map_width/2, map_height/2])

d3.json("https://raw.githubusercontent.com/dwillis/nyc-maps/master/boroughs.geojson").then(function(map_data){
    map_data.features = map_data.features.filter(d =>{console.log(d.properties.name); return d.properties.name=="Manhattan"})

    //draw map 
    map_svg.append("g")
        .selectAll("path")
        .data(map_data.features)
        .join("path")
            .attr("fill", "grey")
            .attr("d", d3.geoPath()
                .projection(projection)
                )
                .style("stroke", "none")
})
