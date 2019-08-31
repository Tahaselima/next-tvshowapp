import TvShowList from '../components/TvShowList';
import Layout from '../components/Layout';
import { fetchTvShow } from '../store/actions'
import { connect } from 'react-redux'



class TvShow extends React.Component {
	static async getInitialProps ( {query, reduxStore} ){
		await reduxStore.dispatch(fetchTvShow(query.name));
		return { query }
	}

	render() {
		return (
			<Layout>
				<div>
					<h2 className="title">{this.props.query.name}.. as tv show</h2>  <br/>
					<TvShowList/>
				</div>
			</Layout>
		);
	}
}

export default connect()(TvShow);