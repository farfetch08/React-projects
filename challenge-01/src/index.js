import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function App(){
  return(
    <main className='card'>
      <Avatar />
      <AvatarName />
      <AvatarBio />
      <SkillList />
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

function SkillList(){
  return(
    <div className='skill-list-container'>
    <Skill name="HTML" color="rgb(206, 48, 48)"/>
    <Skill name="CSS" color="rgb(49, 104, 232)"/>
    <Skill name="JavaScript" color="rgb(207, 207, 20)"/>
    <Skill name="ReactJS" color="rgb(80, 207, 250)"/>
    <Skill name="NodeJS" color="rgb(15, 185, 15)"/>
  </div>
  )
}

// className={`skill-list ${props.color}`}
function Skill(props){
  return(
    <div>
      <button className='skill-list'  style={{backgroundColor: props.color}}>{props.name}</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);