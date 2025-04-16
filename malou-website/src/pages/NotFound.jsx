import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
        NotFound 404
        <Link to ="/malou/">Go back to Home</Link> {/*This will use client  side rendering to link, so its faster*/}
    </div>
  )
}
