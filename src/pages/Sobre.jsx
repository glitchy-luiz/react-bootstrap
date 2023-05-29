import Cabeca from "../Cabeca"
import Rodape from "../Rodape"

function Sobre(){
    return(
        <div>
            <Cabeca/>
            <div className="conteudosobre">
                <div className="conts">
                    <div className="txts">
                        <h4 className="sobre">Sobre nós</h4>
                        <h2>Shopet: O Paraíso dos Bichinhos</h2>
                        <p className="ps">Bem-vindo ao Shopet, o lugar perfeito para cuidar e mimar seu companheiro peludo! Aqui, no coração da cidade, encontrará uma pet shop dedicada a proporcionar uma experiência excepcional para você e seu amado animal de estimação. Entre em nosso mundo encantador, onde o amor pelos animais é a essência de tudo que fazemos.</p>
                        <p className="ps">Ao cruzar a porta do Shopet, você será imediatamente envolvido por uma atmosfera acolhedora e alegre. Nossa equipe apaixonada e especializada está pronta para recebê-lo, oferecendo orientação personalizada e o melhor atendimento. Compreendemos que cada animal é único, com necessidades individuais, e estamos aqui para ajudar a satisfazê-las da melhor maneira possível.</p>
                    </div>
                    <div className="imgs">
                        <img src="https://blog.vindi.com.br/wp-content/uploads/2021/07/petshop-vindi.jpg" alt="" />
                    </div>   
                </div>

                <div className="conts2">
                    <div className="imgs">
                        <img src="https://ilscontabilidade.com.br/blog/wp-content/uploads/2021/03/pet.jpg" alt="" />
                    </div>   
                    <div className="txts2">
                        <h2>Oque fazemos</h2>
                        <p className="ps">A variedade de produtos e serviços que oferecemos no Shopet é simplesmente irresistível. Nossa loja é um verdadeiro paraíso, com prateleiras repletas dos melhores alimentos, brinquedos, acessórios e roupas para pets. Não importa se você está procurando uma ração especializada, um novo arranhador para o gato ou uma coleira estilosa para o seu cachorro, temos tudo o que você precisa.</p>
                        <p className="ps">Além disso, nosso serviço de grooming é inigualável. Nossos profissionais altamente treinados e experientes dedicam-se a cuidar da beleza e bem-estar do seu amiguinho. Com produtos de alta qualidade e técnicas modernas, garantimos que seu animal de estimação saia do Shopet com um visual impecável, cheio de charme e elegância.</p>
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default Sobre