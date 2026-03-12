# 📧 EmailJS Setup Guide for AZURE Website

## ✅ Step 1: Sign Up for EmailJS

1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up"** (free tier available)
3. Create an account with your email (e.g., dre7080552@gmail.com)
4. Verify your email address

---

## ✅ Step 2: Create an Email Service (Gmail)

1. After logging in, go to **Email Services** (Dashboard → Email Services)
2. Click **"Add Service"**
3. Select **Gmail**
4. Follow these steps:
   - **Service Name**: `Gmail` (or any name you prefer)
   - **Gmail Address**: `dre7080552@gmail.com`
   - Click **"Connect Gmail Account"**
   - Authorize EmailJS to access your Gmail account
5. Click **"Create Service"**
6. **Note your Service ID** (you'll need this!)

---

## ✅ Step 3: Create an Email Template

1. Go to **Email Templates** (Dashboard → Email Templates)
2. Click **"Create New Template"**
3. Fill in the template:

**Template Content:**
```
Hello {{to_email}},

You have received a new message from the AZURE website:

---

**From:** {{from_name}}
**Email:** {{from_email}}
**Phone:** {{phone_number}}

**Project Request:**
{{project_request}}

**Message:**
{{message}}

---

Best regards,
AZURE Website
```

4. **Important Fields to Add:**
   - In the "To Email" field: `{{to_email}}`
   - Template parameters above will be replaced with form data
5. Click **"Save"**
6. **Note your Template ID** (you'll need this!)

---

## ✅ Step 4: Get Your Public Key

1. Go to **Account** (Dashboard → Account)
2. Under **"API Keys"** section, find your **Public Key**
3. Copy the **Public Key** (looks like: `abc123xyz...`)
4. **Save this safely!**

---

## ✅ Step 5: Update Your Website Code

### In `script.js` file:

Find these lines (around line 5-7):
```javascript
// Initialize EmailJS - Replace with your Public Key
emailjs.init('YOUR_PUBLIC_KEY_HERE'); // TODO: Replace with your EmailJS Public Key
```

Replace with your actual Public Key:
```javascript
emailjs.init('abc123xyz...'); // Your actual Public Key
```

---

### In `script.js` form handler (around line 28-32):

Find these lines:
```javascript
const response = await emailjs.send(
    'YOUR_SERVICE_ID',      // TODO: Replace with your Service ID
    'YOUR_TEMPLATE_ID',     // TODO: Replace with your Template ID
```

Replace with your actual IDs:
```javascript
const response = await emailjs.send(
    'service_abc123xyz',     // Your Service ID
    'template_abc123xyz',    // Your Template ID
```

---

## 🔍 Example IDs (What They Look Like):

- **Service ID**: `service_a1b2c3d4e5f6g7h8`
- **Template ID**: `template_z9y8x7w6v5u4t3s2`
- **Public Key**: `abcdefg1234567890xyz`

---

## ✅ Step 6: Test Your Form

1. Save all changes
2. Open your website in a browser
3. Go to the **Contact** section
4. Fill in the contact form:
   - Name: Test Name
   - Email: your.email@example.com
   - Phone: 1234567890
   - Project: Test Project
   - Message: This is a test message
5. Click **"Send Message"**
6. Check your inbox (`dre7080552@gmail.com`) for the email!

---

## 🐛 Troubleshooting

### Issue: "Error initializing EmailJS"
- **Solution**: Make sure your Public Key is correct
- **Check**: Copy the exact ID from EmailJS dashboard

### Issue: "Template not found" or "Service not found"
- **Solution**: Verify Service ID and Template ID are correct
- **Check**: They're in the right format (service_... and template_...)

### Issue: Email not arriving
- **Solution**: 
  1. Check your Gmail spam folder
  2. Verify the Service was properly connected to Gmail
  3. Check that template parameters match the form field names

### Issue: "Unauthorized" error
- **Solution**: 
  1. Make sure you're using the correct Public Key
  2. Try regenerating the Public Key in EmailJS Account settings

---

## 📝 Form Fields Mapping

Your form fields are mapped to template variables like this:

| Form Field | Template Variable | Example |
|-----------|------------------|---------|
| Name | `{{from_name}}` | John Doe |
| Email | `{{from_email}}` | john@example.com |
| Phone | `{{phone_number}}` | 555-1234 |
| Project Request | `{{project_request}}` | Build a website |
| Message | `{{message}}` | We need... |

---

## 🔒 Security Notes

✅ **Your credentials are safe:**
- Public Key is meant to be public (it's in your JavaScript)
- Service IDs are also public
- EmailJS securely manages your Gmail connection
- Sensitive Gmail password is never exposed

---

## 💡 Free Tier Limits (EmailJS)

- **200 messages per month** (free tier)
- Great for testing and small projects
- Upgrade anytime for more messages

---

## 🎉 You're Done!

Your AZURE website contact form is now connected to your Gmail inbox! 

Every time someone submits the contact form, you'll receive an email with all their details.

---

## 📞 Need Help?

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **GitHub Project**: https://github.com/BULUS595/Azure-website
- **Your Email**: dre7080552@gmail.com
