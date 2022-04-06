//set dimensions + margins 
const pie_width = 450, 
    pie_height = 450, 
    pie_margin = 40; 

//radius of pie chart 
const pie_radius = Math.min(pie_width, pie_height) / 2 - pie_margin

//append the svg object to the div 
const pie_svg = d3.select("#pie_viz")
    .append("svg")
        .attr("widht", pie_width)
        .attr("height", pie_height)
    .append("g")
        .attr("transform", `translate(${pie_width / 2}, ${pie_height / 2})`);

    
//data 
const pie_data = {a: 53, b: 50, c: 25, d: 23, e: 21, f: 17, g: 16, h: 16, i: 16, k: 14}

//color scale 
const pie_color = d3.scaleOrdinal()
    .range(d3.schemeSet2); 

//compute position of each group 
const pie = d3.pie()
    .value(function(d){ return d[1]})

const pie_data_ready = pie(Object.entries(pie_data))

//shape helper to build arcs 
const pie_arc = d3.arc()
    .innerRadius(0)
    .outerRadius(pie_radius)

//build pie chart
pie_svg
    .selectAll("slices")
    .data(pie_data_ready)
    .join("path")
        .attr("fill", function(d){return(pie_color(d.pie_data[0]))})
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)

//annotation 
pie_svg
    .selectAll("slices")
    .data(pie_data_ready)
    .join("text")
    .text(function(d){return "grp" + d.pie_data[0]})
    .attr("transform", function(d) { return `translate(${pie_arc.centroid(d)})`})
    .style("text-anchor", "middle")
    .style("font-size", 18)
