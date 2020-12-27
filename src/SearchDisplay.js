const SearchDisplay = (props) => {
    let {searchData,error} = props;
    if (!error) {
        searchData = searchData.map(movie => (
            <div key={movie.imdbID} className="col-3  my-3">
                <div className="card h-100 px-3 shadow">
                    <img className="card-img-top " src={movie.Poster} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text"><i>{movie.Type}</i></p>
                        <p>{movie.Year}</p>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className="row mt-5">  
            { error ? <h1 className="text-center">{error}</h1> : searchData}
        </div>
    );
}