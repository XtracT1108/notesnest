# NotesNest

A marketplace for educational notes with subscription-based access. Built with Next.js, Supabase, and Razorpay.

## Features

- User authentication with Supabase
- PDF note upload and viewing
- Subscription management with Razorpay UPI payments
- Admin dashboard for note management
- PWA support for offline access
- Responsive design

## Prerequisites

- Node.js (v18+)
- Git & GitHub account
- Supabase account
- Razorpay account
- Custom domain (run.place)

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

3. Create a `.env.local` file with your credentials:
   ```
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Razorpay
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret

   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Set up Supabase:
   - Create a new project
   - Enable email/password authentication
   - Create the following tables:
     - `notes`: id, title, description, pdf_url, created_at
     - `subscriptions`: id, user_id, status, start_date, end_date, payment_id
   - Create a storage bucket named "notes" for PDF uploads

5. Set up Razorpay:
   - Create a new account
   - Get your API keys
   - Set up webhook endpoints for payment verification

## Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

1. Build the static site:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   - Push the `out` directory to the `gh-pages` branch
   - Set up GitHub Pages in your repository settings
   - Configure your custom domain (notes.pratik.run.place)

3. Set up DNS:
   - Add a CNAME record pointing to your GitHub Pages URL
   - Wait for DNS propagation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
