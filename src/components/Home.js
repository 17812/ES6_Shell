import React from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'



const Home=()=>(

    <div>
        <p>Home page placeholder...</p>
        <br/>
        <Button color="danger"><Link to="/about"><span className="option-color testhover">Go to a page that does not exist</span></Link></Button>

    </div>
)

export default Home