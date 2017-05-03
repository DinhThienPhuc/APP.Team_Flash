var FlashFilter = React.createClass({
    render: function () {
        console.log('Render Flash Filter...');
        return (
            <div>A way to filter the list of Flashes would come here.</div>
        )
    }
});

var FlashRow = React.createClass({
    handleClick: function () {
        this.props.deleteFlash(this.props.flash);
    },

    render: function () {
        var style = {
            width: '50px'
        };
        console.log('Render Flash Row...');
        return (
            <tr>
                <td>{this.props.flash.id}</td>
                <td>
                    <img src={this.props.flash.avata} alt={this.props.flash.realName} style={style} />
                </td>
                <td>{this.props.flash.flashName}</td>
                <td>{this.props.flash.realName}</td>
                <td>
                    <button onClick={this.handleClick} type='button' > Delete </button>
                </td>
            </tr>
        )
    }
});

var FlashTable = React.createClass({
    render: function () {
        var delFlash = this.props.deleteFlash;
        var flashRows = this.props.flashes.map(function (flash) {
            return <FlashRow key={flash.id} flash={flash} deleteFlash={delFlash} />
        });
        console.log('Render Flash Table...');
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Avata</th>
                        <th>Flash Name</th>
                        <th>Real Name</th>
                    </tr>
                </thead>
                <tbody>
                    {flashRows}
                </tbody>
            </table>
        )
    }
});

var FlashAdd = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var form = document.forms.addFlash;
        this.props.addFlash({ avata: form.avata.value, flashName: form.flashName.value, realName: form.realName.value });
        form.avata.value = '';
        form.flashName.value = '';
        form.realName.value = '';
    },

    render: function () {
        console.log('Render Flash Add...');
        return (
            <div>
                <form name="addFlash">
                    <input type="text" name="avata" placeholder="Url" />
                    <input type="text" name="flashName" placeholder="Flash Name" />
                    <input type="text" name="realName" placeholder="Real Name" />
                    <button onClick={this.handleSubmit}>Add Flash</button>
                </form>
            </div>
        )
    }
});

var FlashList = React.createClass({
    getInitialState: function () {
        return { flashes: [] }
    },

    addFlash: function (flash) {
        $.ajax({
            url: '/api/flashes',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(flash),
            success: function (data) {
                var newFlashes = this.state.flashes.concat(data);
                this.setState({
                    flashes: newFlashes
                });
            }.bind(this),
            error: function (err) {
                console.log('Error: ', err);
            }
        });
    },

    deleteFlash: function (flash) {
        var newFlashes = this.state.flashes.slice();
        var idxFlash = newFlashes.indexOf(flash);
        if (-1 != idxFlash) {
            newFlashes.splice(idxFlash, 1);
            this.setState({
                flashes: newFlashes
            });
        }
    },

    componentDidMount: function () {
        $.ajax('/api/flashes').done(function (result) {
            this.setState({ flashes: result.data });
        }.bind(this));
    },

    render: function () {
        console.log('Render Flash List...');
        return (
            <div>
                <h1>The Flash Character</h1>
                <FlashFilter />
                <hr />
                <FlashTable flashes={this.state.flashes} deleteFlash={this.deleteFlash} />
                <hr />
                <FlashAdd addFlash={this.addFlash} />
            </div>
        )
    }
});

ReactDOM.render(
    <FlashList />,
    document.getElementById('root')
);