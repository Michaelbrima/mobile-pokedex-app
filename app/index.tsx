import React,{ useEffect, useState } from 'react';
import { Text, View , StyleSheet, FlatList, ListRenderItem, Platform, Image, ScrollView, Pressable } from 'react-native'; /*'Stylesheet' is a property that allows you to use CSS properties in React Native. */ 
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
// const pokemonEntry = ({ pokemon }) => (
//     <View>
//         <Text>{pokemon.name}</Text>
//     </View>
// )

export default function Index(this: any) {
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
    const [rattata, setRattata] = useState<any>({});
    const [raticate, setRaticate] = useState<any>({});
    const [spearow, setSpearow] = useState<any>({});
    const [fearow, setFearow] = useState<any>({});
    const [ekans, setEkans] = useState<any>({});
    const [arbok, setArbok] = useState<any>({});
    const [pikachu, setPikachu] = useState<any>({});
    const [raichu, setRaichu] = useState<any>({});
    const [sandshrew, setSandshrew] = useState<any>({});
    const [sandslash, setSandslash] = useState<any>({});
    const [nidoranf, setNidoranf] = useState<any>({});
    const [nidorina, setNidorina] = useState<any>({});
    const [nidoqueen, setNidoqueen] = useState<any>({});
    const [nidoranm, setNidoranm] = useState<any>({});
    const [nidorino, setNidorino] = useState<any>({});
    const [nidoking, setNidoking] = useState<any>({});
    const [clefairy, setClefairy] = useState<any>({});
    const [clefable, setClefable] = useState<any>({});
    const [vulpix, setVulpix] = useState<any>({});
    const [ninetales, setNinetales] = useState<any>({});
    const [jigglypuff, setJigglypuff] = useState<any>({});
    const [wigglytuff, setWigglytuff] = useState<any>({});
    const [zubat, setZubat] = useState<any>({});
    const [golbat, setGolbat] = useState<any>({});
    const [oddish, setOddish] = useState<any>({});
    const [gloom, setGloom] = useState<any>({});
    const [vileplume, setVileplume] = useState<any>({});
    const [paras, setParas] = useState<any>({});
    const [parasect, setParasect] = useState<any>({});
    const [venonat, setVenonat] = useState<any>({});
    const [venomoth, setVenomoth] = useState<any>({});
    const [diglett, setDiglett] = useState<any>({});
    const [dugtrio, setDugtrio] = useState<any>({});
    const [meowth, setMeowth] = useState<any>({});
    const [persian, setPersian] = useState<any>({});
    const [psyduck, setPsyduck] = useState<any>({});
    const [golduck, setGolduck] = useState<any>({});
    const [mankey, setMankey] = useState<any>({});
    const [primeape, setPrimeape] = useState<any>({});
    const [growlithe, setGrowlithe] = useState<any>({});
    const [arcanine, setArcanine] = useState<any>({});
    const [poliwag, setPoliwag] = useState<any>({});
    const [poliwhirl, setPoliwhirl] = useState<any>({});
    const [poliwrath, setPoliwrath] = useState<any>({});
    const [abra, setAbra] = useState<any>({});
    const [kadabra, setKadabra] = useState<any>({});
    const [alakazam, setAlakazam] = useState<any>({});
    const [machop, setMachop] = useState<any>({});
    const [machoke, setMachoke] = useState<any>({});
    const [machamp, setMachamp] = useState<any>({});
    const [bellsprout, setBellsprout] = useState<any>({});
    const [weepinbell, setWeepinbell] = useState<any>({});
    const [victreebel, setVictreebel] = useState<any>({});
    const [tentacool, setTentacool] = useState<any>({});
    const [tentacruel, setTentacruel] = useState<any>({});
    const [geodude, setGeodude] = useState<any>({});
    const [graveler, setGraveler] = useState<any>({});
    const [golem, setGolem] = useState<any>({});
    const [ponyta, setPonyta] = useState<any>({});
    const [rapidash, setRapidash] = useState<any>({});
    const [slowpoke, setSlowpoke] = useState<any>({});
    const [slowbro, setSlowbro] = useState<any>({});
    const [magnemite, setMagnemite] = useState<any>({});
    const [magneton, setMagneton] = useState<any>({});
    const [farfetchd, setFarfetchd] = useState<any>({});
    const [doduo, setDoduo] = useState<any>({});
    const [dodrio, setDodrio] = useState<any>({});
    const [seel, setSeel] = useState<any>({});
    const [dewgong, setDewgong] = useState<any>({});
    const [grimer, setGrimer] = useState<any>({});
    const [muk, setMuk] = useState<any>({});
    const [shellder, setShellder] = useState<any>({});
    const [cloyster, setCloyster] = useState<any>({});
    const [gastly, setGastly] = useState<any>({});
    const [haunter, setHaunter] = useState<any>({});
    const [gengar, setGengar] = useState<any>({});
    const [onix, setOnix] = useState<any>({});
    const [drowzee, setDrowzee] = useState<any>({});
    const [hypno, setHypno] = useState<any>({});
    const [krabby, setKrabby] = useState<any>({});
    const [kingler, setKingler] = useState<any>({});
    const [voltorb, setVoltorb] = useState<any>({});
    const [electrode, setElectrode] = useState<any>({});
    const [exeggcute, setExeggcute] = useState<any>({});
    const [exeggutor, setExeggutor] = useState<any>({});
    const [cubone, setCubone] = useState<any>({});
    const [marowak, setMarowak] = useState<any>({});


    const [locationBulbasaur, setLocationBulbasaur] = useState<any>({});
    const [areaBulbasaur, setAreaBulbasaur] = useState<any>([]);


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
            fetch('https://pokeapi.co/api/v2/pokemon/rattata'),
            fetch('https://pokeapi.co/api/v2/pokemon/raticate'),
            fetch('https://pokeapi.co/api/v2/pokemon/spearow'),
            fetch('https://pokeapi.co/api/v2/pokemon/fearow'),
            fetch('https://pokeapi.co/api/v2/pokemon/ekans'),
            fetch('https://pokeapi.co/api/v2/pokemon/arbok'),
            fetch('https://pokeapi.co/api/v2/pokemon/pikachu'),
            fetch('https://pokeapi.co/api/v2/pokemon/raichu'),
            fetch('https://pokeapi.co/api/v2/pokemon/sandshrew'),
            fetch('https://pokeapi.co/api/v2/pokemon/sandslash'),
            fetch('https://pokeapi.co/api/v2/pokemon/nidoran-f'),
            fetch('https://pokeapi.co/api/v2/pokemon/Nidorina'),
            fetch('https://pokeapi.co/api/v2/pokemon/Nidoqueen'),
            fetch('https://pokeapi.co/api/v2/pokemon/nidoran-m'),
            fetch('https://pokeapi.co/api/v2/pokemon/nidorino'),
            fetch('https://pokeapi.co/api/v2/pokemon/nidoking'),
            fetch('https://pokeapi.co/api/v2/pokemon/clefairy'),
            fetch('https://pokeapi.co/api/v2/pokemon/clefable'),
            fetch('https://pokeapi.co/api/v2/pokemon/vulpix'),
            fetch('https://pokeapi.co/api/v2/pokemon/ninetales'),
            fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff'),
            fetch('https://pokeapi.co/api/v2/pokemon/wigglytuff'),
            fetch('https://pokeapi.co/api/v2/pokemon/zubat'),
            fetch('https://pokeapi.co/api/v2/pokemon/golbat'),
            fetch('https://pokeapi.co/api/v2/pokemon/oddish'),
            fetch('https://pokeapi.co/api/v2/pokemon/gloom'),
            fetch('https://pokeapi.co/api/v2/pokemon/vileplume'),
            fetch('https://pokeapi.co/api/v2/pokemon/paras'),
            fetch('https://pokeapi.co/api/v2/pokemon/parasect'),
            fetch('https://pokeapi.co/api/v2/pokemon/venonat'),
            fetch('https://pokeapi.co/api/v2/pokemon/venomoth'),
            fetch('https://pokeapi.co/api/v2/pokemon/diglett'),
            fetch('https://pokeapi.co/api/v2/pokemon/dugtrio'),
            fetch('https://pokeapi.co/api/v2/pokemon/meowth'),
            fetch('https://pokeapi.co/api/v2/pokemon/persian'),
            fetch('https://pokeapi.co/api/v2/pokemon/psyduck'),
            fetch('https://pokeapi.co/api/v2/pokemon/golduck'),
            fetch('https://pokeapi.co/api/v2/pokemon/mankey'),
            fetch('https://pokeapi.co/api/v2/pokemon/primeape'),
            fetch('https://pokeapi.co/api/v2/pokemon/growlithe'),
            fetch('https://pokeapi.co/api/v2/pokemon/arcanine'),
            fetch('https://pokeapi.co/api/v2/pokemon/poliwag'),
            fetch('https://pokeapi.co/api/v2/pokemon/poliwhirl'),
            fetch('https://pokeapi.co/api/v2/pokemon/poliwrath'),
            fetch('https://pokeapi.co/api/v2/pokemon/abra'),
            fetch('https://pokeapi.co/api/v2/pokemon/kadabra'),
            fetch('https://pokeapi.co/api/v2/pokemon/Alakazam'),
            fetch('https://pokeapi.co/api/v2/pokemon/machop'),
            fetch('https://pokeapi.co/api/v2/pokemon/machoke'),
            fetch('https://pokeapi.co/api/v2/pokemon/machamp'),
            fetch('https://pokeapi.co/api/v2/pokemon/bellsprout'),
            fetch('https://pokeapi.co/api/v2/pokemon/weepinbell'),
            fetch('https://pokeapi.co/api/v2/pokemon/victreebel'),
            fetch('https://pokeapi.co/api/v2/pokemon/tentacool'),
            fetch('https://pokeapi.co/api/v2/pokemon/tentacruel'),
            fetch('https://pokeapi.co/api/v2/pokemon/geodude'),
            fetch('https://pokeapi.co/api/v2/pokemon/graveler'),
            fetch('https://pokeapi.co/api/v2/pokemon/golem'),
            fetch('https://pokeapi.co/api/v2/pokemon/ponyta'),
            fetch('https://pokeapi.co/api/v2/pokemon/rapidash'),
            fetch('https://pokeapi.co/api/v2/pokemon/slowpoke'),
            fetch('https://pokeapi.co/api/v2/pokemon/slowbro'),
            fetch('https://pokeapi.co/api/v2/pokemon/magnemite'),
            fetch('https://pokeapi.co/api/v2/pokemon/magneton'),
            fetch('https://pokeapi.co/api/v2/pokemon/farfetchd'),
            fetch('https://pokeapi.co/api/v2/pokemon/doduo'),
            fetch('https://pokeapi.co/api/v2/pokemon/dodrio'),
            fetch('https://pokeapi.co/api/v2/pokemon/seel'),
            fetch('https://pokeapi.co/api/v2/pokemon/dewgong'),
            fetch('https://pokeapi.co/api/v2/pokemon/grimer'),
            fetch('https://pokeapi.co/api/v2/pokemon/muk'),
            fetch('https://pokeapi.co/api/v2/pokemon/shellder'),
            fetch('https://pokeapi.co/api/v2/pokemon/cloyster'),
            fetch('https://pokeapi.co/api/v2/pokemon/gastly'),
            fetch('https://pokeapi.co/api/v2/pokemon/haunter'),
            fetch('https://pokeapi.co/api/v2/pokemon/gengar'),
            fetch('https://pokeapi.co/api/v2/pokemon/onix'),
            fetch('https://pokeapi.co/api/v2/pokemon/drowzee'),
            fetch('https://pokeapi.co/api/v2/pokemon/hypno'),
            fetch('https://pokeapi.co/api/v2/pokemon/krabby'),
            fetch('https://pokeapi.co/api/v2/pokemon/kingler'),
            fetch('https://pokeapi.co/api/v2/pokemon/voltorb'),
            fetch('https://pokeapi.co/api/v2/pokemon/electrode'),
            fetch('https://pokeapi.co/api/v2/pokemon/exeggcute'),
            fetch('https://pokeapi.co/api/v2/pokemon/exeggutor'),
            fetch('https://pokeapi.co/api/v2/pokemon/cubone'),
            fetch('https://pokeapi.co/api/v2/pokemon/marowak'),
            fetch('https://pokeapi.co/api/v2/pokemon/1/encounters')
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
            resPidgeot,
            resRattata,
            resRaticate,
            resSpearow,
            resFearow,
            resEkans,
            resArbok,
            resPikachu,
            resRaichu,
            resSandshrew,
            resSandslash,
            resNidoranf,
            resNidorina,
            resNidoqueen,
            resNidoranm,
            resNidorino,
            resNidoking,
            resClefairy,
            resClefable,
            resVulpix,
            resNinetales,
            resJigglypuff,
            resWigglytuff,
            resZubat,
            resGolbat,
            resOddish,
            resGloom,
            resVileplume,
            resParas,
            resParasect,
            resVenonat,
            resVenomoth,
            resDiglett,
            resDugtrio,
            resMeowth,
            resPersian,
            resPsyduck,
            resGolduck,
            resMankey,
            resPrimeape,
            resGrowlithe,
            resArcanine,
            resPoliwag,
            resPoliwhirl,
            resPoliwrath,
            resAbra,
            resKadabra,
            resAlakazam,
            resMachop,
            resMachoke,
            resMachamp,
            resBellsprout,
            resWeepinbell,
            resVictreebel,
            resTentacool,
            resTentacruel,
            resGeodude,
            resGraveler,
            resGolem,
            resPonyta,
            resRapidash,
            resSlowpoke,
            resSlowbro,
            resMagnemite,
            resMagneton,
            resFarfetchd,
            resDoduo,
            resDodrio,
            resSeel,
            resDewgong,
            resGrimer,
            resMuk,
            resShellder,
            resCloyster,
            resGastly,
            resHaunter,
            resGengar,
            resOnix,
            resDrowzee,
            resHypno,
            resKrabby,
            resKingler,
            resVoltorb,
            resElectrode,
            resExeggcute,
            resExeggutor,
            resCubone,
            resMarowak,
            resLocationBulbasaur
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
            resPidgeot.json(),
            resRattata.json(),
            resRaticate.json(),
            resSpearow.json(),
            resFearow.json(),
            resEkans.json(),
            resArbok.json(),
            resPikachu.json(),
            resRaichu.json(),
            resSandshrew.json(),
            resSandslash.json(),
            resNidoranf.json(),
            resNidorina.json(),
            resNidoqueen.json(),
            resNidoranm.json(),
            resNidorino.json(),
            resNidoking.json(),
            resClefairy.json(),
            resClefable.json(),
            resVulpix.json(),
            resNinetales.json(),
            resJigglypuff.json(),
            resWigglytuff.json(),
            resZubat.json(),
            resGolbat.json(),
            resOddish.json(),
            resGloom.json(),
            resVileplume.json(),
            resParas.json(),
            resParasect.json(),
            resVenonat.json(),
            resVenomoth.json(),
            resDiglett.json(),
            resDugtrio.json(),
            resMeowth.json(),
            resPersian.json(),
            resPsyduck.json(),
            resGolduck.json(),
            resMankey.json(),
            resPrimeape.json(),
            resGrowlithe.json(),
            resArcanine.json(),
            resPoliwag.json(),
            resPoliwhirl.json(),
            resPoliwrath.json(),
            resAbra.json(),
            resKadabra.json(),
            resAlakazam.json(),
            resMachop.json(),
            resMachoke.json(),
            resMachamp.json(),
            resBellsprout.json(),
            resWeepinbell.json(),
            resVictreebel.json(),
            resTentacool.json(),
            resTentacruel.json(),
            resGeodude.json(),
            resGraveler.json(),
            resGolem.json(),
            resPonyta.json(),
            resRapidash.json(),
            resSlowpoke.json(),
            resSlowbro.json(),
            resMagnemite.json(),
            resMagneton.json(),
            resFarfetchd.json(),
            resDoduo.json(),
            resDodrio.json(),
            resSeel.json(),
            resDewgong.json(),
            resGrimer.json(),
            resMuk.json(),
            resShellder.json(),
            resCloyster.json(),
            resGastly.json(),
            resHaunter.json(),
            resGengar.json(),
            resOnix.json(),
            resDrowzee.json(),
            resHypno.json(),
            resKrabby.json(),
            resKingler.json(),
            resVoltorb.json(),
            resElectrode.json(),
            resExeggcute.json(),
            resExeggutor.json(),
            resCubone.json(),
            resMarowak.json(),
            resLocationBulbasaur.json()])
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
        dataPidgeot,
        dataRattata,
        dataRaticate,
        dataSpearow,
        dataFearow,
        dataEkans,
        dataArbok,
        dataPikachu,
        dataRaichu,
        dataSandshrew,
        dataSandslash,
        dataNidoranf,
        dataNidorina,
        dataNidoqueen,
        dataNidoranm,
        dataNidorino,
        dataNidoking,
        dataClefairy,
        dataClefable,
        dataVulpix,
        dataNinetales,
        dataJigglypuff,
        dataWigglytuff,
        dataZubat,
        dataGolbat,
        dataOddish,
        dataGloom,
        dataVileplume,
        dataParas,
        dataParasect,
        dataVenonat,
        dataVenomoth,
        dataDiglett,
        dataDugtrio,
        dataMeowth,
        dataPersian,
        dataPsyduck,
        dataGolduck,
        dataMankey,
        dataPrimeape,
        dataGrowlithe,
        dataArcanine,
        dataPoliwag,
        dataPoliwhirl,
        dataPoliwrath,
        dataAbra,
        dataKadabra,
        dataAlakazam,
        dataMachop,
        dataMachoke,
        dataMachamp,
        dataBellsprout,
        dataWeepinbell,
        dataVictreebel,
        dataTentacool,
        dataTentacruel,
        dataGeodude,
        dataGraveler,
        dataGolem,
        dataPonyta,
        dataRapidash,
        dataSlowpoke,
        dataSlowbro,
        dataMagnemite,
        dataMagneton,
        dataFarfetchd,
        dataDoduo,
        dataDodrio,
        dataSeel,
        dataDewgong,
        dataGrimer,
        dataMuk,
        dataShellder,
        dataCloyster,
        dataGastly,
        dataHaunter,
        dataGengar,
        dataOnix,
        dataDrowzee,
        dataHypno,
        dataKrabby,
        dataKingler,
        dataVoltorb,
        dataElectrode,
        dataExeggcute,
        dataExeggutor,
        dataCubone,
        dataMarowak,
        dataLocationBulbasaur]) => {
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
        setRattata(dataRattata),
        setRaticate(dataRaticate);
        setSpearow(dataSpearow);
        setFearow(dataFearow);
        setEkans(dataEkans);
        setArbok(dataArbok);
        setPikachu(dataPikachu);
        setRaichu(dataRaichu);
        setSandshrew(dataSandshrew);
        setSandslash(dataSandslash);
        setNidoranf(dataNidoranf);
        setNidorina(dataNidorina);
        setNidoqueen(dataNidoqueen);
        setNidoranm(dataNidoranm);
        setNidorino(dataNidorino);
        setNidoking(dataNidoking);
        setClefairy(dataClefairy);
        setClefable(dataClefable);
        setVulpix(dataVulpix);
        setNinetales(dataNinetales);
        setJigglypuff(dataJigglypuff);
        setWigglytuff(dataWigglytuff);
        setZubat(dataZubat);
        setGolbat(dataGolbat);
        setOddish(dataOddish);
        setGloom(dataGloom);
        setVileplume(dataVileplume);
        setParas(dataParas);
        setParasect(dataParasect);
        setVenonat(dataVenonat);
        setVenomoth(dataVenomoth);
        setDiglett(dataDiglett);
        setDugtrio(dataDugtrio);
        setMeowth(dataMeowth);
        setPersian(dataPersian);
        setPsyduck(dataPsyduck);
        setGolduck(dataGolduck);
        setMankey(dataMankey);
        setPrimeape(dataPrimeape);
        setGrowlithe(dataGrowlithe);
        setArcanine(dataArcanine);
        setPoliwag(dataPoliwag);
        setPoliwhirl(dataPoliwhirl);
        setPoliwrath(dataPoliwrath);
        setAbra(dataAbra);
        setKadabra(dataKadabra);
        setAlakazam(dataAlakazam);
        setMachop(dataMachop);
        setMachoke(dataMachoke);
        setMachamp(dataMachamp);
        setBellsprout(dataBellsprout);
        setWeepinbell(dataWeepinbell);
        setVictreebel(dataVictreebel);
        setTentacool(dataTentacool);
        setTentacruel(dataTentacruel);
        setGeodude(dataGeodude);
        setGraveler(dataGraveler);
        setGolem(dataGolem);
        setPonyta(dataPonyta);
        setRapidash(dataRapidash);
        setSlowpoke(dataSlowpoke);
        setSlowbro(dataSlowbro);
        setMagnemite(dataMagnemite);
        setMagneton(dataMagneton);
        setFarfetchd(dataFarfetchd);
        setDoduo(dataDoduo);
        setDodrio(dataDodrio);
        setSeel(dataSeel);
        setDewgong(dataDewgong);
        setGrimer(dataGrimer);
        setMuk(dataMuk);
        setShellder(dataShellder);
        setCloyster(dataCloyster);
        setGastly(dataGastly);
        setHaunter(dataHaunter);
        setGengar(dataGengar);
        setOnix(dataOnix);
        setDrowzee(dataDrowzee);
        setHypno(dataHypno);
        setKrabby(dataKrabby);
        setKingler(dataKingler);
        setVoltorb(dataVoltorb);
        setElectrode(dataElectrode);
        setExeggcute(dataExeggcute);
        setExeggutor(dataExeggutor);
        setCubone(dataCubone);
        setMarowak(dataMarowak);
        setLocationBulbasaur(dataLocationBulbasaur);
        setLoading(false);
    });
    }, []);    

    useEffect(() => {
        Promise.all([
            fetch('https://pokeapi.co/api/v2/pokemon/1/encounters')
        ])
        .then(([
            resAreaBulbasaur
        ]) =>
        Promise.all([
            resAreaBulbasaur.json()])
    )
    .then(([
        dataAreaBulbasaur]) => {
        setLocationBulbasaur(dataAreaBulbasaur);
        setLoading(false);
    });
    }, []);  

    const arrayAreas = areaBulbasaur.map((area: { id: React.Key | null | undefined; location_area: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }, id: any) => 
        <View key={id}>
          <Text>{area.location_area.name}</Text>
        </View>
    
      )
    
    const data = [
        bulbasaur,
        ivysaur,
        venusaur,
        charmander,
        charmeleon,
        charizard,
        squirtle,
        wartortle,
        blastoise,
        caterpie,
        metapod,
        butterfree,
        weedle,
        kakuna,
        beedrill,
        pidgey,
        pidgeotto,
        pidgeot,
        rattata,
        raticate,
        spearow,
        fearow,
        ekans,
        arbok,
        pikachu,
        raichu,
        sandshrew,
        sandslash,
        nidoranf,
        nidorina,
        nidoqueen,
        nidoranm,
        nidorino,
        nidoking,
        clefairy,
        clefable,
        vulpix,
        ninetales,
        jigglypuff,
        wigglytuff,
        zubat,
        golbat,
        oddish,
        gloom,
        vileplume,
        paras,
        parasect,
        venonat,
        venomoth,
        diglett,
        dugtrio,
        meowth,
        persian,
        psyduck,
        golduck,
        mankey,
        primeape,
        growlithe,
        arcanine,
        poliwag,
        poliwhirl,
        poliwrath,
        abra,
        kadabra,
        alakazam,
        machop,
        machoke,
        machamp,
        bellsprout,
        weepinbell,
        victreebel,
        tentacool,
        tentacruel,
        geodude,
        graveler,
        golem,
        ponyta,
        rapidash,
        slowpoke,
        slowbro,
        magnemite,
        magneton,
        farfetchd,
        doduo,
        dodrio,
        seel,
        dewgong,
        grimer,
        muk,
        shellder,
        cloyster,
        gastly,
        haunter,
        gengar,
        onix,
        drowzee,
        hypno,
        krabby,
        kingler,
        voltorb,
        electrode,
        exeggcute,
        exeggutor,
        cubone,
        marowak
    ];



//     const bulbasaurType = () => {
//     if (loading) return <Text>Loading type...</Text>
//     return (bulbasaur.types.type.name);
// }

// const Move = ({move}: { move: any }) => (
//     <View>
//         <Text> {move}</Text>
//     </View>
// );



const renderItem = ({ item }: { item: any }) => {
    //the app will represent each list item via a Text component
    return <Text> {item.title}</Text>;
  };

  let flatArray = [].concat.apply([], bulbasaur.moves);
 
  var vArray: React.JSX.Element[] = [];
// const returnLevel = () => { 
// var iLength;
// var jLength; 
//     for(let i = 0; i < bulbasaur.moves.length; i++){
//     for(let j = 0; j < bulbasaur.moves.version_group_details.length; j++){
//     vArray.push(
        
        
//             <View key={[i][j]}>
//                 <Text>bulbasaur.moves[i].version_group_details[j].level_learned_at</Text>
//             </View>
        

//     )

//   }}
// }

    if (loading) return <Text>Loading...</Text>;

    return (
        // <>
        <SafeAreaView>
            <ScrollView>
                {/* <View>
                        <View>
                            {bulbasaur.moves.map((item: { id: React.Key | null | undefined; move: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }, i: any) => //used typescript to help infer parameter types from usage for both props
                                <View key={i}>
                                    {<Text >{item.move.name}</Text>}
                                </View>)}
                        </View>
                    </View> */}

                <View style={styles.container}>
                    <Pressable style={styles.container} onPress={() => setExpanded(!expanded)}>
                        <View style={{flexDirection: 'column'}}>
                        <Image source={{ uri: bulbasaur.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                        <Text style={styles.text}>{bulbasaur.name}</Text>
                        </View>
                    </Pressable>
                    {/* {expanded && <View style={styles.textWrapper}>
                        <View style={{ flexDirection: 'row'}}>
                            <View>
                                <Text style={styles.text}>Type:</Text>
                                <Text style={styles.text}>{bulbasaur.types[0].type.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.text}>Ability:</Text>
                                <Text style={styles.text}>{bulbasaur.abilities[0].ability.name}</Text>
                            </View>
                        </View>
                    </View>} */}

                    {/* {expanded && <Text> </Text>} */}
                    {bulbasaur && expanded &&
                    <View style={{flexDirection: 'column'}}>
                    {/* <View>
                    <Text style={styles.text}>{bulbasaur.types[0].type.name}</Text>
                    </View>
                    <View>
                     <Text style={styles.text}>{bulbasaur.abilities[0].ability.name}</Text>
                     </View> */}



                    <View style={{ flexDirection: 'column'}}> 

                                <View style={{ flexDirection: 'column', backgroundColor: 'red' }}>
                                    <Text style={{ color: 'white' }}>Types:</Text>
                                    <View>{bulbasaur.types.map((type: { type: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }, t: React.Key | null | undefined) =>
                                    <Text key={t} style={{ color: 'white' }}>{type.type.name}</Text>
                                )}</View>

                                
                                <Text style={{ color: 'white' }}>Basic Information:</Text>

                                <View style={{flexDirection: 'row'}}>
                                <Text style={{ color: 'white' }}>Type: </Text>
                                <Text style={{ color: 'white' }}>{bulbasaur.types[0].type.name}</Text>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                <Text style={{ color: 'white' }}>Ability: </Text>
                                <Text style={{ color: 'white' }}>{bulbasaur.abilities[0].ability.name}</Text>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                <Text style={{ color: 'white' }}>Weight: </Text>
                                <Text style={{ color: 'white' }}>{bulbasaur.weight}</Text>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                <Text style={{ color: 'white' }}>Base Experience: </Text>
                                <Text style={{ color: 'white' }}>{bulbasaur.base_experience}</Text>
                                </View>

                                </View>

                        <Text style={{ color: 'white' }}>Move Information:</Text>
                        <Text style={{ flexDirection: 'column' }}>{bulbasaur.moves.map((item: {
                            [x: string]: any; version_group_details: { level_learned_at: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }[]; }, id: any) =>
                            <View key={id} style={{ flexDirection: 'column' }}><Text style={styles.text}>{item.move.name}</Text>{item.version_group_details.map((attr: {
                                [x: string]: any; level_learned_at: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                            }, index: React.Key | null | undefined) => (
                                <View style={{ flexDirection: 'row' }} key={index}>
                                    {/* <Text style={styles.text}>Level: </Text> */}
                                    <Text style={styles.text}>{attr.level_learned_at}</Text>
                                    <Text style={styles.text}> ({attr.move_learn_method.name}) </Text>
                                    <Text style={styles.text}> ({attr.version_group.name}) </Text>
                                </View>
                            ))}</View>)}</Text>
                            </View>

                            <View style={{ flexDirection: 'column', backgroundColor: "yellow" }}>
                                <View style={{ flexDirection: 'row' }}>
                                {/* <Text style={{ margin: 10, color: 'gray' }}>Location:</Text>
                                <Text style={{ margin: 10, color: 'gray' }}>Version:</Text> */}
                                </View>
                            {/* <View>{arrayAreas}</View> */}
                                <View>
                                    <Text>Locations found in the games:</Text>
                                    {locationBulbasaur.map((place: { location_area: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; version_details: any[]; }, l: React.Key | null | undefined) =>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text key={l}>{place.location_area.name}</Text>
                                            <Text>{place.version_details.map((version, v) =>
                                                <Text key={v}> ({version.version.name})</Text>)}</Text>
                                        </View>)}
                                </View>
                            
                            </View>

                            </View>
                    }
                    




                </View>
                <View style={styles.container}>
                    <Image source={{ uri: ivysaur.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{ivysaur.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: venusaur.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{venusaur.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: charmander.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{charmander.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: charmeleon.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{charmeleon.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: charizard.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{charizard.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: squirtle.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{squirtle.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: wartortle.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{wartortle.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: blastoise.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{blastoise.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: caterpie.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{caterpie.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: metapod.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{metapod.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: butterfree.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{butterfree.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: weedle.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{weedle.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: kakuna.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{kakuna.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: beedrill.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{beedrill.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: pidgey.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{pidgey.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: pidgeotto.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{pidgeotto.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: pidgeot.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{pidgeot.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: rattata.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{rattata.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: raticate.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{raticate.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: spearow.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{spearow.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: fearow.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{fearow.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: ekans.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{ekans.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: arbok.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{arbok.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: pikachu.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{pikachu.name}</Text>
                </View>
                {/* <View style={styles.container}>
                    <Image source={{ uri: pikachu.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{pikachu.name}</Text>
                </View> */}
                <View style={styles.container}>
                    <Image source={{ uri: raichu.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{raichu.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: sandshrew.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{sandshrew.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: sandslash.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{sandslash.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: nidoranf.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{nidoranf.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: nidorina.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{nidorina.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: nidoqueen.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{nidoqueen.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: nidoranm.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{nidoranm.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: nidorino.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{nidorino.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: nidoking.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{nidoking.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: clefairy.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{clefairy.name}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: clefable.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                    <Text style={styles.text}>{clefable.name}</Text>
                </View>
                {/* <Text>      {data.map((item, id) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            </View>
        ))}</Text> */}
          {data.map((item: any, index: any) => {
        return (
            <View key={index} style={{height: 50, width: 50, backgroundColor: 'orange', marginBottom: 10}}>
                <Image  source={{ uri: item.sprites.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
            <Text>{item.name}</Text>
            </View> 
        )
  })}                  
                <View>
                    <Text>No Copyright Infringement is Intended. Pokemon belongs to
                        Gamefreak, Nintendo, and The Pokemon Company, respectively. Pokémon and Pokémon character names are trademarks of Nintendo.&copy</Text>
                </View>
            </ScrollView>

            

        </SafeAreaView>

);
    
};



const styles = StyleSheet.create({
    container: {
            // flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
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
    },
    textWrapper: {
        flex: 1,
        
        }
});