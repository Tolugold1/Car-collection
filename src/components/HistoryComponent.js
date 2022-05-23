import React, {useState} from 'react';
import './Loader';
import { Tooltip, Card, CardImg, CardBody, CardText, PopoverBody } from 'reactstrap';
import $ from 'jquery';

class History extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.showCard();
    this.hideCard();

  }

  showCard = () => {
    $('#showCard').on('mouseover', function(){
      $('#autoinfo').show(2000);
    })
  }
  hideCard = () => {
    $('#autoinfo').on('mouseout', function(){
      $('#autoinfo').hide(1000);
    })
  }

  render() {

  return(
    <div className='container-fluid history'>
      <div className='text-center historytext'>
        <h1 className='subhistorytext'>A place for storytelling</h1>
        <p>WRITTEN BY TOLUGOLD, A WEB DEVELOPER <i className="fa fa-pencil fa-lg" aria-hidden="true"></i></p>
      </div>
      <div className='text-center historytext1'>
        <h1 className='carhistory'>Car History</h1>
      </div>
        <img  className='rounded-circle mx-auto d-block' src='assets/carimage/220px-SteamMachineOfVerbiestIn1678.jpeg' alt='first car design'></img>
      <div id="showCard" className='text-center mt-4' onMouseOver={this.showCard} >
        <h2 className='historyTooltip' style={{ color: 'blueviolet'}}>History of automobile</h2>
      </div>
      <div id='autoinfo' className='showOver text-center col-sm-6' onMouseOver={this.showCard} onMouseOut={this.hideCard} >
        <Card>
          <CardImg width='100%' src='assets/carimage/Ford_Model_T_and_VW_type_11_Luxus,_Technisches_Museum_Wien,_Juni_2009.jpeg' alt='brief history image'></CardImg>
          <CardBody>
            <CardText>
              Development of the automobile started in 1672 with the invention of the first steam-powered vehicle, which led to the creation of the first steam-powered automobile capable of human transportation, built by Nicolas-Joseph Cugnot in 1769.
            </CardText>
          </CardBody>
        </Card>
      </div>
      
      <div className='row historytext2'>
        <div className='col-12 col-sm-4'>
          <p>The first working steam-powered vehicle was designed—and quite possibly built—by Ferdinand Verbiest, a Flemish member of a Jesuit mission in China around 1672. It was a 65-centimetre (26 in)-long scale-model toy for the Kangxi Emperor that was unable to carry a driver or a passenger. It is not known with certainty if Verbiest's model was successfully built or run.
          Nicolas-Joseph Cugnot is widely credited with building the first full-scale, self-propelled mechanical vehicle or car in about 1769; he created a steam-powered tricycle. He also constructed two steam tractors for the French Army, one of which is preserved in the French National Conservatory of Arts and Crafts.His inventions were, however, handicapped by problems with water supply and maintaining steam pressure. In 1801, Richard Trevithick built and demonstrated his Puffing Devil road locomotive, believed by many to be the first demonstration of a steam-powered road vehicle. It was unable to maintain sufficient steam pressure for long periods and was of little practical use.
          </p>

          <p>The development of external combustion engines is detailed as part of the history of the car but often treated separately from the development of true cars. A variety of steam-powered road vehicles were used during the first part of the 19th century, including steam cars, steam buses, phaetons, and steam rollers. In the United Kingdom, sentiment against them led to the Locomotive Acts of 1865.</p>
        </div>
        <div className='col-12 col-sm-4'>
          <p>In 1807, Nicéphore Niépce and his brother Claude created what was probably the world's first internal combustion engine (which they called a Pyréolophore), but they chose to install it in a boat on the river Saone in France. Coincidentally, in 1807 the Swiss inventor François Isaac de Rivaz designed his own 'de Rivaz internal combustion engine' and used it to develop the world's first vehicle to be powered by such an engine. The Niépces' Pyréolophore was fuelled by a mixture of Lycopodium powder (dried spores of the Lycopodium plant), finely crushed coal dust and resin that were mixed with oil, whereas de Rivaz used a mixture of hydrogen and oxygen.Neither design was very successful, as was the case with others, such as Samuel Brown, Samuel Morey, and Etienne Lenoir with his hippomobile, who each produced vehicles (usually adapted carriages or carts) powered by internal combustion engines.</p>

          <p>In November 1881, French inventor Gustave Trouvé demonstrated the first working (three-wheeled) car powered by electricity at the International Exposition of Electricity, Paris. Although several other German engineers (including Gottlieb Daimler, Wilhelm Maybach, and Siegfried Marcus) were working on the problem at about the same time. The year 1886 is regarded as the birth year of the car when the German Carl Benz patented his Benz Patent-Motorwagen; he is generally acknowledged as the inventor of the car.</p>

          
        </div>
        <div className='col-12 col-sm-4'>
          <p>In 1879, Benz was granted a patent for his first engine, which had been designed in 1878. Many of his other inventions made the use of the internal combustion engine feasible for powering a vehicle. His first Motorwagen was built in 1885 in Mannheim, Germany. He was awarded the patent for its invention as of his application on 29 January 1886 (under the auspices of his major company, Benz & Cie., which was founded in 1883). Benz began promotion of the vehicle on 3 July 1886, and about 25 Benz vehicles were sold between 1888 and 1893, when his first four-wheeler was introduced along with a cheaper model. They also were powered with four-stroke engines of his own design. Emile Roger of France, already producing Benz engines under license, now added the Benz car to his line of products. Because France was more open to the early cars, initially more were built and sold in France through Roger than Benz sold in Germany. In August 1888 Bertha Benz, the wife of Carl Benz, undertook the first road trip by car, to prove the road-worthiness of her husband's invention.</p>
        </div>
      </div>
    </div>
  )
  }
}

export default History;