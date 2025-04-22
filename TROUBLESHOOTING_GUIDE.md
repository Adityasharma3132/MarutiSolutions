# Contact Form Troubleshooting Guide

## Common Issues with Google Sheets Integration

### "Failed to fetch" or Connection Error

If you're seeing "Failed to fetch" errors in the console or the form isn't submitting properly, follow these steps:

1. **Deploy a New Version of the Google Apps Script**
   - Open your Google Sheet
   - Go to Extensions > Apps Script
   - Make sure the script matches the code in `google-apps-script.js` in your project
   - Click Deploy > New deployment
   - Select Web app as the deployment type
   - Set "Who has access" to "Anyone, even anonymous"
   - Click Deploy and authorize the app
   - Copy the new Web App URL

2. **Update the scriptURL in Contact.jsx**
   - Open `src/pages/Contact.jsx`
   - Find the `scriptURL` variable (around line 50)
   - Replace the URL with your new Web App URL
   - Save the file

3. **Verify CORS Settings**
   - Make sure your Google Apps Script includes the CORS headers:
   ```javascript
   .setHeader('Access-Control-Allow-Origin', '*')
   ```
   - The script should also include a `doOptions` function to handle preflight requests

4. **Check Browser Console for Specific Errors**
   - Open your browser's developer tools (F12)
   - Go to the Console tab
   - Look for specific error messages when submitting the form
   - Common issues include:
     - CORS errors: "Access to fetch at [URL] has been blocked by CORS policy"
     - Network errors: "Failed to fetch"
     - Timeout errors: "The operation was aborted"

5. **Test with a Simple Request**
   - Try accessing your Web App URL directly in a browser
   - It should return a JSON response (may show an error about missing data, which is expected)
   - If it doesn't load or shows an error page, the deployment may be incorrect

6. **Check Google Apps Script Logs**
   - In the Apps Script editor, go to View > Logs
   - Submit the form and check for any error messages in the logs
   - This can help identify issues with the script processing

7. **Verify Google Sheet Permissions**
   - Make sure the Google account that deployed the script has edit access to the spreadsheet
   - Check that the spreadsheet has a sheet named 'Form Responses' or that the script is configured to use the active sheet

8. **Redeploy After Script Changes**
   - Remember that any time you make changes to the Google Apps Script, you need to create a new deployment
   - Old deployment URLs will eventually expire and stop working

If you continue to experience issues after following these steps, please check the Apps Script execution logs for more detailed error information.