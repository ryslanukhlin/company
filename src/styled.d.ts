import "styled-components";

import { ITheme } from "./App";

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
