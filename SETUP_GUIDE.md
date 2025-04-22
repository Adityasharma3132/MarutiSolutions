# Google Sheets Integration Setup Guide

This guide will help you fix the "Failed to connect to the server" error by properly setting up the Google Sheets integration for your contact form.

## Step-by-Step Instructions

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
2. Delete any code in the editor and paste the contents of the `google-apps-script.js` file from your project
3. Save the project with a name like "Maruti Solutions Form Handler"

### Step 3: Deploy the Web App
1. Click on **Deploy > New deployment**
2. Select **Web app** as the deployment type
3. Set the following options:
   - Description: "Maruti Solutions Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (This is required for the form to work)
4. Click **Deploy**
5. You will be asked to authorize the app - click "Authorize access"
6. Copy the Web App URL that is provided after deployment

### Step 4: Update Your React Application
1. In `Contact.jsx`, replace the `scriptURL` value with your new Web App URL:

```javascript
const scriptURL = 'YOUR_NEW_WEB_APP_URL_HERE';
```

2. Replace 'YOUR_NEW_WEB_APP_URL_HERE' with the actual URL you copied in Step 3

## Verification

To verify that your integration is working:

1. Fill out the contact form on your website
2. Submit the form
3. Check your Google Sheet to see if the data was added
4. If no data appears, check the browser console for any error messages

## Troubleshooting

If you're still experiencing issues:

1. **CORS Issues**: Make sure your Google Apps Script has the CORS headers properly set (included in the provided script)
2. **Permissions**: Ensure the Google Apps Script is deployed with "Anyone" access
3. **Script Errors**: Check the Apps Script execution logs for any errors
   - In the Apps Script editor, go to **View > Logs**
4. **Form Data**: Verify that all form fields are being properly sent in the request
5. **Deployment URL**: Make sure you're using the latest deployment URL (URLs from old deployments will expire)

## Important Notes

- Each time you make changes to your Google Apps Script, you need to create a new deployment
- Old deployment URLs will eventually expire and stop working
- Always use the most recent deployment URL in your application