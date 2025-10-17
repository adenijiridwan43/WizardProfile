# 🚀 Profile Card Component - Stage 0 Task

A modern, accessible, and responsive profile card built with semantic HTML, CSS, and vanilla JavaScript. This project demonstrates best practices in frontend development with a focus on testability and accessibility.

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Testing](#testing)
- [Deployment](#deployment)
- [Design Inspiration](#design-inspiration)
- [Acceptance Criteria](#acceptance-criteria)
- [Credits](#credits)

---

## 🎯 Overview

This profile card component was built as part of the **Frontend Wizards Stage 0 Challenge**. It showcases my skills in:
- Semantic HTML structure
- Responsive CSS design (Flexbox/Grid)
- Vanilla JavaScript for dynamic content
- Accessibility best practices
- Test-driven development with data-testid attributes

---

## ✨ Features

- **Semantic HTML5** markup with proper ARIA labels
- **Fully responsive** design (mobile-first approach)
- **Accessible** keyboard navigation and screen reader support
- **Real-time clock** displaying current time in milliseconds
- **Social media integration** with secure external links
- **Testable architecture** with comprehensive data-testid attributes
- **Modern UI/UX** with smooth animations and transitions

---

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern layouts (Flexbox/Grid), custom properties
- **Vanilla JavaScript** - Dynamic content and time updates
- **No frameworks** - Pure, lightweight implementation

---

## 📁 Project Structure

```
profile-card/
│
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Responsive styles and animations
├── script.js           # JavaScript for dynamic content
├── assets/
│   └── images/         # Profile avatar and icons
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

---

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JavaScript

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/adenijiridwan43/WizardProfile.git
   cd WizardProfile
   ```

2. **Open in browser**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or simply open index.html in your browser
   open index.html
   ```

3. **View the project**
   Navigate to `http://localhost:8000` in your browser

---

## 🧪 Testing

All interactive elements include `data-testid` attributes for automated testing:

### Required Test IDs
- `test-profile-card` - Root container
- `test-user-name` - User's name
- `test-user-bio` - Biography paragraph
- `test-user-time` - Current time in milliseconds
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social links container
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

### Manual Testing Checklist
- [ ] All data-testid attributes are present
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Responsive layout at 320px, 768px, 1024px, 1440px
- [ ] Social links open in new tab with security attributes
- [ ] Time updates correctly (matches Date.now())
- [ ] Images have proper alt text
- [ ] Screen reader compatibility

---

## 🌐 Deployment

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy with these settings:
   - Build command: (none)
   - Publish directory: `/`

### Deploy to GitHub Pages
1. Go to repository Settings → Pages
2. Select branch: `main`
3. Select folder: `/ (root)`
4. Save and wait for deployment

**Live Demo**: [Your-Live-URL-Here]

---

## 🎨 Design Inspiration

Check out these modern profile card designs for inspiration:

- [Glassmorphism Profile Card](https://codepen.io/TurkAysenur/full/ZEpxeYm) - Modern glass effect design
- [Neumorphic Profile Card](https://codepen.io/MarioDesigns/full/ExjXvaw) - Soft UI design
- [3D Animated Profile Card](https://codepen.io/prathameshkoshti/full/gOPBxyO) - Interactive 3D effects
- [Minimal Profile Card](https://codepen.io/javascriptacademy-stash/full/oNWRega) - Clean and minimal
- [Material Design Profile](https://codepen.io/FlorinPop17/full/vMKGdy) - Material UI inspired

---

## ✅ Acceptance Criteria

### Core Requirements
- [x] All required elements with correct data-testid attributes
- [x] Semantic HTML tags (article, figure, nav, section)
- [x] Time displays Date.now() in milliseconds
- [x] Avatar with alt text and proper testid
- [x] Social links with security attributes (rel="noopener noreferrer")
- [x] Distinct hobbies and dislikes lists
- [x] Keyboard navigation support
- [x] Visible focus styles
- [x] Responsive at all breakpoints

### Accessibility
- [x] WCAG 2.1 Level AA compliance
- [x] Proper heading hierarchy
- [x] Sufficient color contrast
- [x] Screen reader compatible
- [x] Keyboard-only navigation

### Performance
- [x] Fast load time (<2s)
- [x] Optimized images
- [x] No layout shift
- [x] Smooth animations (60fps)

---

## 👨‍💻 About Me

I'm a passionate frontend Engineer from Nigeria, with a strong focus on building accessible and performant web applications. This project showcases my commitment to writing clean, semantic code that follows modern web standards.

**Skills**: HTML5, CSS3, JavaScript, Responsive Design, Accessibility, Git

---

## 📚 Study Resources

- [MDN: HTML Semantics](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN: Accessible Images](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Images)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Task Explainer Video](https://vm.tiktok.com/ZMAXLFy8s/)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/profile-card/issues).

---

## 📬 Contact

- **GitHub**: [@adenijiridwan43](https://github.com/adenijiridwan43)

---

## 🙏 Acknowledgments

- Frontend Wizards Community
- Task reviewers and mentors
- Design inspiration from CodePen and Dribble community

---


---

code with love
All Alone lone ne..