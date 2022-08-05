import { NextApiRequest, NextApiResponse } from "next";
import { getLinkPreview as getPreview } from "link-preview-js";

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

        if(e instanceof Error){
            return res.status(500).json({
                success: false,
                error: e.message
            });
        }

        return res.status(500).json({
            success: false,
            error: "Internal Server Error!!"
        });
    }
};

export default getLinkPreview;