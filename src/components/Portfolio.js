import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom'




const Portfolio=(props)=>{

    console.log(props);



    return(
    
    <div>
    <Jumbotron>
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-2" />
      <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Jumbotron>
    <div>
        <p>Portfolio Component</p>
        <br/>
        <Button color="warning"><Link to="/portfolio/44"><span className="option-color testhover">pass 44</span></Link></Button>

    </div>
  </div>
    )

}

export default Portfolio