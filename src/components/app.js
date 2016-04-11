import React from 'react';
import { Component } from 'react';
import RecipeList from './recipe_list';
import AddModal from './add_modal';
import { Button } from 'react-bootstrap';



export default class App extends Component {
	constructor() {
		super();
		//localStorage.setItem("recipeData", "");
		const recipeStr = localStorage.getItem("recipeData");
		//console.log("recipeStr: ", recipeStr);
		if(recipeStr === "") {
			console.log("recipeStr === null");
			this.state = {
				data: [
					{
						title: 'Chicken Salad',
						ingredients: ['Chicken', 'cheese', 'lettuce']
					},
					{
						title: 'Dumpling',
						ingredients: ['flour', 'pork', 'chinese cabbage']
					}
				],
				showModal: false,
				current: -1
			}

		} else {
			const recipeData = JSON.parse(recipeStr);

			this.state = {
				data: recipeData,
				showModal: false,
				current: -1
			}
		}
		
		this.showMdl = this.showMdl.bind(this);
		this.hideMdl = this.hideMdl.bind(this);
		this.addRecipe = this.addRecipe.bind(this);
		this.editRecipe = this.editRecipe.bind(this);

		this.deleteRecipe = this.deleteRecipe.bind(this);
		this.updataCurrent = this.updataCurrent.bind(this);
	}

	showMdl() {
		this.setState({showModal: true});
	}

	hideMdl() {
		this.setState({showModal: false});
	}

	addRecipe(recipe) {
		let data = this.state.data;
		data.push(recipe);
		this.setState({ data: data });
		localStorage.setItem("recipeData", JSON.stringify(data));
	}

	editRecipe(recipe) {
		let data = this.state.data;
		data[this.state.current] = recipe;
		this.setState({data});
	}

	deleteRecipe(index) {
		console.log("about to delete: ", index);
		let data = this.state.data;
		data.splice(index, 1);
		this.setState({data: data, current: -1});
		console.log("after delete: ", data);
		localStorage.setItem("recipeData", JSON.stringify(data));
	}

	updataCurrent(index){
		this.setState({current: index});
	}

	render() {

		return (
		  <div>
			  <RecipeList recipes={this.state.data} deleteRecipe={this.deleteRecipe} 
			  		updateCurrent={this.updataCurrent} showMdl={this.showMdl} />
		  	  <Button bsStyle="info" onClick={this.showMdl}>
		  	    Add Recipe
		  	  </Button>
		  	  <AddModal addRecipe={this.addRecipe} showModal={this.state.showModal} recipes={this.state.data} 
		  	  showMdl={this.showMdl} editRecipe={this.editRecipe} hideMdl={this.hideMdl} current={this.state.current} />
		  </div>
		);
	}
}
