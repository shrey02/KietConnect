import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "SAE KIET",
          company: "It provides a platform to students for learning and innovating real engineering skills and encourages them to participate in different CDS events. ",
          description: "https://www.facebook.com/sae.kiet13",
          imge:"https://www.kiet.edu/uploads/department/student_club/177900965.jpg",
          link:function link(e) {
            e.preventDefault();
            window.location = 'https://www.kiet.edu/home/department_wise_club_detail/Ng==/MTU=/student_club';
        }
        },
        {
          id: 2,
          name: "INNOGEEKS",
          company: "The mission of the club is to advance knowledge and educate students in science, technology",
          description: "follow us on instagram @innogeeks ",
          imge:"https://www.kiet.edu/uploads/department/student_club/187446816.jpg",
          link:function link(e) {
            e.preventDefault();
            window.location = 'https://www.kiet.edu/home/department_wise_club_detail/MTM=/MTg=/student_club';
        }
        },
        {
          id: 3,
          name: "KIET MUSIC CLUB",
          company: "Our Club engages and organizes any and all kind of music related activities in College.",
          description: "Club Official Email Id:  kmc@kiet.edu",
          imge:"https://www.kiet.edu/uploads/department/student_club/323893418.jpg",
          link:function link(e) {
            e.preventDefault();
            window.location = 'https://www.kiet.edu/home/department_wise_club_detail/MA==/NDA=/student_club';
        }


        },
        {
          id: 4,
          name: "ODYSSEY",
          company: "The main objective of the society is to inculcate the passion of reading, writing and speaking amongst the students of KIET and nurture their talent to a large extent.rty. Will connect with later",
          description: "“You cannot fail without your consent. You cannot succeed without your participation.”",
          imge:"https://www.kiet.edu/uploads/department/student_club/516698710.jpg",
          link:function link(e) {
            e.preventDefault();
            window.location = 'https://www.kiet.edu/home/department_wise_club_detail/MA==/NDI=/student_club';
        }

        }
      ]
    }
  }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="6">
          <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}

export default MainArea;