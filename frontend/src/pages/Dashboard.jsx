import React from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap'


function Dashboard() {
    return (
      <>
      <h1 className="my-3 ml-5">Dashboard</h1>
<CardDeck>

  <Card border="primary" className="mt-4 ml-5">
    <Card.Body>
      <Card.Title variant="top">Virtual Class</Card.Title>
      <Card.Text variant="bottom">
        Next class will be tomorrow 14/03/21.
        Don't be late! 
      </Card.Text>
      <Button variant="primary">Enter</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 43 mins ago</small>
    </Card.Footer>
  </Card>

  <Card border="danger" className="mt-4">
    <Card.Body>
      <Card.Title>Mathematics</Card.Title>
      <Card.Text>
        Assignment is due next week!
      </Card.Text>
      <Button variant="primary">Enter</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card border="warning" className="mt-4 mr-5">
    <Card.Body>
      <Card.Title>Physics</Card.Title>
      <Card.Text>
        I've uploaded the latest notes, please read before class.
      </Card.Text>
      <Button variant="primary">Enter</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 15 mins ago</small>
    </Card.Footer>
  </Card>

</CardDeck>
</>
    )}

export default Dashboard
