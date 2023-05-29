import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Carousel from 'react-bootstrap/Carousel';
import Produtos from "../Produtos";


function Home(){
    return(
        <div>
            <Cabeca/>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.acasadoanimal.com.br/wp-content/uploads/2019/09/Produtos-pet-shop.png"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3 className="textoc">First slide label</h3>
          <p className="textoc">Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.awsli.com.br/600x450/1546/1546560/produto/105145177/5472d648eb.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3 className="textoc">Second slide label</h3>
          <p className="textoc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://neilpatel.com/wp-content/uploads/fly-images/87311/brinquedos-de-pet-shop-pote-com-racao-e-correia-e-1200x675-c.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3 className="textoc">Third slide label</h3>
          <p className="textoc">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
    <h2 className="text-center">Produtinhos</h2>
    <Produtos/>
    <Rodape/>
        </div>
    )
}

export default Home