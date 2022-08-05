import React, {ChangeEvent, MouseEventHandler} from 'react';

interface Props {
    btnText: string;
    linkInputValue: string;
    onLinkInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFetchClick: MouseEventHandler<HTMLButtonElement>
}

const HeroFetchPreviewForm = (props: Props) => {

    const { btnText, linkInputValue, onLinkInputChange, onFetchClick } = props;

    return (
        <div className="lg:w-1/3 md:w-2/3 w-full flex sm:flex-row flex-col items-center justify-between my-4">
            <div className="flex-grow sm:pr-3 w-full sm:mb-0 mb-3">
                <input className="w-full h-full flex items-center font-fira-code border-2 border-primaryDark dark:border-primaryLight bg-secondaryLight dark:bg-secondaryDark px-3 py-2 rounded-md text-lg focus:outline-none text-primaryDark dark:text-primaryLight placeholder-lightGrey" placeholder="Enter website link" value={linkInputValue} onChange={onLinkInputChange} />
            </div>
            <button className="lg:w-28 md:w-24 sm:w-20 w-full px-2 py-1.5 border-2 border-primaryDark dark:border-primaryLight bg-primaryYellow dark:bg-primaryOrange text-primaryDark dark:text-primaryLight font-manrope md:text-lg text-base rounded-md hover:shadow-[0_1px_12px_2px_rgba(246,186,61,0.7)] dark:hover:shadow-[0_1px_12px_2px_rgba(252,88,48,0.7)] transition-all ease-in-out sm:font-light" onClick={onFetchClick}>
                {btnText}
            </button>
        </div>
    );
};

export default HeroFetchPreviewForm;
