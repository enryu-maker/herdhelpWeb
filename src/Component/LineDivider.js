import React from 'react'
import { COLORS } from '../Theme/Theme'
export default function LineDivider({
    lineStyle
}) {
  return (
    <div
            style={{
                height: 0.9,
                width: "80%",
                backgroundColor: COLORS.gray2,
                ...lineStyle
            }}
        />
  )
}
