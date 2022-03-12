import { observer } from 'mobx-react'
import React from 'react'
import { store } from '../store/store'

export const Main = observer(() => {
  const { data } =  store

  if (!data) {
    return (
      <div data-testid='skeleton'> Skeleton </div>
    )
  }

  return (
    <div data-testid='posts'>
      {data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
})