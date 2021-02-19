import UpdateProduct from '../components/UpdateProduct'
import Page from '../components/Page'
import { useRouter } from 'next/router'

export default function UpdatePage() {
    const router = useRouter()
    const query = router.query
    console.log(query)

    return (
        <div>
            <UpdateProduct id={query.id} />
        </div>
    )
}
