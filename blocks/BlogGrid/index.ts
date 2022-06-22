import { Block } from "payload/types";
import backgroundColor from "../../fields/backgroundColor";

const BlogGrid: Block = {
   slug: 'blog-grid',
   labels: {
      singular: 'Blog Grid',
      plural: 'Blog Grids'
   },
   fields: [
      {
         name: 'blogs',
         label: 'Blogs',
         type: 'array',
         minRows: 1,
         fields: [
            {
               name: 'title',
               label: 'Blog title',
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
   ]
}

export default BlogGrid;