import Nav from 'react-bootstrap/Nav';

function FillExample() {
  return (
    <Nav defaultActiveKey="/residence" as="ul">
      <Nav.Item as="li">
        <Nav.Link className='colorNav pink'  href="/portable">Portátil</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='colorBack residence' href="/residence" eventKey="/residence">Residencial</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='colorNav pink' eventKey="/travel" href="/travel">Viagem</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FillExample;