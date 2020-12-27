var SearchBar = function SearchBar(props) {
    var handleChange = props.handleChange,
        searchInput = props.searchInput,
        handleSubmit = props.handleSubmit;


    return React.createElement(
        "form",
        { onSubmit: handleSubmit, className: "d-flex w-50 mx-auto mt-3" },
        React.createElement("input", { className: "form-control  me-2", type: "text", onChange: handleChange, value: searchInput, required: true }),
        React.createElement("input", { className: "btn btn-primary", type: "submit", value: "search" })
    );
};