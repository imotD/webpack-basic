
// import example from './images/example.jpg'
import './styles/main.css'

console.log('!Tolong')

class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

//  
const p = document.createElement('p')
p.textContent = `I like ${myGame.game}.`

//   
const heading = document.createElement('h1')
heading.textContent = ' !'

//      DOM
const root = document.querySelector('#root')
root.append(heading, p)
