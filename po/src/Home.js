import React, {Component} from 'react';

const noti=[
    {id:"101",notification:"New child was added with id 1010"},
    {id:"102",notification:"New cci added with id 2101"}
]

export default class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            isOpen : false
        }
        
    }

    

    render(){

        const notiList = noti.map(noti1 =>
            <div>
                <p>{noti1.notification}</p>
                <button onClick={(e) => {console.log(noti1.id)}}>Mark as Read</button>
            </div>
        )

        let dia=(
            <dialog open>
                <button onClick={(e) => this.setState({ isOpen : false })}>x</button><br />
                <h3>Notifications</h3>
                {notiList}
            </dialog>
        );

        if(!this.state.isOpen){
            dia=null
        }

        return(
            <div>
                <h1>Home page</h1>
                <button onClick={(e) => this.setState({ isOpen : true })}>Notifications</button>
                {dia}
            </div>
        )
    }
}