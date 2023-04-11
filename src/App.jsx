import { Button, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div>
        <Card>
          <Card.Body>
            <Card.Title>SPL Create Token</Card.Title>
            <Button variant='primary'>Flip</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>SPL Create Account</Card.Title>
            <Button variant='primary'>Flip</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>SPL Token Balance</Card.Title>
            <Button variant='primary'>Flip</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default App;