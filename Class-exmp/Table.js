// Function to create a dynamic table
function createTable(data) {
    // Create table element
    var table = document.createElement("table");
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';

    // Create table header (thead) element
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    // Create table body (tbody) element
    var tbody = document.createElement("tbody");

    // Extract keys (table headers) from the first object in the data array
    var headers = Object.keys(data[0]);

    // Create table headers
    headers.forEach(function(header) {
        var th = document.createElement("th");
        th.textContent = header;
        th.style.border = '1px solid black';
        th.style.padding = '8px';
        headerRow.appendChild(th);
    });

    // Append header row to thead
    thead.appendChild(headerRow);

    // Append thead to table
    table.appendChild(thead);

    // Create table rows and cells for each data object
    data.forEach(function(item) {
        var row = document.createElement("tr");

        // Populate cells with data
        headers.forEach(function(header) {
            var cell = document.createElement("td");
            cell.textContent = item[header];
            cell.style.border = '1px solid black';
            cell.style.padding = '8px';
            row.appendChild(cell);
        });

        // Append row to tbody
        tbody.appendChild(row);
    });

    // Append tbody to table
    table.appendChild(tbody);

    // Return the created table
    return table;
}

// Example data
var data = [
    { Name: "John", Age: 30, City: "New York" },
    { Name: "Alice", Age: 25, City: "Los Angeles" },
    { Name: "Bob", Age: 35, City: "Chicago" }
];

// Create table using the data
var dynamicTable = createTable(data);

// Append the table to the document body
document.body.appendChild(dynamicTable);
