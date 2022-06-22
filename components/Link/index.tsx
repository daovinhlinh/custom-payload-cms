import Link from "next/link";
import { LinkType } from "../../fields/link";

type Props = {
   className?: string;
} & LinkType

const CMSLink: React.FC<Props> = ({
   type, page, url, children, className
}) => {
   const isRelativeURL = url?.indexOf('/') === 0;

   if (type === 'page' || isRelativeURL) {
      return (
         <Link
            href={type === 'page' ? `/${page?.slug}` : url}
         >
            <a className={className}>
               {children}
            </a>
         </Link>
      )
   }

   return (
      <a href={url} className={className}>
         {children}
      </a>
   )
}

export default CMSLink;