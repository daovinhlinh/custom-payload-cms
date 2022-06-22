
import React from 'react'
import { LinkType } from '../../../fields/link';
import Link from '../../Link';
import styles from './header.module.scss';

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
   // const classes = useStyles();

   return (
      <header className={styles.header}>
         <div>Xopify</div>
         <div>
            {
               navbarMenu?.nav?.map(({ link }, i) => (
                  <Link {...link} key={i} className={styles.navItem}
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