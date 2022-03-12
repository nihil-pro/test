import React from 'react' 
import { render, screen, cleanup } from '@testing-library/react'
import { Main } from './Main'

test('App with data', () => {
  jest.mock('remoteService', () => ({
    get: jest.fn(async () => {
      return [{id: 1, title: 'title'}]
    })
  }), { virtual: true })


  render(<Main />)
  const posts = screen.getByTestId('posts')
  expect(posts).toBeInTheDocument()
  cleanup()
})

test('App without data', () => {
  jest.mock('remoteService', () => ({
    get: jest.fn(async () => {
      return null
    })
  }), { virtual: true })

  
  render(<Main />)
  const skeleton = screen.getByTestId('skeleton')
  expect(skeleton).toBeInTheDocument()
  cleanup()
})