import GuestLayout from '@/Layouts/GuestLayout';
import PoductCardList from '@/components/PoductCardList';

export interface Category {
    id: number;
    name: string;
    slug: string;
    products: Products[]
}
export interface Products {
    id: number;
    name: string;
    slug: string;
    qty: number;
    description: string;
    price: number;
    image: string;
}
function Home({ data }: { data: Category[] }) {

    return (
        <GuestLayout >
            <div className="max-w-3xl flex flex-col gap-16">
                <img src="/img_slider.webp" alt="Slider Image" className='w-[768px] object-cover' />
                {data.map((category) => (
                    <div key={category.id} className='flex flex-col gap-8'>
                        <h2 className='text-4xl font-bold text-center uppercase'>{category.name}</h2>
                        <PoductCardList products={category.products} />
                    </div>
                ))}
            </div>
        </GuestLayout>

    )
}

export default Home
