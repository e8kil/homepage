import React, { Component } from 'react';
import Photos from '../components/Photos'

class Nature extends Component {
    render() {

        var photos;
        function importAll(r) {
            photos = r.keys().map(r);
        }

        importAll(require.context('../images/Nature', false, /\.(png|jpe?g|svg)$/));

        return (
            <div className="Nature">
                <Photos photos={photos} from='Nature'></Photos>
            </div>
        );
    }
}

export default Nature;
