const SearchDisplay = (props) => {
    let {searchData,error} = props;
    console.log(searchData);
    if (!error) {
        searchData = searchData.map(movie => (
            <a  href={`https://www.imdb.com/title/${movie.imdbID}/`} key={movie.imdbID} className="col-3  my-3">
                <div className="card h-100 px-3 shadow">
                    <img className="card-img-top " src={movie.Poster} alt="Card image cap" />
                    <div className="card-body">
                        <a className="card-title text-decoration-none" target="_blank">{movie.Title}`</a>
                        <p className="card-text text-decoration-none"><i>{movie.Type}</i></p>
                        <p>{movie.Year}</p>
                    </div>
                </div>
            </a>
        ));
    }

    return (
        <div className="row mt-5">  
            { error ? <h1 className="text-center">{error}</h1> : searchData}
        </div>
    );
}