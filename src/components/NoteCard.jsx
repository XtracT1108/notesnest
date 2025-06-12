function NoteCard({ note }) {
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
        <span className="text-sm text-gray-500">
          {new Date(note.date).toLocaleDateString()}
        </span>
        <a
          href={note.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View Notes
        </a>
      </div>
    </div>
  )
}

export default NoteCard 