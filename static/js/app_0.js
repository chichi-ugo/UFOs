// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to loop through each obj in array, append row 
//    to HTML table, and add value from object into each cell
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Function to grab datetime value from filter, check the data
//   for the date, filter the data to keep only the matching values
//   and rebuild the table using the filtered data
function handleClick(){
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);