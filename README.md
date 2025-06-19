# Devotion Documentation

This repository contains the documentation for the Devotion project, a comprehensive full-stack development stack. The documentation is built using Docusaurus 2, a modern static website generator.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/devotion.git
cd devotion
```

2. Navigate to the website directory and install dependencies:
```bash
cd website
npm install
```

## Development

To start the development server:

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Building

To build the documentation site:

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The documentation is automatically deployed to GitHub Pages using GitHub Actions. The workflow is configured in `.github/workflows/deploy.yml`.

### Manual Deployment

If you need to deploy manually:

1. Build the site:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
GIT_USER=<your-github-username> npm run deploy
```

## Project Structure

```
devotion/
├── website/
│   ├── docs/                    # Documentation files
│   │   ├── intro.md            # Main introduction
│   │   ├── aldev/              # Aldev documentation
│   │   ├── goald/              # Goald documentation
│   │   ├── goaldn/             # GoaldN documentation
│   │   └── goaldr/             # GoaldR documentation
│   ├── src/                    # Source files
│   │   ├── components/         # React components
│   │   ├── css/               # CSS styles
│   │   └── pages/             # Additional pages
│   ├── static/                # Static assets
│   ├── docusaurus.config.js   # Docusaurus configuration
│   └── sidebars.js            # Sidebar configuration
└── .github/
    └── workflows/             # GitHub Actions workflows
```

## Adding New Documentation

1. Create a new markdown file in the appropriate directory under `docs/`
2. Add frontmatter at the top of the file:
```markdown
---
sidebar_position: 1
---
```
3. Update the sidebar configuration in `sidebars.js` if needed

## Customization

### Configuration

The main configuration file is `docusaurus.config.js`. Here you can:
- Change the site title and description
- Configure navigation
- Set up plugins
- Customize the theme

### Styling

- Global styles are in `src/css/custom.css`
- Component-specific styles can be added in the component files

## Maintenance

### Updating Dependencies

To update dependencies:

```bash
npm update
```

### Adding New Dependencies

```bash
npm install package-name
```

### Troubleshooting

Common issues and solutions:

1. **Build fails**
   - Clear the build directory: `rm -rf build`
   - Clear npm cache: `npm cache clean --force`
   - Reinstall dependencies: `npm install`

2. **Development server issues**
   - Check if port 3000 is available
   - Try running with a different port: `npm start -- --port 3001`

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.