import React, { Component } from 'react';
import Photos from '../components/Photos'

class Macro extends Component {
    render() {

        var photos;
        function importAll(r) {
            console.log(r.keys().map(r));
            photos = r.keys().map(r);
            console.log(photos);
        }

        importAll(require.context('../images/Macro', false, /\.(png|jpe?g|svg)$/));

        return (
            <div className="Macro">
                <Photos photos={photos} from='Macro'></Photos>
            </div>
        );
    }
}

export default Macro;
