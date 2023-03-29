import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Layout from "../../components/Layout";
import { getRandomJoke } from "../../lib/joke";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Here's your random joke for today</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};
export default Random;

export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  // joke = false

  if (!joke)
    return {
      notFound: true, // 404 page
    };

  // còn k redirect về 1 page khác
  // return {
  // 	redirect: {
  // 		destination: '/posts',
  // 		permanent: false
  // 	}
  // }

  return {
    props: {
      joke,
    },
  };
};
