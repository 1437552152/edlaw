// import React from "react";
// import { projectFirestore } from '../firebase';

// class Auth extends React.Component {
//   render() {
//     return (
//       <div>
//         <Upload></Upload>
//     </div>
//     );
//   }
// }

// const Upload = () => {
//   const handler = async (e)  => {
//     let select = e;
//     console.log(select);

//     const unsub = projectFirestore.collection("users").doc("yvCT8ezjaljuoqLPXtNJ");;

//     unsub.get().then((doc) => {
//         // Document was found in the cache. If no cached document exists,
//         // an error will be returned to the 'catch' block below.
//         console.log("Cached document data:", doc.data());
//     }).catch((error) => {
//         console.log("Error getting cached document:", error);
//     });
    
//   }


//   return (
//     <form>
//       <input type="file" onChange={handler}>
      
//       </input>
//     </form>
//   )
// }


// export default Auth;
