import React from 'react' 
import { render, screen, cleanup } from '@testing-library/react'
import { Main } from './Main'

jest.mock('remoteService', () => ({
  get: jest.fn(async () => {
    return [{id: 1, title: 'title'}]
  })
}), { virtual: true })

test('App with data', () => {
  render(<Main />)
  const posts = screen.getByTestId('posts')
  expect(posts).toBeInTheDocument()
  cleanup()
})