import { useEffect, useState } from "react"
import { supabase } from "../supabase-config";

export default function UserProfile({ userEmail, setOpenUserProfile, setUserEmail }) {


    const [subsData, setSubsData] = useState([]);
    const [temp, setTemp] = useState(2);

    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        // Set fadeIn to true after the component mounts
        setFadeIn(true);
    }, []);

    useEffect(() => {
        getMySubscriptions();
        //console.log(subsList);
    }, [temp]);

    async function getMySubscriptions() {

        try {

            const { data, error } = await supabase.from('subs')
                .select()
                .eq('email', userEmail);

            setSubsData(data);
            //console.log(data);

            if (error) {
                console.log(error);
            }


        } catch (e) {
            console.log(e);
        }

    }

    async function handleDeleteSubscription() {

        const { error } = await supabase
            .from('subs')
            .delete()
            .eq('email', userEmail);

        if (!error) {
            setSubsData([])
        }

        console.log(error);

    }



    return (

        <div className={`modal-view  ${ fadeIn ? 'fade-in' : ''}`}>
            <div className="user-profile-modal">
                <h1>Profile</h1>
                <button className='btn-close' onClick={() => { setOpenUserProfile(false); setFadeIn(false) }}></button>
                <p>Your Email: {userEmail}</p>
                {subsData.length == 0 ?
                    <div>No subscriptions</div> :
                    <div className="container d-flex justify-content-evenly align-items-center border border-top-0">
                        <div>Time : {subsData[0].time.toUpperCase()}:00</div>
                        <div>Categories: {subsData[0].category.map((c) => <span>{c} </span>)}</div>
                        <button onClick={handleDeleteSubscription} className="btn btn-danger" >Cancel Subscription</button>
                    </div>}

            </div>
        </div>
    )
}