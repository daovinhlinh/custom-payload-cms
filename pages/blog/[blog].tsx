import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import BlogDetail from '../../components/blog/BlogDetail'
import Header from '../../components/layout/Header'
import PageLayout from '../../components/layout/PageLayout'
import { Type as BlogType } from '../../collections/Blog'

type Props = {
   blog: BlogType
}

const Blog: React.FC<Props> = (props) => {
   const { blog } = props;
   console.log(blog);

   return (
      <PageLayout>
         <BlogDetail {...blog} />
      </PageLayout>
   )
}

export default Blog;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const slug = ctx.params?.blog;

   const blogReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs?where[slug][equals]=${slug}`);
   const blogData = await blogReq.json();

   return {
      props: {
         blog: blogData.docs[0],
      },
      revalidate: 1,
   };
};

export const getStaticPaths: GetStaticPaths = async () => {
   const blogsReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs?limit=100`);
   const blogsData = await blogsReq.json();

   return {
      paths: blogsData.docs.map(({ slug }) => ({
         params: { blog: slug },
      })),
      fallback: false,
   };
};
