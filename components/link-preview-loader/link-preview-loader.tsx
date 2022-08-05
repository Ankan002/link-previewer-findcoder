import React from 'react';
import Skeleton from "react-loading-skeleton";

const LinkPreviewLoader = (): JSX.Element => {
    return (
        <div className="my-4 lg:w-1/3 md:w-2/3 w-full px-3 py-2 border-2 rounded-md border-primaryDark dark:border-primaryLight flex flex-col bg-secondaryLight dark:bg-secondaryDark">
            <div className="flex-grow flex w-full items-center">
                <div className="flex justify-center items-center">
                    <Skeleton count={1} width={50} height={50} circle={true} style={{marginTop: 0}} baseColor={"#B5BAC7"} highlightColor={"#ebebeb"} />
                </div>

                <div className="flex-grow flex flex-col pl-3">
                    <Skeleton count={1} width={"100%"} height={20} baseColor={"#B5BAC7"} highlightColor={"#ebebeb"} style={{marginTop: 5, marginBottom: 5}} />

                    <Skeleton count={1} width={"100%"} height={20} baseColor={"#B5BAC7"} highlightColor={"#ebebeb"} style={{marginTop: 5, marginBottom: 5}} />
                </div>
            </div>

            <div className="mt-3 mb-2 w-full">
                <Skeleton count={1} width={"100%"} height={20} baseColor={"#B5BAC7"} highlightColor={"#ebebeb"} />
            </div>
        </div>
    );
};

export default LinkPreviewLoader;
