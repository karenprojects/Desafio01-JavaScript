class FormDigiteSeuNome extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
  
      this.executeChange = this.executeChange.bind(this);
      this.executaSubmit = this.executaSubmit.bind(this);
    }
  
    executeChange(event) {
      this.setState({ value: event.target.value });
    }
  
    executaSubmit(event) {
      alert('Nome digitado foi ' + this.state.value);
      event.preventDefault();
    }
    render(){
      return(
        <from onSubmit={this.executaSubmit}>
          <label>
            Nome:
            <input type = "text" value ={this.state.value} onChange ={this.executeChange}/>
          </label>
          <insput tupe = "submit" value ="enviar" />
        </from>
      );

      ReactDOM.render(
        <FormDigiteSeuNome />,
        document.getElementById('root')
      )
    }
  }
  
