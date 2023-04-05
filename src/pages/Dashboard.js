import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
      //console.log(`${token}`)
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])

  
  return (
    <>
    <div>Dash</div>
    </>
  )
}

export default Dashboard