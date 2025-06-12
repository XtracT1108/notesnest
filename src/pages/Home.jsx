import { useState, useEffect } from 'react'
import NoteCard from '../components/NoteCard'
import FilterBar from '../components/FilterBar'

function Home() {
  const [notes, setNotes] = useState([])
  const [filteredNotes, setFilteredNotes] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedClass, setSelectedClass] = useState('')
  const [subjects, setSubjects] = useState([])
  const [classes, setClasses] = useState([])

  useEffect(() => {
    // Fetch notes from the JSON file
    fetch('/notes.json')
      .then((response) => response.json())
      .then((data) => {
        setNotes(data)
        setFilteredNotes(data)
        // Extract unique subjects and classes
        const uniqueSubjects = [...new Set(data.map((note) => note.subject))]
        const uniqueClasses = [...new Set(data.map((note) => note.class))]
        setSubjects(uniqueSubjects)
        setClasses(uniqueClasses)
      })
      .catch((error) => console.error('Error loading notes:', error))
  }, [])

  const handleFilterChange = (type, value) => {
    if (type === 'subject') {
      setSelectedSubject(value)
    } else {
      setSelectedClass(value)
    }

    // Apply filters
    const filtered = notes.filter((note) => {
      const subjectMatch = !value || note.subject === value
      const classMatch = !selectedClass || note.class === selectedClass
      return subjectMatch && classMatch
    })

    setFilteredNotes(filtered)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Study Notes</h2>
      <FilterBar
        subjects={subjects}
        classes={classes}
        selectedSubject={selectedSubject}
        selectedClass={selectedClass}
        onFilterChange={handleFilterChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
      {filteredNotes.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No notes found matching your filters.</p>
      )}
    </div>
  )
}

export default Home 