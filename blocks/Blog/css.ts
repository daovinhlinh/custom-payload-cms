import { createUseStyles } from "react-jss";
import breakpoints from "../../css/breakpoints";
import colors from "../../css/colors";

export default createUseStyles({
   wrapper: {
      textDecoration: 'none'
   },
   featuredImage: {
      margin: '0 auto',
      maxWidth: breakpoints.xs,
      marginBottom: 15
   },
   title: {
      fontSize: 16,
      fontWeight: 600,
      color: colors.black,
      marginBottom: 7
   },
   subtitle: {
      fontSize: 14,
      fontWeight: 600,
      color: colors.gray
   }
})