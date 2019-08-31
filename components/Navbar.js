import Link from 'next/link';
import { Info } from 'react-feather';

const Navbar = () => (
	<div className="custom-navbar">       
		<Link href="/"><img src="/static/logo.png" /></Link>
        <Link href="/about"><a><Info/></a></Link>
	</div>
);

export default Navbar;