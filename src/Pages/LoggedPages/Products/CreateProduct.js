import React, { Component } from 'react';
import { withRequest } from '../../../Requests'

class CreateProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      atendimentos: [],
    }
    this.loadProducts();
    console.log(props)
  }

  loadProducts(){
    // this.props
    //   .request.get('/products')
    //   .then(products => this.setState({ products }))
      this.props
      .request.get('/atendimentos?skip=0&limit=10')
      .then(({atendimentos}) => this.setState({ atendimentos }))
  }

  render = () => {
    console.log(this.state.atendimentos)
   return (
     <ul>
     {
       this.state.atendimentos.map(({_id, descricao}) => (
        <div key={_id}>
          {_id} - {descricao}
        </div>
      ))
     }
    </ul>
   )
  }
}

export default withRequest(CreateProduct);