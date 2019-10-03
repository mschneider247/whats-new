import React from 'react';
import './Menu.css'

const Menu = (props) => {

  return(
    <div>
      <button onClick={() => {props.filterNews('local')}}>Local News</button>
      <button onClick={() => {props.filterNews('technology')}}>Technology</button>
      <button onClick={() => {props.filterNews('entertainment')}}>Entertainment</button>
      <button onClick={() => {props.filterNews('science')}}>Science</button>
      <button onClick={() => {props.filterNews('health')}}>Health</button>
    </div>
  )
}

export default Menu;