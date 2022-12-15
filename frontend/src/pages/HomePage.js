import { Container, Row } from "react-bootstrap";
import CategoryCardComponent from "../components/CategoryCardComponent";
import ProductCarouselComponent from "../components/ProductCarouselComponent";
const HomePage = () => {
  const categories = [
    {
      id: 1,
      title: "Thỏ Bảy Màu và những người nghĩ nó là bạn",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, rerum.",
      image: "https://cf.shopee.vn/file/af914230b7a8b203bd30915a261fc227",
    },
    {
      id: 2,
      title: "Thỏ Bảy Màu và những người nghĩ nó là bạn",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, rerum.",
      image: "https://cf.shopee.vn/file/af914230b7a8b203bd30915a261fc227",
    },
    {
      id: 3,
      title: "Thỏ Bảy Màu và những người nghĩ nó là bạn",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, rerum.",
      image: "https://cf.shopee.vn/file/af914230b7a8b203bd30915a261fc227",
    },
    {
      id: 4,
      title: "Thỏ Bảy Màu và những người nghĩ nó là bạn",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, rerum.",
      image: "https://cf.shopee.vn/file/af914230b7a8b203bd30915a261fc227",
    },
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-3">
          {categories.map((data) => (
            <CategoryCardComponent
              key={data.id}
              title={data.title}
              des={data.des}
              image={data.image}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
