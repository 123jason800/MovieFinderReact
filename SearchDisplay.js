var SearchDisplay = function SearchDisplay(props) {
    var searchData = props.searchData,
        error = props.error;

    if (!error) {
        searchData = searchData.map(function (movie) {
            return React.createElement(
                "div",
                { key: movie.imdbID, className: "col-3  my-3" },
                React.createElement(
                    "div",
                    { className: "card h-100 px-3 shadow" },
                    React.createElement("img", { className: "card-img-top ", src: movie.Poster, alt: "Card image cap" }),
                    React.createElement(
                        "div",
                        { className: "card-body" },
                        React.createElement(
                            "h5",
                            { className: "card-title" },
                            movie.Title
                        ),
                        React.createElement(
                            "p",
                            { className: "card-text" },
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