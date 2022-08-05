import React, {useState} from 'react';
import HeroLogo from "assets/send.png";
import Image from "next/image";
import {HeroHeading} from "components/hero-heading";
import {HeroDescription} from "components/hero-description";
import {HeroFetchPreviewForm} from "components/hero-fetch-preview-form";
import {fetchLinkPreview} from "helpers";
import toast from "react-hot-toast";
import {LinkPreviewLoader} from "components/link-preview-loader";
import {LinkPreviewObject} from "types/link-preview";
import {LinkPreview} from "components/link-preview";

const HeroSection = () => {

    const [currentLink, setCurrentLink] = useState<string>("");
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [linkPreviewData, setLinkPreviewData] = useState<LinkPreviewObject>({});

    const onFetchClick = async() => {
        if(isFetching) {
            toast.error("Hold on we are fetching...");
            return;
        }

        setIsFetching(true);

        const result = await fetchLinkPreview(currentLink);

        setIsFetching(false);

        setCurrentLink("");

        if(!result.success) {
            if(result.error.includes("Invalid URL")){
                toast.error("Invalid URL");
            }
            else{
                toast.error(result.error);
            }
            return;
        }

        setLinkPreviewData({});
        console.log(result);

        setLinkPreviewData(result.data);
    }

    return (
        <div className="flex-grow flex flex-col w-full justify-center items-center p-5">
            <Image src={HeroLogo.src} alt="Hero Logo" height={80} width={80} />
            <HeroHeading content="Check your social media share previews." />
            <HeroDescription
                content="Make sure your website is ready to be shared on social media to optimize your conversation on Facebook, Twitter, LinkedIn & Pinterest."
            />
            <HeroFetchPreviewForm
                btnText="Preview"
                linkInputValue={currentLink}
                onLinkInputChange={(e) => setCurrentLink(e.target.value)}
                onFetchClick={onFetchClick}
            />

            {
                isFetching && (
                    <LinkPreviewLoader />
                )
            }

            {
                !isFetching && Object.keys(linkPreviewData).length > 1 && (
                    <LinkPreview linkPreviewData={linkPreviewData} />
                )
            }
        </div>
    );
};

export default HeroSection;
