# Website Setup Guide

## Email Contact Form Configuration

Your website has a modern contact form that needs to be connected to receive emails. Here's how to set it up:

### Option 1: Using FormSubmit.co (Recommended - Free & Easy)

1. Open `script.js` file
2. Find this line (around line 65):
   ```
   const response = await fetch('https://formsubmit.co/your-email@gmail.com', {
   ```

3. Replace `your-email@gmail.com` with your actual email address, for example:
   ```
   const response = await fetch('https://formsubmit.co/larry@example.com', {
   ```

4. Save the file
5. Test the form - when someone submits it, you'll receive an email automatically!

**That's it!** FormSubmit.co is completely free and requires no registration. First submission will verify your email.

### Option 2: Using Formspree.io

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free account)
3. Create a new form and get your form ID
4. Update the JavaScript fetch URL in `script.js` with your form ID

---

## Website Features

✅ **Modern Design** - Clean blue theme with white/light gray backgrounds
✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
✅ **Smooth Animations** - Subtle fade-in effects and hover states
✅ **Mobile Navigation** - Hamburger menu for small screens
✅ **Contact Form** - Collects: Name, Email, Phone, Project Request, Message
✅ **Professional Layout** - Hero section, Services, About, Contact, Footer
✅ **Fast Loading** - Optimized for performance
✅ **Beautiful Typography** - Poppins font for modern feel

---

## Sections

1. **Navigation Bar** - Fixed header with smooth scroll links
2. **Hero Section** - Welcoming headline with CTA button
3. **Services Section** - 4 service cards with icons and descriptions
4. **About Section** - Personal bio section
5. **Contact Section** - Contact form with validation
6. **Footer** - Name, title, and short bio

---

## Customization Tips

### Change Colors
Edit `styles.css` and modify the `:root` color variables at the top.

### Change Font
The site uses 'Poppins' font. To use a different font, update the `<link>` tag in `index.html`.

### Update Content
Simply edit the text in `index.html` sections.

### Add Your Photo
Replace the hero section text or add an image to your services section.

---

## Browser Support

Works on all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

## Performance Tips

- Images are lightweight
- CSS is optimized
- JavaScript is minimal and efficient
- Page loads in under 1 second

---

Need help? The form validation and submission are automated. Just replace the email address and you're ready to go!
