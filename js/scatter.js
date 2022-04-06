// Set dimensions and margins for plots 
  const width3 = 900; 
  const height3 = 450; 
  const margin3 = {left:50, right:50, bottom:50, top:50}; 
  const yTooltipOffset3 = 15; 

d3.csv("data/avg_minutes.csv").then(function(scatter_data) {


    // Add an svg to csv-scatter div  
    let svg5 = d3
      .select("#csv-scatter")
      .append("svg")
      .attr("width", width3-margin3.left-margin3.right)
      .attr("height", height3- margin3.top - margin3.bottom)
      .attr("viewBox", [0, 0, width3, height3]);
  
    //Axes 
  
    // Find max y value to plot  
    let maxY3 = d3.max(scatter_data, function(d) { return d.count; });
  
    // Create y scale   
    let yScale3 = d3.scaleLinear()
                .domain([0,maxY3])
                .range([height3-margin3.bottom,margin3.top]); 
  
    // Find max x value to plot  
    let maxX3 = d3.max(scatter_data, function(d) { return d.minutes; });
  
    // Create x scale
    let xScale3 = d3.scaleLinear()
                .domain([0,maxX3])
                .range([margin3.left,width3-margin3.right]);
  
    // Add y axis to webpage 
    svg5.append("g")
       .attr("transform", `translate(${margin3.left}, 0)`) 
       .call(d3.axisLeft(yScale3)) 
       .attr("font-size", '20px'); 
  
    // Add x axis to webpage  
    svg5.append("g")
        .attr("transform", `translate(0,${height3 - margin3.bottom})`) 
        .call(d3.axisBottom(xScale3))   
        .attr("font-size", '20px'); 
  
  
    /* 
  
      Tooltip Set-up  
  
    */
  
    // Add div for tooltip to webpage
    const tooltip_s = d3.select("body") 
                    .append("div") 
                    .attr('id', "tooltip3") 
                    .style("opacity", 0) 
                    .attr("class", "tooltip"); 
  
    // Add values to tooltip on mouseover, make tooltip div opaque  
    const mouseover_s = function(event, d) {
      tooltip_s.html("Minutes: " + d.minutes + "<br> Count: " + d.count + "<br>") 
              .style("opacity", 1);  
    }
  
    // Position tooltip to follow mouse 
    const mousemove_s = function(event, d) {
      tooltip_s.style("left", (event.pageX1)+"px") 
              .style("top", (event.pageY1 + yTooltipOffset3)+"px"); 
    }
  
    // Return tooltip to transparant when mouse leaves
    const mouseleave_s = function(event, d) { 
      tooltip_s.style("opacity", 0); 
    }
  
  
    //Points
  
    // Add points to the webpage, bind events needed for tooltips 
    svg5.selectAll(".point") 
       .data(scatter_data) 
       .enter()  
       .append("circle") 
         .attr("class", "point") 
         .attr("cx", (d) => xScale3(d.minutes)) 
         .attr("cy", (d) => yScale3(d.count)) 
         .attr("r", 10) 
         .on("mouseover", mouseover_s) 
         .on("mousemove", mousemove_s)
         .on("mouseleave", mouseleave_s);
  }); 
  
