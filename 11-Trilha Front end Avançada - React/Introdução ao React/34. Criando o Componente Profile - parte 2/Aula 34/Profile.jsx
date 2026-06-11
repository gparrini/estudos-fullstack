import React from "react";
import {FaGithub , FaLinkedin ,FaInstagram } from "react-icons/fa";

export function Profile(props) {
  return (
    <div>
      <img src={props.avatar} alt={props.name} />
      <h2>{props.name}</h2>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div>
        <a href={props.githubUrl} target="_blank" rel="noreferer">
            <FaGithub />
          Github
        </a>
        <a href={props.linkendinUrl} target="_blank" rel="noreferer">
            <FaLinkedin />
          Linkedin
        </a>
        <a href={props.instagramUrl} target="_blank" rel="noreferer">
            <FaInstagram />
          Instagram
        </a>
      </div>
    </div>
  );
}

// o atributo rel="noreferrer" impede que a página de destino receba
// informações sobre de onde o usuário veio. Normalmente, quando clicamos em um link,
//  o navegador envia um cabeçalho HTTP chamado "Referer" (sim, com essa grafia)
// que informa à página de destino a URL da página original. Com rel="noreferrer",
//  essa informação não é enviada, garantindo mais privacidade e segurança.

