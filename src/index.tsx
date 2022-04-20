import * as React from 'react'
import TickerNumber from './components/TickerNumber'
import styles from './styles.module.css'

interface ReactNumberTickerProps {
  number?: string | number
  className?: string
}

const ReactNumberTicker = ({ number, className }: ReactNumberTickerProps) => {
  if (!number) return null

  const stringifyNumber = number?.toString()

  const splitText = stringifyNumber.split('')

  const containerClassName: string = [className, styles.reactNumberTicker]
    .filter((it) => it)
    .join(' ')

  return (
    <div className={containerClassName}>
      {splitText.map((it, index) => {
        const castItem = Number(it)
        if (isNaN(castItem)) {
          return <React.Fragment key={`text-${index}`}>{it}</React.Fragment>
        }

        return (
          <TickerNumber
            key={`text-${index}-time`}
            num={parseInt(it)}
            index={index}
          />
        )
      })}
    </div>
  )
}

export default ReactNumberTicker
