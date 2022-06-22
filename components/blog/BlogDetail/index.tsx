import React from 'react'
import { Type } from '../../../collections/Blog'
import { SERVER_URL } from '../../../pages/[...slug]'
import styles from './blogDetail.module.scss'

const BlogDetail: React.FC<Type> = (props) => {
   const { title, content, image } = props

   return (
      <div>
         <h1>{title}</h1>
         <div className={styles.featuredImage}>
            {image && (
               <img
                  src={`${SERVER_URL}/media/${image.sizes?.feature?.filename || image.filename}`}
                  alt={image.alt}
               />
            )}
         </div>
         <div>{content[0].children[0].text}</div>
      </div>
   )
}

export default BlogDetail