import { useRouter } from 'next/router';
import UpdateProduct from '../components/UpdateProduct';
import Page from '../components/Page';

export default function UpdatePage() {
  const router = useRouter();
  const { query } = router;
  console.log(query);

  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
