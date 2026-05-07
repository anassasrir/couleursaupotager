'use client'

import React, { useState } from 'react'
import { NoteCard } from './NoteCard'
import { NoteForm } from './NoteForm'
import { createNote, updateNote, deleteNote } from '@/lib/actions/notes'
import { StickyNote, Plus } from 'lucide-react'
import { Button } from '../ui/Button'

interface Note {
  id: string
  title: string
  content: string
  updatedAt: Date
}

interface NotesManagerProps {
  initialNotes: Note[]
}

export const NotesManager: React.FC<NotesManagerProps> = ({ initialNotes }) => {
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  const handleCreate = async (data: { title: string; content: string }) => {
    await createNote(data)
    setShowForm(false)
  }

  const handleUpdate = async (data: { title: string; content: string }) => {
    if (editingId) {
      await updateNote(editingId, data)
      setEditingId(null)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette note ?')) {
      await deleteNote(id)
    }
  }

  const editingNote = initialNotes.find((n) => n.id === editingId)

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <StickyNote className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-extrabold text-gray-900">Notes</h1>
        </div>
        {!showForm && !editingId && (
          <Button variant="primary" onClick={() => setShowForm(true)} className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Nouvelle note</span>
          </Button>
        )}
      </div>

      {(showForm || editingId) && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Modifier la note' : 'Nouvelle note'}</h2>
          <NoteForm
            initialData={editingNote}
            onSubmit={editingId ? handleUpdate : handleCreate}
            onCancel={() => {
              setShowForm(false)
              setEditingId(null)
            }}
          />
        </div>
      )}

      {initialNotes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialNotes.map((note) => (
            <NoteCard 
              key={note.id} 
              note={note} 
              onDelete={handleDelete}
              onEdit={setEditingId}
            />
          ))}
        </div>
      ) : (
        !showForm && (
          <div className="bg-white rounded-lg border border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500 text-lg mb-4">Vous n&apos;avez pas encore de notes.</p>
            <Button variant="primary" onClick={() => setShowForm(true)}>
              Créer ma première note
            </Button>
          </div>
        )
      )}
    </div>
  )
}
