var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieFinder = function (_React$Component) {
    _inherits(MovieFinder, _React$Component);

    function MovieFinder(props) {
        _classCallCheck(this, MovieFinder);

        var _this = _possibleConstructorReturn(this, (MovieFinder.__proto__ || Object.getPrototypeOf(MovieFinder)).call(this, props));

        _this.state = {
            searchInput: '',
            searchData: [],
            submitInput: '',
            error: ''
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(MovieFinder, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var value = event.target.value;

            this.setState({
                searchInput: value
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var _state = this.state,
                searchInput = _state.searchInput,
                submitInput = _state.submitInput;

            if (searchInput !== submitInput) {
                this.getMovies(searchInput);
            }
        }
    }, {
        key: 'getMovies',
        value: function getMovies(text) {
            var _this2 = this;

            fetch('https://www.omdbapi.com/?s=' + text + '&apikey=7379475e').then(function (response) {
                if (!response.ok) {
                    response.text().then(function (text) {
                        throw new Error(text);
                    });
                } else {
                    return response.json();
                }
            }).then(function (data) {
                if (data.Response === 'False') {
                    throw new Error(data.Error);
                } else {
                    _this2.setState({
                        searchData: data.Search,
                        submitInput: text,
                        error: ''
                    });
                }
            }).catch(function (error) {
                _this2.setState({
                    error: error.message,
                    submitInput: text
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'h1',
                    { className: 'text-center' },
                    'Movie Finder'
                ),
                React.createElement(SearchBar, { searchInput: this.state.searchInput, handleChange: this.handleChange, handleSubmit: this.handleSubmit }),
                React.createElement(SearchDisplay, { searchData: this.state.searchData, error: this.state.error })
            );
        }
    }]);

    return MovieFinder;
}(React.Component);

ReactDOM.render(React.createElement(MovieFinder, null), document.getElementById('root'));