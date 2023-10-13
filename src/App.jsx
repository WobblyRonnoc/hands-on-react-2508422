import { Component, useState } from 'react';

import ListCast from './components/ListCast';

function App() {
  return (
    <div className="container">
      <article>
        <hgroup>
          <h1>Meet the <i style={{ color: "SteelBlue" }}>StarGazers</i></h1>
          <img src="images/group.svg" alt="StarGazers Group" />
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast/>
        </hgroup>
      </article>
    </div>
  )
}
export default App
