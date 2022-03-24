import {Link} from 'react-router-dom';

export default function Contact(){
    return(
      <div>
        <h1>Contatos</h1><br/>
        <span>Email: teste@teste.com</span><br/>
        <Link to="/">Home</Link><br/>
        <Link to="/sobre">Sobre</Link><br/>

      </div>
    );
  }