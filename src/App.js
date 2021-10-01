import logo from './logo.svg';
import './App.css';
import './style.css';
import Menu from './Menu';
import List from './List';
import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      products:[
        {id:0, price:6000, rating:4, title:'Cojín', image:'cushion.png'},
        {id:1, price:4000, rating:5, title:'Tazón', image:'cup.png'},
        {id:2, price:5000, rating:5, title:'Calendario', image:'calendar.png'},
        {id:3, price:8000, rating:5, title:'Agenda', image:'planner.png'},
        {id:4, price:5000, rating:4, title:'Mousepad', image:'mousepad.png'},
        {id:5, price:6000, rating:4, title:'Cuadro', image:'photoframe.png'},
        {id:6, price:5000, rating:3, title:'Colgante fotos', image:'photo.png'},
        {id:7, price:5000, rating:4, title:'Imanes', image:'magnet.png'},

      ],
      copyProducts:[]
    };
  }

  componentDidMount(){
    this.initProducts();
  }
  initProducts(){
    this.setState((state,props)=>({
      copyProducts:[... state.products]
    }));
  }
  onAdd=(item)=>{
    let temp=[... this.state.products];
    const id=temp[temp.length-1].id + 1;
    item['id']=id;
    temp.push(item);
    this.setState({products: [... temp]});
    this.initProducts();
  }
  onSearch=(query)=>{
    if(query ===''){
      this.initProducts();
    }else{
      const temp = [... this.state.products];
      let res=[];

      temp.forEach(item=>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyProducts: [... res]});
    }
  }
  onUpdateRating=(item)=>{
    var temp=[... this.state.products];
    const index= temp.findIndex(x =>x.id === item.id);
    temp[index].title =item.title;
    temp[index].image =item.image;
    temp[index].price =item.price;
    temp[index].rating =item.rating;

    this.setState({products:[... temp]});
    this.initProducts();
  }
  onRemove=(id)=>{
    var temp=[... this.state.products];
    const res = temp.filter(item=> item.id != id);

    this.setState({products: [... res]});
    this.initProducts();
  }

  render() {
    return (
      <div className="App">
        <Menu title="Catalogo" onadd={this.onAdd} onsearch={this.onSearch}/>
        <List items={this.state.copyProducts} 
        onupdaterating={this.onUpdateRating}
        onremove={this.onRemove}/>
      </div>
    );
  }
}

export default App;
