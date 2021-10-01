import React from "react";
import Search from './Search';
import './style.css';

class PanelAdd extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            image:'',
            price:'',
            rating:1
        };

    }
    onChangeTitle=(e)=>{
        this.setState({title: e.target.value});
    }
    onChangeImage=(e)=>{
        this.setState({image: e.target.value});
    }
    onChangePrice=(e)=>{
        this.setState({price: e.target.value});
    }
    onChangeRating=(e)=>{
        const rating = parseInt(e.target.value);
        this.setState({rating:rating});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const title=this.state.title;
        const image=this.state.image;
        const price=this.state.price;
        const rating=this.state.rating;

        this.props.onadd({title:title, image:image, price:price, rating:rating});
        this.props.oncancel();
    }

    render(){
    return(
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit={this.onSubmit}>
                    <p>
                    <label>Título de producto</label><br/>
                    <input onChange={this.onChangeTitle} type="text" name="title" className="input"/>
                    </p>

                    <p>
                    <label>Nombre de la imagen</label>
                    <input onChange={this.onChangeImage} type="text" name="image" className="input"/>
                    </p>

                    <p>
                    <label>Precio producto</label>
                    <input onChange={this.onChangePrice} type="text" name="price" className="input"/>
                    </p>

                    <p>
                    <label>Calificación</label>
                    <select onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </p>

                    <input type="submit" value="Registrar producto" className="button btn-blue"/>    
                    <button onClick={this.props.oncancel} className="button btn-normal">Cancelar</button>  
                  
                </form>
            </div>
        </div>
    );
}
}


export default PanelAdd;