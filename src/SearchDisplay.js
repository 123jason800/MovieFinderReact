const SearchDisplay = (props) => {
    let {searchData,error} = props;
    console.log(searchData);
    if (!error) {
        searchData = searchData.map(movie => (
            <a  href={`https://www.imdb.com/title/${movie.imdbID}/`} key={movie.imdbID} className="col-3  my-3">
                <div className="card h-100 px-3 shadow">
                    <img className="card-img-top " src={movie.Poster} alt="Card image cap" />
                    <div className="card-body text-center">
                        <p className="card-title " target="_blank">{movie.Title}`</p>
                        <p className="card-text"><i>{movie.Type}</i></p>
                        <p className="card-date">{movie.Year}</p>
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