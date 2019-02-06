import React, { Component } from 'react';
import Photos from '../components/Photos'

class HumansAndAnimals extends Component {
    render() {

        var photos;
        function importAll(r) {
            photos = r.keys().map(r);
        }

        importAll(require.context('../images/HumansAndAnimals', false, /\.(png|jpe?g|svg)$/));

        return (
            <div className="HumansAndAnimals">
                <Photos photos={photos} from='HumansAndAnimals'></Photos>
            </div>
        );
    }
}

export default HumansAndAnimals;
