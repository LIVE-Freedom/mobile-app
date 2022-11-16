import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import io from "socket.io-client";


export default function Scanner(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const [hasConnection, setConnection] = useState(false);
  const [time, setTime] = useState(null);

    const [URL, setURL] = useState('')

    useEffect(() => {
        (async () =>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(function didMount() {
        console.log('ROOM URL update, new one: ',URL);
        
        const socket = io(URL, {
                    transports: ["websocket"],
                });   
        socket.io.on("open", () => setConnection(true));
        socket.io.on("close", () => setConnection(false));
    
        socket.on("time-msg", (data) => {
          setTime(new Date(data.time).toString());
        });
    
        return function didUnmount() {
          socket.disconnect();
          socket.removeAllListeners();
        }; 
      }, [URL])
    

    

    const handleBarCodeScanner = ({type, data}) =>{
        setScanned(true);
        alert(`Trying to connect to room ${data}`)
        setURL(data)
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