import GuestLayout from '@/Layouts/GuestLayout';
import PoductCardList from '@/components/PoductCardList';
function Home() {
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
