import { useGlobalContext } from "../context";

const Stories = () => {
    const {hits, loading, err, hadleDelete} = useGlobalContext();

    return (  
        <>
            {loading ? <div className="loading"></div> 
            :
            hits.length > 0 ?
                    <section className="stories d-flex space-between flex-wrap">
                        {hits.map(item => {
                            const {objectID, author, title, url, points, num_comments} = item;
                            return (
                                <div className="story" key={objectID}>
                                    <h4 className="titleC mb-8">{title}</h4>
                                    <p>{points} points by {author} | {num_comments} comments</p>
                                    <div className="links">
                                        <a href={url}>Read More</a>
                                        <button className="btn" onClick={() => hadleDelete(objectID)}>Remove</button>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                : 
                    <h4 className="ta-center titleC">Nothing new about that unfortunately. Try something else.</h4>
            }

            {err && <div className="ta-center">{err}</div>}
        </>
    );
}
 
export default Stories;