# NotesNest

A Progressive Web App (PWA) for sharing and accessing study notes, built with React and Firebase.

## Features

- 📱 Progressive Web App (PWA) support
- 🔐 User authentication
- 📚 Note sharing and access
- 💰 Freemium model with premium content
- 🔒 Admin-only upload functionality
- 📱 Mobile-first responsive design
- 🔄 Offline support for premium users

## Tech Stack

- React
- Vite
- Tailwind CSS
- Firebase (Authentication & Firestore)
- Google Drive API
- PWA capabilities

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Google Cloud Platform account (for Google Drive API)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/notesnest.git
   cd notesnest
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase project and enable:
   - Authentication (Email/Password)
   - Firestore Database
   - Storage (for file uploads)

4. Create a `.env` file in the root directory:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Set up custom domain:
   - Add CNAME file in the `public` directory with your domain
   - Configure DNS settings to point to GitHub Pages
   - Update Firebase configuration with the new domain

## PWA Features

- Offline support for premium content
- Installable on mobile devices
- Push notifications (coming soon)
- Background sync (coming soon)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@notesnest.com or open an issue in the repository. 