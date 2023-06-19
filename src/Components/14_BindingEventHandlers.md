//The reason we bind event handler in react is because the eay this keyword work in javscript

///On the click of the button changing a button which is a part of the component state

//This keyword is undefined in an event handler and that is why event handling is necessary


//3rd approach in constructor


import react, {Component} from 'React'


class EventBind extends Component{


    constructor(props){
        super(props)

        this.state = {
            message : 'hello'
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }

//    clickHandler{
//      this.setState({
//           message : 'GoodBye'
//        })
//    }

//Approach 4
clickHandler = () => {
    this.setState({
        message: 'Goodbye !'
    })
}

    render(){
        return (
            <div>
                <div>this.state.message</div>
///Will show error  <Button onClick ={this.clickHandler}>Click</Button>
///1st methd usng bind kywrd  <Button onClick ={this.clickHandler.bind(this)}>Click</Button>
///2nd usingArrow function   <Button onClick ={() => this.clickHandler()}>Click</Button>
///3rd approach binding in the class constructor <Button onClick ={this.clickHandler}>Click</Button>
            </div>
        )
    }
}
