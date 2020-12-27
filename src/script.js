class MovieFinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            searchData: [],
            submitInput:'',
            error:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {value} = event.target;
        this.setState({
            searchInput: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const {searchInput,submitInput} = this.state;
        if (searchInput !== submitInput) {
            console.log('ok');
            this.getMovies(searchInput);
        }
        
    }

    getMovies(text) {
        fetch(`https://www.omdbapi.com/?s=${text}&apikey=7379475e`)
            .then(response=> {
                if(!response.ok){
                    response.text().then(text =>{ throw new Error(text)});
                }
                else {
                    return response.json();
                }
            })
                .then((data)=> {
                    if (data.Response === 'False') {
                        throw new Error(data.Error);
                    }

                    else {
                        this.setState({
                            searchData:data.Search,
                            submitInput:text,
                            error:''
                        });
                    }
                })
                    .catch(error => {
                        this.setState({
                            error:error.message,
                            submitInput: text
                        })
                    });
    }

    render() {
        
        return (
            <div className="container">
                <h1 className="text-center">Movie Finder</h1>
                <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <SearchDisplay searchData={this.state.searchData} error={this.state.error}/>
            </div>
        );
       
    }
}

ReactDOM.render(
    <MovieFinder />,
    document.getElementById('root')
);