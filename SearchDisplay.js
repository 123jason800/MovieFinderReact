var SearchDisplay = function SearchDisplay(props) {
    var searchData = props.searchData,
        error = props.error;

    console.log(searchData);
    if (!error) {
        searchData = searchData.map(function (movie) {
            return React.createElement(
                "a",
                { href: "https://www.imdb.com/title/" + movie.imdbID + "/", key: movie.imdbID, className: "col-3  my-3" },
                React.createElement(
                    "div",
                    { className: "card h-100 px-3 shadow" },
                    React.createElement("img", { className: "card-img-top ", src: movie.Poster, alt: "Card image cap" }),
                    React.createElement(
                        "div",
                        { className: "card-body" },
                        React.createElement(
                            "a",
                            { className: "card-title text-decoration-none", target: "_blank" },
                            movie.Title,
                            "`"
                        ),
                        React.createElement(
                            "p",
                            { className: "card-text text-decoration-none" },
                            React.createElement(
                                "i",
                                null,
                                movie.Type
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            movie.Year
                        )
                    )
                )
            );
        });
    }

    return React.createElement(
        "div",
        { className: "row mt-5" },
        error ? React.createElement(
            "h1",
            { className: "text-center" },
            error
        ) : searchData
    );
};