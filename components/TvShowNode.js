import TextEllipsis from 'react-text-ellipsis';
const regex = /(<([^>]+)>)/ig;
import { useSelector } from 'react-redux';
import { runtime } from '../utils/runtimeconverter'

export default (props) => {
    const tvShows = useSelector(state => state.tvShows);
    const oneNode = typeof props.eposide === 'string' !== false;
    const tvDetail = oneNode ? tvShows.find(item => item.show.id === parseInt(props.eposide)) : props.eposide;
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                     <img src={tvDetail.show.image 
                        ? oneNode
                            ? tvDetail.show.image.original 
                            :  tvDetail.show.image.medium
                        : '/static/no-image.png' } 
                        className="card-img" 
                        alt={tvDetail.show.name}
                     />
                </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{tvDetail.show.name}</h5>
                                <TextEllipsis
                                    lines={oneNode ? 10 : 2} 
                                    tag={'p'} 
                                    ellipsisChars={'...'} 
                                    tagClass={'card-text'} 
                                    debounceTimeoutOnResize={200} 
                                    useJsOnly={true} >
                                    { tvDetail.show.summary 
                                        ? tvDetail.show.summary.replace(regex, '') 
                                        : ''}
                                </TextEllipsis>
                                <p className="card-text">
                                    <small className="text-muted">Rate avarage:&nbsp;
                                    { tvDetail.show.rating.average 
                                        ? parseFloat(tvDetail.show.rating.average).toFixed(1)
                                        : 'not rated'}
                                    </small>
                                </p>
                                <p className="card-text">{tvDetail.show.genres.map((genres,index) => (
                                    <small key={index} className="text-muted">
                                        {genres}{ tvDetail.show.genres.length - 1 !== index ? ', ' : '' }
                                    </small>))}
                                </p>
                                {
                                    oneNode ? 
                                    <div>
                                        <p className="card-text">
                                            <small className="text-muted">Premier Date:&nbsp;
                                            { tvDetail.show.premiered }
                                            </small>
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">Runtime:&nbsp;
                                            { runtime(parseInt(tvDetail.show.runtime)) }
                                            </small>
                                        </p>
                                    </div>
                                    : ''
                                }
                        </div>
                    </div>
            </div>
        </div>
    );
}

