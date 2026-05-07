import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { describe, it, expect } from 'vitest'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies primary variant by default', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-green-600')
  })

  it('applies secondary variant correctly', () => {
    render(<Button variant="secondary">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gray-200')
  })
})
