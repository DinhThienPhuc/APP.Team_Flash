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
        var flashRows = this.props.flashes.map(function (flash, idx) {
            flash.id = idx + 1;
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

var FlashList = React.createClass({
    displayName: 'FlashList',

    getInitialState: function () {
        return { flashes: [] };
    },

    renumber: function (flash) {
        // do something
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
        // $.ajax({
        //     url: '/api/flashes',
        //     type: 'DELETE',
        //     contentType: 'application/json',
        //     data: JSON.stringify(flash),
        //     success: function (result) {
        //         console.log('Success Delete: ', result);
        //     },
        //     error: function (err) {
        //         console.log('Error: ', err);
        //     }
        // });
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