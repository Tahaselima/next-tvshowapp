import Link from 'next/link';
import { useSelector } from 'react-redux';
import TvShowNode from './TvShowNode';
import { toSeoUrl } from '../utils/seourl'


export default () => {
    const tvShows = useSelector(state => state.tvShows)
    return (
        <div className="container-fluid">
        <div className="row justify-content-around">
            {
                !tvShows.length ? <div className="alert alert-danger text-center" role="alert"> excuse me not found :'(</div> : 
                tvShows.map((eposide,index) => (
                    <Link href={`/tvshowdetail?id=${eposide.show.id}`} as={`/${toSeoUrl(eposide.show.name)}`}>
                        <div key={index} className="col-lg-3 col-md-6 col-12 pr-md-5 mb-4 cursor-p">
                            <TvShowNode eposide={eposide} />
                        </div>
                    </Link>
                    ))
            }
        </div>
    </div>
    )
}