# Tech Portfolio Builders Club Website

The official website for the Tech Portfolio Builders Club at the University of Wisconsin-Madison.

## 🚀 About

The Tech Portfolio Builders Club is a student organization dedicated to helping UW Madison students develop their technical skills and build impressive portfolio projects. Our website serves as both a functional club platform and a showcase of modern web development practices.

## ✨ Features

- **Modern Design**: Built with Next.js, TypeScript, and TailwindCSS
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Optimized for all device sizes
- **Project Showcase**: Display club projects with GitHub integration
- **Event Management**: Calendar of workshops and hackathons
- **Member Profiles**: Showcase club members and their contributions
- **Resource Library**: Study guides, templates, and useful links
- **SEO Optimized**: Built-in SEO with Next.js

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Heroicons & Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tech-portfolio-builders/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── events/            # Events page
│   ├── members/           # Members page
│   ├── projects/          # Projects page
│   ├── resources/         # Resources page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   ├── Navigation.tsx     # Site navigation
│   └── ThemeProvider.tsx  # Dark mode provider
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Blue gradient for branding
- **UW Colors**: University of Wisconsin red and gold
- **Dark Mode**: Full dark mode support

### Content

Update the following files to customize content:

- `src/app/page.tsx` - Home page content
- `src/app/projects/page.tsx` - Project showcase
- `src/app/members/page.tsx` - Member profiles
- `src/app/events/page.tsx` - Event listings
- `src/app/resources/page.tsx` - Resource library

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure redirects for client-side routing

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d out"
}
```
3. Run `npm run deploy`

## 🤝 Contributing

We welcome contributions from club members! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Write responsive, accessible components
- Test your changes across different devices
- Update documentation as needed

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

---

**Building portfolios, building futures.** 🚀
