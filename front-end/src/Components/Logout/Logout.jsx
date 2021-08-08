// import React, { useState } from "react"
// import {  Button,  } from "react-bootstrap"
// import { useAuth } from "../../Context/AuthContext"
// import {  useHistory } from "react-router-dom"

// export default function Logout() {
//   const [error,setError] = useState(false)
//   const {  logout } = useAuth()
//   const history = useHistory()

//   async function handleLogout() {
//     setError(true)

//     try {
//       await logout()
//       history.push("/login")
//     } catch {
//       setError("Failed to log out")
//     }
//   }

//   return  (
//     <>
      
     
//       <div className="w-100 text-center mt-2">
//         <Button variant="link" onClick={handleLogout}>
//           Log Out
//         </Button>
//       </div>
//     </>
//   )
// }
