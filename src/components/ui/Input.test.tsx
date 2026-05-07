import { render, screen } from '@testing-library/react'
import { Input } from './Input'
import { describe, it, expect } from 'vitest'

describe('Input', () => {
  it('renders label correctly', () => {
    render(<Input label="Username" />)
    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  it('renders error message correctly', () => {
    render(<Input error="Invalid field" />)
    expect(screen.getByText('Invalid field')).toBeInTheDocument()
  })

  it('applies error styles when error is present', () => {
    render(<Input error="Invalid field" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-red-500')
  })
})
