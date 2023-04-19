import Content from "@components/routes/Blog/Content";
import Poster from "@components/routes/Blog/Poster";
import { fetchPost, fetchPosts } from "@services/posts/requests";
import { ReactElement } from "react";

import Box from "@components/atoms/Box";

import { GetStaticPaths, GetStaticProps } from "next";
import { Post as PostType } from "../../src/types/Sanity";

const Post = ({ post }: { post: PostType }): ReactElement | null => {
  if (!post) {
    return <h2>No article</h2>;
  }

  const { title = "Missing title", mainImage, body = [] } = post;

  return (
      <article>
          {mainImage && <Poster poster={mainImage} title={title} />}
          <Box mt={80} mb={70}>
              <Content body={body} />
          </Box>
      </article>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  let posts: any[] = [];

  try {
    posts = await fetchPosts({});
  } catch {
    posts = [];
  }

  return {
    paths: posts.map(({ slug }) => ({ params: { slug: slug.current } })),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post = null;
  // It's important to default the slug so that it doesn't return "undefined"
  if (params?.slug) {
    post = await fetchPost({ slug: params.slug as string });
  }

  return {
    props: {
      post
    }
  };
};
