import React from 'react'
import Link from '../../components/Link'
import Blog from '../Blog/Component'
import { Type as BlogType } from '../Blog'
import useStyles from './css'
import GridContainer from '../../components/layout/GridContainer'
import { Cell, Grid } from '@faceless-ui/css-grid'

type Type = {
   blogs: BlogType[]
}

const Component: React.FC<Type> = (props) => {
   const classes = useStyles();
   const { blogs } = props;

   return (
      <GridContainer>
         <Grid>
            {
               blogs.map((blog) => (
                  <Cell cols={4}>

                     <Blog {...blog} />

                  </Cell>
               ))
            }
         </Grid>
      </GridContainer>
   )
}

export default Component