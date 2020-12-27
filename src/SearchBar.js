const SearchBar = (props) => {
    const {handleChange,searchInput,handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit} className="d-flex w-50 mx-auto mt-3">
            <input className="form-control  me-2" type="text" onChange={handleChange} value={searchInput}  required/>
            <input className="btn btn-primary" type="submit" value="search"/> 
        </form>
    );
}