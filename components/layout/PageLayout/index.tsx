import React from 'react'
import styles from './pageLayout.module.scss'

type Props = {
   className?: string
}

const PageLayout: React.FC<Props> = (props) => {
   const { children, className } = props;

   return (
      <div className={[className, styles.wrapper].filter(Boolean).join(' ')}>
         {
            children
         }
      </div>
   )
}

export default PageLayout