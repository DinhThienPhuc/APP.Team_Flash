var FlashFilter = React.createClass({
    render: function () {
        console.log('Render Flash Filter...');
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
        console.log('Render Flash Row...');
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
    render: function () {
        console.log('Render Flash Add...');
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

    test: function () {
        var currentId = this.state.flashes.length + 1;
        this.addFlash({ id: currentId, avata: 'http://img08.deviantart.net/1995/i/2016/353/f/5/theflash__savitar_by_darklitria-das66a0.png', flashName: 'Savitar', realName: 'Unknown' });
    },

    addFlash: function (flash) {
        var newFlashes = this.state.flashes.slice();
        newFlashes.push(flash);
        this.setState({
            flashes: newFlashes
        });
    },

    render: function () {
        console.log('Render Flash List...');
        return (
            <div>
                <h1>The Flash Character</h1>
                <FlashFilter />
                <hr />
                <FlashTable flashes={this.state.flashes} />
                <button onClick={this.test}>Add FLash</button>
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