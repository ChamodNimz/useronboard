import React, { Component } from "react";
import ContactDetailsForm from "../components/contactDetailsForm";
import InvestmentPlansForm from "../components/investmentPlansForm";
import InvestmentPrefForm from "../components/investmentPrefForm";

class ParentForm extends Component {
  
    state = {
        step: 1,
        fullname: "",
        phone: "",
        email: "",
        country: "",
        salFrom: "",
        salTo: "",
        isAccredited: "",
        realEstateInterests: []
      };

  render() {
      
    const { step } = this.state;

    let { fullname, phone, email, country, salary_from, salary_to } =
      this.state;

    let values = { step,fullname, phone, email, country, salary_from, salary_to };

    switch (step) {
      case 1:
        return (
          <ContactDetailsForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          /> //when add attributes to a components those are props
        );
      case 2:
        return (
          <InvestmentPlansForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          /> //when add attributes to a components those are props
        );
      case 3:
        return (
          <InvestmentPrefForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          /> //when add attributes to a components those are props
        );
    }
    
  }

  // next step
  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1,
    });
  };


  //Go back
  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1,
    });
  };

  //handle change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
}

export default ParentForm;
