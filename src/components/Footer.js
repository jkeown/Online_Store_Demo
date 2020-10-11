import React from "react"
import instagram from "../images/icons/instagram.svg"
import facebook from "../images/icons/facebook.svg"
import youtube from "../images/icons/youtube.svg"


function getCurrentYear(){
  let thisYear = new Date().getFullYear()
  if(thisYear !== 2020){
    return ` - ${thisYear.toString().substring(2)}`
  }
}

function Footer() {
  return (
    <footer className="flex flex-col items-center p-8 bg-blue-600 text-white mt-12">
      <div className="icons flex justify-between w-1/2 md:w-1/4 mb-8">
        <a href="#"><img src={instagram} /></a>
        <a href="#"><img src={facebook} /></a>
        <a href="#"><img src={youtube} /></a>
      </div>
      <small className="text-blue-300">&copy; Copyright 2020{getCurrentYear()} FEARLESS HUSTLE</small>
    </footer>
  )
}

export default Footer
