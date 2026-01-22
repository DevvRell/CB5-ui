# The Competent Community - Community Platform

A modern web application for community engagement, featuring a business directory, events management, and complaint tracking system.

## Features

- **Homepage**: Community overview with statistics and featured content
- **Business Directory**: Search and browse local businesses with filtering
- **Events Page**: Community events with search, filtering, and attendance tracking
- **Complaints Page**: Submit and track community issues with status management

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd unite-the-hood
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── HomePage.jsx    # Homepage
│   ├── BusinessDirectory.jsx  # Business directory
│   ├── EventsPage.jsx  # Events page
│   └── ComplaintsPage.jsx     # Complaints page
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Features Overview

### Homepage
- Hero section with call-to-action buttons
- Community statistics
- Feature highlights
- Community spotlight section

### Business Directory
- Search functionality
- Category filtering
- Business cards with contact information
- Rating and review display

### Events Page
- Event listings with images
- Search and category filtering
- Attendance tracking
- Event details and registration

### Complaints Page
- Submit new complaints
- Status tracking (pending, in-progress, resolved)
- Priority levels
- Response system
- Statistics dashboard

## Customization

### Colors
The application uses a custom color scheme defined in `tailwind.config.js`:
- Primary colors: Blue shades
- Secondary colors: Purple shades

### Styling
Global styles and component classes are defined in `src/index.css` using Tailwind CSS utilities.

## Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team or create an issue in the repository. 