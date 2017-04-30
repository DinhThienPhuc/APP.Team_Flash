var FlashFilter = React.createClass({
    displayName: 'FlashFilter',

    render: function () {
        console.log('Render Flash Filter...');
        return React.createElement(
            'div',
            null,
            'A way to filter the list of Flashes would come here.'
        );
    }
});

var FlashRow = React.createClass({
    displayName: 'FlashRow',

    handleClick: function () {
        this.props.deleteFlash(this.props.flash);
    },

    render: function () {
        var style = {
            width: '50px'
        };
        console.log('Render Flash Row...');
        return React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                null,
                this.props.flash.id
            ),
            React.createElement(
                'td',
                null,
                React.createElement('img', { src: this.props.flash.avata, alt: this.props.flash.realName, style: style })
            ),
            React.createElement(
                'td',
                null,
                this.props.flash.flashName
            ),
            React.createElement(
                'td',
                null,
                this.props.flash.realName
            ),
            React.createElement(
                'td',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleClick, type: 'button' },
                    ' Delete '
                )
            )
        );
    }
});

var FlashTable = React.createClass({
    displayName: 'FlashTable',

    render: function () {
        var delFlash = this.props.deleteFlash;
        var flashRows = this.props.flashes.map(function (flash) {
            return React.createElement(FlashRow, { key: flash.id, flash: flash, deleteFlash: delFlash });
        });
        console.log('Render Flash Table...');
        return React.createElement(
            'table',
            null,
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        null,
                        'Id'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Avata'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Flash Name'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Real Name'
                    )
                )
            ),
            React.createElement(
                'tbody',
                null,
                flashRows
            )
        );
    }
});

var FlashAdd = React.createClass({
    displayName: 'FlashAdd',

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
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { name: 'addFlash' },
                React.createElement('input', { type: 'text', name: 'avata', placeholder: 'Url' }),
                React.createElement('input', { type: 'text', name: 'flashName', placeholder: 'Flash Name' }),
                React.createElement('input', { type: 'text', name: 'realName', placeholder: 'Real Name' }),
                React.createElement(
                    'button',
                    { onClick: this.handleSubmit },
                    'Add Flash'
                )
            )
        );
    }
});

var Flashes = [{ id: 1, flashName: 'The Flash', realName: 'Barry Allen', avata: 'https://cdn.bleedingcool.net/wp-content/uploads/2013/09/Screen-Shot-2013-09-09-at-23.01.34.png' }, { id: 2, flashName: 'Reverse Flash', realName: 'Eobard Thawne', avata: 'http://i328.photobucket.com/albums/l325/thebestpoll/The%20Flash%20Characters/Eobard%20Thawne_new_zpslr9ulznl.jpg' }, { id: 3, flashName: 'Zoom', realName: 'Hunter Zolomon', avata: 'http://vignette4.wikia.nocookie.net/arrow/images/d/dc/Hunter_with_a_smug_smile.png/revision/latest?cb=20160528070943' }, { id: 4, flashName: 'Kid Flash', realName: 'Wally West', avata: 'http://static4.businessinsider.com/image/566d9058dd0895da258b4571-3584-2688/keiynan-lonsdale.jpg' }, { id: 5, flashName: 'Jesse Quick', realName: 'Jesse Wells', avata: 'https://moviecomicswhoswho.files.wordpress.com/2015/11/jesse-wells.jpg?w=300&h=283' }, { id: 6, flashName: 'Flash', realName: 'Jay Garrick', avata: 'http://vignette2.wikia.nocookie.net/smallville/images/5/55/JWS-jay-garrick-TheFlash.jpg/revision/latest?cb=20160525120040' }];

var FlashList = React.createClass({
    displayName: 'FlashList',

    getInitialState: function () {
        return { flashes: Flashes };
    },

    addFlash: function (flash) {
        flash.id = this.state.flashes.length + 1;
        var newFlashes = this.state.flashes.slice();
        newFlashes.push(flash);
        this.setState({
            flashes: newFlashes
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

    render: function () {
        console.log('Render Flash List...');
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'The Flash Character'
            ),
            React.createElement(FlashFilter, null),
            React.createElement('hr', null),
            React.createElement(FlashTable, { flashes: this.state.flashes, deleteFlash: this.deleteFlash }),
            React.createElement('hr', null),
            React.createElement(FlashAdd, { addFlash: this.addFlash })
        );
    }
});

ReactDOM.render(React.createElement(FlashList, null), document.getElementById('root'));