import { Col, Container, ListGroup, Row, Button } from "react-bootstrap";
import PriceFilterComponent from "../components/filterQerryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../components/filterQerryResultOptions/RatingFilterComponent";
import SortOptionsComponent from "../components/SortOptionsComponent";
import CategoryFilterComponent from "../components/filterQerryResultOptions/CategoryFilterComponent";
import AttributesFilterComponent from "../components/filterQerryResultOptions/AttributesFilterComponent";
import ProductForListComponent from "../components/ProductForListComponent";
import PaginationComponent from "../components/PaginationComponent";

const ProductListPage = () => {
  return (
    <Container className="fluid">
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary"> Filter</Button>
              <Button variant="danger"> Reset filter</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 5 }).map((_, ind) => (
            <ProductForListComponent
              key={ind}
              image={[
                "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.18169-9/11057339_1002527499757894_7211414614790090080_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=6QC-0WTBvm4AX9J4EFW&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBybvBa23pqZATZjPLVFaiDHH0BUvZlxnbQjXfcWOdYmg&oe=63BD09D8",
                "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.18169-9/11146296_1002077436469567_223552695907563403_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_ohc=t8VXjcigYUgAX__icSx&tn=2aJM4k6b70uDXxBu&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDJWkrXvR3xOZA3oHB1JJfrIFKRmFaEpk6gx7pQaQ2J8w&oe=63BD0A54",
                "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.18169-9/11054496_1001570893186888_1440783347171104731_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9267fe&_nc_ohc=1KC_NubRKAcAX_G2uFh&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCkQTfe8saOGIvYxWshLPXREtR42mhYdqg-2xIXj7v-kg&oe=63BD15AC",
                "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.18169-9/11053465_999000383443939_5379317150079713074_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9267fe&_nc_ohc=xD_rjnYsuYYAX96oiVC&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBvZT2KWJaJsmukX_C0UCV3Rd53jbhtNjxer_jyhTT-bA&oe=63BD32FE",
                "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.18169-9/11096578_996990526978258_7895166720783012048_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=rhoXAdwesdEAX-JnMzx&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDC8dvDZP8enKSzx23J4jg-hrexVQwhGaPFIRTXWhsEQQ&oe=63BD10D3",
              ]}
              ind={ind}
            />
          ))}
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;
