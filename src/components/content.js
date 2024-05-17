import { useEffect, useState } from "react";
import "../styles/loading-screens.css";
import NewsCard from "./news-card";
import { Skeleton } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Masonry from 'react-masonry-css';
import "../styles/loading-screens.css";

import { supabase } from "../supabase-config";



export default function Content({ newsList, setNewsList, topic }) {


    async function handleFetch() {

        try {
            const { data, error } = await supabase.from('news')
                .select()
                .like('category', `%${topic}%`)
                .order('published_date', { ascending: false }).limit(15);
            setNewsList(data);
            //console.log(data, error);

        } catch (e) {
            console.log(e);
        }


    }

    async function handleLoadMoreNews() {



        try {
            const { data, error } = await supabase.from('news')
                .select()
                .like('category', `%${topic}%`)
                .order('published_date', { ascending: false }).range(newsList.length, newsList.length + 10);


            const newData = [...newsList, ...data];
            setNewsList(newData);
            //console.log(data, error);

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        handleFetch();

    }, [topic[0]]);


    const breakpointColumnsObj = {
        default: 3,
        1300: 2,
        900: 1,
    };


    return (
        <div className="p-2" style={{ width: "100%" }}>

            {newsList.length !== 0 ? null : <SkeletonLoading />}

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {newsList && newsList.map((c) => <NewsCard obj={c} key={c.id} />)}


            </Masonry>


            <button className="btn btn-grey" onClick={() => { handleLoadMoreNews() }} >Load More</button>

        </div>
    );

}



function SkeletonLoading() {

    const breakpointColumnsObj = {
        default: 3,
        1300: 2,
        900: 1,
    };


    return (

        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">

            {Array.from({ length: 15 }, (_, index) => (
                <SkeletonCard key={index} />
            ))}
        </Masonry>

    );
}

function SkeletonCard() {

    return (
        <div className="loading-card">
            <Skeleton
                sx={{ bgcolor: 'rgb(196, 196, 196)' }}
                variant="rounded"
                animation={"pulse"}
                height={80}
            />

            <Skeleton
                sx={{ bgcolor: 'rgb(196, 196, 196)' }}
                variant="rounded"
                animation={"pulse"}
                height={500}
            />
            <Skeleton
                sx={{ bgcolor: 'rgb(196, 196, 196)' }}
                variant="rounded"
                animation={"pulse"}
                height={30}
                width={150}
            />
            <Skeleton
                sx={{ bgcolor: 'rgb(196, 196, 196)' }}
                variant="rounded"
                animation={"pulse"}
                height={30}
                width={200}
            />
        </div>
    )

}


