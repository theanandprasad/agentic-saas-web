# AI SaaS Agents Showcase Website

A modern, responsive website showcasing AI agents for businesses. This project is built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design with dark mode support
- Multiple pages showcasing different aspects of the AI agents platform
- Modern UI components built with Tailwind CSS
- SEO-friendly structure

## Pages

- **Home**: Overview of the platform with key features and benefits
- **Agents**: Showcase of available AI agents with filtering options
- **Use Cases**: Real-world applications of AI agents across industries
- **Pricing**: Transparent pricing tiers with feature comparison
- **About**: Company information, mission, values, and team
- **Contact**: Contact form and company information
- **FAQ**: Frequently asked questions about the platform
- **Blog**: Articles and resources about AI agents
- **Demo**: Request form for scheduling a personalized demo
- **Signup/Login**: User authentication pages

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/agentic-saas-web.git
   cd agentic-saas-web
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Testing

### Manual Testing

Follow the testing plan in `testing-plan.md` to manually test all aspects of the website.

### Automated Testing

1. Install Puppeteer:
   ```bash
   npm install puppeteer
   # or
   yarn add puppeteer
   ```

2. Run the testing script:
   ```bash
   node test-website.js
   ```

This script will check if all pages load correctly and report any issues.

## Deployment

This website can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify.

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import your repository.
3. Follow the setup instructions and deploy.

## Customization

### Styling

The website uses Tailwind CSS for styling. You can customize the design by modifying the `tailwind.config.js` file.

### Content

Update the content in the page files located in the `src/app` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Heroicons for the beautiful icons
