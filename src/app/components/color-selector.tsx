'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Color {
  name: string
  value: string
}

interface ColorSelectorProps {
  colors: Color[]
  onChange?: (color: Color) => void
}

export function ColorSelector({ colors, onChange }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(0)

  return (
    <div className="flex gap-2">
      {colors.map((color, index) => (
        <button
          key={index}
          onClick={() => {
            setSelectedColor(index)
            onChange?.(color)
          }}
          className={cn(
            "h-8 w-8 rounded-full border",
            selectedColor === index && "ring-2 ring-blue-500 ring-offset-2"
          )}
          style={{ backgroundColor: color.value }}
          aria-label={`Select ${color.name}`}
        />
      ))}
    </div>
  )
}