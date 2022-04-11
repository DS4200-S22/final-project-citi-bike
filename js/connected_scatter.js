
const cs_margin = {top: 10, right: 100, bottom: 30, left: 30}, 
    cs_width = 460 - cs_margin.left - cs_margin.right; 
    cs_height = 400 - cs_margin.top - cs_margin.bottom; 

//append svg shit 
const cs_svg = d3.select("#connected_scatter")
    .append("svg")
        .attr("width", cs_width + cs_margin.left + cs_margin.right)
        .attr("height", cs_height + cs_margin.top + cs_margin.bottom)

    .append("g")
        .attr("transform", `translate(${cs_margin.left},${cs_margin.top})`);

//read the data 
d3.csv('data/end_stations').then(function(cs_data){
    // list of groups 
    const allGroup = ["Grand Army Plaza & Central Park S", "34 Ave & 38 St", "1 Ave & E 18 St"]

    //re format data 
    const cs_data_ready = allGroup.map(function(grpName){
        return {
            name: grpName, 
            values: cs_data.map(function(d){
                return{ count: d.count, value: d+[grpName]};
            })
        };
    });

    //color scale 
    const cs_color = d3.scaleOrdinal()
        .domain(allGroup)
        .range(d3.schemeSet2); 
    // add x axis 
    const x_axis = d3.scaleLinear()
        .domain([0,10])
        .range([0, cs_width]);

    cs_svg.append("g")
        .attr("transform", `translate(0, ${cs_height})`)
        .call(d3.axisBottom(x_axis)); 

    //add y axis 
    const y_axis = d3.scaleLinear()
        .domain([0, 20])
        .range([cs_height, 0]); 
    cs_svg.append("g")
        .call(d3.axisLeft(y_axis)); 

    //add lines 
    const cs_line = d3.line()
        .x_axis(d => x_axis(+d.count))
        .y_axis(d => y_axis(+d.values))

    cs_svg.selectAll("lines")
        .data(cs_data_ready)
        .join("path")
            .attr("d", d=> line(d.values))
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
            .attr("cx", d=> x_axis(d.count))
            .attr("cv", d=> y_axis(d.values))
            .attr("r", 5)
            .attr("stroke", "white")
    //add legend 
    cs_svg 
        .selectAll("labels")
        .data(cs_data_ready)
        .join("g")
            .apped("text")
            .datum(d => {return {name: d.name, value: d.values[d.values.length - 1]};})
            .attr("transform",d => `translate(${x(d.values.count)},${y(d.values.value)})`)
            .attr("x", 12)
            .text(d => d.name)
            .style("fill", d=> cs_color(d.name))
            .style("font-size", 15)
})
