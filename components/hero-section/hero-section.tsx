import React from 'react';
import HeroLogo from "assets/send.png";
import Image from "next/image";
import {HeroHeading} from "components/hero-heading";
import {HeroDescription} from "components/hero-description";
import {HeroFetchPreviewForm} from "components/hero-fetch-preview-form";

const HeroSection = () => {
    return (
        <div className="flex-grow flex flex-col w-full justify-center items-center p-5">
            <Image src={HeroLogo.src} alt="Hero Logo" height={80} width={80} />
            <HeroHeading content="Check your social media share previews." />
            <HeroDescription content="Make sure your website is ready to be shared on social media to optimize your conversation on Facebook, Twitter, LinkedIn & Pinterest." />
            <HeroFetchPreviewForm btnText="Preview" />
        </div>
    );
};

export default HeroSection;
