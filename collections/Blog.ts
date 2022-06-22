import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import { MediaType } from './Media';

interface Child {
  text: string;
}

interface Content {
  children: Child[];
}

export type Type = {
  id: string;
  title: string;
  content: Content[];
  image: MediaType;
  date: Date;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const Blog: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
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
      relationTo: 'media',
      required: true
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
    },
    slug
  ],
};

export default Blog;
