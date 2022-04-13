//set dimensions 
const pie_width = 450, 
    pie_height = 450, 
    pie_margin = 40, 

//radius 
const pie_radius = Math.min(pie_width, pie_height) / 2 - pie_margin; 

//append svg 
const pie_svg = d3.select("#pie_viz")
  .append("svg")
    .attr("width", pie_width)
    .attr("height", pie_height)

  .append("g")
    .attr("transform", `translate(${pie_width/2}, ${pie_height/2})`);

  //create data 
  const p_data_1 = {a: 53, b: 50, c: 25, d: 23, e: 21, f: 17, g: 16, h: 16, i: 16, k: 14}
  const p_data_2 = {a: 105, b: 50, c: 49, d: 47, e: 43, f: 38, g: 36, h:34, i: 24, k:19}

  //set color scale 
  const p_color = d3.ScaleOrdinal()
    .domain(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"])
    .rane(d3.schemeDark2);

  function update(p_data){
    //compute position of each group on the pie 
    const pie_ = d3.pie()
      .value(function(d) {return d[1];})
      .sort(function(a,b){ return s3.ascending(a.key, b.key);})

    const p_data_ready = pie_(Object.entries(p_data))

    //map to data 
    const u = pie_svg.selectAll("path")
      .data(p_data_ready)

      //builf the chart 
    u 
      .join("path")
      .transition()
      .duration(1000)
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(pie_radius)
        )
      .attr('fill', function(d){return p_color(d.p_data[0])})
      .attr("stroke", "white")
      .style("opacity",1)
  }
  update(p_data_1)






// create 2 data sets 
//const data1_pie = {a: 53, b: 50, c: 25, d: 23, e: 21, f: 17, g: 16, h: 16, i: 16, k: 14} // starting stations 
//const data2_pie = {a: 105, b: 50, c: 49, d: 47, e: 43, f: 38, g: 36, h:34, i: 24, k:19}

//set color scale 
//const pie_color = d3.scaleOrdinal()
    //.domain(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"])
    //.range(d3.schemeDark2); 




// create 2 data sets 
//const data1_pie = {a: 53, b: 50, c: 25, d: 23, e: 21, f: 17, g: 16, h: 16, i: 16, k: 14} // starting stations 
//const data2_pie = {a: 105, b: 50, c: 49, d: 47, e: 43, f: 38, g: 36, h:34, i: 24, k:19}

//set color scale 
//const pie_color = d3.scaleOrdinal()
    //.domain(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"])
    //.range(d3.schemeDark2); 
