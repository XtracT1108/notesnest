import { useState } from 'react'

function NoteCard({ note }) {
  const [isPurchased, setIsPurchased] = useState(false)

  const handlePurchase = async () => {
    // Here you would integrate with a payment gateway
    // For now, we'll simulate a purchase
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsPurchased(true)
      // In a real app, you would:
      // 1. Call your payment API
      // 2. Update the user's purchased notes
      // 3. Handle the download
    } catch (error) {
      console.error('Purchase failed:', error)
    }
  }

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {note.subject}
        </span>
        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {note.class}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{note.description}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-500">
            {new Date(note.date).toLocaleDateString()}
          </span>
          {note.price && (
            <span className="ml-2 text-lg font-semibold text-primary">
              ₹{note.price}
            </span>
          )}
        </div>
        {isPurchased ? (
          <a
            href={note.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download
          </a>
        ) : note.price ? (
          <button
            onClick={handlePurchase}
            className="btn btn-primary"
          >
            Purchase
          </button>
        ) : (
          <a
            href={note.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Notes
          </a>
        )}
      </div>
    </div>
  )
}

export default NoteCard 