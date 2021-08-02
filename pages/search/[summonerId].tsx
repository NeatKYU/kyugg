import { useRouter } from 'next/router'
import { Top } from '../../src/components/Top';
import { Footer } from '../../src/components/Footer';

const SummonerId = () => {

	const router = useRouter();
	const { summonerId } = router.query;

	return (
		<div>
			<Top/>
			page:{summonerId}
			<Footer/>
		</div>
	)
}

export default SummonerId;