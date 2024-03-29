import { useEffect, useState } from "react";
import Card from "../components/news-card";

export default function Content({ newsList, setNewsList, topic }) {


    const handleFetch = async () => {

        if (newsList.length != 0)
            return;

        const response = await fetch("https://fastapi-app-h5pz.vercel.app/api/" + topic);
        const data = await response.json();
        console.log(data.news[0]);
        //setContent(data.news);
        setNewsList(data.news);
    }

    useEffect(() => {
        handleFetch();
    }, [topic]);


    return (
        <div>

            {newsList.length == 0 ? (<p>Loading .....</p>) : null}
            {newsList && newsList.map((c) => <Card obj={c} key={newsList.indexOf(c)} />)}
        </div>
    );

}


