# Google Sheets Integration Setup Guide

This guide will help you integrate the Orzi bracelet order form with Google Sheets using Google Apps Script.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Orzi Orders" or any name you prefer
4. In the first row, add the following headers:
   - Column A: `الاسم` (Name)
   - Column B: `رقم الهاتف` (Phone)
   - Column C: `المحافظة` (Governorate)
   - Column D: `المنطقة` (Area)
   - Column E: `العنوان` (Address)
   - Column F: `نوع الإسورة` (Bracelet Style)
   - Column G: `صورة الإسورة` (Bracelet Image)
   - Column H: `تاريخ الطلب` (Order Date)

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**
2. Delete any existing code in the script editor
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.name,
      data.phone,
      data.governorate,
      data.area,
      data.address,
      data.braceletStyle,
      data.braceletImage,
      new Date(data.timestamp)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (💾) and name your project "Orzi Order Handler"

## Step 3: Deploy the Script

1. Click on **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Fill in the deployment settings:
   - **Description**: Orzi Order Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** (if you see a warning)
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/XXXXX/exec`)

## Step 4: Update Your Website

1. Open `src/App.tsx` in your code editor
2. Find line 27 where it says:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the Web app URL you copied in Step 3
4. Save the file

Example:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXX/exec';
```

## Step 5: Test the Integration

1. Submit a test order through your website
2. Check your Google Sheet to verify the data is being recorded
3. The success modal should appear after submission

## Troubleshooting

### Orders not appearing in Google Sheet

1. Make sure you deployed the script as a **Web app** with access set to "Anyone"
2. Verify the Web app URL is correct in `App.tsx`
3. Check the Apps Script execution logs:
   - In Apps Script editor, click **Executions** (clock icon) on the left
   - Look for any error messages

### Authorization issues

1. If you see authorization errors, redeploy the script:
   - In Apps Script editor, click **Deploy** > **Manage deployments**
   - Click the pencil icon to edit
   - Change the version to "New version"
   - Click **Deploy**
   - Update the new URL in your code

## Data Format

Each order submission will include:
- **Name**: Customer's full name
- **Phone**: Customer's phone number
- **Governorate**: Selected governorate (القاهرة, الجيزة, الإسكندرية)
- **Area**: Selected area within the governorate
- **Address**: Full address details
- **Bracelet Style**: Selected style (إسورة مستقيمة or إسورة منحنية)
- **Bracelet Image**: Image filename (two.jpg or one.jpg)
- **Order Date**: Timestamp of when the order was submitted

## Optional Enhancements

### Email Notifications

You can modify the Apps Script to send email notifications when a new order is received:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.name,
      data.phone,
      data.governorate,
      data.area,
      data.address,
      data.braceletStyle,
      data.braceletImage,
      new Date(data.timestamp)
    ]);

    // Send email notification
    MailApp.sendEmail({
      to: "your-email@example.com",
      subject: "طلب جديد من موقع أورزي",
      body: `
تم استلام طلب جديد:

الاسم: ${data.name}
رقم الهاتف: ${data.phone}
المحافظة: ${data.governorate}
المنطقة: ${data.area}
العنوان: ${data.address}
نوع الإسورة: ${data.braceletStyle}
      `
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Replace `your-email@example.com` with your actual email address.
