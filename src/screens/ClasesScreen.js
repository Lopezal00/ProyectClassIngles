import React, { useState,  useEffect} from 'react';

import { View, Text, Image, Pressable, StyleSheet, TextInput, ScrollViewComponent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import EtiquetaNivel from '../components/EtiquetaNivel';
import NivelChip from '../components/NivelChip';
import { colors, radius, spacing, typograhy} from '../theme';
import { formatearPrecio, CLASES, NIVELES } from '../data/clases';

export default function ClasesScreen ({ navigation }){
    const [nivel, setNivel] = useState()
    const [busqueda, setBusqueda] = useState('')

    return(
        <View>
            <View>
                <Text> Aplicación para clases de ingles </Text>
                <Ionicons name="search" size={18} color={colors.textoSuave}/>
                <TextInput
                    placeholder = "Buscar por nivel"
                    value = {nivel}
                    onChangetext= {setNivel}
                    autoCorrect={false} 
                />
                */ funcion de busquedad, condicional  */
                {
                    busqueda.length > 0 && (
                        <Ionicons
                            name='close-circle'
                            size={18}
                            color={colors.textoSuave}
                            onPress={()=> setBusqueda('')}
                        />
                    )


                }
            </View>
            <ScrollView
                style={{flewGrow: 0}}
                horizontal
            >
                {
                    NIVELES.map((item) => (
                        <NivelChip
                            etiqueta = {item}
                            activo = {item}
                            onPress={() => setNivel(item)}
                        />
                    ))
                }

            </ScrollView>
        </View>
    )

}