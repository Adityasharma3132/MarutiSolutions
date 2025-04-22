# Google Sheets Integration for Contact Form

## Overview
This document provides instructions on how to properly set up the Google Sheets integration for the contact form on the Maruti Solutions website.

## What Changed
1. Modified the form submission in `Contact.jsx` to use JSON format instead of FormData
2. Added proper error handling and CORS support
3. Created a Google Apps Script template (`google-apps-script.js`) that handles the form data correctly

## Setup Instructions

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Add the following column headers in the first row:
   - Timestamp
   - Name
   - Company
   - Email
   - Phone
   - Project Type
   - Description
   - Budget
   - Timeline
   - Source

### Step 2: Set Up Google Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any code in the editor and paste the contents of the `google-apps-script.js` file
3. Save the project with a name like "Maruti Solutions Form Handler"

### Step 3: Deploy the Web App
1. Click on **Deploy > New deployment**
2. Select **Web app** as the deployment type
3. Set the following options:
   - Description: "Maruti Solutions Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (This is required for the form to work)
4. Click **Deploy**
5. Copy the Web App URL that is provided after deployment

### Step 4: Update Your React Application
1. In `Contact.jsx`, replace the `scriptURL` value with your new Web App URL

```javascript
const scriptURL = 'YOUR_NEW_WEB_APP_URL_HERE';
```

## Troubleshooting

If the form still doesn't work after following these steps, check the following:

1. **CORS Issues**: Make sure your Google Apps Script has the CORS headers properly set (included in the provided script)
2. **Permissions**: Ensure the Google Apps Script is deployed with "Anyone" access
3. **Script Errors**: Check the Apps Script execution logs for any errors
   - In the Apps Script editor, go to **View > Logs**
4. **Form Data**: Verify that all form fields are being properly sent in the request

## Testing

To test the integration:
1. Fill out the contact form on your website
2. Submit the form
3. Check your Google Sheet to see if the data was added
4. If no data appears, check the browser console for any error messages

## Additional Notes

- The Google Apps Script has built-in error handling and logging
- The script accepts both POST and GET requests for flexibility
- CORS headers are properly set to allow requests from any origin