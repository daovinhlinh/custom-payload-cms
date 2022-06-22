import { Cell, Grid } from '@faceless-ui/css-grid'
import { GetStaticProps } from 'next'
import React from 'react'
import GridContainer from '../components/layout/GridContainer'
import { Type as BlogType } from '../collections/Blog'
import BlogPreview from '../components/blog/BlogPreview'


export type Props = {
   blogs?: BlogType[]
}

const Blogs: React.FC<Props> = (props) => {
   const { blogs } = props;
   // console.log(blogs);


   return (
      <GridContainer>
         <Grid>
            {blogs.map((blog) => (
               <Cell cols={4}>
                  <BlogPreview key={blog.id} {...blog} />
               </Cell>
            ))}
         </Grid>
      </GridContainer>
   )
}

export default Blogs

export const getStaticProps: GetStaticProps = async (ctx) => {
   const page = ctx.params?.page || 1;

   const blogsReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs?page=${page}`)
   const blogsData = await blogsReq.json();

   return {
      props: {
         blogs: blogsData.docs
      },
      revalidate: 1
   }
}