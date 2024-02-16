// import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  // const [user, setUser] = useState({});
  const params = useParams();
  const users = useOutletContext();

  const user = users.find(user => user.id === parseInt(params.id))

  // const userId = params.id;

  // useEffect(() =>{
  //   fetch(`http://localhost:4000/users/${userId}`)
  //   .then(r => r.json())
  //   .then(data => setUser(data))
  //   .catch(error => console.error(error));
  // }, [userId]); This still works, but using useOutletContext and .find for demonstration's sake.

  if(!user){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside> 
        <h1>{user.name}</h1>
      </aside>
  ); //aside element is used because "HTML best practices dictate that there should be only one main element per page view."
};

export default UserProfile;