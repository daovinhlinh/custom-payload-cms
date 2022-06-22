import React from 'react'
import { Type } from '../../../collections/Blog';
import { SERVER_URL } from '../../../pages/[...slug]';
import Link from '../../Link';
import styles from './blogPreview.module.scss'

const BlogPreview: React.FC<Type> = (props) => {
   const { content, date, id, image, slug, title } = props

   return (
      <Link type='custom' url={`/blog/${slug}`} label={title} className={styles.wrapper}>
         <div className={styles.featuredImage}>
            {image && (
               <img
                  src={`${SERVER_URL}/media/${image.sizes?.feature?.filename || image.filename}`}
                  alt={image.alt}
               />
            )}
         </div>
         <div className={styles.title}>{title}</div>
         <div className={styles.subtitle}>{content[0].children[0].text} • {date && new Date(date).toLocaleDateString('en-FB')}</div>
      </Link>
   )
}

export default BlogPreview