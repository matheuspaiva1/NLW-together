import {useHistory} from 'react-router-dom'
import { useContext } from "react";
import {AuthContext} from '../contexts/AuthContext'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import {Button} from '../components/Button'
import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';


export function Home() {
  // fazendo login no google e redirecionando
  const history = useHistory()
  const {user ,signInWithGoogle} = useAuth()
  
  async function handleCreateRoom () {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }


  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="perg e res" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo real</p>  
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="logo"/>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="google"/>
            Crie a sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala"/>
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}