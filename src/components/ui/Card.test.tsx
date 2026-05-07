import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardBody, CardFooter } from './Card'
import { describe, it, expect } from 'vitest'

describe('Card', () => {
  it('renders correctly with subcomponents', () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})
