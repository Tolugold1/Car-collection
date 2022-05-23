import React from 'react';
import { CARNAME } from '../Shared/CarCompanyName';
import { Card, CardTitle, CardImg, CardText, CardBody, CardColumns } from 'reactstrap';


class Company extends React.Component {

  constructor(props) {
    super(props)

    this.state = { carname: CARNAME}
  }

  render() {

    const RenderCard = this.state.carname.map((company) => {
      return(
        <div key={ company.id }>
          <Card key={ company.id } className='cardhover'>
            <CardImg width='100%' src={ company.image } alt={ company.name}></CardImg>
            <CardBody>
              <CardTitle>{ company.name }</CardTitle>
              < hr/>
              <CardText>
                { company.founded } <br/>
                Sub-brand: { company.subbrand }
              </CardText>
              { company.accomplishment ? <CardText>{ company.accomplishment }</CardText> : <CardText></CardText>}
            </CardBody>
          </Card>
        </div>
      )
    })
    return(
      <div id='step2' className='container'>
        <h3>Top car producing companies in the world</h3><hr/>
        <CardColumns>
          { RenderCard }
        </CardColumns>
    </div>
    )
  }
}


export default Company;