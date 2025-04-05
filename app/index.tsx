import React,{ useEffect, useState } from 'react';
import { Text, View , StyleSheet, FlatList, ListRenderItem, Platform, Image, ScrollView, Pressable } from 'react-native'; /*'Stylesheet' is a property that allows you to use CSS properties in React Native. */ 
import axios from 'axios';
// const pokemonEntry = ({ pokemon }) => (
//     <View>
//         <Text>{pokemon.name}</Text>
//     </View>
// )

export default function Index() {
    // const [record, setRecord] = useState<any>({});
    const [bulbasaur, setBulbasaur] = useState<any>({});
    const [ivysaur, setIvysaur] = useState<any>({});
    const [venusaur, setVenusaur] = useState<any>({});
    const [charmander, setCharmander] = useState<any>({});
    const [charmeleon, setCharmeleon] = useState<any>({});
    const [charizard, setCharizard] = useState<any>({});
    const [squirtle, setSquirtle] = useState<any>({});
    const [wartortle, setWartortle] = useState<any>({});
    const [blastoise, setBlastoise] = useState<any>({});
    const [caterpie, setCaterpie] = useState<any>({});
    const [metapod, setMetapod] = useState<any>({});
    const [butterfree, setButterfree] = useState<any>({});
    const [weedle, setWeedle] = useState<any>({});
    const [kakuna, setKakuna] = useState<any>({});
    const [beedrill, setBeedrill] = useState<any>({});
    const [pidgey, setPidgey] = useState<any>({});
    const [pidgeotto, setPidgeotto] = useState<any>({});
    const [pidgeot, setPidgeot] = useState<any>({});
    


    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(false);


    useEffect(() => {
        Promise.all([
            fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur'),
            fetch('https://pokeapi.co/api/v2/pokemon/ivysaur'),
            fetch('https://pokeapi.co/api/v2/pokemon/venusaur'),
            fetch('https://pokeapi.co/api/v2/pokemon/charmander'),
            fetch('https://pokeapi.co/api/v2/pokemon/charmeleon'),
            fetch('https://pokeapi.co/api/v2/pokemon/charizard'),
            fetch('https://pokeapi.co/api/v2/pokemon/squirtle'),
            fetch('https://pokeapi.co/api/v2/pokemon/wartortle'),
            fetch('https://pokeapi.co/api/v2/pokemon/blastoise'),
            fetch('https://pokeapi.co/api/v2/pokemon/caterpie'),
            fetch('https://pokeapi.co/api/v2/pokemon/metapod'),
            fetch('https://pokeapi.co/api/v2/pokemon/butterfree'),
            fetch('https://pokeapi.co/api/v2/pokemon/weedle'),
            fetch('https://pokeapi.co/api/v2/pokemon/kakuna'),
            fetch('https://pokeapi.co/api/v2/pokemon/beedrill'),
            fetch('https://pokeapi.co/api/v2/pokemon/pidgey'),
            fetch('https://pokeapi.co/api/v2/pokemon/pidgeotto'),
            fetch('https://pokeapi.co/api/v2/pokemon/pidgeot'),
        ])
        .then(([resBulbasaur, 
            resIvysaur, 
            resVenusaur, 
            resCharmander, 
            resCharmeleon, 
            resCharizard, 
            resSquirtle, 
            resWartortle, 
            resBlastoise, 
            resCaterpie, 
            resMetapod, 
            resButterfree, 
            resWeedle, 
            resKakuna, 
            resBeedrill, 
            resPidgey, 
            resPidgeotto, 
            resPidgeot
        ]) =>
        Promise.all([resBulbasaur.json(), 
            resIvysaur.json(), 
            resVenusaur.json(), 
            resCharmander.json(), 
            resCharmeleon.json(),
            resCharizard.json(),
            resSquirtle.json(), 
            resWartortle.json(), 
            resBlastoise.json(), 
            resCaterpie.json(), 
            resMetapod.json(), 
            resButterfree.json(),
            resWeedle.json(), 
            resKakuna.json(), 
            resBeedrill.json(), 
            resPidgey.json(), 
            resPidgeotto.json(), 
            resPidgeot.json()])
    )
    .then(([dataBulbasaur, 
        dataIvysaur, 
        dataVenusaur, 
        dataCharmander, 
        dataCharmeleon, 
        dataCharizard, 
        dataSquirtle, 
        dataWartortle, 
        dataBlastoise, 
        dataCaterpie, 
        dataMetapod, 
        dataButterfree, 
        dataWeedle, 
        dataKakuna, 
        dataBeedrill, 
        dataPidgey, 
        dataPidgeotto, 
        dataPidgeot]) => {
        setBulbasaur(dataBulbasaur);
        setIvysaur(dataIvysaur);
        setVenusaur(dataVenusaur);
        setCharmander(dataCharmander);
        setCharmeleon(dataCharmeleon);
        setCharizard(dataCharizard);
        setSquirtle(dataSquirtle);
        setWartortle(dataWartortle);
        setBlastoise(dataBlastoise);
        setCaterpie(dataCaterpie);
        setMetapod(dataMetapod);
        setButterfree(dataButterfree);
        setWeedle(dataWeedle);
        setKakuna(dataKakuna);
        setBeedrill(dataBeedrill);
        setPidgey(dataPidgey);
        setPidgeotto(dataPidgeotto);
        setPidgeot(dataPidgeot);
        setLoading(false);
    });
    }, []);

//     const bulbasaurType = () => {
//     if (loading) return <Text>Loading type...</Text>
//     return (bulbasaur.types.type.name);
// }
 
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
        <View style={styles.container}>
        <Pressable onPress={() => setExpanded(!expanded)}>
        <Image source={{ uri: bulbasaur.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{bulbasaur.name}</Text>
        </Pressable>
        {expanded && loading}
        {expanded && <Text style={styles.text}>TYPE</Text>}
        </View>
        <View style={styles.container}>
        <Image source={{ uri: ivysaur.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{ivysaur.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: venusaur.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{venusaur.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: charmander.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{charmander.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: charmeleon.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{charmeleon.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: charizard.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{charizard.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: squirtle.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{squirtle.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: wartortle.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{wartortle.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: blastoise.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{blastoise.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: caterpie.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{caterpie.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: metapod.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{metapod.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: butterfree.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{butterfree.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: weedle.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{weedle.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: kakuna.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{kakuna.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: beedrill.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{beedrill.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: pidgey.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{pidgey.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: pidgeotto.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{pidgeotto.name}</Text>
        </View>
        <View style={styles.container}>
        <Image source={{ uri: pidgeot.sprites.front_default}} style={{ width: 50, height: 50, borderRadius: 100/2, }} />
        <Text style={styles.text}>{pidgeot.name}</Text>
        </View>
    </ScrollView>
    );
    
};



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