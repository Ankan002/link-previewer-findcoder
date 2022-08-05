import React from 'react';
import {LinkPreviewObject} from "types/link-preview";

interface Props {
    linkPreviewData: LinkPreviewObject;
}

const LinkPreview = (props: Props): JSX.Element => {

    const {linkPreviewData} = props;

    return (
        <div className="my-4 lg:w-1/3 md:w-2/3 w-full py-2 border-2 rounded-md border-primaryDark dark:border-primaryLight flex flex-col">

            <div className="flex-grow flex w-full items-center px-3 mb-1">
                <div className="flex justify-center items-center">
                    <img src={linkPreviewData.image} className="w-12 h-12 rounded border-2 p-2 border-primaryDark dark:border-primaryLight bg-primaryLight"  alt=""/>
                </div>

                <div className="flex-1 ml-3">
                    <h5 className="font-manrope text-lg text-primaryDark dark:text-primaryLight font-bold tracking-widest break-words">
                        {linkPreviewData.title}
                    </h5>

                    {
                        linkPreviewData.description && (
                            <p className="font-fira-code text-base font-thin text-primaryDark dark:text-primaryLight break-words mt-2">
                                {linkPreviewData.description}
                            </p>
                        )
                    }
                </div>
            </div>

            <div className="pt-2 mt-1 w-full bg-secondaryLight dark:bg-secondaryDark px-3 border-t-[1px] border-primaryDark/60 dark:border-primaryLight/60">
                <a href={linkPreviewData.url} target="_blank" className="underline text-lg tracking-widest font-manrope text-primaryDark dark:text-primaryLight break-all" rel="noreferrer">
                    {linkPreviewData.url?.substring(0,linkPreviewData.url?.length-1)}
                </a>
            </div>
        </div>
    );
};

export default LinkPreview;
