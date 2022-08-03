import { NextApiRequest, NextApiResponse } from "next";
import { getLinkPreview as getPreview } from "link-preview-js";

interface FetchedData  {
    url: string;
    title: string;
    siteName: string | undefined;
    description: string | undefined;
    mediaType: string;
    contentType: string | undefined;
    images: string[];
    favicons: string[];
}

const getLinkPreview = async(req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== "POST") {
        return res.status(400).json({
            success: false,
            error: "Invalid Request Method!!"
        });
    }

    try{
        const { url } = req.body;

        const previewData = await getPreview(url, {
            followRedirects: "follow"
        });

        console.log(previewData);

        return  res.status(200).json({
            success: true,
            data: {
                url: previewData.url,
                title: ("title" in previewData) ? previewData.title : "",
                description: ("description" in previewData) ? previewData.description : "",
                image: previewData.favicons.length > 0 ? previewData.favicons[0] : `${("images" in previewData) ? previewData.images[0] : ""}`
            }
        });
    }
    catch (e) {
        console.log(e);

        return res.status(500).json({
            success: false,
            error: "Internal Server Error!! Check the console."
        })
    }
};

export default getLinkPreview;