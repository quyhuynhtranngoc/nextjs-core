import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";
import Link from "next/link";

const Post = ({ post }) => {
  // Khi getStaticProps() chay xong lan dau tien.
  // Cac lan sau thi trang so 6 (vi du) se duoc dua vao danh sach prerendered
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};
export default Post;

// Lay du lieu kieu tinh, nhung du lieu tinh nao thi con phu thuoc vao path params
export const getStaticPaths = async () => {
  const paths = await getPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false, // bang false thi path lon hon 5 (limit) se tra ve trang not found
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
  };
};
