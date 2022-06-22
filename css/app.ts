import { createUseStyles } from 'react-jss';
import backgroundColor from '../fields/backgroundColor';
import { base, baseLinePx, htmlFontSize } from './base';
import colors from './colors';
import queries from './queries';

const appStyles = createUseStyles({
   '@global': {
      'html,body': {
         margin: 0,
      },
      html: {
         fontFamily: 'system-ui, Helvetica Neue, sans-serif',
         fontSize: htmlFontSize,
         lineHeight: baseLinePx,
         backgroundColor: colors.white,
         [queries.m]: {
            fontSize: htmlFontSize * 0.75
         }
      },
      ol: {
         padding: `0 0 0 ${base()}`,
         margin: `0 0 ${base()} 0`
      },
      ul: {
         padding: `0 0 0 ${base()}`,
         margin: `0 0 ${base()} 0`
      },
      li: {
         fontSize: htmlFontSize,
         lineHeight: base(1.5),
      }
   },
   app: {
      height: '100%'
   }
});

export default appStyles