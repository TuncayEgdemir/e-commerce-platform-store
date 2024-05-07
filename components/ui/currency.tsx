"use client"
import React, { useEffect, useState } from 'react'

export const formatter  = new Intl.NumberFormat('en-US', {
    style : 'currency',
    currency : 'USD'
  })

interface CurrencyProps {
    value: string | number
}

const Currency =  ({ value }: CurrencyProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [isMounted])

    if (!isMounted) return null
  return (
    <div className='font-semibold'>
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency