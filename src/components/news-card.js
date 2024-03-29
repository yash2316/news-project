import axios from 'axios';
import cheerio from 'cheerio';
import { useState } from 'react';


export default function Card({ title, imgUrl, siteUrl }) {

    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

    const [summary, setSummary] = useState("");

    async function handleSumm(u) {

        const url = 'https://news-article-data-extract-and-summarization1.p.rapidapi.com/extract/';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '7bbb7cd865mshd68e00cace314fep11d10ejsnd6d281102968',
                'X-RapidAPI-Host': 'news-article-data-extract-and-summarization1.p.rapidapi.com'
            },
            body: {
                url: u + ""
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }

    }


    const url = "https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg";

    const img = {
        backgroundImage: `url('${imgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "500px",
        border: "1px solid black",
        margin: "10px"
    }

    return (

        <div style={img}>

            <a href={siteUrl}><h1>{title}</h1></a>
            <button onClick={() => { handleSumm(siteUrl) }}>Summarize</button>
            <p>{summary}</p>

        </div>

    );
}


