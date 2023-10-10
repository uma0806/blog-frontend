import {Grid} from '@chakra-ui/layout'
import { IoLogoFacebook } from "react-icons/io"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <Grid style={{color: "white"}}  placeItems="center" fontsize="2xl" bg ="rgb(30,58,138)" color="white .600" >
      <div style={{display: "flex", gap: "1rem", margin: "1rem 0"}}>
        <Link to="/" >Home</Link>
        <Link to="/login" >Login</Link>
        <Link to="/" >dummy</Link>
        <Link to="/" >dummy</Link>
      </div>
      <div style={{display: "flex", gap: "1rem", margin: "1rem 0"}}>
        <IoLogoFacebook style={{fontSize: "1.5rem"}}/>
        <BsInstagram style={{fontSize: "1.5rem"}}/>
        <BsTwitter style={{fontSize: "1.5rem"}}/>
      </div>
      2023 @ copyright | All rights are resereved 
    </Grid>
  )
}

export default Footer;