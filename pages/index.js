import Layout from '../components/Layout';
import Link from 'next/link';
import Router from 'next/router';
import { Search } from 'react-feather';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      };
    }
  
    render() {
      return (
        <Layout>
            <div className="input-group mb-3 home-search">
                <input 
                    placeholder="type to search"
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={evt => this.updateInputValue(evt)}
                    onKeyPress={(event) => event.key === 'Enter' ? Router.push(`/tvshow?name=${this.state.inputValue}`) : null}
                />
                <div className="input-group-append">
                    <Link href={`/tvshow?name=${this.state.inputValue}`} as={`/${this.state.inputValue}`}>
                        <button 
                            className="btn btn-lg btn-outline-info pb-1" 
                            type="button" 
                            onMouseEnter={() => {Router.prefetch(`/tvshow?name=${this.state.inputValue}`);}}
                        ><Search/>
                        </button>
                    </Link>
                </div>
            </div>
	    </Layout>
      );
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
    }

};

export default Home;