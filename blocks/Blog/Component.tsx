import React from 'react'
import { Type } from '.';
import Link from '../../components/Link';
import { SERVER_URL } from '../../pages/[...slug]';
import { Component as Image } from '../Image';
import useStyles from './css'

const Component: React.FC<Type> = (
   {
      content,
      id,
      image,
      title,
      date
   }
) => {
   console.log(new Date(date).toLocaleDateString('en-GB'));

   const classes = useStyles();
   if (!id) {
      return (
         <div>detail</div>
      )
   }

   return (
      <Link type='custom' url={`/blogs/${id}`} label={title} className={classes.wrapper}>

         <div className={classes.featuredImage}>
            {image && (
               <img
                  src={`${SERVER_URL}/media/${image.sizes?.feature?.filename || image.filename}`}
                  alt={image.alt}
               />
            )}
         </div>
         <div className={classes.title}>{title}</div>
         <div className={classes.subtitle}>{content[0].children[0].text} • {date && new Date(date).toLocaleDateString('en-FB')}</div>
      </Link>
   )
}

export default Component