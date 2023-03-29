import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Layout from "../../components/Layout";
import { getBooks } from "../../lib/book";

const Books = ({ books }) => {
  return (
    <Layout>
      {books.map((book) => (
        <Card className="my-3 shadow" key={book.bookName}>
          <Card.Body>
            <Card.Title>{book.bookName}</Card.Title>
            <Card.Text>{book.bookContent}</Card.Text>
            <Link href="/">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};
export default Books;

export const getStaticProps = async () => {
  const books = await getBooks();
  return {
    props: {
      books,
    },
  };
};
