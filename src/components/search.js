import { useEffect, useState } from "react";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";

function Search() {

    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [lines, setLines] = useState(10);

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
                "max_tokens": lines
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
    }, [searchQuery,lines]);


    

    const popoverStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
        width: "70px",
        color: "white",
        backgroundColor: "rgb(87, 87, 87)",
        borderRadius: "5px"
    }

    const popoverClick = (
        <Popover id="popover-trigger-click" title="Popover bottom">
            <div style={popoverStyle}>
                <p style={{ textAlign: "center" }}>{lines} Lines</p>
                <input type="range" orient="vertical" min="2" max="30" onChange={(e) => { setLines(e.target.value) }} value={lines} />

            </div>
        </Popover>
    );


    return (

        <div className="search">
            <span className="search-bar-container">
                <input type="search" placeholder="Enter News URL To Summarize.." className="search-bar" onChange={handleChange} value={searchQuery} />
                <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
                    <button className="search-options"><i className="fa-solid fa-ellipsis-vertical" style={{ color: "#ffffff" }}></i></button>
                </OverlayTrigger>
            </span>
            {searchQuery ?
                <div className="search-result">

                    {searchResult ?
                        <div className="summmm">
                            {searchResult}
                        </div> :
                        <div className="spinner-border" style={{ marginTop: "45px" }} role="status">
                            <span className="sr-only" >Loading...</span>
                        </div>
                    }

                </div> : null}
        </div>
    )
}

export default Search;


