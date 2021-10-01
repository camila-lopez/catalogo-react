import React from "react";
import Search from './Search';
import PanelAdd from './PanelAdd';

class Menu extends React.Component{
    constructor(props){
        super(props);

        this.state = {newItemPanel: false};

        this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }
    add(){
        this.setState({newItemPanel: true});
    }

    onCancel(e){
        this.setState({newItemPanel: false});
    }

    render()
    {
        return(
            <div className="container">
                <div className="image">
                        <img src={'img/letra.png'} width="100%"/>
                    </div>
                <div className="subcontainer">
                    
                    <div className="logo">
                        {this.props.title}
                    </div>
                    <div className="search">
                        <Search onsearch={this.props.onsearch}/>
                    </div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">+ Añadir nuevo producto</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)?
                    <PanelAdd oncancel={this.onCancel} onadd={this.props.onadd}/>
                    :
                    ''
                }
                
            </div>
        );
    }

}
export default Menu;