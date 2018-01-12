import React from 'react'
import ReactDOM from 'react-dom'

class ToDoApp extends React.Component{
    
    render (){
        const title = 'Todo application';
        const subtitle = 'Put your future in the hands of a computer';
        const todos = ['Todo One', 'Todo Two', 'Todo Three'];


        return (
                <div>
                    <Header title={title} subtitle={subtitle}/>
                    <Action />
                    <Todos todos={todos} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {

        render (){
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            )
        }
}

class Action extends React.Component {


    handlePick() {
        alert('you clicked me');
   }

    render(){

        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>

        );
    }
}



class Todos extends React.Component {

    removeAllTodos() {
        alert('you clicked removeAllTodos method');
    }

    render(){
        return (
            <div>
            <button onClick={this.removeAllTodos}>RemoveAll</button>
              {this.props.todos.map((todos)=> <Todo key={todos} todoText={todos} />
              )}
                <Todo />
            </div>
        )
    }
}

class Todo extends React.Component {
    render(){
        return (
            <div> 
            {this.props.todoText}
           </div>
        )
    }
}




//TODO: AddOption componet  w/o the events

class AddOption extends React.Component {

    handleAddOption(e){
        e.preventDefault();
        if(e.target.elements.addOption.value.trim()){
            alert('you typed '+e.target.elements.addOption.value.trim());
        }else{
            alert('no value');
        }
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="addOption"/>
                <button>AddOption</button>
            </form>     
            </div>
        )
    }
}



    ReactDOM.render(<ToDoApp />,
        document.getElementById('appRoot'))