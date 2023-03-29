import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import Link from "next/link";
import { getPosts } from "../../lib/post";
function Posts({ posts }) {
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id} className="my-3 shadow">
          <Card.Body>
            <Card.Title>
              {post.id} -- {post.title}
            </Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href={`/posts/${post.id}`} passHref>
              <Card.Link>See more</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
}

// Get static data from backend /db /api
//data duoc lay tu ben ngoai va thuc hien render o phia server khi ng dung request
// Lay du lieu tinh
// getStaticProps khi build/deploy se lay data truoc va render thanh html sau do chi doi ng dung goi den la render chua khong phải khi ng dùng gọi đến mới gọi api
// demo thi vao npm run build va npm run start sau do click vao` post thi khong thay tab network goi api

export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
