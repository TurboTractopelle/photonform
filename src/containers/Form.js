import React, { Component } from "react";
import Input from "../components/Input";
import Submitbtn from "../components/Submitbtn";
import axios from "axios";

class Form extends Component {
	state = {
		form: {
			firstname: {
				name: "firstname",
				title: "First name",
				type: "text",
				value: "",
				placeholder: "Enter your first name",
				validation: {
					required: true,
					valid: false,
					touched: false
				}
			},
			lastname: {
				name: "lastname",
				title: "Last name",
				type: "text",
				value: "",
				placeholder: "Enter your last name",
				validation: {
					required: true,
					valid: false,
					touched: false
				}
			},
			phone: {
				name: "phone",
				title: "Phone",
				type: "text",
				value: "",
				placeholder: "Enter your phone number",
				validation: {
					required: true,
					valid: false,
					touched: false
				}
			},
			email: {
				name: "email",
				title: "Email",
				type: "email",
				value: "",
				placeholder: "Enter your email address",
				validation: {
					required: true,
					valid: false,
					touched: false
				}
			},
			company: {
				name: "company",
				title: "Company",
				type: "company",
				value: "",
				placeholder: "Enter your company",
				validation: {
					required: true,
					valid: false,
					touched: false
				}
			},
			country: {
				name: "country",
				title: "Country",
				type: "country",
				value: "",
				placeholder: "Select your country",
				validation: {
					required: true,
					valid: false,
					touched: false
				}
			},
			message: {
				name: "message",
				title: "Message",
				type: "textarea",
				value: "",
				placeholder: "",
				validation: {
					required: true,
					valid: false,
					touched: false,
					counter: 0,
					counterMax: 10
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
			out = out && false;
		}

		if (this.state.form[name].type === "textarea") {
			if (newValue.length > this.state.form[name].validation.counterMax) {
				out = out && false;
			}
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
			let nameValidation;
			if (this.state.form[name].type === "textarea") {
				nameValidation = { counter: newValue.length };
			}

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
							valid: inputValidationStatus,
							...nameValidation
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

	onSubmitHandler = () => {
		console.log("gg");
		axios
			.post(
				"http://photon-ext.edpsciences.org/components/com_accueil/views/accueil/tmpl/test.php?name=value"
			)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	render() {
		const validForm = this.state.formValidation.valid;
		const inputs = this.generateInputs();

		return (
			<div>
				<h1>Form</h1>
				<button onClick={this.onSubmitHandler}>submit test</button>
				<form onSubmit={this.onSubmitHandler}>
					{inputs}
					<Submitbtn validForm={validForm} />
				</form>
			</div>
		);
	}
}

export default Form;
