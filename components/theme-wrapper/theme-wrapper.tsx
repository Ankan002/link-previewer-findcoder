import React, {useEffect} from 'react';
import {useRecoilState} from "recoil";
import {Theme} from "types/theme";
import {themeAtom} from "atoms/theme-atom";

interface Props {
    children: JSX.Element;
}

const MyComponent = (props: Props): JSX.Element => {

    const { children } = props;

    const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);

    const loadTheme = () => {
        if(window === undefined) return;

        const savedTheme = localStorage.getItem("saved-theme");

        if(!savedTheme) {
            localStorage.setItem("saved-theme", "light");
            setCurrentTheme("light");
            return;
        }

        if(savedTheme === "light" || savedTheme === "dark") setCurrentTheme(savedTheme);
    }

    useEffect(() => {
        loadTheme();
    }, [])

    return (
        <div className={`${currentTheme}`}>
            { children }
        </div>
    );
};

export default MyComponent;
