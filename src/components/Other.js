import React, { Component } from 'react';
import Photos from '../components/Photos'

class Other extends Component {
    render() {

        var photos;
        function importAll(r) {
            photos = r.keys().map(r);
        }

        importAll(require.context('../images/Other', false, /\.(png|jpe?g|svg)$/));

        return (
            <div className="Other">
                <Photos photos={photos} from='Other'></Photos>
            </div>
        );
    }
}

export default Other;
