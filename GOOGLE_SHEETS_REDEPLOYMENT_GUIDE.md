# Google Sheets Integration Redeployment Guide

## How to Fix the "Failed to connect to the server" Error

If you're seeing the error message: "Failed to connect to the server. Please check your internet connection or the Google Apps Script URL may be invalid or expired. Contact the administrator to verify the script deployment," follow these steps to resolve the issue:

## Step 1: Access Your Google Sheet

1. Open the Google Sheet that contains your form responses
2. Go to **Extensions > Apps Script**
3. This will open the Apps Script editor with your current script

## Step 2: Verify Your Script Code

1. Make sure your Apps Script code matches the code in `google-apps-script.js` in your project
2. Verify that the script includes the proper CORS headers:
   ```javascript
   .setHeader('Access-Control-Allow-Origin', '*')
   ```
3. Confirm that the `doOptions` function is present to handle preflight requests

## Step 3: Create a New Deployment

1. In the Apps Script editor, click on **Deploy > New deployment**
2. Select **Web app** as the deployment type
3. Set the following options:
   - Execute as: **Me** (your Google account)
   - Who has access: **Anyone, even anonymous**
4. Click **Deploy**
5. You will be prompted to authorize the app - follow the authorization steps
6. After successful deployment, you'll receive a new **Web App URL**
7. **IMPORTANT:** Copy this URL - you'll need it in the next step

## Step 4: Update Your Contact.jsx File

1. Open `src/pages/Contact.jsx` in your project
2. Locate the `scriptURL` variable (around line 50)
3. Replace the existing URL with your new Web App URL:
   ```javascript
   const scriptURL = 'YOUR_NEW_WEB_APP_URL';
   ```
4. Save the file

## Step 5: Test Your Form

1. Run your application
2. Navigate to the Contact page
3. Fill out the form and submit
4. The form should now submit successfully without the connection error

## Troubleshooting

If you're still experiencing issues after following these steps:

1. **Check Browser Console:** Open your browser's developer tools (F12) and look for specific error messages in the Console tab

2. **Verify CORS Settings:** Make sure your Google Apps Script includes all the necessary CORS headers:
   ```javascript
   var headers = {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
     'Access-Control-Allow-Headers': 'Content-Type',
     'Access-Control-Max-Age': '86400'
   };
   ```

3. **Check Apps Script Logs:**
   - In the Apps Script editor, go to **View > Logs**
   - Submit the form and check for any error messages in the logs

4. **Verify Spreadsheet Permissions:**
   - Make sure the Google account that deployed the script has edit access to the spreadsheet
   - Check that the spreadsheet has a sheet named 'Form Responses' or that the script is configured to use the active sheet

5. **Test Direct Access:**
   - Try accessing your Web App URL directly in a browser
   - It should return a JSON response (may show an error about missing data, which is expected)

6. **Remember:** Google Apps Script deployments can expire after a period of inactivity or when certain quotas are reached. You may need to redeploy periodically to maintain functionality.

## Important Notes

- Each time you make changes to the Google Apps Script, you need to create a new deployment
- Old deployment URLs will eventually expire and stop working
- Always update the `scriptURL` in Contact.jsx after creating a new deployment
- The "Anyone, even anonymous" access setting is required for the form to work properly from your website