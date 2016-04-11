import React from 'react';
import { Component } from 'react';
import Recipe from './recipe';

export default class RecipeList extends Component {
	
	getRecipeElem() {
		const recipes = this.props.recipes;

		return recipes.map(recipe => {
			let index = recipes.indexOf(recipe);
			return (<div key={index} className="cell col-md-12">
						<Recipe index={index} title={recipe.title} showMdl={this.props.showMdl}
							ingredients={recipe.ingredients} deleteRecipe={this.props.deleteRecipe} 
							updateCurrent={this.props.updateCurrent}/>
						
					</div>);
		});
	}

	render(){
		return(
			<div>
				{this.getRecipeElem()}
			</div>
		);
	}
}
