import { GlobalConfig } from "payload/types";
import link from "../fields/link";

const Footer: GlobalConfig = {
   slug: 'footer',
   label: 'Footer',
   fields: [
      {
         type: 'array',
         name: 'nav',
         label: 'Navigation',
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

export default Footer;