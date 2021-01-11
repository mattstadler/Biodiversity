function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = [];
    // 4. Create a variable that filters the samples for the object with the desired sample number.
 

    //  5. Create a variable that holds the first sample in the array.


    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = [];
    var otu_lables = [];
    var sample_values = [];

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids.reverse();
    var yticks2 = yticks.slice(0, 5);
    var yticks3 = yticks.map( )

    // 8. Create the trace for the bar chart. 
    var trace = {
      x: [sample_values]
      y: [yticks3]
    }
    var barData = [trace];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Belly Button Biodiversity Dashboard"
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("plotArea", barData, layout);
  });
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // Create a variable that holds the samples array. 
    var samples = [];
    // Create a variable that filters the samples for the object with the desired sample number.
 

    //  Create a variable that holds the first sample in the array.


    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = [];
    var otu_lables = [];
    var sample_values = [];

    // Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = sample_values.reverse();
    var yticks2 = yticks.slice(0, 5);
    var yticks3 = yticks.map( )

    // Create the trace for the bar chart. 
    var trace = {
      x: [otu_ids]
      y: [yticks3]
      type: "bar"
    };
    var barData = [trace];
    // Create the layout for the bar chart. 
    var barLayout = {
      title: "Belly Button Biodiversity Dashboard"
    };
  });
}
    // 1. Create the trace for the bubble chart. *source: https://plotly.com/javascript/bubble-charts/#hover-text-on-bubble-charts

    var trace2 = {
      x: [otu_ids],
      y: [yticks3],
      text: [otu_labels],
      mode: 'markers',
      marker: {
        color: [otu_ids],
        size: [sample_values]
      }
    };
    
    var data = [trace1];
    
    var layout = {
      title: 'Bubble Chart',
      showlegend: false,
      height: 600,
      width: 600
    };

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bubble Chart"
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("plotArea", bubbleData, layout);
  });
}

