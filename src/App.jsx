import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import ArrayLists from "./Todos";
// import Questions from "./Questions";
// import Card from "./Components/Card";
// import Products    from "./Data";
import Register from "./Register";

export default function App() {
  return (
    <div className="flex justify-center h-screen items-center gap-40">
      <Register />
    </div>
  );
}

// export default App;

// import { People } from "./components/peaple";

// function App() {
//   const [newPeople, setNewPeople] = useState(People);

//   const handleDeleteUser = (userId) => {
//     let newUsers = newPeople.filter((person) => person.id !== userId);
//     setNewPeople(newUsers);
//   };

//   return (
//     <div className="text-center">
//       <ul>
//         {newPeople.map((item) => (
//           <div
//             key={item.id}
//             className="bg-blue-400 flex p-5 border-2 gap-3 justify-between m-5"
//           >
//             <li>{item.name}</li>
//             <li>{item.age}</li>
//             <li>{item.id}</li>
//             <li>
//               <button
//                 onClick={() => handleDeleteUser(item.id)}
//                 className="bg-red-600 px-5 py-2 rounded-full text-white w-full"
//               >
//                 Delete
//               </button>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }
