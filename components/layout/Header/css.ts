import { createUseStyles } from "react-jss";
import { base } from "../../../css/base";
import colors from "../../../css/colors";

export default createUseStyles({
   header: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: `0 ${base(3)}`,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
   },
   navItem: {
      color: colors.indigo,
      fontWeight: 600,
      fontSize: 16,
      textDecoration: 'none',
      cursor: 'pointer'
   }
})