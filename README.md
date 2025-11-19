<div>
  <h1>
    Sanjeet Kumar's Portfolio (sanjeetkumar-v2)
    &middot;
    <a href="https://github.com/kumar-sanjeet/sanjeetkumar-v2/deployments/activity_log?environment=production"><img src="https://img.shields.io/github/deployments/kumar-sanjeet/sanjeetkumar-v2/production?label=cloudflare&style=flat-square"/></a>
    <a href="https://github.com/kumar-sanjeet/sanjeetkumar-v2/commits/main"><img src="https://img.shields.io/github/commit-activity/m/kumar-sanjeet/sanjeetkumar-v2?style=flat-square"/></a>
  </h1>
</div>

Personal portfolio website showcasing my journey as an **Enterprise Architecture Manager** aspiring to become an **AI Architect**.

## 🌐 Live Site

**[sanjeetkumar.com](https://sanjeetkumar.com)** - Deployed on Cloudflare Pages

## 🏗️ Project Structure

This is a **monorepo** built with [Turborepo](https://turbo.build/repo) and [pnpm workspaces](https://pnpm.io/workspaces).

```
sanjeetkumar-v2/
├── apps/
│   └── sanjeetkumar.com/          # Main portfolio (Next.js static site)
├── packages/                       # Shared packages (future use)
├── scripts/                        # Build and utility scripts
└── [config files]                  # Root-level configuration
```

### Why Monorepo?

While currently a single application, this structure provides:

- Easy addition of future projects (AI APIs, admin panels, microservices)
- Shared code between projects via `packages/`
- Consistent tooling and configurations
- Scalable architecture aligned with enterprise practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with TypeScript
- **Styling**: Tailwind CSS + MDX
- **Package Manager**: pnpm
- **Build System**: Turborepo
- **Deployment**: Cloudflare Pages (Static Export)
- **Languages**: TypeScript (70%), MDX (20%), JavaScript (5%), CSS (5%)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ (LTS)
- [pnpm](https://pnpm.io/installation) 9+

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kumar-sanjeet/sanjeetkumar-v2.git
   cd sanjeetkumar-v2
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Preview production build locally

# Turborepo commands
pnpm turbo run dev    # Run all workspace apps in dev mode
pnpm turbo run build  # Build all workspace apps
pnpm turbo run lint   # Lint all workspace apps
```

## 📦 Building for Production

This site uses **Next.js Static HTML Export** for Cloudflare Pages:

```bash
# Build static files
pnpm build

# Output directory
apps/sanjeetkumar.com/out
```

## ☁️ Deployment (Cloudflare Pages)

### Build Configuration

- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `pnpm run build`
- **Build output directory**: `apps/sanjeetkumar.com/out`
- **Root directory**: `/`
- **Node version**: `20`

### Automatic Deployments

- **Production**: Deploys automatically on push to `main` branch
- **Preview**: Deploys automatically for pull requests

## 🎯 Future Roadmap

- [ ] Add AI/ML project showcases
- [ ] Integrate blog with technical articles
- [ ] Add backend API for dynamic features (`apps/api`)
- [ ] Create shared UI component library (`packages/ui`)
- [ ] Add shared TypeScript types (`packages/types`)
- [ ] Implement analytics and monitoring

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

**Sanjeet Kumar** - Enterprise Architecture Manager

- Portfolio: [sanjeetkumar.com](https://sanjeetkumar.com)
- GitHub: [@kumar-sanjeet](https://github.com/kumar-sanjeet)
- LinkedIn: [linkedin.com/in/sanjeetkumar](https://linkedin.com/in/sanjeetkumar)

---

Built with ❤️ using Next.js, TypeScript, and Cloudflare Pages
