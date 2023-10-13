import { useEffect, useState } from "react";

import ListCast from "./components/ListCast";
import Modals from "./components/Modals";
import Nav from "./components/Nav";

function App() {
  const [cast, setCast] = useState([]);
  const [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
      const response = await fetch("cast.json");
      setCast(await response.json());
    }

    useEffect(() => {
      fetchCast();
    }, []);

  return (
    <>
      <Nav cast={cast} onChoice={ (info) => {setMemberInfo(info)}}/>
      <div className="container">
        <article>
          <hgroup>
            <h1>
              Meet the <i style={{ color: "SteelBlue" }}>StarGazers</i>
            </h1>
            <img src="images/group.svg" alt="StarGazers Group" />
            <p>
              Members of an <b>intergalactic alliance</b> paving the way for peace
              and benevolence among all species. They are known for their
              enthusiasm for science, for their love of fun, and their dedication
              to education.
            </p>
            <ListCast cast={cast} onChoice={ (info) => {setMemberInfo(info)} }/>
            { memberInfo &&
              <Modals 
                member={memberInfo} 
                handleClose={ () => { setMemberInfo(null) } }
                handleChange={ (index) => { setMemberInfo(cast[index])}}
              /> 
            }
          </hgroup>
        </article>
      </div>
    </>
  );
}
export default App;
