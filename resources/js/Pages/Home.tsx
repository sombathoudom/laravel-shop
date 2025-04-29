import GuestLayout from '@/Layouts/GuestLayout';
import React, {useState} from 'react'
import { Button } from "@/components/ui/button"

function Home() {
    const [name, setName] = useState('oudom');
    return (
        <GuestLayout>
            <Button variant="default">Button</Button>

             <div className='text-2xl'>{name}</div>
        </GuestLayout>

    )
}

export default Home
