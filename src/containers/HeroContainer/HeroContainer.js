// Import modules
import React from 'react';
import StackGrid from 'react-stack-grid';
import _ from 'lodash';

// Import components
import CardHero from '../../components/CardHero/CardHero.js';

// Import style
import Style from './style.js';

// Shuffle an array
const shuffle = array => {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        let x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
    return array;
};

/**
 * @description 
 * 
 * @export
 * @class HeroContainer
 * @extends {React.Component}
 */
export default class HeroContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: []
        };
    }

    render() {
        const heroes = shuffle(this.state.heroes);
        return (
            <StackGrid
                columnWidth={245}
                gutterWidth={10}
                gutterHeight={30}
                style={Style.Hero}
            >
                {heroes.map(hero =>
                    <CardHero key={hero._id} hero={hero} />
                )}
            </StackGrid>
        );
    }

    componentDidUpdate() {
        document.body.scrollTop = 0;
    }

    componentDidMount() {
        const {
            pathname,
            search
        } = this.props.location;
        this.handleUri(pathname, search);
    }

    componentWillReceiveProps(nextProps) {
        const {
            pathname,
            search
        } = nextProps.history.location;
        this.handleUri(pathname, search);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !_.isEqual(this.state.heroes, nextState.heroes);
    }

    handleUri(pathname, search) {
        if (!search) {
            this.loadData();
        } else {
            const query = search.slice(search.indexOf('=') + 1);
            this.loadData(query);
        }
    }

    fetchData(data, query) {
        if (undefined === query) {
            this.setState({
                heroes: data
            });
        } else {
            const newData = data.filter(hero => query === hero.show);
            this.setState({
                heroes: newData
            });
        }
    }

    async loadData(query = undefined) {
        const res = await fetch('/api/heroes');
        const result = await res.json();
        this.fetchData(result.data, query);
    }
}
