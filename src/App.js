import { useEffect, useState } from 'react'

const App = () => {
  const [player, setPlayer] = useState(null)
  const [bot, setBot] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['Batu', 'Kertas', 'Gunting']

  const handleClick = (value) => {
    setPlayer(value)
    generateBot()
  }

  const generateBot = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setBot(randomChoice)
  }

  useEffect(() => {
    {
      switch (player + bot) {
        case 'GuntingKertas':
        case 'BatuGunting':
        case 'KertasBatu':
          setResult('KAMU MENANG!')
          break
        case 'KertasGunting':
        case 'GuntingBatu':
        case 'BatuKertas':
          setResult('KAMU KALAH!')
          break
        case 'BatuBatu':
        case 'KertasKertas':
        case 'GuntingGunting':
          setResult('WAH SERI, GAK ADA YANG MENANG😜!')
          break
      }
    }
  }, [bot, player])

  return (
    <div>
      <h1>Player : {player}</h1>
      <h1>Bot : {bot}</h1>
      {choices.map((choice, index) =>
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      )}
      <h1>{result}</h1>
    </div>
  )
}

export default App
