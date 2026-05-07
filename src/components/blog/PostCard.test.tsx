import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'
import { describe, it, expect } from 'vitest'

describe('PostCard', () => {
  const mockPost = {
    title: 'Mon premier article',
    slug: 'mon-premier-article',
    content: 'Ceci est le contenu de mon premier article sur le potager.',
    publishedAt: new Date('2026-05-07'),
  }

  it('renders title and summary correctly', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Mon premier article')).toBeInTheDocument()
    expect(screen.getByText(/Ceci est le contenu/)).toBeInTheDocument()
  })

  it('formats date correctly', () => {
    render(<PostCard post={mockPost} />)
    // The date format can vary slightly by environment, so we just check for parts of it
    expect(screen.getByText(/2026/)).toBeInTheDocument()
    expect(screen.getByText(/mai/i)).toBeInTheDocument()
  })

  it('links to the correct slug', () => {
    render(<PostCard post={mockPost} />)
    const link = screen.getByRole('link', { name: /lire la suite/i })
    expect(link).toHaveAttribute('href', '/blog/mon-premier-article')
  })
})
