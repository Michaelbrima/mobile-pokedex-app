import { useEffect, useState } from 'react';
import { Text, View , StyleSheet } from 'react-native'; /*'Stylesheet' is a property that allows you to use CSS properties in React Native. */ 

export default function Index() {
    const [info, setInfo] = useState<any>({});
    const [error, setError] = useState('');

    const fetchPData = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
            const data = await response.json();
            setInfo(data);
        }
        catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
    fetchPData();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello Expo.</Text>
            <Text style={styles.text}>This is the mobile-pokedex-app.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#25292e",
    },
    text: {
        color: "white",
    }
});