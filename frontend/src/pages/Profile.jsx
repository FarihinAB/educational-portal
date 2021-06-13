import React from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap/'

function Profile() {
    return (
      <>
      <h1 className="my-3 ml-5">Profile</h1>
        <Card >
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
  <Card.Img variant="top" src="./images/unnamed.png" />
  </div>
  <div className="col-sm-8">
  <Card.Body>
    <Card.Title>Name:</Card.Title>
    <Card.Text>
      Mohamad Nur Farihin Bin Abu Bakar
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Teacher</ListGroupItem>
    <ListGroupItem>UserID</ListGroupItem>
    <ListGroupItem>Active</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Edit</Card.Link>
    <Card.Link className="text-danger" href="#">Log out</Card.Link>
  </Card.Body>
  </div>
  </div>
  </div>
</Card>
</>
    )
}

export default Profile
