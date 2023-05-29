import Nav from 'react-bootstrap/Nav';

function Cabeca() {
    return (
      <>
      <div className="cab">
        <h1 className="text-center mt-4 mb-4">Shopet</h1>
        <p className="text-center mt-4 mb-4">Loja do seu pet</p>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/sobre">Sobre nós</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
      </>
    );
  }
  
  export default Cabeca;