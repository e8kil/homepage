import React, { Component } from 'react';
import Photos from '../components/Photos'

class Home extends Component {
    render() {

        var photos;
        function importAll(r) {
            photos = r.keys().map(r);
        }

        importAll(require.context('../images/Home', false, /\.(png|jpe?g|svg)$/));

        return (
            <div className="Home">
                <Photos photos={photos} from='Home'></Photos>
            </div>
        );
    }
}

export default Home;
