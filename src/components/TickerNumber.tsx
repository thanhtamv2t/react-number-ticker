import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'

interface TickerProps {
  num: string | number
  index: number
}

const TickerNumber = ({ num, index }: TickerProps) => {
  const [ticker, setTicker] = useState<string | number>(0)
  const [height, setHeight] = useState<number | null>(0)
  const heightRef = useRef<HTMLDivElement>(null)
  const arrNumber: number[] = useMemo(() => {
    return [...Array(10).fill(1)].map((_it, index) => index)
  }, [])

  const props = useSpring({
    transform: `translateY(-${Number(ticker) * 10}%)`,
    delay: index * 100
  })

  useEffect(() => {
    if (height) {
      setTicker(num)
    } else if (heightRef.current) {
      setHeight(heightRef.current.clientHeight)
    }
  }, [heightRef, height, num])
  return (
    <div
      className='ticker-container'
      style={{ overflow: 'hidden', width: '100%', height: height || undefined }}
    >
      {!height ? (
        <div className='num' ref={heightRef}>
          -
        </div>
      ) : (
        <animated.div style={props}>
          {arrNumber.map((it) => (
            <div className='num' key={Math.random()}>
              {it}
            </div>
          ))}
        </animated.div>
      )}
    </div>
  )
}

export default TickerNumber
