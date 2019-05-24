import React, { Component } from "react";
import Input from "../components/Input";
import Submitbtn from "../components/Submitbtn";

class Form extends Component {
	state = {
		form: {
			firstname: {
				name: "firstname",
				title: "Firstname",
				type: "text",
				value: "",
				placeholder: "Enter your firstname",
				validation: {
					required: true,
					valid: false,
					touched: false
				}
			}
		},
		formValidation: {
			valid: false
		}
	};

	inputValidation = (name, newValue) => {
		const { validation } = this.state.form[name];
		let out = true;

		if (validation.required && newValue.length === 0) {
			console.log("here");
			out = false;
		}

		return out;
	};

	checkFormValidation = (name, status) => {
		return Object.keys(this.state.form).reduce((a, k) => {
			let inputValidation = this.state.form[k].validation.valid;
			if (k === name) {
				inputValidation = status;
			}
			return (a = a && inputValidation);
		}, true);
	};

	onChangeHandler = name => e => {
		const newValue = e.target.value;
		const inputValidationStatus = this.inputValidation(name, newValue);
		const checkFormValidation = this.checkFormValidation(name, inputValidationStatus);

		this.setState(prevState => {
			return {
				...prevState,
				form: {
					...prevState.form,
					[name]: {
						...prevState.form[name],
						value: newValue,
						validation: {
							...prevState.form[name].validation,
							touched: true,
							valid: inputValidationStatus
						}
					}
				},
				formValidation: {
					...prevState.formValidation,
					valid: checkFormValidation
				}
			};
		});
	};

	generateInputs = () => {
		return Object.keys(this.state.form).map(key => (
			<Input
				data={this.state.form[key]}
				key={key}
				onChangeHandler={this.onChangeHandler(this.state.form[key].name)}
			/>
		));
	};

	render() {
		const validForm = this.state.formValidation.valid;
		const inputs = this.generateInputs();
		// <Input data={form.firstname} onChangeHandler={this.onChangeHandler(form.firstname.name)} />

		return (
			<div>
				<h1>Form</h1>
				{inputs}
				<Submitbtn validForm={validForm} />
			</div>
		);
	}
}

export default Form;
