import CallToAction from './CallToAction';
import { Content, Component as content } from './Content';
import { Image, Component as image } from './Image';
import Blog from './Blog/Component'
import BlogGrid from './BlogGrid/Component';

export const collections = {
  CallToAction,
  Content,
  Image,
};

export const components = {
  // cta,
  content,
  image,
  'blog': Blog,
  'blog-grid': BlogGrid
};
