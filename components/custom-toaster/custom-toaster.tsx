import React from 'react';
import {Toaster, ToastBar} from "react-hot-toast";
import {useRecoilValue} from "recoil";
import {themeAtom} from "atoms";
import {Theme} from "types/theme";

const CustomToaster = (): JSX.Element => {

    const currentTheme = useRecoilValue<Theme>(themeAtom);

    return (
        <Toaster>
            {
                (t) => {
                    return (
                        <ToastBar
                            toast={t}
                            style={{
                                ...t.style,
                                fontFamily: "'Fira Code', monospace",
                                color: currentTheme === "dark" ? "#F4F6FA" : "#1C1B2B",
                                border: currentTheme === "dark" ? "1px solid #F4F6FA" : "1px solid #1C1B2B",
                                background: currentTheme === "dark" ? "#10111A" : "#F1F2F6"
                            }}
                        />
                    )
                }
            }
        </Toaster>
    );
};

export default CustomToaster;
