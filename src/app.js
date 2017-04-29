var FlashFilter = React.createClass({
    render: function () {
        return (
            <div>A way to filter the list of Flashes would come here.</div>
        )

    }
});

var FlashRow = React.createClass({
    render: function () {
        var style = {
            width: '50px'
        };

        return (
            <tr>
                <td>{this.props.flash.id}</td>
                <td>
                    <img src={this.props.flash.avata} alt={this.props.flash.realName} style={style} />
                </td>
                <td>{this.props.flash.flashName}</td>
                <td>{this.props.flash.realName}</td>
            </tr>
        )
    }
});

var FlashTable = React.createClass({
    render: function () {
        var flashRows = this.props.flashes.map(function (flash) {
            return <FlashRow key={flash.id} flash={flash} />
        });
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
    render: function () {
        return (
            <div>A form to add a new Flash would come here.</div>
        )
    }
});

var Flashes = [
    { id: 1, flashName: 'The Flash', realName: 'Barry Allen', avata: 'https://cdn.bleedingcool.net/wp-content/uploads/2013/09/Screen-Shot-2013-09-09-at-23.01.34.png' },
    { id: 2, flashName: 'Reverse Flash', realName: 'Eobard Thawne', avata: 'http://i328.photobucket.com/albums/l325/thebestpoll/The%20Flash%20Characters/Eobard%20Thawne_new_zpslr9ulznl.jpg' },
    { id: 3, flashName: 'Zoom', realName: 'Hunter Zolomon', avata: 'http://vignette4.wikia.nocookie.net/arrow/images/d/dc/Hunter_with_a_smug_smile.png/revision/latest?cb=20160528070943' },
    { id: 4, flashName: 'Kid Flash', realName: 'Wally West', avata: 'http://static4.businessinsider.com/image/566d9058dd0895da258b4571-3584-2688/keiynan-lonsdale.jpg' },
    { id: 5, flashName: 'Jesse Quick', realName: 'Jesse Wells', avata: 'https://moviecomicswhoswho.files.wordpress.com/2015/11/jesse-wells.jpg?w=300&h=283' },
    { id: 6, flashName: 'Flash', realName: 'Jay Garrick', avata: 'http://vignette2.wikia.nocookie.net/smallville/images/5/55/JWS-jay-garrick-TheFlash.jpg/revision/latest?cb=20160525120040' }
];

var FlashList = React.createClass({
    getInitialState: function () {
        return { flashes: Flashes }
    },

    render: function () {
        return (
            <div>
                <h1>The Flash Character</h1>
                <FlashFilter />
                <hr />
                <FlashTable flashes={this.state.flashes} />
                <hr />
                <FlashAdd />
            </div>
        )
    }
});

ReactDOM.render(
    <FlashList />,
    document.getElementById('root')
);