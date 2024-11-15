import Hero from '../../components/Hero'
import { Container } from '../../styles'
import RestaurantList from '../../components/RestaurantList'
import Item from '../../models/Item'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import Footer from '../../components/Footer'

const restaurants: Item[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi',
    rate: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infoTags: ['Destaque da Semana', 'Japonesa']
  },
  {
    id: 2,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  },
  {
    id: 3,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  },
  {
    id: 4,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  },
  {
    id: 5,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  },
  {
    id: 6,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infoTags: ['Italiana']
  }
]

const Home = () => (
  <>
    <Hero />
    <Container>
      <RestaurantList restaurants={restaurants} />
    </Container>
    <Footer />
  </>
)

export default Home
