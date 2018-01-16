import React from 'react'
import ReactDOM from 'react-dom'

class ToDoApp extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            options :['Todo One', 'Todo Two', 'Todo Three']
        }
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handleRandomSelection=this.handleRandomSelection.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this);   
 }

    handleDeleteOptions() {
        this.setState (()=>{
            return {
            options : []
            }
        })
    }

    handleRandomSelection(){
        const randomNumber=Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomNumber]);
    }

    handleAddOption(option){
        if(!option){
            return 'enter a valid value';
        }else if(this.state.options.indexOf(option)>-1){
            return 'option already exits'
        }else{
        this.setState((prevState)=>{
            return {
                options : prevState.options.concat([option])
            }
        })}
    }
    
    render (){
        const title = 'Todo application';
        const subtitle = 'Put your future in the hands of a computer';
        {this.state.options}


        return (
                <div>
                    <Header title={title} subtitle={subtitle}/>
                    <Action handleRandomSelection={this.handleRandomSelection} hasOptions={this.state.options.length>0}/>
                    <Todos handleDeleteOptions={this.handleDeleteOptions} todos={this.state.options} />
                    <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header =(props)=> {
    
            return (
                <div>
                    <h1>{props.title}</h1>
                    <h2>{props.subtitle}</h2>
                </div>
            )      
}

const Action = (props)=> {

        return (
            <div>
                <button disabled={!props.hasOptions} onClick={props.handleRandomSelection}>What should I do?</button>
            </div>

        );
}


class Todos extends React.Component {

    render(){
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
            {this.props.todos.map((todos)=> <Todo key={todos} todoText={todos} />)}
            <Todo />
            </div>
        )
    }
}

const Todo = (props)=> {
   
        return (
            <div> 
            {props.todoText}
           </div>
        )
    
}

//TODO: AddOption componet  w/o the events

class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.addOption.value.trim();
        const error = this.props.handleAddOption(option);
        if(error){

            this.setState(()=>{
                return {
                    error
                }
            })
            e.target.elements.addOption.value='';


        }else {
            e.target.elements.addOption.value='';
            
        }
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="addOption"/>
                <button>AddOption</button>
                {this.state.error && <p>{this.state.error}</p>}
            </form>     
            </div>
        )
    }
}


ReactDOM.render(<ToDoApp />, document.getElementById('appRoot'))