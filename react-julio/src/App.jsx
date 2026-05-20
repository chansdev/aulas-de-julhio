import './App.css'
import Card from '../components/card'

function App() {

  return (
    <div className='body'>
      <Card nome="Mutano" imgLink="http://i.pinimg.com/236x/f6/76/11/f67611f04ba38026da2d97c9dfae6e80.jpg" poder="Mutação" desc="Ele pode virar varios animais e ele é engraçado"/>
      <Card nome="Estelar" imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnhrBAQPuOysUqZbDYA9pb_uSGzOyljz_vQ&s" poder="Energia" desc="Ela voa e solta raio rosa"/>
      <Card nome="Robin" imgLink="https://static.wikia.nocookie.net/outra-semana-no-cartoon-network-br/images/8/8a/Robin_Transparent.png/revision/latest?cb=20190315155841&path-prefix=pt-br" poder="Liderança" desc="Ele bate nos vilões e manda em todo mundo"/>
      <Card nome="Ciborgue" imgLink="https://static.wikia.nocookie.net/teen-titans-go/images/a/a3/Cyborg.png/revision/latest/scale-to-width-down/174?cb=20130714180008&path-prefix=pt-br" poder="Tecnologia" desc="Ele é meio robô e gosta de comida"/>
      <Card nome="Ravena" imgLink="https://i.pinimg.com/736x/22/82/d8/2282d89b12fa73d60fbc6c73ae3aad24.jpg" poder="Magia" desc="Ela é sombria e fica irritada"/>
    </div>
  )
}

export default App
