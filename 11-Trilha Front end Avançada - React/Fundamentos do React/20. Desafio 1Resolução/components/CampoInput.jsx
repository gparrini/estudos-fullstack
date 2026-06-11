import React from 'react'

export function CampoInput({tipo = "text", placeholder, onChange}) {
  return (
    <input type={tipo} placeholder={placeholder} onChange={onChange}/>
  )
}

