import React from 'react'

export function Profile(props) {
  return (
    <div>
        <img src={props.avatar} alt={props.name} />
        <h2>{props.name}</h2>
        <div>{props.bio}</div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
        <div>
            <a href={props.githubUrl}></a>
            <a href={props.linkendinUrl}></a>
            <a href={props.instagramUrl}></a>
        </div>
    </div>
  )
}

// avatar="https://randomuser.me/api/portraits/women/44.jpg"
//           name="Anna Caroline Dias"
//           bio="Desenvolvedora FullStack"
//           phone="+5511987654321"
//           email="ana.carol.dias@email.com"
//           githubUrl="https://github.com/"
//           linkendinUrl="https://www.linkedin.com/login/pt"
//           instagramUrl="https://www.instagram.com/"

// import {FaGithub , FaLinkedin ,FaInstagram } from "react-icons/fa";