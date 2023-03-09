import Nav from 'react-bootstrap/Nav';

function Navegation() {
  return (


    <Nav defaultActiveKey="/portable" as="ul">
      <Nav.Item as="li">
        <Nav.Link className='colorBack Portable' href="/portable">Portátil</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='colorNav green' eventKey="/residence" href="/residence">Residencial</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='colorNav green' eventKey="/travel" href="/travel">Viagem</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navegation;
