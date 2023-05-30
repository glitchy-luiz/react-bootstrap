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
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.awsli.com.br/600x450/1546/1546560/produto/105145177/5472d648eb.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://neilpatel.com/wp-content/uploads/fly-images/87311/brinquedos-de-pet-shop-pote-com-racao-e-correia-e-1200x675-c.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
    <h2 className="text-center">Produtos</h2>
    <div className="produtocont">
      <Produtos nome="coleira" image="https://cdn.awsli.com.br/600x450/237/237332/produto/30649363/fbf3c1b1fc.jpg" preco="49,99"/>
      <Produtos nome="Caixa de transporte" image="https://www.furacaopet.com.br/imagens/informacoes/fornecedores-produtos-pet-shop-01.jpg" preco="159,99"/>
    </div>
    <Rodape/>
        </div>
    )
}

export default Home