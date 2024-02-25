class FormLetraMusica extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        value: "ESSA NOITE, EU TIVE UM SONHO DE SONHADOR" + "MALUCO QUE SOU, EU SONHEI"
    };

    this.executeChange = this.executeChange.bind(this);
    this.executaSubmit = this.executaSubmit.bind(this);
}
    executeChange(event) {
      this.setState({ value: event.target.value });
    }
  
    executaSubmit(event) {
      alert('Um novo texto ' + this.state.value);
      event.preventDefault();
    }
    render(){
      return(
        <from onSubmit={this.executaSubmit}>
          <label>
            Letra da musica:
            </label>
            <texttarea value = {this.state.value} onChange ={this.executeChange}/>
          <insput tupe = "submit" value ="enviar" class ="button" />
        </from>
      );
    }
}

      ReactDOM.render(
        <FormDigiteSeuNome />,
        document.getElementById('root')
      )
   
  
