import React from 'react';
import { Component } from 'react';
import $ from 'jquery';

export default class RecipeDetail extends Component {
	constructor(props) {
		super(props);
		this.delRecipe = this.delRecipe.bind(this);
		this.editRecipe = this.editRecipe.bind(this);
	}

	getIngredientsList() {
		const ingredients = this.props.ingredients;
		return ingredients.map(item => {
			let key = ingredients.indexOf(item);
			return (
				<li key={key}>{item}</li>
			);
		});	
	}

	delRecipe() {
		this.props.deleteRecipe(this.props.index);
	}

	editRecipe() {
		this.props.showMdl();
	}

	render(){
		if(!this.props.showDetail) {
			return null;
		}
		else {
			return(
			<div className="recipe_detail">
				<hr/>
				<h5>
					Ingredients
				</h5>
				<ul id={this.props.title}>
					{this.getIngredientsList()}
				</ul>
				<button className="btn btn-danger btn-sm" onClick={this.delRecipe}>
					Delete
				</button>
				<button className="btn btn-info btn-sm" onClick={this.editRecipe}>
					Edit
				</button>
			</div>);
		}
	}
}
ReactDOM.render(<App/>, document.getElementById(".container"));
