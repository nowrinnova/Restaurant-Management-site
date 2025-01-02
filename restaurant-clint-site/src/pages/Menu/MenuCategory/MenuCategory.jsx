import React from 'react'
import MenuItem from '../../../shared/MenuItem/MenuItem'

export default function MenuCategory({popular}) {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-4 max-w-4xl mx-auto">
      {popular.map(item=><MenuItem data={item}></MenuItem>)}
    </div>
  )
}
