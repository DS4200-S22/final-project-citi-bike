// set dimensions
const width4 = 450, 
    height4 = 450, 
    margin4 = 40, 

//radius 
const radius = Math.min(width4, height4) / 2 - margin4; 

//append svg 
const svg7 = d3.select("#piechart_2")
    .append("svg")
        .attr("width", width4)
        .attr("height", height4)
    .append("g")
        .attr("transform", `translate(${width4/2}, ${height4/2})`); 

// create 2 data sets 
const data1_pie = {a: 53, b: 50, c: 25, d: 23, e: 21, f: 17, g: 16, h: 16, i: 16, k: 14} // starting stations 
const data2_pie = {a: 105, b: 50, c: 49, d: 47, e: 43, f: 38, g: 36, h:34, i: 24, k:19}

//set color scale 
const pie_color_2 = d3.scaleOrdinal()
    .domain(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"])
    .range(d3.schemeDark2)

//updates plot 
function update(pie_data_2){
    const pie2 = d3.pie()
        .value(function(d){return d[1];})
        .sort(function(a, b) {return d3.ascending(a.key, b.key);})
        
    const pie_data_ready_2 = pie(Obect.entries(pie_data_2))

    //map to data
    const u = svg7.selectAll("path")
        .data(pie_data_ready_2)

    u
        .join('path')
        .transition()
        .duration(1000)
        .attr('d', d3.arc()
            .innerRadius(0)
            .outerRadius(radius)
        )
        .attr('fill', function(d){return(pie_color_2(d.pie_data_2[0]))})
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 1)


}

//initialize plot w first dataset 
update(data1_pie)

