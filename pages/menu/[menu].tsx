import { useRouter } from 'next/router'

const Menu = () => {

	const router = useRouter();
	const { menu } = router.query;

	return (
		<div>
			page:{menu}
		</div>
	)
}

export default Menu;