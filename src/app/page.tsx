import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Gateway to Quality Educational Notes
            </h1>
            <p className="text-xl mb-8">
              Access premium study materials, curated by experts, available for subscription.
            </p>
            <div className="space-x-4">
              <Link
                href="/notes"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Browse Notes
              </Link>
              <Link
                href="/signup"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NotesNest?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Premium Content</h3>
              <p className="text-gray-600">
                Access high-quality notes curated by subject matter experts.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Offline Access</h3>
              <p className="text-gray-600">
                Download and access your notes offline, anytime, anywhere.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-600">
                Safe and secure UPI payments with instant access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
