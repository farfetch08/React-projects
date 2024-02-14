import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function App(){
  return(
    <main className='card'>
      <Avatar />
      <AvatarName />
      <AvatarBio />
      <div className='skill-list-container'>
        <SkillList name="HTML" color="red"/>
        <SkillList name="CSS" color="blue"/>
        <SkillList name="JavaScript" color="yellow"/>
        <SkillList name="NodeJS" color="green"/>
      </div>
    </main>
  )
}


function Avatar(){
  return(
    <div>
      <img className="avatar" src="./profile.jpg" alt='profile' />
    </div>
  )
}

function AvatarName(){
  return(
    <h1 className='avatar-name'>Harshit</h1>
  )
}

function AvatarBio(){
  return(
    <p className='bd-text'>Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.</p>
  )
}

function SkillList(props){
  return(
    <div>
      <button className={`skill-list ${props.color}`}>{props.name}</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);