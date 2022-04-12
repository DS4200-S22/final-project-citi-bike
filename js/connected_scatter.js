const cs_margin = {left:50, right:50, bottom:185, top:50}, 
    cs_width = 1500,
    cs_height = 1050; 

//append svg  
const cs_svg = d3.select("#connected_scatter")
    .append("svg")
    .attr("width", cs_width)
    .attr("height", cs_height)
    .attr("viewBox", [0, 0, cs_width, cs_height])

    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

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
    //add legend 
    cs_svg
    .selectAll("myLabels")
    .data(cs_data_ready)
    .join('g')
      .append("text")
        .datum(d => { return {name: d.name, value: d.values[d.values.length - 1]}; }) // keep only the last value of each time series
        .attr("transform",d => `translate(${x(d.value.hour)},${y(d.value.value)})`) // Put the text at the position of the last point
        .attr("x", 12) // shift the text a bit more right
        .text(d => d.name)
        .style("fill", d => cs_color(d.name))
        .style("font-size", 15)
})
