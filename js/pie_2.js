const pie_width = 450, 
    pie_height = 450, 
    pie_margin = 40; 

const pie_radius = Math.min(pie_width, pie_height) / 2 - pie_margin;

const pie_svg = d3.select("#pie_chart")
    .append("svg")
        .attr("width", pie_width)
        .attr("height", pie_height)
    .append("g")
    .attr("transform", `translate(${pie_width/2}, ${pie_height/2})`);


// create 2 data sets 
const data1_pie = {a: 53, b: 50, c: 25, d: 23, e: 21, f: 17, g: 16, h: 16, i: 16, k: 14} // starting stations 
const data2_pie = {a: 105, b: 50, c: 49, d: 47, e: 43, f: 38, g: 36, h:34, i: 24, k:19}

//set color scale 
const pie_color = d3.scaleOrdinal()
    .domain(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"])
    .range(d3.schemeDark2); 

function update(pie_data){
    const pie_ = d3.pie()
        .value(function(d) {return d[1];})
        .sort(function(a, b) {return d3.ascending(a.key, b.key);})

    const pie_data_ready = pie_(Object.entries(pie_data))

    //map to data
    const u = pie_svg.selectAll("path")
        .data(pie_data_ready)

    u
        .join('path')
        .transition()
        .duration(1000)
        .attr('d', d3.arc()
            .innerRadius(0)
            .outerRadius(pie_radius)
            )
        .attr('fill', function(d){return pie_color(d.pie_data[0])})
        .attr("stroke", "white")
        .style("stroke-wodth", "2px")
        .style("opacity", 1)
    update(data1_pie)
}

//update(data1_pie)
