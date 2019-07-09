import Typography from 'typography';
import stAnnes from 'typography-theme-st-annes';

stAnnes.overrideThemeStyles = () => ({
  // body: {
  //   fontSize: '18px',
  // },
});

const typography = new Typography(stAnnes);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
