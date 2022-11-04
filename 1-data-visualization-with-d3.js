1 - ADD DOCUMENT ELEMENTS WITH D3

<body>
  <script>
    // Add your code below this line
    d3.select("body")
    .append("h1")
    .text("Learning D3");
    // Add your code above this line
  </script>
</body>


2 - SELECT A GROUP OF ELEMENTS WITH D3

<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line
    d3.selectAll("li").text("list item");
    // Add your code above this line
  </script>
</body>


3 - WORK WITH DATA IN D3

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    // Add your code below this line
    d3.select('body').selectAll('h2')
    .data(dataset)
    .enter()
    .append('h2')
    .text('New Title');
    // Add your code above this line
  </script>
</body>


4 - WORK WITH DYNAMIC DATA IN D3

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
        .data(dataset)
        .enter()
        .append("h2")
        // Add your code below this line
        .text("New Title");
        // Add your code above this line
    </script>
</body>

// Solution:

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
        .data(dataset)
        .enter()
        .append("h2")
        // Add your code below this line
        .text((d) => d + ' USD');
        // Add your code above this line
    </script>
</body>


5 - ADD INLINE STYLING TO ELEMENTS

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
      .text((d) => (d + " USD"))
    // Add your code below this line
    .style('font-family', 'verdana')
    // Add your code above this line
  </script>
</body>


6 - CHANGE STYLES BASED ON DATA

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text((d) => (d + " USD"))
  // Add your code above this line
    .style("color", (d) => {
      if (d < 20) {
        return "red"
      }
      else {
        return "green"
      }
    });
  // Add your code above this line
  </script>
</body>


7 - ADD CLASSES WITH D3

<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class", "bar");
      // Add your code above this line
  </script>
</body>


8 - UPDATE THE HEIGHT OF AN ELEMENT DYNAMICALLY

<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style('height', d => `${d}px`)
      // Add your code above this line
  </script>
</body>


9 - CHANGE THE PRESENTATION OF A BAR CHART 

<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */
    
    
    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px")) // Change this line
  </script>
</body>

// Solution:

<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */
    margin: 2px;
    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px")) // Change this line
  </script>
</body>


10 - LEARN ABOUT SVG IN D3 

<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line
                  .append("svg")
                  .attr("width", 500)
                  .attr("height", 100)
                  // Add your code above this line
  </script>
</body>


11 - DISPLAY SHAPES WITH SVG 

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        // Add your code below this line
        .append("rect")
        .attr("width", 25)
        .attr("height", 100)
        .attr("x", 0)
        .attr("y", 0)
        // Add your code above this line
    </script>
</body>


12 - CREATE A BAR FOR EACH DATA POINT IN THE SET 

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("rect")
        // Add your code below this line
        .data(dataset)
        .enter()
        .append("rect")
        // Add your code above this line
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 25)
        .attr("height", 100);
    </script>
</body>


13 - DYNAMICALLY SET THE COORDINATES FOR EACH BAR 

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
       .attr("x", (d, i) => {
            // Add your code below this line
            return i * 30;
            // Add your code above this line
        })
        .attr("y", 0)
        .attr("width", 25)
        .attr("height", 100);
    </script>
</body>


14 - DYNAMICALLY CHANGE THE HEIGHT OF EACH BAR 

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
       .attr("x", (d, i) => i * 30)
        .attr("y", 0)
        .attr("width", 25)
       .attr("height", (d, i) => {
            // Add your code below this line
            return d * 3
            // Add your code above this line
        });
    </script>
</body>


15 - INVERT SVG ELEMENTS 

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => {
            // Add your code below this line
            return h - 3 * d
            // Add your code above this line
        })
        .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
    </script>
</body>


16 - CHANGE THE COLOR OF AN SVG ELEMENT 

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
        .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
    // Add your code below this line
    .attr("fill", "navy")
    // Add your code above this line
    </script>
</body>


17 - ADD LABELS TO D3 ELEMENTS 

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
        .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
        .attr("fill", "navy");

        svg.selectAll("text")
        .data(dataset)
        .enter()
    // Add your code below this line
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d - 3)
       .text((d, i) => d);
    // Add your code above this line
    </script>
    <body>


18 - STYLE D3 LABELS 

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
        .attr("width", 25)
       .attr("height", (d, i) => d * 3)
        .attr("fill", "navy");

        svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
    // Add your code below this line
    .attr("fill", "red")
    .style("font-size", "25px")
    // Add your code above this line
    </script>
</body>


19 - ADD A HOVER EFFECT TO A D3 ELEMENT 

<style>
  .bar:hover {
    fill: brown;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line
       .attr("class", "bar")
       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

  </script>
</body>


20 - ADD A TOOLTIP TO A D3 ELEMENT 

<style>
  .bar:hover {
    fill: brown;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line
       .append("title")
       .text((d) => d)
       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>


21 - CREATE A SCATTERPLOT WITH SVG CIRCLES 

<body>
    <script>
        const dataset = [
        [ 34,    78 ],
        [ 109,   280 ],
        [ 310,   120 ],
        [ 79,    411 ],
        [ 420,   220 ],
        [ 233,   145 ],
        [ 333,   96 ],
        [ 222,   333 ],
        [ 78,    320 ],
        [ 21,    123 ]
        ];


        const w = 500;
        const h = 500;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("circle")
    // Add your code below this line
       .data(dataset)
       .enter()
       .append("circle")
    // Add your code above this line

    </script>
</body>


22 - ADD ATTRIBUTES TO THE CIRCLE ELEMENTS 

<body>
    <script>
        const dataset = [
        [ 34,    78 ],
        [ 109,   280 ],
        [ 310,   120 ],
        [ 79,    411 ],
        [ 420,   220 ],
        [ 233,   145 ],
        [ 333,   96 ],
        [ 222,   333 ],
        [ 78,    320 ],
        [ 21,    123 ]
        ];


        const w = 500;
        const h = 500;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
    // Add your code below this line
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)
    // Add your code above this line

    </script>
</body>


23 - ADD LABELS TO SCATTER PLOT CIRCLES 

<body>
    <script>
        const dataset = [
        [ 34,    78 ],
        [ 109,   280 ],
        [ 310,   120 ],
        [ 79,    411 ],
        [ 420,   220 ],
        [ 233,   145 ],
        [ 333,   96 ],
        [ 222,   333 ],
        [ 78,    320 ],
        [ 21,    123 ]
        ];


        const w = 500;
        const h = 500;

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
        .attr("r", 5);

        svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
    // Add your code below this line
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))
    // Add your code above this line
    </script>
</body>


24 - CREATE A LINEAR SCALE WITH D3 

<body>
    <script>
    // Add your code below this line

        const scale = undefined; // Create the scale here
        const output = scale(); // Call scale with an argument here

        // Add your code above this line

        d3.select("body")
        .append("h2")
        .text(output);

    </script>
</body>

// Solution:

<body>
    <script>
        // Add your code below this line
        const scale = d3.scaleLinear(); // Create the scale here
        const output = scale(50); // Call scale with an argument here
        // Add your code above this line

        d3.select("body")
        .append("h2")
        .text(output);

    </script>
</body>


25 - SET A DOMAIN AND A RANGE ON A SCALE 

<body>
    <script>
    // Add your code below this line
        const scale = d3.scaleLinear();



        // Add your code above this line
        const output = scale(50);
        d3.select("body")
        .append("h2")
        .text(output);
    </script>
</body>

// Solution:

<body>
    <script>
        // Add your code below this line
        const scale = d3.scaleLinear();
        scale.domain([250, 500]);
        scale.range([10, 150]);
        // Add your code above this line
        const output = scale(50);
        d3.select("body")
        .append("h2")
        .text(output);
    </script>
</body>


26 - USE THE D3.MAX AND D3.MIN FUNCTIONS TO FIND MINIMUM AND MAXIMUM VALUES IN A DATASET 

<body>
    <script>
        const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
        // Add your code below this line

        const output = undefined; // Change this line

        // Add your code above this line

        d3.select("body")
        .append("h2")
        .text(output)
    </script>
</body>

// Solution:

<body>
    <script>
        const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
        // Add your code below this line
        const output = d3.max(positionData, (d) => d[2]); // Change this line
        // Add your code above this line

        d3.select("body")
        .append("h2")
        .text(output)
    </script>
</body>


27 - USE DYNAMIC SCALES

<body>
    <script>
        const dataset = [
        [ 34,    78 ],
        [ 109,   280 ],
        [ 310,   120 ],
        [ 79,    411 ],
        [ 420,   220 ],
        [ 233,   145 ],
        [ 333,   96 ],
        [ 222,   333 ],
        [ 78,    320 ],
        [ 21,    123 ]
        ];

        const w = 500;
        const h = 500;

        // Padding between the SVG canvas boundary and the plot
        const padding = 30;

        // Create an x and y scale

        const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
        .range([padding, w - padding]);

        // Add your code below this line

        const yScale = undefined;


        // Add your code above this line

        const output = yScale(411); // Returns 30
        d3.select("body")
        .append("h2")
        .text(output)
    </script>
</body>

// Solution:

<body>
    <script>
        const dataset = [
        [ 34,    78 ],
        [ 109,   280 ],
        [ 310,   120 ],
        [ 79,    411 ],
        [ 420,   220 ],
        [ 233,   145 ],
        [ 333,   96 ],
        [ 222,   333 ],
        [ 78,    320 ],
        [ 21,    123 ]
        ];

        const w = 500;
        const h = 500;

        // Padding between the SVG canvas boundary and the plot
        const padding = 30;

        // Create an x and y scale

        const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
        .range([padding, w - padding]);

        // Add your code below this line
        const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, (d) => d[1])])
        .range([h - padding, padding]);;
        // Add your code above this line

        const output = yScale(411); // Returns 30
        d3.select("body")
        .append("h2")
        .text(output)
    </script>
</body>


28 - USE A PRE-DEFINED SCALE TO PLACE ELEMENTS 

<body>
    <script>
        const dataset = [
        [ 34,     78 ],
        [ 109,   280 ],
        [ 310,   120 ],
        [ 79,   411 ],
        [ 420,   220 ],
        [ 233,   145 ],
        [ 333,   96 ],
        [ 222,    333 ],
        [ 78,    320 ],
        [ 21,   123 ]
        ];

        const w = 500;
        const h = 500;
        const padding = 60;

        const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
        .range([padding, w - padding]);

        const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
        .range([h - padding, padding]);

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        // Add your code below this line
        .attr("cx", (d) => xScale(d[0]))
        .attr("cy", (d) => yScale(d[1]))
        .attr("r", 5);
        // Add your code above this line

        svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
       .text((d) =>  (d[0] + ", "
        + d[1]))
    // Add your code below this line
      .attr("x", (d) => xScale(d[0] + 10))
      .attr("y", (d) => yScale(d[1]));
    // Add your code above this line
    </script>
</body>


29 - ADD AXES TO A VISUALIZATION

class MyForm extends React.Component {
<body>
    <script>
        const dataset = [
        [ 34,     78 ],
        [ 109,   280 ],
        [ 310,   120 ],
        [ 79,   411 ],
        [ 420,   220 ],
        [ 233,   145 ],
        [ 333,   96 ],
        [ 222,    333 ],
        [ 78,    320 ],
        [ 21,   123 ]
        ];

        const w = 500;
        const h = 500;
        const padding = 60;

        const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
        .range([padding, w - padding]);

        const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
        .range([h - padding, padding]);

        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

        svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

        const xAxis = d3.axisBottom(xScale);
        // Add your code below this line
        const yAxis = d3.axisLeft(yScale);
        // Add your code above this line

        svg.append("g")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);

    // Add your code below this line
        svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)
    // Add your code above this line

    </script>
</body>