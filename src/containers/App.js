import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchField:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users=>
			{this.setState({robots:users})
		});
	}
	onSearchChanage=(event)=>{
		this.setState({searchField:event.target.value})
	}
	render(){
		const {robots,searchField}=this.state;
		const filteredRobots=robots.filter(robots=>{
			return 	robots.name.toLowerCase().includes
			(searchField.toLowerCase());
		})

		if (!robots.length){
			return <h1>LOADING</h1>
		}else{
			return(
			<div className="tc">
				<h1 className= "f1 solid green">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChanage}/>
				<Scroll>
				<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
			);
		}
		
	}
	
}
export default App;