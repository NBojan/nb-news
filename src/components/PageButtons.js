import { useGlobalContext } from "../context";

const PageButtons = () => {
    const {loading, nbPages, page, handlePage} = useGlobalContext();
    
    return (  
        <div className="page-buttons d-flex justify-center align-center mTB-32">
            <button disabled={loading} className="btn btn-prim" onClick={() => handlePage("dec")}>Prev</button>
            <p className="mLR-12 fw-600 fontC">{page + 1} of {nbPages}</p>
            <button disabled={loading} className="btn btn-prim" onClick={() => handlePage("inc")}>Next</button>
        </div>
    );
}
 
export default PageButtons;