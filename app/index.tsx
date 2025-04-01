import React,{ useEffect, useState } from 'react';
import { Text, View , StyleSheet, FlatList, ListRenderItem, Platform, Image, ScrollView } from 'react-native'; /*'Stylesheet' is a property that allows you to use CSS properties in React Native. */ 
import axios from 'axios';
// const pokemonEntry = ({ pokemon }) => (
//     <View>
//         <Text>{pokemon.name}</Text>
//     </View>
// )

export default function Index() {
    // const [record, setRecord] = useState<any>({});
    const [bulbasaur, setBulbasaur] = useState<any>({});
    const [squirtle, setSquirtle] = useState<any>({});
    const [pidgey, setPidgey] = useState<any>({});
    


    const [loading, setLoading] = useState(true);
    // const [info, setInfo] = useState<any>({});
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');

    // const fetchPData = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
    //         const data = await response.json();
    //         setInfo(data);
    //     }
    //     catch (error) {
    //         console.log('error', error)
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // };
    
    // useEffect(() => {
    //     getPData();
    // }, []);

    useEffect(() => {
        Promise.all([
            fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur'),
            fetch('https://pokeapi.co/api/v2/pokemon/squirtle'),
            fetch('https://pokeapi.co/api/v2/pokemon/pidgey'),
        ])
        .then(([resBulbasaur, resSquirtle, resPidgey]) =>
        Promise.all([resBulbasaur.json(), resSquirtle.json(), resPidgey.json()])
    )
    .then(([dataBulbasaur, dataSquirtle, dataPidgey]) => {
        setBulbasaur(dataBulbasaur);
        setSquirtle(dataSquirtle);
        setPidgey(dataPidgey);
        setLoading(false);
    });
    }, []);

    // const getPData = async () => {
    //     const URL = "https://pokeapi.co/api/v2/pokemon/charmander";
    //     // fetch(URL)
    //     // .then((res) => {
    //     //     return res.json(); //convert json into a readable format (or have it parsed)
    //     // })
    //     // .then((responseData) => {
    //     //     // console.log(responseData);
    //     //     setRecord(responseData);
    //     // });
    //     setLoading(true);
    //     try{
    //         const response = await axios.get(URL);
    //         const data = response.data;
    //         setRecord(data);
    //         console.log(data);
    //     } catch (error: any ) {
    //         console.log(error);
    //     } finally{
    //         setLoading(false);
    //     }

    //     // const resp = await fetch(URL);
    //     // const json = await resp.json();
    //     // console.log(json);
    // };

    // useEffect(() => {
    // fetchPData();
    // }, []);
    
    // const renderItem: ListRenderItem<Category> = ({ item }) => (
    //     <Item data={item} />
    //  )
    if (loading) return <Text>Loading...</Text>;

    return (
    <ScrollView>
        <View style={styles.container}>
            
            <Image source={{ uri: bulbasaur.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
            <Text style={styles.text}>{bulbasaur.name}</Text>
            <Image source={{ uri: squirtle.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
            <Text style={styles.text}>{squirtle.name}</Text>
            <Image source={{ uri: pidgey.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
            <Text style={styles.text}>{pidgey.name}</Text>
        </View>
        <View style={styles.container}>
            
            {/* <Text style={styles.text}>Hello Expo.</Text>
            <Text style={styles.text}>This is the mobile-pokedex-app.</Text> */}
            {/* <Text style={styles.text}>{record.name}</Text> */}
            {/* <Image source={{ uri: record.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
            <Text style={styles.text}>{record.name}</Text> */}
            {/* <Text style={styles.text}>{record.moves.move.name}</Text> */}
            {/* <Text style={styles.text}>Index</Text> */}
            {/* <FlatList data={record} renderItem={({pokemon})=> <Pokemon data={pokemon} />}/> */}
           
            
            {/* <Text style={styles.text}>{info.data}</Text> */}
            <Image source={{ uri: bulbasaur.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
            <Text style={styles.text}>{bulbasaur.name}</Text>
            <Image source={{ uri: squirtle.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
            <Text style={styles.text}>{squirtle.name}</Text>
            <Image source={{ uri: pidgey.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
            <Text style={styles.text}>{pidgey.name}</Text>
        </View>
        <View>
        <Image source={{ uri: bulbasaur.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{bulbasaur.name}</Text>
        </View>
        <View>
        <Image source={{ uri: squirtle.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{squirtle.name}</Text>
        </View>
        <View>
        <Image source={{ uri: pidgey.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{pidgey.name}</Text>
        </View>
        <View>
        <Image source={{ uri: bulbasaur.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{bulbasaur.name}</Text>
        </View>
        <View>
        <Image source={{ uri: squirtle.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{squirtle.name}</Text>
        </View>
        <View>
        <Image source={{ uri: pidgey.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{pidgey.name}</Text>
        </View>
        <View>
        <Image source={{ uri: bulbasaur.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{bulbasaur.name}</Text>
        </View>
        <View>
        <Image source={{ uri: squirtle.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{squirtle.name}</Text>
        </View>
        <View>
        <Image source={{ uri: pidgey.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{pidgey.name}</Text>
        </View>
        <View>
        <Image source={{ uri: bulbasaur.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{bulbasaur.name}</Text>
        </View>
        <View>
        <Image source={{ uri: squirtle.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{squirtle.name}</Text>
        </View>
        <View>
        <Image source={{ uri: pidgey.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{pidgey.name}</Text>
        </View>
    </ScrollView>
    );
    
};

// const listingLayout = ({ pokemon }: { pokemon: string }) => 
//     {
//     return(
//         <View>
//             <Text>{pokemon.name}</Text>
//         </View>
//     );
// };

const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#25292e",
            flexDirection: "row",
            borderColor: "red",
            borderWidth: 1,
            margin: 5,
            padding: 5
    },
    text: {
        color: "white",
    },
    card: {
        marginTop: 55,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});