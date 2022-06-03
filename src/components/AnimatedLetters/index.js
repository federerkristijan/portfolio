import './index.scss'

// idx means time, so idx=15 means 1,5s delay!!!!
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
        ))
      }
    </span>
  )
}

export default AnimatedLetters
