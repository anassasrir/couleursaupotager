'use client'

import React, { useState } from 'react'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

interface NoteFormProps {
  initialData?: { title: string; content: string }
  onSubmit: (data: { title: string; content: string }) => Promise<void>
  onCancel?: () => void
}

export const NoteForm: React.FC<NoteFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(initialData?.title || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !content) return

    setIsSubmitting(true)
    try {
      await onSubmit({ title, content })
      if (!initialData) {
        setTitle('')
        setContent('')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg border shadow-sm">
      <Input
        label="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Le titre de votre note..."
        disabled={isSubmitting}
        required
      />
      <div className="space-y-1">
        <label htmlFor="note-content" className="block text-sm font-medium text-gray-700">Contenu</label>
        <textarea
          id="note-content"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all min-h-[100px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Votre note..."
          disabled={isSubmitting}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel} disabled={isSubmitting}>
            Annuler
          </Button>
        )}
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Enregistrement...' : initialData ? 'Modifier' : 'Ajouter'}
        </Button>
      </div>
    </form>
  )
}
