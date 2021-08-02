import { useRouter } from 'next/router'
import { Top } from '../../src/components/Top';
import { Footer } from '../../src/components/Footer';

const Menu = () => {

	const router = useRouter();
	const { menu } = router.query;

	return (
		<div>
			<Top/>
			page:{menu}
			<Footer/>
		</div>
	)
}

export default Menu;