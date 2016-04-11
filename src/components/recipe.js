import React from 'react';
import { Component } from 'react';
import RecipeDetail from './recipe_detail';

export default class Recipe extends Component {
	constructor() {
		super();
		this.showIngre = this.showIngre.bind(this);
		this.deleteRecipe = this.deleteRecipe.bind(this);

	}
	
	componentWillMount() {
		this.setState({showDetail: false});
	}

	showIngre() {
		let showDetail;
		if(this.state.showDetail) {
			showDetail = false;
			this.props.updateCurrent(-1);
		} else {
			showDetail = true;
			this.props.updateCurrent(this.props.index);
		}
		this.setState({showDetail});
	}

	deleteRecipe(index) {
		this.props.deleteRecipe(index);
		this.setState({showDetail: false});
	}

	render(){
		return(
			<div>
				<h4 className="recipe_header" onClick={this.showIngre}>
					{this.props.title}
				</h4>
				<RecipeDetail index={this.props.index} showDetail={this.state.showDetail} showMdl={this.props.showMdl}
				title={this.props.title} ingredients={this.props.ingredients} deleteRecipe={this.deleteRecipe} />
			</div>
		);
	}
}
