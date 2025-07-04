    // async function submitSearch(dataInput) {
    //     try {
    //         const response = await fetch(`/api/data/search`,
    //             dataInput, {
    //                 withCredentials: true,
    //             }
    //         );
    //         console.log("Response:", response);
    //         console.log("Submitting: ", dataInput);

    //         if (response.status === 201) {          
    //             console.log("Submitting search");
    //             return "Success"
    //         } else {
    //             return ("Search failed. Please try again");
    //         }
    //     } catch (error) {
    //         return ("An error occurred. Please try again", error);
    //     }
    // };

    // export { submitSearch };




        async function submitSearch(dataInput) {
        
        try{
            const response = await fetch(`/api/data/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dataInput)
            });

            console.log("Response: ", response);
            console.log("Submitting: ", dataInput);
                
            if (response.ok) {      
                const result = await response.json();  
                return result;
            } else {
                return ("Search failed. Please try again", response.status);
            }
        } catch (error) {
            return ("An error occurred. Please try again", error);
        }
    };

  
  export { submitSearch };








