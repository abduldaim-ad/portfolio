import React from 'react'
import './Landing.css'

const Landing = () => {
  return (
    <>
    <div id="landing-bg">
      <div className="animated-words">
        <span className="web-designer">Web Designer</span> | <span className="figma">Figma</span> | <span className="bootstrap">Bootstrap</span>  | <span className="material-ui">Material-UI</span> | <span className="ant-design">Ant Design</span> | <span className="web-developer">Web Developer</span> | <span className="mongo">MongoDB</span> | <span className="express">Express.js</span> | <span className="react">React.js</span> | <span className="node">Node.js</span> | <span className="mern">MERN</span> | <span className="nlp">NLP</span>
      </div>
      <div id="div1" style={{marginTop:"16vh", marginLeft:"1%"}}>UI / UX Researcher</div>
      <div id="div2" style={{margin:"1%"}}>Web Designer</div>
      <div id="div3" style={{margin:"1%"}}>Web Developer</div>
      <div id="div4" style={{margin:"1%"}}>Software Engineer</div>
    </div>
    </>
  )
}

export default Landing