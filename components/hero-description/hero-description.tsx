import React from 'react';

interface Props {
    content: string;
}

const HeroDescription = (props: Props): JSX.Element => {

    const { content } = props;

    return (
        <p className="lg:1/2 md:w-2/3 w-full font-fira-code font-light my-3 text-primaryDark dark:text-primaryLight md:text-lg sm:text-base text-xs text-center">
            {content}
        </p>
    );
};

export default HeroDescription;
