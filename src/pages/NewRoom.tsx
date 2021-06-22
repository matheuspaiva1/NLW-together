import { Link } from 'react-router-dom';
import { useContext } from "react";
import {AuthContext} from '../contexts/AuthContext'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import {Button} from '../components/Button'
import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  const {user} = useAuth()

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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Digite o código da sala"/>
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? 
            <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}