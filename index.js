import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image ,
  AmbientLight,
  Text,
  asset ,
  Environment ,
  VrButton ,
  View,
} from 'react-360';
import Sphere from 'Sphere';
import Model from './Model' ;

class Images extends React.Component {
  
 
  render() {
    return (
      <View>
          <Text >
               Hello360
          </Text>
       </View>
    );
  }
};


class Image1 extends React.Component {
    img1(){
      Environment.setBackgroundImage(asset('1.jpg'))
    }
  render() {
      return (
        <View>
          <VrButton onClick={()=>this.img1()}>
          <AmbientLight intensity={0} />
            <Sphere
              radius={1}
              widthSegments={10}
              heightSegments={22}
              lit={true}
              texture={asset('mca.png')}
              style={{ transform: [{ rotateY: -50 }] }}
            />
            </VrButton>
        </View>
      )
  }
}

class Image2 extends React.Component {
  img2(){
    Environment.setBackgroundImage(asset('2.jpg'))
  }
  render(){
    return(
     <View>
       <VrButton onClick={()=>this.img2()}>
        <AmbientLight intensity={0.1} />
        <Sphere 
         radius={1} 
         widthsegment={30}
         heightSegments={32}
         lit={true}
         texture={asset('2.jpg')}
         style={{ transform: [{ rotateY : -50}]}} 
        />
        </VrButton>
     </View>
   
 

    )
  }
}

class Image3 extends React.Component{
  img3(){
    Environment.setBackgroundImage(asset('3.jpg'))
  }
  render(){
    return(
      <View>
        <VrButton onClick={()=>this.img3()}>
          <AmbientLight intensity={0.7}/>
          <Sphere
            radius={1}
            widthsegment={30}
            heightSegments={32}
            lit={true}
            texture={asset('3.jpg')}
            style={{ transform: [{rotateY : -50}]}}

          />
        </VrButton>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'space-between',
    flexDirection:'row' ,
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});


AppRegistry.registerComponent('image', () => Images);
AppRegistry.registerComponent('image1', () => Image1);
AppRegistry.registerComponent('image2', () => Image2);
AppRegistry.registerComponent('image3',() => Image3) ;