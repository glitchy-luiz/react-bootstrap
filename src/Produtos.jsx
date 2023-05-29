// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Produtos() {
  return (
    <div className="produto">
        <div className='prods'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className='imgcard' src="https://images.tcdn.com.br/img/img_prod/816978/coleira_para_cachorro_de_camurca_com_aplique_443_1_d11677052a6f902f385006b6285c9b44.jpg" />
        <Card.Body>
            <Card.Title className='text-center'>teste</Card.Title>
            <Card.Text>
            testeteste
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
        </div>
        <div className='prods'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className='imgcard' src="https://images.tcdn.com.br/img/img_prod/816978/coleira_para_cachorro_de_camurca_com_aplique_443_1_d11677052a6f902f385006b6285c9b44.jpg" />
        <Card.Body>
            <Card.Title className='text-center'>teste</Card.Title>
            <Card.Text>
            testeteste
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
        </div>
    </div>
  );
}

export default Produtos;