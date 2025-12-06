# Portfolio v1

A modern, minimalist portfolio website built with Vue 3, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, powered by Sanity CMS for content management.

🌐 **Live Site**: [codewithalfred.com](https://codewithalfred.com)

## ✨ Features

- 🎨 **Minimalist Design** - Clean, modern aesthetic with refined typography
- 🌓 **Dark Mode** - Seamless light/dark theme switching
- 📱 **Responsive** - Fully responsive design that works on all devices
- ⚡ **Fast & Optimized** - Built with Vue 3 and optimized for performance
- 🎯 **CMS Powered** - Content managed through Sanity Studio
- 🎭 **Smooth Animations** - Subtle transitions and hover effects
- 🔍 **SEO Friendly** - Optimized for search engines

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **CMS**: Sanity.io
- **Icons**: Font Awesome
- **Build Tool**: Vue CLI 5
- **Typography**: Satoshi & Cabinet Grotesk (via Fontshare)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Sanity project (for content management)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tamayoac/portfolio-v1.git
cd portfolio-v1
```

2. Install dependencies:
```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VUE_APP_SANITY_PROJECT_ID=your-project-id
VUE_APP_SANITY_DATASET=production
VUE_APP_SANITY_API_VERSION=2022-03-07
VUE_APP_SANITY_USE_CDN=true
```

**Note**: Replace `your-project-id` with your actual Sanity project ID. You can find this in your [Sanity dashboard](https://www.sanity.io/manage).

### CORS Configuration

Make sure to add your local development URL to your Sanity project's CORS origins:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Navigate to **API** → **CORS origins**
4. Add `http://localhost:8080` (or your dev server port)
5. Enable **Allow credentials** if needed

## 💻 Development

Start the development server:

```bash
npm run serve
```

The app will be available at `http://localhost:8080`

### Available Scripts

- `npm run serve` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run lint` - Lint and fix code
- `npm run test:unit` - Run unit tests

## 📁 Project Structure

```
portfolio-v1/
├── public/                 # Static assets
├── src/
│   ├── assets/           # Images, fonts, CSS
│   │   └── css/
│   │       └── app.css   # Global styles & Tailwind
│   ├── components/       # Vue components
│   │   ├── common/       # Reusable components
│   │   └── layouts/      # Layout components
│   ├── directives/       # Custom Vue directives
│   ├── router.ts         # Vue Router configuration
│   ├── sanity/           # Sanity queries
│   ├── store/            # Pinia stores
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── views/            # Page components
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry point
├── .env                  # Environment variables (not committed)
├── tailwind.config.js    # Tailwind CSS configuration
├── vue.config.js         # Vue CLI configuration
└── package.json          # Dependencies
```

## 🎨 Design System

### Colors

The portfolio uses a warm **stone** color palette for a minimalist aesthetic:

- Light mode: Stone grays with subtle warm tones
- Dark mode: Deep stone colors with excellent contrast

### Typography

- **Headings**: Cabinet Grotesk (Display font)
- **Body**: Satoshi (Sans-serif)
- Both fonts loaded via [Fontshare](https://www.fontshare.com)

### Components

- Clean, minimal card designs
- Subtle hover effects
- Smooth transitions
- Responsive grid layouts

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables in Vercel's dashboard
4. Deploy!

The site will automatically rebuild on every push to your main branch.

### Other Platforms

The project can be deployed to any static hosting service:

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js` includes:
- Custom color palette (stone)
- Custom fonts
- Extended spacing and typography scales
- Custom animations

### Vue Router

Routes are defined in `src/router.ts`:
- `/` - Home page (portfolio overview)
- `/project/:slug` - Individual project pages

## 📝 Content Management

Content is managed through Sanity Studio. The portfolio queries:

- **Portfolio** - Main portfolio data
- **Experiences** - Work experience entries
- **Projects** - Project showcases
- **Social Links** - Social media profiles

To manage content, run the Sanity Studio locally (in a separate repository).

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is private and proprietary.

## 👤 Author

**Alfred Tamayo**

- Website: [codewithalfred.com](https://codewithalfred.com)
- GitHub: [@tamayoac](https://github.com/tamayoac)

---

Built with ❤️ using Vue 3 and Tailwind CSS
