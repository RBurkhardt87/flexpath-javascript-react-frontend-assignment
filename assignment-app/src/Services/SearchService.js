    async function submitSearch(dataInput) {
        try {
            const response = await fetch(`/api/data/search`,
                dataInput, {
                    withCredentials: true,
                }
            );
            console.log("Response:", response);
            console.log("Submitting: ", dataInput);

            if (response.status === 201) {          
                console.log("Submitting search");
                return "Success"
            } else {
                return ("Search failed. Please try again");
            }
        } catch (error) {
            return ("An error occurred. Please try again", error);
        }
    };

    export { submitSearch };