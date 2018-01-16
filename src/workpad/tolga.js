import React from 'react'
import ReactDOM from 'react-dom'


class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            todos : ['One', 'Two', 'Three']
        }
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
    }

handleRemoveAll (){
    this.setState(()=>{
        return{
            todos : []
        }
    }
    )
}

    


render(){

    const title='ToDo Manager'
    const subtitle='Let the Machine make the decisions for you.'

    return (
        <div> 
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <Todos todos={this.state.todos} />
        </div>
      
    )
}

}



const Todos =(props)=>{
    return (
        <div>

        <button >RemoveAll</button>
        {props.todos.map((todo)=>{
            return <p key={todo} todotext={todo}>{todo}</p>
        })}

        </div>



    )
}










































ReactDOM.render(<Main />, document.getElementById('appRoot'))