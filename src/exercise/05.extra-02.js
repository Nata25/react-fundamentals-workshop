// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const styles = { fontStyle: 'italic' }

// function Box (props) {
//   const updatedProps = {
//     ...props,
//     style: { fontStyle: 'italic', ...props.style },
//     className: `box ${props.className}`
//   }
//   return <div {...updatedProps} />
// }

function Box ({style, className = '', ...rest}) {
  return (
    <div
      className={`box ${className}`}
      style={{ fontStyle: 'italic', ...style}}
      { ...rest }
    />
  )
}

function BoxWithSize ({ size = '', className = '', style, ...rest}) {
  return (
    <div
      className={`box ${className} ${size && 'box--' + size}`}
      style={{ fontStyle: 'italic', ...style}}
      {...rest}
    />
  )
}

const largeBox = (
  <div
    className="box box--large"
    style={{ ...styles, backgroundColor: 'orange' }}
    >
      large orange box
  </div>
)

function App() {
  return (
    <div>
      <BoxWithSize size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </BoxWithSize>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      {largeBox}
    </div>
  )
}

export default App
