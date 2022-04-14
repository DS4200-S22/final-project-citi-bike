const cs_margin = {left:50, right:50, bottom:185, top:50}, 
    cs_width = 1500,
    cs_height = 1050; 
const yTooltipOffset_cs = 15;
//append svg  
const cs_svg = d3.select("#connected_scatter")
    .append("svg")
    .attr("width", cs_width)
    .attr("height", cs_height)
    .attr("viewBox", [0, 0, cs_width, cs_height])

    .append("g")
    .attr("transform",
        "translate(" + cs_margin .left + "," + cs_margin .top + ")");

//read the data 
d3.csv('data/endst_avg_hour.csv').then(function(cs_data){
    // list of groups 
    const allGroup = ["Grand Army Plaza & Central Park S", "34 Ave & 38 St", "1 Ave & E 18 St", "MacDougal St & Prince St", "Clinton St & Joralemon St"]

    //re format data 
    const cs_data_ready = allGroup.map(function(grpName){
        return {
            name: grpName, 
            values: cs_data.map(function(d){
                return{ hour: d.hour, value: +d[grpName]};
            })
        };
    });
    console.log(cs_data_ready)

    //color scale 
    const cs_color = d3.scaleOrdinal()
        .domain(allGroup)
        .range(d3.schemeSet2); 
    // add x axis 
    const x = d3.scaleLinear()
        .domain([0,23])
        .range([0, cs_width]);

    cs_svg.append("g")
        .attr("transform", `translate(0, ${cs_height})`)
        .call(d3.axisBottom(x)); 

    //add y axis 
    const y = d3.scaleLinear()
        .domain([0, 20])
        .range([cs_height, 0]); 
    cs_svg.append("g")
        .call(d3.axisLeft(y)); 

    //add lines 
    const cs_line = d3.line()
    .x(d => x(+d.hour))
    .y(d => y(+d.value))


const tooltip_cs = d3.select("body") 
.append("div") 
.attr('id', "tooltip2") 
.style("opacity", 0) 
.attr("class", "tooltip"); 

// Add values to tooltip on mouseover, make tooltip div opaque  
const mouseover_cs = function(event, d) {
tooltip_cs.html("Station Name: " + d.name + "<br> Rides Ended Here: " + d.value + "At Hour:" + d.hour + "<br>") 
.style("opacity", 1);  
}

// Position tooltip to follow mouse 
const mousemove_cs = function(event, d) {
tooltip_cs.style("left", (event.pageX)+"px") 
.style("top", (event.pageY + yTooltipOffset_cs)+"px"); 
}

// Return tooltip to transparant when mouse leaves
const mouseleave_cs = function(event, d) { 
tooltip_cs.style("opacity", 0); 

}

    cs_svg.selectAll("lines")
        .data(cs_data_ready)
        .join("path")
            .attr("d", d=> cs_line(d.values))
            .attr("stroke", d=> cs_color(d.name))
            .style("stroke-width", 4)
            .style("fill", "none")

    //add the points 
    cs_svg 
        .selectAll("dots")
        .data(cs_data_ready)
        .join("g")
            .style("fill", d => cs_color(d.name))
        //values 
        .selectAll("points")
        .data(d => d.values)
        .join("circle")
            .attr("cx", d=> x(d.hour))
            .attr("cy", d=> y(d.value))
            .attr("r", 5)
            .attr("stroke", "white")
            .on("mouseover", mouseover_cs) 
            .on("mousemove", mousemove_cs)
            .on("mouseleave", mouseleave_cs);
     



    //Initialize legend
    // https://medium.com/code-kings/adding-legend-to-d3-chart-b06f2ae8667 <-- This article was used as the starting point for our code to create the legend
    let legendScatter = d3.select("#connected_scatter")
        .append("svg")
        .selectAll("myLabels")
        .data(cs_data_ready);

    //Create legend items
    legendScatter
        .enter()
        .append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .style("fill", d => cs_color(d.name))
        .attr("transform",
            (d,w) => {
                let x = 15;
                let y = 5 + (16) * w;
                return `translate(${x}, ${y})`;
            })
    ;

    //Create legend labels
    legendScatter
        .enter()
        .append("text")
        .attr("x", 33)
        .attr("y", (d, i) => 5 + (16) * i + 12)
        .text(d => d.name)

    ;

    cs_svg.append("text")
        .attr("transform",
            "translate(" + (width2/2) + " ," +
            (height2 + margin2.top + 260) + ")")
        .style("text-anchor", "middle")
        .text("Hour");

    cs_svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin2.left)
        .attr("x",0 - (height2 / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Count");

})
