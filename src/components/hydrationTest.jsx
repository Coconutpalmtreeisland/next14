'use client'
import { useEffect, useState } from 'react'

const HydrationTest = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const a = Math.random();

    console.log(a);
    return (
        <div>{a}</div>
    )
}

export default HydrationTest