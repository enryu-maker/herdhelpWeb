import React from 'react'
import LineDivider from './LineDivider'
import { COLORS, FONTS } from '../Theme/Theme'
export default function InfoCard({
  label, 
  value, 
  withDivider = true,
  infostyle,
  onPress
}) {
  return (
    <div>
       <div
                style={{
                  display:"flex",
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    justifyContent:"space-between",
                    paddingTop:20,
                    ...infostyle
                }}
            onClick={onPress}
            >
                <p style={{ color: COLORS.gray, ...FONTS.h2,marginLeft:10  }}>{label}</p>
                <p  style={{textAlign: 'right',  ...FONTS.body2, marginRight:5,marginLeft:20 }}>{value}</p>
            </div>

            {withDivider &&
                <LineDivider
                />
            }
    </div>
  )
}
