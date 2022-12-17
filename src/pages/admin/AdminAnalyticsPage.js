import { Row, Col } from "react-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const AdminAnalyticsPage = () => {
  const data = [
    {
      name: "7:00 PM",
      "2022 year": 6020,
      "2021 year": 6000,
    },
    {
      name: "7:00 PM",
      "2022 year": 6040,
      "2021 year": 6020,
    },
    {
      name: "7:00 PM",
      "2022 year": 6060,
      "2021 year": 6040,
    },
    {
      name: "7:00 PM",
      "2022 year": 6080,
      "2021 year": 6060,
    },
    {
      name: "7:00 PM",
      "2022 year": 6000,
      "2021 year": 2000,
    },
    {
      name: "7:00 PM",
      "2022 year": 6000,
      "2021 year": 2000,
    },
    {
      name: "7:00 PM",
      "2022 year": 6000,
      "2021 year": 2000,
    },
    {
      name: "7:00 PM",
      "2022 year": 6000,
      "2021 year": 2000,
    },
    {
      name: "8:00 PM",
      "2022 year": 7000,
      "2021 year": 8000,
    },
    {
      name: "9:00 PM",
      "2022 year": 5000,
      "2021 year": 10000,
    },
    {
      name: "10:00 PM",
      "2022 year": 8000,
      "2021 year": 23000,
    },
    {
      name: "11:00 PM",
      "2022 year": 2000,
      "2021 year": 5000,
    },
    {
      name: "12:00 PM",
      "2022 year": 6000,
      "2021 year": 4200,
    },
    {
      name: "13:00 PM",
      "2022 year": 3100,
      "2021 year": 3000,
    },
  ];
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10} width="100%" height="100%">
        <h1>Black Friday cumulative Revenue 11/2/2022 vs 11/27/2021</h1>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="2021 year"
            stroke="#8884d8"
            activeDot={{ r: 6 }}
          />
          <Line type="monotone" dataKey="2022 year" stroke="#82ca9d" />
        </LineChart>
        )
      </Col>
    </Row>
  );
};
export default AdminAnalyticsPage;
