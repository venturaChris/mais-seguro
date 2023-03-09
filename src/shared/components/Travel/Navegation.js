import Nav from 'react-bootstrap/Nav';

function FillExample() {
  return (
    

<Nav defaultActiveKey="/travel" as="ul">
<Nav.Item as="li">
  <Nav.Link className='colorNav purple' href="/portable">Portátil</Nav.Link>
</Nav.Item>
<Nav.Item as="li">
  <Nav.Link className='colorNav purple' eventKey="/residence" href="/residence">Residencial</Nav.Link>
</Nav.Item>
<Nav.Item as="li">
  <Nav.Link className='colorBack travel' href="/travel" eventKey="/travel">Viagem</Nav.Link>
</Nav.Item>
</Nav>
  );
}

export default FillExample;