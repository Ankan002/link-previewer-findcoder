import React from "react";
import Head from "next/head";

interface Props {
    title: string;
    favicon?: string;
}

const CustomHead = (props: Props) : JSX.Element => {

    const { title, favicon } = props;

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href={ favicon ?? "/link.svg" } />
        </Head>
    );
};

export default CustomHead;
