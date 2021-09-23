import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let {  name, company, description,imge,link} = this.props.person;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={imge} alt="Card image cap" />
          <CardBlock>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle>
            <CardText>{description}</CardText>
            <NavLink href=""><Button color="danger" onClick={link}>About Us</Button></NavLink>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;