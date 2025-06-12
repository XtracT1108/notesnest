# NoteNest

A mobile-friendly web application for sharing and accessing study notes. Built with React, Vite, and Tailwind CSS.

## Features

- Browse study notes by subject and class
- Filter notes by subject and class
- Responsive design for mobile and desktop
- Easy deployment to GitHub Pages
- Custom domain support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/notesnest.git
   cd notesnest
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   {
     "homepage": "https://yourusername.github.io/notesnest"
   }
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Custom Domain Setup

1. Add your custom domain to the `CNAME` file in the `public` directory:
   ```
   yourdomain.com
   ```

2. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. Wait for DNS propagation (can take up to 24 hours)

## Updating Notes

### Using JSON File

1. Edit the `public/notes.json` file with your notes data
2. Commit and push the changes
3. Run `npm run deploy` to update the site

### Using Google Sheets (Optional)

1. Create a Google Sheet with the following columns:
   - id
   - title
   - subject
   - class
   - description
   - date
   - downloadLink

2. Publish the sheet as JSON:
   - File > Share > Publish to web
   - Choose JSON format
   - Copy the published URL

3. Update the fetch URL in `src/pages/Home.jsx` to use your Google Sheets URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 