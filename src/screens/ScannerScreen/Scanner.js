import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function Scanner(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () =>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanner = ({type, data}) =>{
        setScanned(true);
        alert(`Bar code with Type ${type} and data ${data} has been scanned`)
    }

    if (hasPermission===null){
        return <Text>Requesting for Camera Permission</Text>
    }

    if (hasPermission===false){
        return <Text>No Access to Camera</Text>
    }

    return(
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title='Tap to Scan Again' onPress={()=>setScanned(false)}/>}
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',

    }
})