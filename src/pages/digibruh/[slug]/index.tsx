import {
  GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage,
} from "next";
import { useRouter } from "next/router";
import React from "react";
import PostPage from "../../../components/post/PostPage";
import { browseDigibruhArticles, postIsDigibruhArticle } from "../../../lib/digibruh/hooks/article";
import { readPost } from "../../../lib/ghost/post";
import NotFound from "../../404";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await browseDigibruhArticles();

  const paths = posts.filter(postIsDigibruhArticle).map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params.slug?.toString();
    const post = await readPost({ slug });

    if (!postIsDigibruhArticle(post)) {
      throw new Error("Post isn't bruh.");
    }

    return {
      props: { post },
      revalidate: 30,
    };
  } catch (error) {
    return {
      props: {
        post: null,
      },
      revalidate: 1,
    };
  }
};

const Page: NextPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (!post && !router.isFallback) {
    return <NotFound />;
  }

  return <PostPage post={post} digibruh />;
};

export default Page;