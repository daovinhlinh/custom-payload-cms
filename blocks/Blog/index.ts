import { Block } from "payload/types";
import { MediaType } from "../../collections/Media";

type Content = {
   children: {
      text: string;
   }[]
}

export type Type = {
   blockType: 'blog'
   blockName?: string
   image?: MediaType
   id: string
   title: string
   content: Content[]
   date: Date
}

const Blog: Block = {
   slug: 'blog',
   labels: {
      singular: 'Blog',
      plural: 'Blogs',
   },
   fields: [
      {
         name: 'title',
         label: 'Post title',
         type: 'text',
         required: true
      },
      {
         name: 'content',
         type: 'richText',
         label: 'Content',
         required: true
      },
      {
         name: 'image',
         label: 'Featured Image',
         type: 'upload',
         relationTo: 'media'
      },
      {
         name: 'date',
         label: 'Date',
         type: 'date',
      }
   ]
}

export default Blog;