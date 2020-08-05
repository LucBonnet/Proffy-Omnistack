import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://cdn.discordapp.com/avatars/495690279643381780/7fb7a4f86547aa084b825da8f3d2528e.png?size=128" alt="Jelubo"/>
        <div>
          <strong>Jean-Luc Bonnet</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de física avançada.
        <br/>
        <br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>

    </article>
  );
}

export default TeacherItem;