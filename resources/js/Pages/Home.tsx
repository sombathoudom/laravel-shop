import GuestLayout from '@/Layouts/GuestLayout';
import React, {useState} from 'react'
import { Button } from "@/components/ui/button"
import PoductCardList from '@/components/PoductCardList';

function Home() {
    const [name, setName] = useState('oudom');
    return (
        <GuestLayout >
            <div className="max-w-3xl flex flex-col gap-16">
            <img src="/img_slider.webp" alt="Slider Image" className='w-[768px] object-cover' />
            <PoductCardList/>
            </div>
        </GuestLayout>

    )
}

export default Home
