import React from 'react';
import {auth} from "@/auth";

async function Home() {
    const session = await auth()
    console.log(session)
    return (
        <div>
            <h1>HomePage</h1>
        </div>
    );
}

export default Home;
