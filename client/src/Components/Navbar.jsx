import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <div className="navbar">
       <h1 > Project Handler</h1>
       <div className="navbarElements">
        <Link to={"/"}></Link>
        <Link to={"/signIn"}>signIn</Link>
        <Link to={"/signUp"}>signUp</Link>
        <Link to={"/uploadData"}>UploadData</Link>
       </div>
      </div>
    </>
  )
}
