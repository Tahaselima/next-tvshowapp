import TextEllipsis from 'react-text-ellipsis';
const regex = /(<([^>]+)>)/ig;
import { useSelector } from 'react-redux';


export default () => {
    const tvShows = useSelector(state => state.tvShows)
    return (
        <div className="container-fluid">
        <div className="row justify-content-around">
            {
                !tvShows.length ? <div className="alert alert-danger text-center" role="alert"> excuse me not found :'(</div> : 
                tvShows.map((eposide,index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-12 pr-md-5 mb-4">
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={eposide.show.image ? eposide.show.image.medium : '/static/no-image.png' } className="card-img" alt={eposide.show.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{eposide.show.name}</h5>
                                        <TextEllipsis
                                            lines={2} 
                                            tag={'p'} 
                                            ellipsisChars={'...'} 
                                            tagClass={'card-text'} 
                                            debounceTimeoutOnResize={200} 
                                            useJsOnly={true} >
                                            { eposide.show.summary 
                                                ? eposide.show.summary.replace(regex, '') 
                                                : ''}
                                        </TextEllipsis>
                                        <p className="card-text"><small className="text-muted">Rate avarage:&nbsp;
                                            { eposide.show.rating.average 
                                                ? parseFloat(eposide.show.rating.average).toFixed(1)
                                                : 'not rated'}</small></p>
                                        <p className="card-text">{eposide.show.genres.map((genres,index) => (
                                            <small key={index} className="text-muted">
                                                {genres}{ eposide.show.genres.length - 1 !== index ? ', ' : '' }
                                            </small>
                                        ))}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
  }