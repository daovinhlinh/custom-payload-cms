
import React from 'react'
import { LinkType } from '../../../fields/link';
import Link from '../../Link';
import useStyles from './css';

export type Type = {
   nav: {
      link: LinkType
   }[]
}

type Header = {
   navbarMenu: {
      nav: {
         link: LinkType
      }[]
   }
}

const Header: React.FC<Header> = ({ navbarMenu }) => {
   const classes = useStyles();

   return (
      <header className={classes.header}>
         <div>Xopify</div>
         <div>
            {
               navbarMenu?.nav?.map(({ link }, i) => (
                  <Link {...link} key={i} className={classes.navItem}

                  >
                     <span style={{ marginLeft: i === 0 ? 0 : 30 }} key={i}>
                        {link.label}
                     </span>
                  </Link>
               ))
            }
         </div>
      </header>
   )
}

export default Header