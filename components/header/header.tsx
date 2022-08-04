import React from 'react';

interface Props {
    title: string;
}

const Header = (props: Props): JSX.Element => {

    const { title } = props;

    return (
        <div className="w-full flex items-center justify-center px-5 py-3">
            <h1 className="text-4xl font-manrope text-primaryDark dark:text-primaryLight font-thin tracking-widest">
                {title}
            </h1>
        </div>
    );
};

export default Header;
