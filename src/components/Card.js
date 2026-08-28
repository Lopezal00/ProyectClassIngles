import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import EtiquetaNivel from '../EtiquetaNivel';
import {colors,radius, spacing, typograhy} from '../theme';
import { formatearPrecio } from '../data/clases';

export default function Card({clase, onPress}){
    return(
        <Pressable
            onPress={onPress}
            >
                <image source={{uri: clase.image}}/>
                <View>
                    <EtiquetaNivel nivel={clase.nivel}/>
                    
                </View>
                <Image source={{ uri: clase.imagen }} style={styles.imagen} />
                <View></View>
                
                
                --nombre profesor
                --horario
                --precio

            </Pressable>
    )
}

