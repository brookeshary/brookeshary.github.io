// Function to read JSON data
function getComments() {
    const sheetName = "Drift"; 
    const jsonData = json(sheetName);
    return ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON);
  }
  
  // Function to write JSON data
  function saveComment(label, comment) {
    const sheetName = "Drift"; 
    const rowData = [label, comment];
    appendRow(sheetName, rowData);
    return ContentService.createTextOutput("Comment added successfully");
  }
  
  // Function to convert sheet data to JSON format
  function json(sheetName) {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);
  
    if (sheet === null) {
      return 'Sheet not found';
    }
  
    const data = sheet.getDataRange().getValues();
    const jsonData = convertToJson(data);
  
    return jsonData;
  }
  
  // Function to convert a 2D array to JSON
  function convertToJson(data) {
    const headers = data[0];
    const raw_data = data.slice(1);
    let json = [];
  
    raw_data.forEach(d => {
      let object = {};
      for (let i = 0; i < headers.length; i++) {
        object[headers[i]] = d[i];
      }
      json.push(object);
    });
  
    return JSON.stringify(json);
  }
  
  // Function to append a new row to a sheet
  function appendRow(sheetName, rowData) {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);
  
    if (sheet !== null) {
      sheet.appendRow(rowData);
    }
  }
  