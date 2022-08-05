export const fetchLinkPreview = async(link: string) => {
    try{
        const url = new URL(link);

        const response = await fetch("/api/link-preview", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url
            })
        });

        const data = await response.json();

        if(!data.success) {
            return {
                success: data.success,
                error: data.error
            };
        }

        return {
            success: data.success,
            data: data.data
        };
    }
    catch(error: any){
        console.log(error);

        return {
            success: false,
            error: error.message ?? "Internal Server Error!!"
        };
    }
};