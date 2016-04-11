import React from 'react';
import { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import $ from 'jquery';


export default class Add_Modal extends Component {
	constructor() {
		super();
		this.addOrEdit = this.addOrEdit.bind(this);
	}
	addOrEdit() {
		const title = $('#title').val();
		const ingredients = $('#ingredients').val().split(',');
		if(this.props.current == -1) {
			this.props.addRecipe({title, ingredients});
		} else {
			this.props.editRecipe({title, ingredients});
		}
	}

	render() {
		const current = this.props.current;
		let title, ingredients, addOrEdit, recipe;
		if(current === -1) {
			title = "";
			ingredients = "";
			addOrEdit = "Add";
		} else {
			recipe = this.props.recipes[current];
			title = recipe.title;
			ingredients = recipe.ingredients.join();
			addOrEdit = "Edit";
		}
		
		return(
			<div>
				<Modal show={this.props.showModal} onHide={this.props.hideMdl}>
				  <Modal.Header closeButton>
				    <Modal.Title>Add a recipe</Modal.Title>
				  </Modal.Header>
				  <Modal.Body>
				  	<fieldset className="modal-content form-group">
				  	    <label htmlFor="title">Title</label>
				  	    <input type="text" className="form-control" 
				  	    	   id="title" placeholder="Input the title of your recipe" 
				  	    	   defaultValue={title}/>
				  	</fieldset>
				  	<fieldset className="modal-content form-group">
				  	    <label htmlFor="ingredients">Ingredients</label>
				  	    <textarea type="text" className="form-control" 
				  	    	   id="ingredients" placeholder="Input ingredients, separated by commas" 
				  	    	   defaultValue={ingredients}/>
				  	</fieldset>			 
				  </Modal.Body>
				  <Modal.Footer>
				  	<Button onClick={this.addOrEdit}>{addOrEdit}</Button>
				    <Button onClick={this.props.hideMdl}>Close</Button>
				  </Modal.Footer>
				</Modal>

			</div>
		);
	}
}