import './App.css';
var React = require('react');
var ReactDOM = require('react-dom');

class Actor{
  constructor(firstName, lastName, birthday, image,link) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.image = image;
    this.link = link;
  }
  age() {
    var age = 2021 - this.birthday;
    return age;
  }
}
let leo = new Actor('Leonardo' ,'DiCaprio' ,1974, "leo.jpg", "https://www.imdb.com/name/nm0000138/");
let johnny  = new Actor('Johnny' ,'Depp' ,1963, "johnny.jpg", "https://www.imdb.com/name/nm0000136/");
let chris   = new Actor('Chris' ,'Hemsworth' ,1983, "chris.jpg", "https://www.imdb.com/name/nm1165110/");
let robertDJ   = new Actor('Robert' ,'Downey Jr.' ,1965, "robertDJ.jpg", "https://www.imdb.com/name/nm0000375/");
let robertDN   = new Actor('Robert' ,'De Niro' ,1943, "robertDN.jpg", "https://www.imdb.com/name/nm0000134/");

class Actors extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <div className="card col-3">
            <img className="card-img-top" src={this.props.actor.image} alt="Card image cap"/>
            <h5 className="card-title"> <a target="_blank" href={this.props.actor.link}>{this.props.actor.firstName} {this.props.actor.lastName} </a> </h5>
            <p className="card-text">{this.props.actor.age()}</p>
            <div>{this.props.filter}</div>
          </div>
    );
  }
}
class Filter extends React.Component {
  constructor(props) {
    super(props);
      this.state = {show:true};
  }
  render() {
    return this.state.show? <Actors actor={this.props.actor}/> : false;
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.saveInput = this.saveInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {filter:""};
    this.leoActor = React.createRef();
    this.johnnyActor = React.createRef();
    this.chrisActor = React.createRef();
    this.robertDJActor = React.createRef();
    this.robertDNActor = React.createRef();
  }
  handleClick(){
    this.state.filter=this.textInput.value;
    console.log(this.state.filter);
    console.log(this.leoActor.current.props.actor.firstName);
    let actors=[this.leoActor.current, this.johnnyActor.current, this.chrisActor.current, this.robertDJActor.current,this.robertDNActor.current];
    console.log(actors);
    console.log(actors[0].props.actor.firstName);
    for (let index = 0; index < actors.length; index++) {
      if (actors[index].props.actor.firstName==this.state.filter||actors[index].props.actor.lastName==this.state.filter||""==this.state.filter) {
        actors[index].setState({show:true})
      }
      else{
        actors[index].setState({show:false})
      }
    }
    
  }
  saveInput(input){
    this.textInput = input;
  }
  render() {
    return (
      <div className="App">
        <div>
          <input ref={this.saveInput}>
          </input>
          <button onClick={this.handleClick}>filter</button>
        </div> 
        <div className="card-group justify-content-center">
          <Filter ref={this.leoActor} actor={leo}/>
          <Filter ref={this.johnnyActor} actor={johnny}/>
          <Filter ref={this.chrisActor} actor={chris}/>
          <Filter ref={this.robertDJActor} actor={robertDJ}/>
          <Filter ref={this.robertDNActor} actor={robertDN}/>
        </div>
      </div>
    );
  }
}


export default App;
