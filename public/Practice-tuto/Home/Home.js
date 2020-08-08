import React from "react";

import "./Home.css";

const Home = ({ developer, deleteUser }) => {
  const Engineers = developer.map((dev) => {
    return dev.age > 22 ? (
      <div className="content__section" key={dev.id}>
        <h2>Username: {dev.name}</h2>
        <h2>Age: {dev.age}</h2>
        <h2>Skill: {dev.skill}</h2>
        <button onClick={() => {deleteUser(dev.id)}}>Delete user</button>
      </div>
    ) : (
        null
      );
  });

  return (
    <div className='container column'>
      {Engineers}
    </div>
  )
};

export default Home;

 
// /*** Custom Component ***/
// // import Home from "./Components/Practice-tuto/Home/Home";
// // import AddEngineer from "./Components/Practice-tuto/Form/Form";


// const App = () => {
// const [dev, setdev] = useState({
//     dev:[
//         {
//         name: "Olamide",
//         age: 22,
//         skill: "FrontEnd Software Engineer",
//         id: Math.random() * 5,
//       },
//       {
//         name: "JHorlamide",
//         age: 23,
//         skill: "Full Stack Software Engineer",
//         id: Math.random() * 5,
//       },
//       {
//         name: "Olamide",
//         age: 24,
//         skill: "Software Engineer",
//         id: Math.random() * 5,
//       },
//     ]
//   });

//   const addEngineer = (developer) => {
//     const newDev = [...dev.dev, developer];
//     setdev({
//       dev: newDev,
//     });
//   };

//   const deleteEngineer = (id) => {
//     const users = dev.dev.filter((user) => {
//       return user.id !== id;
//     });
//     setdev({
//       dev: users,
//     });
//     console.log(id);
//   };

//   useEffect(() => {
//     return () => {
//       console.log(dev);
//       console.log(setdev);
//     };
//   }, [dev]);

//     return(
//       <div className="container column card">
//         <Home developer={dev.dev} deleteUser={deleteEngineer} />
//         <AddEngineer developer={addEngineer} />
//       </div>
//     )
  
// }
// */ 
