import React, { Component } from "react";
import Input from "../components/Input";

class Form extends Component {
	state = {
		form: {
			firstname: {
				name: "firstname",
				title: "Firstname",
				type: "text",
				value: "",
				valid: false,
				touched: false,
				placeholder: "Enter your firstname"
			}
		},
		formValidation: {
			touched: false,
			valid: false
		}
	};

	onChangeHandler = name => e => {
		const newValue = e.target.value;

		// TODO: check validation champs
		// TODO: check validation générale
		this.setState(prevState => {
			return {
				...prevState,
				form: { ...prevState.form, [name]: { ...prevState.form[name], value: newValue } }
			};
		});
	};

	render() {
		const { form } = this.state;
		console.log(form);
		return (
			<div>
				<h1>Form</h1>
				<Input data={form.firstname} onChangeHandler={this.onChangeHandler(form.firstname.name)} />
			</div>
		);
	}
}

export default Form;
