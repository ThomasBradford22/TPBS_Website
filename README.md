# Tech Portfolio Builders Club Website

The official website for the Tech Portfolio Builders Club at the University of Wisconsin-Madison.

## 🚀 About

The Tech Portfolio Builders Club is a student organization dedicated to helping UW Madison students develop their technical skills and build impressive portfolio projects. Our website serves as both a functional club platform and a showcase of modern web development practices.

## ✨ Features

- **Modern Design**: Clean, professional design with TailwindCSS
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Project Showcase**: Display club projects with live demos
- **Event Management**: Calendar of workshops and hackathons
- **Member Profiles**: Showcase club members and their contributions
- **Resource Library**: Study guides, templates, and useful links
- **No Setup Required**: Simple HTML file that works in any browser

## 🛠️ Tech Stack

- **Frontend**: Pure HTML5 with modern CSS
- **Styling**: TailwindCSS (via CDN)
- **Icons**: Heroicons (SVG)
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Any web hosting service

## 🚀 Getting Started

### Quick Start (Recommended)

1. **Download the files**:
   - Clone the repository or download the `index.html` file
   - No installation or setup required!

2. **Open the website**:
   - Double-click `index.html` to open in your default browser
   - Or right-click and "Open with" your preferred browser
   - Or drag the file into any browser window

3. **That's it!** Your website is now running locally.

### Alternative: Web Server

For a more professional setup, you can serve the files through a web server:

1. **Python** (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

2. **Node.js** (if installed):
```bash
npx serve .
```

3. **Live Server** (VS Code extension):
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
├── index.html              # Main website file (everything in one file!)
├── README.md              # This documentation
├── package.json           # Node.js dependencies (for development)
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration (for development)
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
└── vercel.json            # Deployment configuration
```

### File Overview

- **`index.html`** - The complete website in a single HTML file
- **`package.json`** - Contains the Next.js project setup (for future development)
- **Configuration files** - Various config files for development tools

## 🎨 Customization

### Colors

The website uses a custom color palette defined in the HTML file:

- **Primary**: Blue gradient for branding
- **UW Colors**: University of Wisconsin red and gold
- **Dark Mode**: Full dark mode support

### Content

To customize the website, simply edit the `index.html` file:

- **Hero Section**: Update the main heading and description
- **Features**: Modify the "What We Do" section
- **Events**: Update upcoming events and dates
- **Projects**: Add or modify featured projects
- **Contact Info**: Update email addresses and social media links
- **Footer**: Modify club information and links

### Easy Customization Tips

1. **Text Content**: Find and replace text directly in the HTML
2. **Colors**: Modify the TailwindCSS classes (e.g., `bg-primary-600`)
3. **Images**: Replace placeholder content with actual images
4. **Links**: Update href attributes to point to real URLs

## 🚀 Deployment

### GitHub Pages (Easiest)

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" → "main" branch
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Drag & Drop)

1. Go to [Netlify](https://netlify.com)
2. Drag and drop your `index.html` file
3. Your site is instantly deployed!

### Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Any Web Hosting Service

Since this is a simple HTML file, you can deploy it to:
- **Any web hosting service** (GoDaddy, Bluehost, etc.)
- **Cloud storage** (Google Drive, Dropbox with public links)
- **CDN services** (Cloudflare, AWS S3)
- **University servers** (if available)

## 🤝 Contributing

We welcome contributions from club members! Here's how to get started:

1. Fork the repository
2. Edit the `index.html` file directly
3. Test your changes by opening the file in a browser
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to your fork: `git push origin main`
6. Open a Pull Request

### Development Guidelines

- Keep the single-file structure for simplicity
- Test changes in multiple browsers
- Ensure responsive design works on mobile
- Update content to reflect current club information
- Maintain the professional design aesthetic

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: tpbs@wisc.edu
- **GitHub**: [@tech-portfolio-builders](https://github.com/tech-portfolio-builders)
- **Website**: [tech-portfolio-builders.vercel.app](https://tech-portfolio-builders.vercel.app)

## 🙏 Acknowledgments

- Built with ❤️ by the Tech Portfolio Builders Club members
- Inspired by modern web development best practices
- Special thanks to the UW Madison CS community
- Designed for simplicity and accessibility

## 📱 Browser Support

The website works in all modern browsers:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🔧 Troubleshooting

### Website not loading?
- Make sure you're opening `index.html` directly
- Try a different browser
- Check that you have an internet connection (for fonts and icons)

### Dark mode not working?
- Clear your browser cache
- Make sure JavaScript is enabled
- Try refreshing the page

### Mobile layout issues?
- The site is fully responsive, but try rotating your device
- Make sure you're using a modern mobile browser

---

**Building portfolios, building futures.** 🚀
