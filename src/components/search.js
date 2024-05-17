import { useEffect, useState } from "react";


function Search() {

    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);


    function handleChange(e) {
        setSearchQuery(e.target.value);
    }


    async function handleSearch() {

        setSearchResult("");
        setLoading(true);
        const apiUrl = 'https://yashxx07-summarize-articles.hf.space/summarize-v2';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                "url": searchQuery,
                "max_tokens": 10
            })
        };

        try {
            fetch(apiUrl, options)
                .then(response => {

                    setLoading(false);
                    const reader = response.body.getReader();

                    const handleStream = async () => {
                        while (true) {
                            const { done, value } = await reader.read();

                            if (done) {

                                console.log('Streaming complete.');
                                break;
                            }

                            const text = new TextDecoder().decode(value);
                            //console.log(text); // Log the streamed data
                            setSearchResult(prevSummary => prevSummary + text);
                        }
                    };

                    handleStream();
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        try {
            if (searchResult == '{"summary":""}') {
                setSearchResult("Invalid link");
            }
        } catch (ee) {
                console.log(ee)
        }

    }, [searchResult])

    useEffect(() => {
        const timer = setTimeout(() => {

            if (searchQuery.trim()) {
                console.log(searchQuery);
                handleSearch();
                //console.log(searchResult);

            } else {
                setSearchResult([]);
            }

        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery]);


    return (

        <div className="search">
            <input type="search" placeholder="Enter News URL To Summarize.." className="search-bar" onChange={handleChange} value={searchQuery} />
            {searchQuery ? <div className="search-result">
                {loading ? <div className="spinner-border" style={{ marginTop: "45px" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div> : null}

                {searchResult ? <div className="summmm">
                    {searchResult}
                </div> : null}

            </div> : null}
        </div>
    )
}

export default Search;


