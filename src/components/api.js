// import { useState } from "react";

// const getModels = (apiKey, limit, baseUrl, types) => {

//     const [models, setModels] = useState([]);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);


//     const params = new URLSearchParams({
//         limit,
//         favorites: "true",
//         types: types
//     });

//     const headers = {
//         Authorization: `Bearer ${apiKey}`,
//         'Content-Type': 'application/json'
//     };

//     const url = `${baseUrl}?${params.toString()}`;

//     try {
//         const response = fetch(url, {
//             method: 'GET',
//             headers: headers
//         });
//         if (response.ok) {
//             const data = response.json();
            
//             const results = data.items.map(item => {
//                 const civitaiPageId = item.id;
//                 const name = item.name;
//                 const model = item.modelVersions[0];
//                 const image = model.images.length > 0 ? model.images[0].url : null;
//                 const downloadUrl = model.downloadUrl;

//                 return {
//                     name: name,
//                     civitai_page: `https://civitai.com/models/${civitaiPageId}`,
//                     image: image,
//                     download_url: downloadUrl
//                 };
//             });
//             setModels(results);
//             setIsPending(false);
//             setError(null);
//         } else {
//             console.error("Request failed with status code:", response.status);
//             setError(response.message);
//             setIsPending(true);
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//         setIsPending(true);
//     }

//     return { models, isPending, error };
// }

// export {getModels}

// // // Replace with your actual API key, desired limit, base URL, and types
// // const apiKey = "e484d79e3bcf59dc568cbd5d2a765f07";
// // const limit = 10;
// // const baseUrl = "https://civitai.com/api/v1/models";
// // const types = "Checkpoint";

// // // Example usage
// // getModels(apiKey, limit, baseUrl, types)
// //     .then(results => {
// //         if (results) {
// //             console.log(results);

// //             // Now you can use the 'results' array of JSON objects in your React component
// //         }
// //     })
// //     .catch(error => console.error(error));

import { useState, useEffect } from "react";

const useGetModels = (apiKey, limit, baseUrl, types) => {
    const [models, setModels] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = new URLSearchParams({
                    limit,
                    favorites: "true",
                    types: types
                });

                const headers = {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                };

                const url = `${baseUrl}?${params.toString()}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: headers
                });

                if (response.ok) {
                    const data = await response.json();

                    const results = data.items.map(item => {
                        const civitAiPageURL = `https://civitai.com/models/${item.id}`;
                        const name = item.name;
                        const model = item.modelVersions[0];
                        const image = model.images.length > 0 ? model.images[0].url : null;
                        const downloadUrl = `https://civitai.com/api/download/models/${model.id}`;
                        
                        return {
                            name: name,
                            civitai_page: civitAiPageURL,
                            image: image,
                            download_url: downloadUrl
                        };
                    });

                    setModels(results);
                    setIsPending(false);
                    setError(null);
                } else {
                    console.error("Request failed with status code:", response.status);
                    setError(response.message);
                    setIsPending(true);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
                setIsPending(true);
            }
        };

        fetchData();
    }, [apiKey, limit, baseUrl, types]);

    return { models, isPending, error };
};

export default useGetModels;

