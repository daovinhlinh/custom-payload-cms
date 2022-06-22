import React, { ReactChild } from 'react'
import useStyles from './css'
import styles from './index.module.scss'

const GridContainer: React.FC = ({ children }) => {
   const classes = useStyles();

   return (
      <div className={classes.gridContainer}>
         {children}
      </div>
   )
}

export default GridContainer