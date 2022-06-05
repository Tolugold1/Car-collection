import React from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody, CardColumns } from 'reactstrap';
import { baseUrl } from '../Shared/URL';

const CarnameCard = ({ item, failedToGetCarName }) => {
  if (failedToGetCarName) {
    return(<div>{failedToGetCarName}</div>)
  } else if (item) {
    return(
      <div>
        {item.carname.map((company) => {
          return(
            <div key={ company.id }>
              <Card key={ company.id } className='cardhover'>
                <CardImg width='100%' src={ baseUrl + company.image } alt={ company.name}></CardImg>
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
        })}
      </div>
    )
  } else {
    return(<div></div>)
  }
}

const Company = (props) => {

  return(
    <div id='step2' className='container' >
      <h3>Top car producing companies in the world</h3><hr/>
      <CardColumns>
        <CarnameCard item={props.carname} failedToGetCarName={props.failedTogetCarName}/>
      </CardColumns>
  </div>
  )
}


export default Company;