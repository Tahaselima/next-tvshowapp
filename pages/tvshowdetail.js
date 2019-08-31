import Layout from '../components/Layout';
import { connect } from 'react-redux'
import TvShowNode from '../components/TvShowNode';



class TvShowDetail extends React.Component {
	static async getInitialProps ( {query} ){
		return { query }
	}

	render() {
		return (
			<Layout>
				<div className="container-fluid">
                    <div className="row justify-content-around">
                        <div className="col-md-6 col-12">
                            <TvShowNode eposide={this.props.query.id}/>
                        </div>
                    </div>
				</div>
			</Layout>
		);
	}
}

export default connect()(TvShowDetail);