import Counter from '@/components/redux/store/counter'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Redux Counter',
}

export default function Home() {
    return (
        <main>
            <Counter />
        </main>
    )
}