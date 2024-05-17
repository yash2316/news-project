import React, { useState,useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import "../App.css";


export default function NewsCard({ obj }) {
    const title = obj.title;
    const sourceUrl = obj.article_url;
    const imgUrl = obj.image_url;
    const date = obj.published_date;
    const source = obj.source;
    const d = new Date(date);
    const formattedDate = d.toISOString().split('T')[0];


    const [summary, setSummary] = useState("");
    const [summaryLoading, setSummaryLoading] = useState(false);
    const [summarySize, setSummarySize] = useState(10);

    
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Set fadeIn to true after the component mounts
        setFadeIn(true);
      }, []);

    async function handleSumm(u) {
        setSummaryLoading(true);
        setSummary("");
        const apiUrl = 'https://yashxx07-summarize-articles.hf.space/summarize-v2';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                "url": u,
                "max_tokens": summarySize
            })
        };

        try {
            fetch(apiUrl, options)
                .then(response => {

                    setSummaryLoading(false);
                    const reader = response.body.getReader();

                    const handleStream = async () => {
                        while (true) {
                            const { done, value } = await reader.read();

                            if (done) {
                                console.log('Streaming complete.');
                                break;
                            }

                            const text = new TextDecoder().decode(value);

                            setSummary(prevSummary => prevSummary + text);
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


    return (


    
            <Card  className={`bg-light text-dark news-card ${fadeIn ? 'fade-in' : ''}`} style={{ width: '100%', boxShadow: "0px 0px 10px rgb(189, 189, 189)", border: "none", borderRadius: "6px", textAlign: "left" }}>
                <Card.Body >
                    <Card.Title >{title}</Card.Title>
                    <Card.Img src={imgUrl} alt='' />

                    <p>Source: <a className='link-secondary' >{source}</a></p>
                    <a href={sourceUrl} className='link-secondary'>Read</a>
                    <p>Published On: {formattedDate}</p>
                    <label className="form-label">Summarize in {summarySize} lines: </label>
                    <input type="range" className="form-range" min="2" max="30" id="customRange2" onChange={(e) => { setSummarySize(e.target.value) }} value={summarySize} ></input>
                    {1 != 1 ? null : <Button variant="dark" onClick={() => handleSumm(sourceUrl)} className="full-width-button">

                        {summaryLoading ? <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> : "Summarize"}


                    </Button>}

                    <Card.Text>
                        {summary}
                    </Card.Text>
                </Card.Body>
            </Card>

      
    );
}


