import { join } from "path";
import withSass from "@zeit/next-sass";
export default withSass({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true,
});
export const sassOptions = {
  includePaths: [join(__dirname, "styles")],
};
