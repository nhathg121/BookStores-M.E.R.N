import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";
const HomePage = () => {
  const categories = [
    {
      title: "Book1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, rerum.",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/55/11/4a/d9aa2f398ca67fba315157c6b589655a.jpg.webp",
    },
    {
      title: "Book1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, rerum.",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/55/11/4a/d9aa2f398ca67fba315157c6b589655a.jpg.webp",
    },
    {
      title: "Book1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, rerum.",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/55/11/4a/d9aa2f398ca67fba315157c6b589655a.jpg.webp",
    },
    {
      title: "Book1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, rerum.",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/55/11/4a/d9aa2f398ca67fba315157c6b589655a.jpg.webp",
    },
  ];
  return (
    <>
      <ProductCarouselComponent></ProductCarouselComponent>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {categories.map((data) => (
            <CategoryCardComponent
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
