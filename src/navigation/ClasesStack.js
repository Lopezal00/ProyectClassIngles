import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClasesScreen from "../screens/ClasesScreen";

const Stack = createNativeStackNavigator();


export default function ClasesStack(){
    return(
        <Stack.Navigator 
            screenOptions={{

            }}
        >
            <Stack.Screen
                name= "Home"
                component={ClasesScreen}
                option = {{headerShow: false}}            
            />
        </Stack.Navigator>
    )


}
