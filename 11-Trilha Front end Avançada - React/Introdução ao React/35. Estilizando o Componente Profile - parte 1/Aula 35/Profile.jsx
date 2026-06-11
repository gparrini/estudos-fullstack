import React from "react";
import {FaGithub , FaLinkedin ,FaInstagram } from "react-icons/fa";
import styles from "./profile.module.css";

export function Profile(props) {
  return (
    <div className={styles.container}>
      <img src={props.avatar} alt={props.name} className={styles.avatar}/>
      <h2 className={styles.name}>{props.name}</h2>
      <div className={styles.info}>{props.bio}</div>
      <div className={styles.info}>{props.phone}</div>
      <div className={styles.info}>{props.email}</div>
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

