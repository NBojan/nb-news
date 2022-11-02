import { useGlobalContext } from "../context";

const SearchForm = () => {
    const { term, handleSearch } = useGlobalContext();

    return (  
        <section className="search">
            <form onSubmit={e => e.preventDefault()}>
                <h2 className="mb-20 capitalize titleC">Search hacker news</h2>
                <input type="text" value={term} onChange={e => handleSearch(e.target.value)}/>
            </form>
        </section>
    );
}
 
export default SearchForm;