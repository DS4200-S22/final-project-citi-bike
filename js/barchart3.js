
/*******************
 
  Bar chart 2
 
 *******************/ 

 // Add div for tooltip to webpage
const color_start = d3.scaleOrdinal()
                .domain(["E 7 St & Avenue A"])
                .range(["#e98491"]);

d3.csv("data/start_stations.csv").then(function(data_start) {

  // Add an svg to csv-bar div  
  const svg_start = d3
    .select("#start-stations-bar")
    .append("svg")
    .attr("width", width2-margin2.left-margin2.right)
    .attr("height", height2 - margin2.top - margin2.bottom)
    .attr("viewBox", [0, 0, width2, height2]);

  //Axes 

  // Find max y value to plot  
  // let maxY2 = d3.max(data, function(d) { return d.count; });
  let maxY_start = 53;

  // Create y scale   
  let yScale_start = d3.scaleLinear()
              .domain([0,maxY_start])
              .range([height2-margin2.bottom,margin2.top]); 

  // Create x scale
  let xScale_start = d3.scaleBand()
              .domain(d3.range(data_start.length))
              .range([margin2.left, width2 - margin2.right])
              .padding(0.1); 

  // Add y axis to webpage 
  svg_start.append("g")
     .attr("transform", `translate(${margin2.left}, 0)`) 
     .call(d3.axisLeft(yScale_start)) 
     .attr("font-size", '20px');


  // Add x axis to webpage  
svg_start.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${height2 - margin2.bottom})`) 
    .call(d3.axisBottom(xScale_start)
            .tickFormat(i => data_start[i].start_station)) 
    .selectAll("text")  
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)")
      .attr("font-size", '12px');

   const tooltip_bar = d3.select("body") 
                .append("div") 
                .attr('id', "tooltip2") 
                .style("opacity", 0) 
                .attr("class", "tooltip")
                .style("background-color", "lightgrey")
                .style("border", "solid")
                .style("border-width", "2px")
                .style("border-radius", "5px")
                .style("padding", "5px")
; 

// Add values to tooltip on mouseover, make tooltip div opaque  
 const mouseover_bar = function(event, d) {
  tooltip_bar.html("Station Name: " + d.start_station + "<br> Total Rides Started Here: " + d.count + "<br>") 
          .style("opacity", 1)
  d3.select(this)
    .style("border-width", "20px")
    .style("stroke", "black")
    .style("opacity", 2)
  ;   
}


// Position tooltip to follow mouse 
const mousemove_bar = function(event, d) {
  tooltip_bar.style("left", (event.pageX)+"px") 
          .style("top", (event.pageY + yTooltipOffset2)+"px"); 
}

// Return tooltip to transparant when mouse leaves
const mouseleave_bar = function(event, d) { 
  tooltip_bar.style("opacity", 0)
  d3.select(this)
    .style("border-width", "20px")
    .style("stroke", "none")
    .style("opacity", 2)
  ; 

} 

  //Bars

  // Add bars to the webpage, bind events needed for tooltips 
  svg_start.selectAll(".bar") 
     .data(data_start) 
     .enter()  
     .append("rect") 
       .attr("class", "bar") 
       .attr("x", (d,i) => xScale_start(i)) 
       .attr("y", (d) => yScale_start(d.count)) 
       .attr("height", (d) => (height2 - margin2.bottom) - yScale_start(d.count)) 
       .attr("width", xScale_start.bandwidth())
       .style("fill", (d) => color2(d.start_station)) 
       .on("mouseover", mouseover_bar) 
       .on("mousemove", mousemove_bar)
       .on("mouseleave", mouseleave_bar);

}); 


