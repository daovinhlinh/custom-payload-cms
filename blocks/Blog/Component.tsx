import React from 'react'
import { Type } from '.';
import Link from '../../components/Link';
import { SERVER_URL } from '../../pages/[...slug]';
import { Component as Image } from '../Image';
import styles from './blog.module.scss'

const Component: React.FC<Type> = (
   {
      content,
      id,
      image,
      title,
      date
   }
) => {
   if (!id) {
      return (
         <div>detail</div>
      )
   }

   return (
      <Link type='custom' url={`/blogs/${id}`} label={title} className={styles.wrapper}>

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

export default Component