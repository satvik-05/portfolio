# Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your skills, projects, and experience to potential employers and clients.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **Dark/Light Theme Toggle** - Automatic theme detection with manual toggle
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Interactive Elements** - Hover effects, smooth scrolling, and form validation
- **Modern UI/UX** - Clean, professional design with gradient accents
- **Performance Optimized** - Fast loading with optimized animations
- **SEO Friendly** - Semantic HTML structure
- **Accessible** - WCAG compliant design

## 🚀 Quick Start

1. **Clone or Download** the files to your local machine
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your information
4. **Deploy** to your preferred hosting platform

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<h2 class="hero-subtitle">Full Stack Developer</h2>
<p class="hero-description">
    Your personal description here...
</p>
```

#### Profile Stats
```html
<div class="stat">
    <span class="stat-number">3+</span>
    <span class="stat-label">Years Experience</span>
</div>
```

#### About Section
```html
<p>
    Your about me content here...
</p>
```

### 2. Skills & Technologies

Update the skills section with your actual skills:

```html
<div class="skill-item" data-skill="React">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

**Available Icons:**
- Frontend: `fa-html5`, `fa-css3-alt`, `fa-js-square`, `fa-react`, `fa-vuejs`, `fa-bootstrap`
- Backend: `fa-node-js`, `fa-python`, `fa-php`, `fa-java`
- Tools: `fa-git-alt`, `fa-docker`, `fa-aws`, `fa-database`

### 3. Projects

Replace the project cards with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image here -->
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

### 4. Experience

Update the timeline with your work experience:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Your Job Title</h3>
            <span class="company">Company Name</span>
            <span class="period">2020 - Present</span>
        </div>
        <p>Job description...</p>
        <ul>
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
    </div>
</div>
```

### 5. Contact Information

Update your contact details:

```html
<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-envelope"></i>
    </div>
    <div class="contact-details">
        <h3>Email</h3>
        <p>your.email@example.com</p>
    </div>
</div>
```

### 6. Social Links

Update your social media links:

```html
<div class="social-links">
    <a href="https://linkedin.com/in/yourprofile" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/yourusername" class="social-link">
        <i class="fab fa-github"></i>
    </a>
</div>
```

## 🎯 Color Scheme Customization

The website uses CSS custom properties for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #06b6d4;       /* Accent color */
    --text-primary: #1f2937;       /* Primary text color */
    --text-secondary: #6b7280;     /* Secondary text color */
    --bg-primary: #ffffff;         /* Primary background */
    --bg-secondary: #f9fafb;       /* Secondary background */
    /* ... more variables */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Advanced Customization

### Adding New Sections

1. Add the HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add navigation link if needed
4. Add scroll animations in `script.js`

### Custom Animations

The website uses CSS animations and JavaScript for scroll-triggered effects. You can add custom animations by:

1. Adding CSS keyframes
2. Using the `scroll-reveal` class
3. Implementing JavaScript intersection observers

### Form Integration

The contact form currently shows a success message. To integrate with a real backend:

1. Replace the form submission handler in `script.js`
2. Add your backend endpoint
3. Handle form data appropriately

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Your site will be deployed automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## 📈 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minimize CSS/JS**: Use minified versions for production
3. **Enable Compression**: Use gzip or brotli compression
4. **Use CDN**: Serve Font Awesome and Google Fonts from CDN
5. **Lazy Loading**: Implement lazy loading for images

## 🔍 SEO Optimization

1. **Meta Tags**: Add proper meta descriptions and keywords
2. **Structured Data**: Add JSON-LD schema markup
3. **Alt Text**: Add descriptive alt text to images
4. **Semantic HTML**: Use proper heading hierarchy
5. **Sitemap**: Create and submit a sitemap

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you need help customizing your portfolio, feel free to reach out!

---

**Made with ❤️ for developers who want to showcase their skills professionally.** 