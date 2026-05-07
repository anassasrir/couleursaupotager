import { render, screen, fireEvent } from '@testing-library/react'
import { NoteCard } from './NoteCard'
import { describe, it, expect, vi } from 'vitest'

describe('NoteCard', () => {
  const mockNote = {
    id: '1',
    title: 'Note Test',
    content: 'Contenu de test',
    updatedAt: new Date(),
  }

  it('renders title and content', () => {
    render(<NoteCard note={mockNote} />)
    expect(screen.getByText('Note Test')).toBeInTheDocument()
    expect(screen.getByText('Contenu de test')).toBeInTheDocument()
  })

  it('calls onEdit when edit button is clicked', () => {
    const onEdit = vi.fn()
    render(<NoteCard note={mockNote} onEdit={onEdit} />)
    
    const editButton = screen.getByLabelText(/modifier/i)
    fireEvent.click(editButton)
    
    expect(onEdit).toHaveBeenCalledWith('1')
  })

  it('calls onDelete when delete button is clicked', () => {
    const onDelete = vi.fn()
    render(<NoteCard note={mockNote} onDelete={onDelete} />)
    
    const deleteButton = screen.getByLabelText(/supprimer/i)
    fireEvent.click(deleteButton)
    
    expect(onDelete).toHaveBeenCalledWith('1')
  })
})
