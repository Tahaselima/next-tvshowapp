import Head from 'next/head';
import Navbar from './Navbar';
import '../styles/index.scss'
import '../styles/nprogress.scss'

const Layout = props => (
	<div>
		<Head>
			<title>Tv Show App</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css" />
		</Head>
		<Navbar/>
		{ props.children }
	</div>
);

export default Layout;