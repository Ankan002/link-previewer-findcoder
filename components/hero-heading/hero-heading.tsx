import React from 'react';

interface Props {
    content: string;
}

const HeroHeading = (props: Props): JSX.Element => {

    const { content } = props;

    return (
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-primaryDark dark:text-primaryLight lg:w-1/3 md:w-2/3 w-full text-center font-manrope my-4 font-bold tracking-widest">
            {content}
        </h1>
    );
};

export default HeroHeading;
