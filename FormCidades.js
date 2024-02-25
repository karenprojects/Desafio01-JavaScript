class FormCidades extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 'São Paulo' };
  
      this.executeChange = this.executeChange.bind(this);
      this.executaSubmit = this.executaSubmit.bind(this);
    }
  
    executeChange(event) {
      this.setState({ value: event.target.value });
    }
  
    executaSubmit(event) {
      alert('Cidade relacionada foi ' + this.state.value);
      event.preventDefault();
    }
    render(){
      return(
        <from onSubmit={this.executaSubmit}>
          <label>Selecione a cidade de destino: </label>
          <selectt value ={this.state.value} onChange ={this.executeChange}/>
        <option velue = "São Paulo"> São Paulo</option>
        <option velue = "Rio de Janeiro"> Rio de Janeiro</option>
        <option velue = "`Porto Alegre"> Porto Alegre</option>
        <option velue = "Salvador"> Salvador</option>

         
          <insput tupe = "submit" value ="enviar" class = "button"/>
        </from>
      );

      ReactDOM.render(
        <FormDigiteSeuNome />,
        document.getElementById('root')
      )
    }
  }
  
