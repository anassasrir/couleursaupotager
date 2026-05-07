import { render, screen, fireEvent } from '@testing-library/react'
import { NoteForm } from './NoteForm'
import { describe, it, expect, vi } from 'vitest'

describe('NoteForm', () => {
  it('submits correct data', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined)
    render(<NoteForm onSubmit={onSubmit} />)

    fireEvent.change(screen.getByLabelText(/titre/i), { target: { value: 'Nouveau titre' } })
    fireEvent.change(screen.getByLabelText(/contenu/i), { target: { value: 'Nouveau contenu' } })
    
    fireEvent.click(screen.getByRole('button', { name: /ajouter/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Nouveau titre',
      content: 'Nouveau contenu',
    })
  })

  it('renders initial data when editing', () => {
    render(
      <NoteForm 
        initialData={{ title: 'Titre Initial', content: 'Contenu Initial' }} 
        onSubmit={vi.fn()} 
      />
    )
    expect(screen.getByDisplayValue('Titre Initial')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Contenu Initial')).toBeInTheDocument()
  })
})
