let map_svg = d3.select("svg")
    map_width = +map_svg.attr("width")
    map_height = +map_svg.attr("height")

//map and projection 
let map_projection = d3.geoMercator()
    .center([2, 47])
    .scale(980)
    .translate([map_width/2, map_height/2])

//load external data 
d3.json("https://raw.githubusercontent.com/dwillis/nyc-maps/master/boroughs.geojson").then(function(map_data){
    //filter data 
    map_data.features = map_data.features.filter(d => {console.log(d.properties.name); return d.properties.name=="Manhattan"})

    //draw the map 
    map_svg.append("g")
        .selectAll("path")
        .data(map_data.features)
        .join("path")
            .attr("fill", "grey")
            .attr("d", d3.geoPath()
                .projection(map_projection)
                
                )
            .style("stroke", "none")
})
