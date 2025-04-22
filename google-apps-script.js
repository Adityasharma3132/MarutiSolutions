/**
 * Google Apps Script for handling form submissions from Maruti Solutions website
 * 
 * Instructions:
 * 1. Create a new Google Sheet with columns matching your form fields
 * 2. Go to Extensions > Apps Script
 * 3. Copy this code into the Apps Script editor
 * 4. Deploy as a web app (accessible to anyone, even anonymous)
 * 5. Copy the web app URL and update it in your Contact.jsx file
 */

function doGet(e) {
  return handleResponse(e);
}

function doPost(e) {
  return handleResponse(e);
}

function handleResponse(e) {
  // Get the active spreadsheet and sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Form Responses');
  
  // If 'Form Responses' sheet doesn't exist, try to find a sheet with the column headers we need
  if (!sheet) {
    // First try the active sheet
    sheet = ss.getActiveSheet();
    
    // If no sheet exists yet, create one with proper headers
    if (!sheet) {
      sheet = ss.insertSheet('Form Responses');
      var headers = ['Timestamp', 'Name', 'Company', 'Email', 'Phone', 'Project Type', 'Description', 'Budget', 'Timeline', 'Source'];
      sheet.appendRow(headers);
    }
  }
  
  try {
    // Parse the incoming data
    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      throw new Error('No data received');
    }
    
    // Validate required fields
    const requiredFields = ['name', 'company', 'email', 'projectType', 'description'];
    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === '') {
        throw new Error(`Required field '${field}' is missing or empty`);
      }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }
    
    // Get the current timestamp
    var timestamp = new Date();
    
    // Prepare the row data
    var rowData = [
      timestamp,
      data.name || '',
      data.company || '',
      data.email || '',
      data.phone || '',
      data.projectType || '',
      data.description || '',
      data.budget || '',
      data.timeline || '',
      data.source || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Data added successfully' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
      
  } catch (error) {
    // Log the error for debugging
    console.error('Error processing request: ' + error.message);
    console.error('Payload: ' + JSON.stringify(e));
    
    // Provide more specific error messages
    let errorMessage = error.message;
    
    // Check for common issues
    if (error.message.includes('Access denied')) {
      errorMessage = 'Access denied. Make sure the Google Apps Script has permission to access the spreadsheet.';
    } else if (error.message.includes('No data received')) {
      errorMessage = 'No form data received. Please check that all required fields are filled out.';
    } else if (!e.postData || !e.postData.contents) {
      errorMessage = 'Invalid request format. Make sure you are sending data as JSON with proper Content-Type header.';
    }
    
    // Return error response with detailed message
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'message': errorMessage,
        'details': 'If this error persists, please check the Apps Script logs for more information.'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
  }
}

/**
 * Handle CORS preflight requests
 */
function doOptions(e) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
  
  return ContentService
    .createTextOutput(JSON.stringify({}))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
}