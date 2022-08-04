import {atom} from "recoil";
import {Theme} from "types/theme";

export const themeAtom = atom<Theme>({
    key: "themeAtom",
    default: "light"
});