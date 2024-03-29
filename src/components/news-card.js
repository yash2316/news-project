import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Card({obj}) {

    const title = obj.title;
    const sourceUrl = obj.url;
    const imgUrl = obj.urlToImage;
    const date = obj.publishedAt;
    const source = obj.source.name;
    const author = obj.author;

    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

    const [summary, setSummary] = useState([]);
   
    async function handleSumm(u) {

        const options = {
            method: 'POST',
            url: 'https://news-article-data-extract-and-summarization1.p.rapidapi.com/extract/',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '7bbb7cd865mshd68e00cace314fep11d10ejsnd6d281102968',
              'X-RapidAPI-Host': 'news-article-data-extract-and-summarization1.p.rapidapi.com'
            },
            data: {
              url: u
            }
          };
          
          try {
              const response = await axios.request(options);
              const result = await response.data.summary;
              setSummary(result);
              
          } catch (error) {
              console.error(error);
          }

    }


    const url = "https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg";

    const css = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "500px",
        border: "1px solid black",
        margin: "10px"
    }

    return (

        <div style={css}>
            
            <p>Author : {author}</p>
            <p>Source: {source}</p>
            <a href={sourceUrl}><h1>{title}</h1></a>
            <img src={imgUrl} style={{width:"450px"}}/>
            <button onClick={() => { handleSumm(sourceUrl) }}>Summarize</button>
            <p>{summary}</p>
            <p>Published at : {date}</p>
        </div>

    );
}


// {
//     "publishedAt": "2024-03-28T17:03:00Z",
//         "author": "Pathikrit Chakraborty",
//             "urlToImage": "https://static.toiimg.com/thumb/msid-108858783,width-1070,height-580,imgsize-74418,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//                 "description": "India News: LUCKNOW: Jailed mafia gangster Mukhtar Ansari, 63, died due to cardiac attack during treatment at Banda medical college on Thursday night.",
//                     "source": {
//         "name": "The Times of India",
//             "id": "the-times-of-india"
//     },
//     "title": "Jailed gangster Mukhtar Ansari passes away due to cardiac arrest | India News - The Times of India",
//         "url": "https://timesofindia.indiatimes.com/india/jailed-gangster-mukhtar-ansari-passes-away/articleshow/108858786.cms",
//             "content": null
// }