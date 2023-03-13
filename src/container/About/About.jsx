import React from 'react'
import AppWrap from '../../Wapper/AppWrap'
import './About.scss'
import { useState , useEffect } from 'react'
import {motion} from 'framer-motion'
import {urlFor,client} from "../../client"
function About() {
const [about, setabout] = useState([])

useEffect(() => {
const query ='*[_type== "abouts"]';
client.fetch(query)
.then((data)=>setabout(data))

}, [])

  return (
    <div className='app__about-div'>
      <h2 className="head-text">I know that <span>Good Design</span><br /> means <span>Good Bussiness</span></h2>
      <div className="app__profile">
        {about.map((about ,index)=>(
          
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:"tween"}}
          className="app__profile-item"
          key={about.title+index}
          ><img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop:20}}>{about.description}</p>
          </motion.div>
          
        ))}
      </div>

    </div>
  )
}

export default AppWrap(About,'about')