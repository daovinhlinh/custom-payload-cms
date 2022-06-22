import { GlobalConfig } from "payload/types";
import link from "../fields/link";

const NavbarMenu: GlobalConfig = {
   slug: 'navbar-menu',
   label: 'Navbar Menu',
   access: {
      read: () => true,
   },
   fields: [
      {
         name: 'nav',
         label: 'Navigation',
         type: 'array',
         labels: {
            singular: 'Link',
            plural: 'Links'
         },
         fields: [
            link
         ]
      }
   ]

}

export default NavbarMenu;