import React from 'react';
import {
    View,
    AmbientLight,
    asset
} from 'react-360';
import Sphere from 'Sphere';
export default class Model extends React.Component {

    render() {
        return (
            <View>
                <AmbientLight intensity={1} />
                <Sphere
                  radius={1}
                  widthSegments={30}
                  heightSegments={32}
                  lit={true}
                  texture={asset('1.jpg')}
                  style={{ transform: [{ rotateY: -50 }] }}
               />
            </View>
        )
    }
}

