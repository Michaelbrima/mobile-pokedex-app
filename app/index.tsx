import React,{ useEffect, useRef, useState } from 'react';
import { Text, View , StyleSheet, FlatList, ListRenderItem, Platform, Image, ScrollView, Pressable, Button, TouchableOpacity } from 'react-native'; /*'Stylesheet' is a property that allows you to use CSS properties in React Native. */ 
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list';
import AutoLink, { Autolink } from 'react-native-autolink';
import VideoPlayer, { type VideoPlayerRef } from 'react-native-video-player';
import { WebView } from "react-native-webview";
import SoundPlayer from 'react-native-sound-player';
import Sound from 'react-native-sound';



export default function Index(this: any) {
    // const [record, setRecord] = useState<any>({});
    const [extraSection, setExtraSection] = useState<any>(null);
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
    const [hitmonlee, setHitmonlee] = useState<any>({});
    const [hitmonchan, setHitmonchan] = useState<any>({});
    const [lickitung, setLickitung] = useState<any>({});
    const [koffing, setKoffing] = useState<any>({});
    const [weezing, setWeezing] = useState<any>({});
    const [rhyhorn, setRhyhorn] = useState<any>({});
    const [rhydon, setRhydon] = useState<any>({});
    const [chansey, setChansey] = useState<any>({});
    const [tangela, setTangela] = useState<any>({});
    const [kangaskhan, setKangaskhan] = useState<any>({});
    const [horsea, setHorsea] = useState<any>({});
    const [seadra, setSeadra] = useState<any>({});
    const [goldeen, setGoldeen] = useState<any>({});
    const [seaking, setSeaking] = useState<any>({});
    const [staryu, setStaryu] = useState<any>({});
    const [starmie, setStarmie] = useState<any>({});
    const [mrmime, setMrmime] = useState<any>({});
    const [scyther, setScyther] = useState<any>({});
    const [jynx, setJynx] = useState<any>({});
    const [electabuzz, setElectabuzz] = useState<any>({});
    const [magmar, setMagmar] = useState<any>({});
    const [pinsir, setPinsir] = useState<any>({});
    const [tauros, setTauros] = useState<any>({});
    const [magikarp, setMagikarp] = useState<any>({});
    const [gyarados, setGyarados] = useState<any>({});
    const [lapras, setLapras] = useState<any>({});
    const [ditto, setDitto] = useState<any>({});
    const [eevee, setEevee] = useState<any>({});
    const [vaporeon, setVaporeon] = useState<any>({});
    const [jolteon, setJolteon] = useState<any>({});
    const [flareon, setFlareon] = useState<any>({});
    const [porygon, setPorygon] = useState<any>({});
    const [omanyte, setOmanyte] = useState<any>({});
    const [omastar, setOmastar] = useState<any>({});
    const [kabuto, setKabuto] = useState<any>({});
    const [kabutops, setKabutops] = useState<any>({});
    const [aerodactyl, setAerodactyl] = useState<any>({});
    const [snorlax, setSnorlax] = useState<any>({});
    const [articuno, setArticuno] = useState<any>({});
    const [zapdos, setZapdos] = useState<any>({});
    const [moltres, setMoltres] = useState<any>({});
    const [dratini, setDratini] = useState<any>({});
    const [dragonair, setDragonair] = useState<any>({});
    const [dragonite, setDragonite] = useState<any>({});
    const [mewtwo, setMewtwo] = useState<any>({});
    const [mew, setMew] = useState<any>({});


    const [locationBulbasaur, setLocationBulbasaur] = useState<any>({});
    const [locationIvysaur, setLocationIvysaur] = useState<any>({});
    const [locationVenusaur, setLocationVenusaur] = useState<any>({});
    const [locationCharmander, setLocationCharmander] = useState<any>({});
    const [locationCharmeleon, setLocationCharmeleon] = useState<any>({});
    const [locationCharizard, setLocationCharizard] = useState<any>({});
    const [locationSquirtle, setLocationSquirtle] = useState<any>({});
    const [locationWartortle, setLocationWartortle] = useState<any>({});
    const [locationBlastoise, setLocationBlastoise] = useState<any>({});
    const [locationCaterpie, setLocationCaterpie] = useState<any>({});
    const [locationMetapod, setLocationMetapod] = useState<any>({});
    const [locationButterfree, setLocationButterfree] = useState<any>({});
    const [locationWeedle, setLocationWeedle] = useState<any>({});
    const [locationKakuna, setLocationKakuna] = useState<any>({});
    const [locationBeedrill, setLocationBeedrill] = useState<any>({});
    const [locationPidgey, setLocationPidgey] = useState<any>({});
    const [locationPidgeotto, setLocationPidgeotto] = useState<any>({});
    const [locationPidgeot, setLocationPidgeot] = useState<any>({});
    const [locationRattata, setLocationRattata] = useState<any>({});
    const [locationRaticate, setLocationRaticate] = useState<any>({});
    const [locationSpearow, setLocationSpearow] = useState<any>({});
    const [locationFearow, setLocationFearow] = useState<any>({});
    const [locationEkans, setLocationEkans] = useState<any>({});
    const [locationArbok, setLocationArbok] = useState<any>({});
    const [locationPikachu, setLocationPikachu] = useState<any>({});
    const [locationRaichu, setLocationRaichu] = useState<any>({});
    const [locationSandshrew, setLocationSandshrew] = useState<any>({});
    const [locationSandslash, setLocationSandslash] = useState<any>({});
    const [locationNidoranf, setLocationNidoranf] = useState<any>({});
    const [locationNidorina, setLocationNidorina] = useState<any>({});
    const [locationNidoqueen, setLocationNidoqueen] = useState<any>({});
    const [locationNidoranm, setLocationNidoranm] = useState<any>({});
    const [locationNidorino, setLocationNidorino] = useState<any>({});
    const [locationNidoking, setLocationNidoking] = useState<any>({});
    const [locationClefairy, setLocationClefairy] = useState<any>({});
    const [locationClefable, setLocationClefable] = useState<any>({});
    const [locationVulpix, setLocationVulpix] = useState<any>({});
    const [locationNinetales, setLocationNinetales] = useState<any>({});
    const [locationJigglypuff, setLocationJigglypuff] = useState<any>({});
    const [locationWigglytuff, setLocationWigglytuff] = useState<any>({});
    const [locationZubat, setLocationZubat] = useState<any>({});
    const [locationGolbat, setLocationGolbat] = useState<any>({});
    const [locationOddish, setLocationOddish] = useState<any>({});
    const [locationGloom, setLocationGloom] = useState<any>({});
    const [locationVileplume, setLocationVileplume] = useState<any>({});
    const [locationParas, setLocationParas] = useState<any>({});
    const [locationParasect, setLocationParasect] = useState<any>({});
    const [locationVenonat, setLocationVenonat] = useState<any>({});
    const [locationVenomoth, setLocationVenomoth] = useState<any>({});
    const [locationDiglett, setLocationDiglett] = useState<any>({});
    const [locationDugtrio, setLocationDugtrio] = useState<any>({});
    const [locationMeowth, setLocationMeowth] = useState<any>({});
    const [locationPersian, setLocationPersian] = useState<any>({});
    const [locationPsyduck, setLocationPsyduck] = useState<any>({});
    const [locationGolduck, setLocationGolduck] = useState<any>({});
    const [locationMankey, setLocationMankey] = useState<any>({});
    const [locationPrimeape, setLocationPrimeape] = useState<any>({});
    const [locationGrowlithe, setLocationGrowlithe] = useState<any>({});
    const [locationArcanine, setLocationArcanine] = useState<any>({});
    const [locationPoliwag, setLocationPoliwag] = useState<any>({});
    const [locationPoliwhirl, setLocationPoliwhirl] = useState<any>({});
    const [locationPoliwrath, setLocationPoliwrath] = useState<any>({});
    const [locationAbra, setLocationAbra] = useState<any>({});
    const [locationKadabra, setLocationKadabra] = useState<any>({});
    const [locationAlakazam, setLocationAlakazam] = useState<any>({});
    const [locationMachop, setLocationMachop] = useState<any>({});
    const [locationMachoke, setLocationMachoke] = useState<any>({});
    const [locationMachamp, setLocationMachamp] = useState<any>({});
    const [locationBellsprout, setLocationBellsprout] = useState<any>({});
    const [locationWeepinbell, setLocationWeepinbell] = useState<any>({});
    const [locationVictreebel, setLocationVictreebel] = useState<any>({});
    const [locationTentacool, setLocationTentacool] = useState<any>({});
    const [locationTentacruel, setLocationTentacruel] = useState<any>({});
    const [locationGeodude, setLocationGeodude] = useState<any>({});
    const [locationGraveler, setLocationGraveler] = useState<any>({});
    const [locationGolem, setLocationGolem] = useState<any>({});
    const [locationPonyta, setLocationPonyta] = useState<any>({});
    const [locationRapidash, setLocationRapidash] = useState<any>({});
    const [locationSlowpoke, setLocationSlowpoke] = useState<any>({});
    const [locationSlowbro, setLocationSlowbro] = useState<any>({});
    const [locationMagnemite, setLocationMagnemite] = useState<any>({});
    const [locationMagneton, setLocationMagneton] = useState<any>({});
    const [locationFarfetchd, setLocationFarfetchd] = useState<any>({});
    const [locationDoduo, setLocationDoduo] = useState<any>({});
    const [locationDodrio, setLocationDodrio] = useState<any>({});
    const [locationSeel, setLocationSeel] = useState<any>({});
    const [locationDewgong, setLocationDewgong] = useState<any>({});
    const [locationGrimer, setLocationGrimer] = useState<any>({});
    const [locationMuk, setLocationMuk] = useState<any>({});
    const [locationShellder, setLocationShellder] = useState<any>({});
    const [locationCloyster, setLocationCloyster] = useState<any>({});
    const [locationGastly, setLocationGastly] = useState<any>({});
    const [locationHaunter, setLocationHaunter] = useState<any>({});
    const [locationGengar, setLocationGengar] = useState<any>({});
    const [locationOnix, setLocationOnix] = useState<any>({});
    const [locationDrowzee, setLocationDrowzee] = useState<any>({});
    const [locationHypno, setLocationHypno] = useState<any>({});
    const [locationKrabby, setLocationKrabby] = useState<any>({});
    const [locationKingler, setLocationKingler] = useState<any>({});
    const [locationVoltorb, setLocationVoltorb] = useState<any>({});
    const [locationElectrode, setLocationElectrode] = useState<any>({});
    const [locationExeggcute, setLocationExeggcute] = useState<any>({});
    const [locationExeggutor, setLocationExeggutor] = useState<any>({});
    const [locationCubone, setLocationCubone] = useState<any>({});
    const [locationMarowak, setLocationMarowak] = useState<any>({});
    const [locationHitmonlee, setLocationHitmonlee] = useState<any>({});
    const [locationHitmonchan, setLocationHitmonchan] = useState<any>({});
    const [locationLickitung, setLocationLickitung] = useState<any>({});
    const [locationKoffing, setLocationKoffing] = useState<any>({});
    const [locationWeezing, setLocationWeezing] = useState<any>({});
    const [locationRhyhorn, setLocationRhyhorn] = useState<any>({});
    const [locationRhydon, setLocationRhydon] = useState<any>({});
    const [locationChansey, setLocationChansey] = useState<any>({});
    const [locationTangela, setLocationTangela] = useState<any>({});
    const [locationKangaskhan, setLocationKangaskhan] = useState<any>({});
    const [locationHorsea, setLocationHorsea] = useState<any>({});
    const [locationSeadra, setLocationSeadra] = useState<any>({});
    const [locationGoldeen, setLocationGoldeen] = useState<any>({});
    const [locationSeaking, setLocationSeaking] = useState<any>({});
    const [locationStaryu, setLocationStaryu] = useState<any>({});
    const [locationStarmie, setLocationStarmie] = useState<any>({});
    const [locationMrmime, setLocationMrmime] = useState<any>({});
    const [locationScyther, setLocationScyther] = useState<any>({});
    const [locationJynx, setLocationJynx] = useState<any>({});
    const [locationElectabuzz, setLocationElectabuzz] = useState<any>({});
    const [locationMagmar, setLocationMagmar] = useState<any>({});
    const [locationPinsir, setLocationPinsir] = useState<any>({});
    const [locationTauros, setLocationTauros] = useState<any>({});
    const [locationMagikarp, setLocationMagikarp] = useState<any>({});
    const [locationGyarados, setLocationGyarados] = useState<any>({});
    const [locationLapras, setLocationLapras] = useState<any>({});
    const [locationDitto, setLocationDitto] = useState<any>({});
    const [locationEevee, setLocationEevee] = useState<any>({});
    const [locationVaporeon, setLocationVaporeon] = useState<any>({});
    const [locationJolteon, setLocationJolteon] = useState<any>({});
    const [locationFlareon, setLocationFlareon] = useState<any>({});
    const [locationPorygon, setLocationPorygon] = useState<any>({});
    const [locationOmanyte, setLocationOmanyte] = useState<any>({});
    const [locationOmastar, setLocationOmastar] = useState<any>({});
    const [locationKabuto, setLocationKabuto] = useState<any>({});
    const [locationKabutops, setLocationKabutops] = useState<any>({});
    const [locationAerodactyl, setLocationAerodactyl] = useState<any>({});
    const [locationSnorlax, setLocationSnorlax] = useState<any>({});
    const [locationArticuno, setLocationArticuno] = useState<any>({});
    const [locationZapdos, setLocationZapdos] = useState<any>({});
    const [locationMoltres, setLocationMoltres] = useState<any>({});
    const [locationDratini, setLocationDratini] = useState<any>({});
    const [locationDragonair, setLocationDragonair] = useState<any>({});
    const [locationDragonite, setLocationDragonite] = useState<any>({});
    const [locationMewtwo, setLocationMewtwo] = useState<any>({});
    const [locationMew, setLocationMew] = useState<any>({});

    const [areaBulbasaur, setAreaBulbasaur] = useState<any>([]);
    const [placeBulbasaur, setPlaceBulbasaur] = useState<any>([]);

    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [selected, setSelected] = useState<any>({});
    const playerRef = useRef<VideoPlayerRef>(null);
    


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
            fetch('https://pokeapi.co/api/v2/pokemon/hitmonlee'),
            fetch('https://pokeapi.co/api/v2/pokemon/hitmonchan'),
            fetch('https://pokeapi.co/api/v2/pokemon/lickitung'),
            fetch('https://pokeapi.co/api/v2/pokemon/koffing'),
            fetch('https://pokeapi.co/api/v2/pokemon/weezing'),
            fetch('https://pokeapi.co/api/v2/pokemon/rhyhorn'),
            fetch('https://pokeapi.co/api/v2/pokemon/rhydon'),
            fetch('https://pokeapi.co/api/v2/pokemon/chansey'),
            fetch('https://pokeapi.co/api/v2/pokemon/tangela'),
            fetch('https://pokeapi.co/api/v2/pokemon/kangaskhan'),
            fetch('https://pokeapi.co/api/v2/pokemon/horsea'),
            fetch('https://pokeapi.co/api/v2/pokemon/seadra'),
            fetch('https://pokeapi.co/api/v2/pokemon/goldeen'),
            fetch('https://pokeapi.co/api/v2/pokemon/seaking'),
            fetch('https://pokeapi.co/api/v2/pokemon/staryu'),
            fetch('https://pokeapi.co/api/v2/pokemon/starmie'),
            fetch('https://pokeapi.co/api/v2/pokemon/mr-mime'),
            fetch('https://pokeapi.co/api/v2/pokemon/scyther'),
            fetch('https://pokeapi.co/api/v2/pokemon/jynx'),
            fetch('https://pokeapi.co/api/v2/pokemon/electabuzz'),
            fetch('https://pokeapi.co/api/v2/pokemon/magmar'),
            fetch('https://pokeapi.co/api/v2/pokemon/pinsir'),
            fetch('https://pokeapi.co/api/v2/pokemon/tauros'),
            fetch('https://pokeapi.co/api/v2/pokemon/magikarp'),
            fetch('https://pokeapi.co/api/v2/pokemon/gyarados'),
            fetch('https://pokeapi.co/api/v2/pokemon/lapras'),
            fetch('https://pokeapi.co/api/v2/pokemon/ditto'),
            fetch('https://pokeapi.co/api/v2/pokemon/eevee'),
            fetch('https://pokeapi.co/api/v2/pokemon/vaporeon'),
            fetch('https://pokeapi.co/api/v2/pokemon/jolteon'),
            fetch('https://pokeapi.co/api/v2/pokemon/flareon'),
            fetch('https://pokeapi.co/api/v2/pokemon/porygon'),
            fetch('https://pokeapi.co/api/v2/pokemon/omanyte'),
            fetch('https://pokeapi.co/api/v2/pokemon/omastar'),
            fetch('https://pokeapi.co/api/v2/pokemon/kabuto'),
            fetch('https://pokeapi.co/api/v2/pokemon/kabutops'),
            fetch('https://pokeapi.co/api/v2/pokemon/aerodactyl'),
            fetch('https://pokeapi.co/api/v2/pokemon/snorlax'),
            fetch('https://pokeapi.co/api/v2/pokemon/articuno'),
            fetch('https://pokeapi.co/api/v2/pokemon/zapdos'),
            fetch('https://pokeapi.co/api/v2/pokemon/moltres'),
            fetch('https://pokeapi.co/api/v2/pokemon/dratini'),
            fetch('https://pokeapi.co/api/v2/pokemon/dragonair'),
            fetch('https://pokeapi.co/api/v2/pokemon/dragonite'),
            fetch('https://pokeapi.co/api/v2/pokemon/mewtwo'),
            fetch('https://pokeapi.co/api/v2/pokemon/mew'),
            fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/ivysaur/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/venusaur/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/charmander/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/charmeleon/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/charizard/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/squirtle/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/wartortle/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/blastoise/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/caterpie/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/metapod/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/butterfree/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/weedle/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/kakuna/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/beedrill/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/pidgey/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/pidgeotto/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/pidgeot/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/rattata/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/raticate/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/spearow/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/fearow/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/ekans/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/arbok/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/pikachu/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/raichu/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/sandshrew/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/sandslash/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/nidoran-f/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/Nidorina/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/Nidoqueen/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/nidoran-m/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/nidorino/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/nidoking/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/clefairy/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/clefable/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/vulpix/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/ninetales/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/wigglytuff/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/zubat/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/golbat/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/oddish/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/gloom/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/vileplume/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/paras/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/parasect/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/venonat/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/venomoth/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/diglett/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/dugtrio/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/meowth/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/persian/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/psyduck/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/golduck/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/mankey/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/primeape/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/growlithe/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/arcanine/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/poliwag/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/poliwhirl/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/poliwrath/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/abra/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/kadabra/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/Alakazam/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/machop/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/machoke/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/machamp/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/bellsprout/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/weepinbell/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/victreebel/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/tentacool/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/tentacruel/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/geodude/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/graveler/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/golem/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/ponyta/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/rapidash/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/slowpoke/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/slowbro/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/magnemite/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/magneton/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/farfetchd/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/doduo/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/dodrio/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/seel/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/dewgong/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/grimer/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/muk/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/shellder/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/cloyster/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/gastly/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/haunter/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/gengar/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/onix/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/drowzee/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/hypno/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/krabby/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/kingler/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/voltorb/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/electrode/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/exeggcute/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/exeggutor/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/cubone/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/marowak/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/hitmonlee/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/hitmonchan/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/lickitung/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/koffing/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/weezing/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/rhyhorn/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/rhydon/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/chansey/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/tangela/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/kangaskhan/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/horsea/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/seadra/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/goldeen/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/seaking/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/staryu/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/starmie/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/mr-mime/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/scyther/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/jynx/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/electabuzz/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/magmar/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/pinsir/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/tauros/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/magikarp/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/gyarados/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/lapras/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/ditto/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/eevee/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/vaporeon/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/jolteon/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/flareon/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/porygon/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/omanyte/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/omastar/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/kabuto/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/kabutops/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/aerodactyl/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/snorlax/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/articuno/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/zapdos/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/moltres/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/dratini/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/dragonair/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/dragonite/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/mewtwo/encounters'),
            fetch('https://pokeapi.co/api/v2/pokemon/mew/encounters'),
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
            resHitmonlee,
            resHitmonchan,
            resLickitung,
            resKoffing,
            resWeezing,
            resRhyhorn,
            resRhydon,
            resChansey,
            resTangela,
            resKangaskhan,
            resHorsea,
            resSeadra,
            resGoldeen,
            resSeaking,
            resStaryu,
            resStarmie,
            resMrmime,
            resScyther,
            resJynx,
            resElectabuzz,
            resMagmar,
            resPinsir,
            resTauros,
            resMagikarp,
            resGyarados,
            resLapras,
            resDitto,
            resEevee,
            resVaporeon,
            resJolteon,
            resFlareon,
            resPorygon,
            resOmanyte,
            resOmastar,
            resKabuto,
            resKabutops,
            resAerodactyl,
            resSnorlax,
            resArticuno,
            resZapdos,
            resMoltres,
            resDratini,
            resDragonair,
            resDragonite,
            resMewtwo,
            resMew,
            resLocationBulbasaur,
            resLocationIvysaur,
            resLocationVenusaur, 
            resLocationCharmander, 
            resLocationCharmeleon, 
            resLocationCharizard, 
            resLocationSquirtle, 
            resLocationWartortle, 
            resLocationBlastoise, 
            resLocationCaterpie, 
            resLocationMetapod, 
            resLocationButterfree, 
            resLocationWeedle, 
            resLocationKakuna, 
            resLocationBeedrill, 
            resLocationPidgey, 
            resLocationPidgeotto, 
            resLocationPidgeot,
            resLocationRattata,
            resLocationRaticate,
            resLocationSpearow,
            resLocationFearow,
            resLocationEkans,
            resLocationArbok,
            resLocationPikachu,
            resLocationRaichu,
            resLocationSandshrew,
            resLocationSandslash,
            resLocationNidoranf,
            resLocationNidorina,
            resLocationNidoqueen,
            resLocationNidoranm,
            resLocationNidorino,
            resLocationNidoking,
            resLocationClefairy,
            resLocationClefable,
            resLocationVulpix,
            resLocationNinetales,
            resLocationJigglypuff,
            resLocationWigglytuff,
            resLocationZubat,
            resLocationGolbat,
            resLocationOddish,
            resLocationGloom,
            resLocationVileplume,
            resLocationParas,
            resLocationParasect,
            resLocationVenonat,
            resLocationVenomoth,
            resLocationDiglett,
            resLocationDugtrio,
            resLocationMeowth,
            resLocationPersian,
            resLocationPsyduck,
            resLocationGolduck,
            resLocationMankey,
            resLocationPrimeape,
            resLocationGrowlithe,
            resLocationArcanine,
            resLocationPoliwag,
            resLocationPoliwhirl,
            resLocationPoliwrath,
            resLocationAbra,
            resLocationKadabra,
            resLocationAlakazam,
            resLocationMachop,
            resLocationMachoke,
            resLocationMachamp,
            resLocationBellsprout,
            resLocationWeepinbell,
            resLocationVictreebel,
            resLocationTentacool,
            resLocationTentacruel,
            resLocationGeodude,
            resLocationGraveler,
            resLocationGolem,
            resLocationPonyta,
            resLocationRapidash,
            resLocationSlowpoke,
            resLocationSlowbro,
            resLocationMagnemite,
            resLocationMagneton,
            resLocationFarfetchd,
            resLocationDoduo,
            resLocationDodrio,
            resLocationSeel,
            resLocationDewgong,
            resLocationGrimer,
            resLocationMuk,
            resLocationShellder,
            resLocationCloyster,
            resLocationGastly,
            resLocationHaunter,
            resLocationGengar,
            resLocationOnix,
            resLocationDrowzee,
            resLocationHypno,
            resLocationKrabby,
            resLocationKingler,
            resLocationVoltorb,
            resLocationElectrode,
            resLocationExeggcute,
            resLocationExeggutor,
            resLocationCubone,
            resLocationMarowak,
            resLocationHitmonlee,
            resLocationHitmonchan,
            resLocationLickitung,
            resLocationKoffing,
            resLocationWeezing,
            resLocationRhyhorn,
            resLocationRhydon,
            resLocationChansey,
            resLocationTangela,
            resLocationKangaskhan,
            resLocationHorsea,
            resLocationSeadra,
            resLocationGoldeen,
            resLocationSeaking,
            resLocationStaryu,
            resLocationStarmie,
            resLocationMrmime,
            resLocationScyther,
            resLocationJynx,
            resLocationElectabuzz,
            resLocationMagmar,
            resLocationPinsir,
            resLocationTauros,
            resLocationMagikarp,
            resLocationGyarados,
            resLocationLapras,
            resLocationDitto,
            resLocationEevee,
            resLocationVaporeon,
            resLocationJolteon,
            resLocationFlareon,
            resLocationPorygon,
            resLocationOmanyte,
            resLocationOmastar,
            resLocationKabuto,
            resLocationKabutops,
            resLocationAerodactyl,
            resLocationSnorlax,
            resLocationArticuno,
            resLocationZapdos,
            resLocationMoltres,
            resLocationDratini,
            resLocationDragonair,
            resLocationDragonite,
            resLocationMewtwo,
            resLocationMew,
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
            resHitmonlee.json(),
            resHitmonchan.json(),
            resLickitung.json(),
            resKoffing.json(),
            resWeezing.json(),
            resRhyhorn.json(),
            resRhydon.json(),
            resChansey.json(),
            resTangela.json(),
            resKangaskhan.json(),
            resHorsea.json(),
            resSeadra.json(),
            resGoldeen.json(),
            resSeaking.json(),
            resStaryu.json(),
            resStarmie.json(),
            resMrmime.json(),
            resScyther.json(),
            resJynx.json(),
            resElectabuzz.json(),
            resMagmar.json(),
            resPinsir.json(),
            resTauros.json(),
            resMagikarp.json(),
            resGyarados.json(),
            resLapras.json(),
            resDitto.json(),
            resEevee.json(),
            resVaporeon.json(),
            resJolteon.json(),
            resFlareon.json(),
            resPorygon.json(),
            resOmanyte.json(),
            resOmastar.json(),
            resKabuto.json(),
            resKabutops.json(),
            resAerodactyl.json(),
            resSnorlax.json(),
            resArticuno.json(),
            resZapdos.json(),
            resMoltres.json(),
            resDratini.json(),
            resDragonair.json(),
            resDragonite.json(),
            resMewtwo.json(),
            resMew.json(),
            resLocationBulbasaur.json(),
            resLocationIvysaur.json(),
            resLocationVenusaur.json(), 
            resLocationCharmander.json(), 
            resLocationCharmeleon.json(), 
            resLocationCharizard.json(), 
            resLocationSquirtle.json(), 
            resLocationWartortle.json(), 
            resLocationBlastoise.json(), 
            resLocationCaterpie.json(), 
            resLocationMetapod.json(), 
            resLocationButterfree.json(), 
            resLocationWeedle.json(), 
            resLocationKakuna.json(), 
            resLocationBeedrill.json(), 
            resLocationPidgey.json(), 
            resLocationPidgeotto.json(), 
            resLocationPidgeot.json(),
            resLocationRattata.json(),
            resLocationRaticate.json(),
            resLocationSpearow.json(),
            resLocationFearow.json(),
            resLocationEkans.json(),
            resLocationArbok.json(),
            resLocationPikachu.json(),
            resLocationRaichu.json(),
            resLocationSandshrew.json(),
            resLocationSandslash.json(),
            resLocationNidoranf.json(),
            resLocationNidorina.json(),
            resLocationNidoqueen.json(),
            resLocationNidoranm.json(),
            resLocationNidorino.json(),
            resLocationNidoking.json(),
            resLocationClefairy.json(),
            resLocationClefable.json(),
            resLocationVulpix.json(),
            resLocationNinetales.json(),
            resLocationJigglypuff.json(),
            resLocationWigglytuff.json(),
            resLocationZubat.json(),
            resLocationGolbat.json(),
            resLocationOddish.json(),
            resLocationGloom.json(),
            resLocationVileplume.json(),
            resLocationParas.json(),
            resLocationParasect.json(),
            resLocationVenonat.json(),
            resLocationVenomoth.json(),
            resLocationDiglett.json(),
            resLocationDugtrio.json(),
            resLocationMeowth.json(),
            resLocationPersian.json(),
            resLocationPsyduck.json(),
            resLocationGolduck.json(),
            resLocationMankey.json(),
            resLocationPrimeape.json(),
            resLocationGrowlithe.json(),
            resLocationArcanine.json(),
            resLocationPoliwag.json(),
            resLocationPoliwhirl.json(),
            resLocationPoliwrath.json(),
            resLocationAbra.json(),
            resLocationKadabra.json(),
            resLocationAlakazam.json(),
            resLocationMachop.json(),
            resLocationMachoke.json(),
            resLocationMachamp.json(),
            resLocationBellsprout.json(),
            resLocationWeepinbell.json(),
            resLocationVictreebel.json(),
            resLocationTentacool.json(),
            resLocationTentacruel.json(),
            resLocationGeodude.json(),
            resLocationGraveler.json(),
            resLocationGolem.json(),
            resLocationPonyta.json(),
            resLocationRapidash.json(),
            resLocationSlowpoke.json(),
            resLocationSlowbro.json(),
            resLocationMagnemite.json(),
            resLocationMagneton.json(),
            resLocationFarfetchd.json(),
            resLocationDoduo.json(),
            resLocationDodrio.json(),
            resLocationSeel.json(),
            resLocationDewgong.json(),
            resLocationGrimer.json(),
            resLocationMuk.json(),
            resLocationShellder.json(),
            resLocationCloyster.json(),
            resLocationGastly.json(),
            resLocationHaunter.json(),
            resLocationGengar.json(),
            resLocationOnix.json(),
            resLocationDrowzee.json(),
            resLocationHypno.json(),
            resLocationKrabby.json(),
            resLocationKingler.json(),
            resLocationVoltorb.json(),
            resLocationElectrode.json(),
            resLocationExeggcute.json(),
            resLocationExeggutor.json(),
            resLocationCubone.json(),
            resLocationMarowak.json(),
            resLocationHitmonlee.json(),
            resLocationHitmonchan.json(),
            resLocationLickitung.json(),
            resLocationKoffing.json(),
            resLocationWeezing.json(),
            resLocationRhyhorn.json(),
            resLocationRhydon.json(),
            resLocationChansey.json(),
            resLocationTangela.json(),
            resLocationKangaskhan.json(),
            resLocationHorsea.json(),
            resLocationSeadra.json(),
            resLocationGoldeen.json(),
            resLocationSeaking.json(),
            resLocationStaryu.json(),
            resLocationStarmie.json(),
            resLocationMrmime.json(),
            resLocationScyther.json(),
            resLocationJynx.json(),
            resLocationElectabuzz.json(),
            resLocationMagmar.json(),
            resLocationPinsir.json(),
            resLocationTauros.json(),
            resLocationMagikarp.json(),
            resLocationGyarados.json(),
            resLocationLapras.json(),
            resLocationDitto.json(),
            resLocationEevee.json(),
            resLocationVaporeon.json(),
            resLocationJolteon.json(),
            resLocationFlareon.json(),
            resLocationPorygon.json(),
            resLocationOmanyte.json(),
            resLocationOmastar.json(),
            resLocationKabuto.json(),
            resLocationKabutops.json(),
            resLocationAerodactyl.json(),
            resLocationSnorlax.json(),
            resLocationArticuno.json(),
            resLocationZapdos.json(),
            resLocationMoltres.json(),
            resLocationDratini.json(),
            resLocationDragonair.json(),
            resLocationDragonite.json(),
            resLocationMewtwo.json(),
            resLocationMew.json(),
        ])
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
        dataHitmonlee,
        dataHitmonchan,
        dataLickitung,
        dataKoffing,
        dataWeezing,
        dataRhyhorn,
        dataRhydon,
        dataChansey,
        dataTangela,
        dataKangaskhan,
        dataHorsea,
        dataSeadra,
        dataGoldeen,
        dataSeaking,
        dataStaryu,
        dataStarmie,
        dataMrmime,
        dataScyther,
        dataJynx,
        dataElectabuzz,
        dataMagmar,
        dataPinsir,
        dataTauros,
        dataMagikarp,
        dataGyarados,
        dataLapras,
        dataDitto,
        dataEevee,
        dataVaporeon,
        dataJolteon,
        dataFlareon,
        dataPorygon,
        dataOmanyte,
        dataOmastar,
        dataKabuto,
        dataKabutops,
        dataAerodactyl,
        dataSnorlax,
        dataArticuno,
        dataZapdos,
        dataMoltres,
        dataDratini,
        dataDragonair,
        dataDragonite,
        dataMewtwo,
        dataMew,
        dataLocationBulbasaur,
        dataLocationIvysaur,
        dataLocationVenusaur, 
        dataLocationCharmander, 
        dataLocationCharmeleon, 
        dataLocationCharizard, 
        dataLocationSquirtle, 
        dataLocationWartortle, 
        dataLocationBlastoise, 
        dataLocationCaterpie, 
        dataLocationMetapod, 
        dataLocationButterfree, 
        dataLocationWeedle, 
        dataLocationKakuna, 
        dataLocationBeedrill, 
        dataLocationPidgey, 
        dataLocationPidgeotto, 
        dataLocationPidgeot,
        dataLocationRattata,
        dataLocationRaticate,
        dataLocationSpearow,
        dataLocationFearow,
        dataLocationEkans,
        dataLocationArbok,
        dataLocationPikachu,
        dataLocationRaichu,
        dataLocationSandshrew,
        dataLocationSandslash,
        dataLocationNidoranf,
        dataLocationNidorina,
        dataLocationNidoqueen,
        dataLocationNidoranm,
        dataLocationNidorino,
        dataLocationNidoking,
        dataLocationClefairy,
        dataLocationClefable,
        dataLocationVulpix,
        dataLocationNinetales,
        dataLocationJigglypuff,
        dataLocationWigglytuff,
        dataLocationZubat,
        dataLocationGolbat,
        dataLocationOddish,
        dataLocationGloom,
        dataLocationVileplume,
        dataLocationParas,
        dataLocationParasect,
        dataLocationVenonat,
        dataLocationVenomoth,
        dataLocationDiglett,
        dataLocationDugtrio,
        dataLocationMeowth,
        dataLocationPersian,
        dataLocationPsyduck,
        dataLocationGolduck,
        dataLocationMankey,
        dataLocationPrimeape,
        dataLocationGrowlithe,
        dataLocationArcanine,
        dataLocationPoliwag,
        dataLocationPoliwhirl,
        dataLocationPoliwrath,
        dataLocationAbra,
        dataLocationKadabra,
        dataLocationAlakazam,
        dataLocationMachop,
        dataLocationMachoke,
        dataLocationMachamp,
        dataLocationBellsprout,
        dataLocationWeepinbell,
        dataLocationVictreebel,
        dataLocationTentacool,
        dataLocationTentacruel,
        dataLocationGeodude,
        dataLocationGraveler,
        dataLocationGolem,
        dataLocationPonyta,
        dataLocationRapidash,
        dataLocationSlowpoke,
        dataLocationSlowbro,
        dataLocationMagnemite,
        dataLocationMagneton,
        dataLocationFarfetchd,
        dataLocationDoduo,
        dataLocationDodrio,
        dataLocationSeel,
        dataLocationDewgong,
        dataLocationGrimer,
        dataLocationMuk,
        dataLocationShellder,
        dataLocationCloyster,
        dataLocationGastly,
        dataLocationHaunter,
        dataLocationGengar,
        dataLocationOnix,
        dataLocationDrowzee,
        dataLocationHypno,
        dataLocationKrabby,
        dataLocationKingler,
        dataLocationVoltorb,
        dataLocationElectrode,
        dataLocationExeggcute,
        dataLocationExeggutor,
        dataLocationCubone,
        dataLocationMarowak,
        dataLocationHitmonlee,
        dataLocationHitmonchan,
        dataLocationLickitung,
        dataLocationKoffing,
        dataLocationWeezing,
        dataLocationRhyhorn,
        dataLocationRhydon,
        dataLocationChansey,
        dataLocationTangela,
        dataLocationKangaskhan,
        dataLocationHorsea,
        dataLocationSeadra,
        dataLocationGoldeen,
        dataLocationSeaking,
        dataLocationStaryu,
        dataLocationStarmie,
        dataLocationMrmime,
        dataLocationScyther,
        dataLocationJynx,
        dataLocationElectabuzz,
        dataLocationMagmar,
        dataLocationPinsir,
        dataLocationTauros,
        dataLocationMagikarp,
        dataLocationGyarados,
        dataLocationLapras,
        dataLocationDitto,
        dataLocationEevee,
        dataLocationVaporeon,
        dataLocationJolteon,
        dataLocationFlareon,
        dataLocationPorygon,
        dataLocationOmanyte,
        dataLocationOmastar,
        dataLocationKabuto,
        dataLocationKabutops,
        dataLocationAerodactyl,
        dataLocationSnorlax,
        dataLocationArticuno,
        dataLocationZapdos,
        dataLocationMoltres,
        dataLocationDratini,
        dataLocationDragonair,
        dataLocationDragonite,
        dataLocationMewtwo,
        dataLocationMew
    ]) => {
            // setLoading(true);
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
        setHitmonlee(dataHitmonlee);
        setHitmonchan(dataHitmonchan);
        setLickitung(dataLickitung);
        setKoffing(dataKoffing);
        setWeezing(dataWeezing);
        setRhyhorn(dataRhyhorn);
        setRhydon(dataRhydon);
        setChansey(dataChansey);
        setTangela(dataTangela);
        setKangaskhan(dataKangaskhan);
        setHorsea(dataHorsea);
        setSeadra(dataSeadra);
        setGoldeen(dataGoldeen);
        setSeaking(dataSeaking);
        setStaryu(dataStaryu);
        setStarmie(dataStarmie);
        setMrmime(dataMrmime);
        setScyther(dataScyther);
        setJynx(dataJynx);
        setElectabuzz(dataElectabuzz);
        setMagmar(dataMagmar);
        setPinsir(dataPinsir);
        setTauros(dataTauros);
        setMagikarp(dataMagikarp);
        setGyarados(dataGyarados);
        setLapras(dataLapras);
        setDitto(dataDitto);
        setEevee(dataEevee);
        setVaporeon(dataVaporeon);
        setJolteon(dataJolteon);
        setFlareon(dataFlareon);
        setPorygon(dataPorygon);
        setOmanyte(dataOmanyte);
        setOmastar(dataOmastar);
        setKabuto(dataKabuto);
        setKabutops(dataKabutops);
        setAerodactyl(dataAerodactyl);
        setSnorlax(dataSnorlax);
        setArticuno(dataArticuno);
        setZapdos(dataZapdos);
        setMoltres(dataMoltres);
        setDratini(dataDratini);
        setDragonair(dataDragonair);
        setDragonite(dataDragonite);
        setMewtwo(dataMewtwo);
        setMew(dataMew);
        setLocationBulbasaur(dataLocationBulbasaur);
        setLocationIvysaur(dataLocationIvysaur);
        setLocationVenusaur(dataLocationVenusaur);
        setLocationCharmander(dataLocationCharmander);
        setLocationCharmeleon(dataLocationCharmeleon);
        setLocationCharizard(dataLocationCharizard);
        setLocationSquirtle(dataLocationSquirtle);
        setLocationWartortle(dataLocationWartortle);
        setLocationBlastoise(dataLocationBlastoise);
        setLocationCaterpie(dataLocationCaterpie);
        setLocationMetapod(dataLocationMetapod);
        setLocationButterfree(dataLocationButterfree);
        setLocationWeedle(dataLocationWeedle);
        setLocationKakuna(dataLocationKakuna);
        setLocationBeedrill(dataLocationBeedrill);
        setLocationPidgey(dataLocationPidgey);
        setLocationPidgeotto(dataLocationPidgeotto);
        setLocationPidgeot(dataLocationPidgeot);
        setLocationRattata(dataLocationRattata),
        setLocationRaticate(dataLocationRaticate);
        setLocationSpearow(dataLocationSpearow);
        setLocationFearow(dataLocationFearow);
        setLocationEkans(dataLocationEkans);
        setLocationArbok(dataLocationArbok);
        setLocationPikachu(dataLocationPikachu);
        setLocationRaichu(dataLocationRaichu);
        setLocationSandshrew(dataLocationSandshrew);
        setLocationSandslash(dataLocationSandslash);
        setLocationNidoranf(dataLocationNidoranf);
        setLocationNidorina(dataLocationNidorina);
        setLocationNidoqueen(dataLocationNidoqueen);
        setLocationNidoranm(dataLocationNidoranm);
        setLocationNidorino(dataLocationNidorino);
        setLocationNidoking(dataLocationNidoking);
        setLocationClefairy(dataLocationClefairy);
        setLocationClefable(dataLocationClefable);
        setLocationVulpix(dataLocationVulpix);
        setLocationNinetales(dataLocationNinetales);
        setLocationJigglypuff(dataLocationJigglypuff);
        setLocationWigglytuff(dataLocationWigglytuff);
        setLocationZubat(dataLocationZubat);
        setLocationGolbat(dataLocationGolbat);
        setLocationOddish(dataLocationOddish);
        setLocationGloom(dataLocationGloom);
        setLocationVileplume(dataLocationVileplume);
        setLocationParas(dataLocationParas);
        setLocationParasect(dataLocationParasect);
        setLocationVenonat(dataLocationVenonat);
        setLocationVenomoth(dataLocationVenomoth);
        setLocationDiglett(dataLocationDiglett);
        setLocationDugtrio(dataLocationDugtrio);
        setLocationMeowth(dataLocationMeowth);
        setLocationPersian(dataLocationPersian);
        setLocationPsyduck(dataLocationPsyduck);
        setLocationGolduck(dataLocationGolduck);
        setLocationMankey(dataLocationMankey);
        setLocationPrimeape(dataLocationPrimeape);
        setLocationGrowlithe(dataLocationGrowlithe);
        setLocationArcanine(dataLocationArcanine);
        setLocationPoliwag(dataLocationPoliwag);
        setLocationPoliwhirl(dataLocationPoliwhirl);
        setLocationPoliwrath(dataLocationPoliwrath);
        setLocationAbra(dataLocationAbra);
        setLocationKadabra(dataLocationKadabra);
        setLocationAlakazam(dataLocationAlakazam);
        setLocationMachop(dataLocationMachop);
        setLocationMachoke(dataLocationMachoke);
        setLocationMachamp(dataLocationMachamp);
        setLocationBellsprout(dataLocationBellsprout);
        setLocationWeepinbell(dataLocationWeepinbell);
        setLocationVictreebel(dataLocationVictreebel);
        setLocationTentacool(dataLocationTentacool);
        setLocationTentacruel(dataLocationTentacruel);
        setLocationGeodude(dataLocationGeodude);
        setLocationGraveler(dataLocationGraveler);
        setLocationGolem(dataLocationGolem);
        setLocationPonyta(dataLocationPonyta);
        setLocationRapidash(dataLocationRapidash);
        setLocationSlowpoke(dataLocationSlowpoke);
        setLocationSlowbro(dataLocationSlowbro);
        setLocationMagnemite(dataLocationMagnemite);
        setLocationMagneton(dataLocationMagneton);
        setLocationFarfetchd(dataLocationFarfetchd);
        setLocationDoduo(dataLocationDoduo);
        setLocationDodrio(dataLocationDodrio);
        setLocationSeel(dataLocationSeel);
        setLocationDewgong(dataLocationDewgong);
        setLocationGrimer(dataLocationGrimer);
        setLocationMuk(dataLocationMuk);
        setLocationShellder(dataLocationShellder);
        setLocationCloyster(dataLocationCloyster);
        setLocationGastly(dataLocationGastly);
        setLocationHaunter(dataLocationHaunter);
        setLocationGengar(dataLocationGengar);
        setLocationOnix(dataLocationOnix);
        setLocationDrowzee(dataLocationDrowzee);
        setLocationHypno(dataLocationHypno);
        setLocationKrabby(dataLocationKrabby);
        setLocationKingler(dataLocationKingler);
        setLocationVoltorb(dataLocationVoltorb);
        setLocationElectrode(dataLocationElectrode);
        setLocationExeggcute(dataLocationExeggcute);
        setLocationExeggutor(dataLocationExeggutor);
        setLocationCubone(dataLocationCubone);
        setLocationMarowak(dataLocationMarowak);
        setLocationHitmonlee(dataLocationHitmonlee);
        setLocationHitmonchan(dataLocationHitmonchan);
        setLocationLickitung(dataLocationLickitung);
        setLocationKoffing(dataLocationKoffing);
        setLocationWeezing(dataLocationWeezing);
        setLocationRhyhorn(dataLocationRhyhorn);
        setLocationRhydon(dataLocationRhydon);
        setLocationChansey(dataLocationChansey);
        setLocationTangela(dataLocationTangela);
        setLocationKangaskhan(dataLocationKangaskhan);
        setLocationHorsea(dataLocationHorsea);
        setLocationSeadra(dataLocationSeadra);
        setLocationGoldeen(dataLocationGoldeen);
        setLocationSeaking(dataLocationSeaking);
        setLocationStaryu(dataLocationStaryu);
        setLocationStarmie(dataLocationStarmie);
        setLocationMrmime(dataLocationMrmime);
        setLocationScyther(dataLocationScyther);
        setLocationJynx(dataLocationJynx);
        setLocationElectabuzz(dataLocationElectabuzz);
        setLocationMagmar(dataLocationMagmar);
        setLocationPinsir(dataLocationPinsir);
        setLocationTauros(dataLocationTauros);
        setLocationMagikarp(dataLocationMagikarp);
        setLocationGyarados(dataLocationGyarados);
        setLocationLapras(dataLocationLapras);
        setLocationDitto(dataLocationDitto);
        setLocationEevee(dataLocationEevee);
        setLocationVaporeon(dataLocationVaporeon);
        setLocationJolteon(dataLocationJolteon);
        setLocationFlareon(dataLocationFlareon);
        setLocationPorygon(dataLocationPorygon);
        setLocationOmanyte(dataLocationOmanyte);
        setLocationOmastar(dataLocationOmastar);
        setLocationKabuto(dataLocationKabuto);
        setLocationKabutops(dataLocationKabutops);
        setLocationAerodactyl(dataLocationAerodactyl);
        setLocationSnorlax(dataLocationSnorlax);
        setLocationArticuno(dataLocationArticuno);
        setLocationZapdos(dataLocationZapdos);
        setLocationMoltres(dataLocationMoltres);
        setLocationDratini(dataLocationDratini);
        setLocationDragonair(dataLocationDragonair);
        setLocationDragonite(dataLocationDragonite);
        setLocationMewtwo(dataLocationMewtwo);
        setLocationMew(dataLocationMew);
        setLoading(false);
    });
    }, []);    

    // function getLocation = async () => {
    //     await axios.get(bulbasaur.location_area_encounters)
    // }

    useEffect(() => {
        Promise.all([
            // fetch('https://pokeapi.co/api/v2/pokemon/1/encounters')
            async function locationData() {
                try {
                    
                    const lData = await axios.get('https://pokeapi.co/api/v2/pokemon/1/encounters');
                    setPlaceBulbasaur(lData.data.data);
                }
                catch (error) {
                    console.log(error);
                }
            }
        ])

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
        marowak,
        hitmonlee,
        hitmonchan,
        lickitung,
        koffing,
        weezing,
        rhyhorn,
        rhydon,
        chansey,
        tangela,
        kangaskhan,
        horsea,
        seadra,
        goldeen,
        seaking,
        staryu,
        starmie,
        mrmime,
        scyther,
        jynx,
        electabuzz,
        magmar,
        pinsir,
        tauros,
        magikarp,
        gyarados,
        lapras,
        ditto,
        eevee,
        vaporeon,
        jolteon,
        flareon,
        porygon,
        omanyte,
        omastar,
        kabuto,
        kabutops,
        aerodactyl,
        snorlax,
        articuno,
        zapdos,
        moltres,
        dratini,
        dragonair,
        dragonite,
        mewtwo,
        mew
    ];

    const locationData = [
        locationBulbasaur,
        locationIvysaur,
        locationVenusaur,
        locationCharmander,
        locationCharmeleon,
        locationCharizard,
        locationSquirtle,
        locationWartortle,
        locationBlastoise,
        locationCaterpie,
        locationMetapod,
        locationButterfree,
        locationWeedle,
        locationKakuna,
        locationBeedrill,
        locationPidgey,
        locationPidgeotto,
        locationPidgeot,
        locationRattata,
        locationRaticate,
        locationSpearow,
        locationFearow,
        locationEkans,
        locationArbok,
        locationPikachu,
        locationRaichu,
        locationSandshrew,
        locationSandslash,
        locationNidoranf,
        locationNidorina,
        locationNidoqueen,
        locationNidoranm,
        locationNidorino,
        locationNidoking,
        locationClefairy,
        locationClefable,
        locationVulpix,
        locationNinetales,
        locationJigglypuff,
        locationWigglytuff,
        locationZubat,
        locationGolbat,
        locationOddish,
        locationGloom,
        locationVileplume,
        locationParas,
        locationParasect,
        locationVenonat,
        locationVenomoth,
        locationDiglett,
        locationDugtrio,
        locationMeowth,
        locationPersian,
        locationPsyduck,
        locationGolduck,
        locationMankey,
        locationPrimeape,
        locationGrowlithe,
        locationArcanine,
        locationPoliwag,
        locationPoliwhirl,
        locationPoliwrath,
        locationAbra,
        locationKadabra,
        locationAlakazam,
        locationMachop,
        locationMachoke,
        locationMachamp,
        locationBellsprout,
        locationWeepinbell,
        locationVictreebel,
        locationTentacool,
        locationTentacruel,
        locationGeodude,
        locationGraveler,
        locationGolem,
        locationPonyta,
        locationRapidash,
        locationSlowpoke,
        locationSlowbro,
        locationMagnemite,
        locationMagneton,
        locationFarfetchd,
        locationDoduo,
        locationDodrio,
        locationSeel,
        locationDewgong,
        locationGrimer,
        locationMuk,
        locationShellder,
        locationCloyster,
        locationGastly,
        locationHaunter,
        locationGengar,
        locationOnix,
        locationDrowzee,
        locationHypno,
        locationKrabby,
        locationKingler,
        locationVoltorb,
        locationElectrode,
        locationExeggcute,
        locationExeggutor,
        locationCubone,
        locationMarowak,
        locationHitmonlee,
        locationHitmonchan,
        locationLickitung,
        locationKoffing,
        locationWeezing,
        locationRhyhorn,
        locationRhydon,
        locationChansey,
        locationTangela,
        locationKangaskhan,
        locationHorsea,
        locationSeadra,
        locationGoldeen,
        locationSeaking,
        locationStaryu,
        locationStarmie,
        locationMrmime,
        locationScyther,
        locationJynx,
        locationElectabuzz,
        locationMagmar,
        locationPinsir,
        locationTauros,
        locationMagikarp,
        locationGyarados,
        locationLapras,
        locationDitto,
        locationEevee,
        locationVaporeon,
        locationJolteon,
        locationFlareon,
        locationPorygon,
        locationOmanyte,
        locationOmastar,
        locationKabuto,
        locationKabutops,
        locationAerodactyl,
        locationSnorlax,
        locationArticuno,
        locationZapdos,
        locationMoltres,
        locationDratini,
        locationDragonair,
        locationDragonite,
        locationMewtwo,
        locationMew
    ];

    // useEffect((index) => {
    //     let pendingSound;
    //     if (open()) {
    //     pendingSound = new Sound(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${index + 1}.ogg`, Sound.MAIN_BUNDLE, e => {
    //     if (e) {
    //     console.log('Failed to load sound file', e);
    //     return;
    //     }
    //     });
    //     }}
    // )

    function imageLoadHandler(image: any,e: { target: { src: any; }; }) {
        e.target.src = image;
      }



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



            const addRow = () => {
                setExtraSection(<Text>{bulbasaur.name}</Text>);
            }; 
// const cry = new Sound(bulbasaur?.cries?.legacy, (error) => {
// if (error){
//     return error;
// } else {
//     cry.play();
// }
// });

// const cryLink = <Autolink text={bulbasaur.cries.legacy} />






    if (loading) return <Text>Loading...</Text>;
    

return (
        // <>
        <SafeAreaView style={{backgroundColor: 'gray'}}>
            <Text style={{fontSize: 20, color: 'white',  justifyContent: 'center', alignItems: 'center', position: 'absolute', alignSelf: 'center'}}>Mobile Pokedex App</Text>
            <ScrollView>


                {/* <View style={styles.container}>
                    <Pressable style={styles.container} onPress={() => setExpanded(!expanded)}>
                        <View style={{flexDirection: 'column'}}>
                        <Image source={{ uri: bulbasaur?.sprites?.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                        <Text style={styles.text}>{bulbasaur.name}</Text>
                        
                        {/* <Text>{bulbasaur.cries.legacy}</Text> */}
                        {/* <Autolink text={bulbasaur.cries.legacy} /> */}
                        {/* </View>
                    </Pressable> */}

                    {/* {bulbasaur && expanded &&
                    <View style={{flexDirection: 'column'}}>

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

                                <View style={{ flexDirection: 'column', backgroundColor: "yellow" }}>
                                    <Text>Locations found in the games:</Text>
                                    {locationBulbasaur.map((place: { location_area: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; version_details: any[]; }, l: React.Key | null | undefined) =>
                                        <View key={l} style={{ flexDirection: 'row' }}>
                                            <Text >{place.location_area.name}</Text>
                                            <Text>{place.version_details.map((version, v) =>
                                                <Text key={v}> ({version.version.name})</Text>)}</Text>
                                        </View>)}
                                </View>

                        <Text style={{ color: 'white' }}>Move Information:</Text>
                            <Text style={{ flexDirection: 'column' }}>{bulbasaur.moves.map((item: {
                                [x: string]: any; version_group_details: { level_learned_at: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }[];
                            }, id: any) =>
                                <View key={id} style={{ flexDirection: 'column' }}><Text style={styles.text}>{item.move.name}</Text>{item.version_group_details.map((attr: {
                                    [x: string]: any; level_learned_at: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                                }, index: React.Key | null | undefined) => (
                                    <View style={{ flexDirection: 'row' }} key={index}>
                                        <Text style={styles.text}>{attr.level_learned_at}</Text>
                                        <Text style={styles.text}> ({attr.move_learn_method.name}) </Text>
                                        <Text style={styles.text}> ({attr.version_group.name}) </Text>
                                    </View>
                                ))}
                                </View>)}
                            </Text>
                            </View>

                            <View style={{ flexDirection: 'column', backgroundColor: "yellow" }}>
                                <View style={{ flexDirection: 'row' }}>
                                </View> */}

                                {/* <View>
                                    <Text>Locations found in the games:</Text>
                                    {locationBulbasaur.map((place: { location_area: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; version_details: any[]; }, l: React.Key | null | undefined) =>
                                        <View key={l} style={{ flexDirection: 'row' }}>
                                            <Text >{place.location_area.name}</Text>
                                            <Text>{place.version_details.map((version, v) =>
                                                <Text key={v}> ({version.version.name})</Text>)}</Text>
                                        </View>)}
                                </View> */}

                                {/* <View> */}
                                    {/* {const fetch = async () => {
                                        
                                    }} */}
                                    {/* <Text>{placeBulbasaur?.location_area?.name}</Text> */}
                                    {/* {placeBulbasaur.map((place: { location_area: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; version_details: any[]; }, l: React.Key | null | undefined) =>
                                        <View key={l} style={{ flexDirection: 'row' }}>
                                            <Text >{place.location_area.name}</Text>
                                            <Text>{place.version_details.map((version, v) =>
                                                <Text key={v}> ({version.version.name})</Text>)}</Text>
                                        </View>)}
                                </View>
                            
                            </View>

                            </View>
                    } */}
                    




                {/* </View> */}
                {/* <View style={styles.container}>
                    <Pressable style={styles.container} onPress={() => setExpanded(!expanded)}>
                        <View style={{flexDirection: 'column'}}>
                        <Image source={{ uri: ivysaur?.sprites?.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2, }} />
                        <Text style={styles.text}>{ivysaur.name}</Text>
                        </View>
                    </Pressable> */}
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
                    {/* {ivysaur && expanded &&
                    <View style={{flexDirection: 'column'}}> */}
                    {/* <View>
                    <Text style={styles.text}>{bulbasaur.types[0].type.name}</Text>
                    </View>
                    <View>
                     <Text style={styles.text}>{bulbasaur.abilities[0].ability.name}</Text>
                     </View> */}



                    {/* <View style={{ flexDirection: 'column'}}> 

                                <View style={{ flexDirection: 'column', backgroundColor: 'red' }}>
                                    <Text style={{ color: 'white' }}>Types:</Text>
                                    <View>{ivysaur.types.map((type: { type: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }, t: React.Key | null | undefined) =>
                                    <Text key={t} style={{ color: 'white' }}>{type.type.name}</Text>
                                )}</View>

                                
                                <Text style={{ color: 'white' }}>Basic Information:</Text>

                                <View style={{flexDirection: 'row'}}>
                                <Text style={{ color: 'white' }}>Type: </Text>
                                <Text style={{ color: 'white' }}>{ivysaur.types[0].type.name}</Text>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                <Text style={{ color: 'white' }}>Ability: </Text>
                                <Text style={{ color: 'white' }}>{ivysaur.abilities[0].ability.name}</Text>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                <Text style={{ color: 'white' }}>Weight: </Text>
                                <Text style={{ color: 'white' }}>{ivysaur.weight}</Text>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                <Text style={{ color: 'white' }}>Base Experience: </Text>
                                <Text style={{ color: 'white' }}>{ivysaur.base_experience}</Text>
                                </View>

                                </View> */}

                        {/* <Text style={{ color: 'white' }}>Move Information:</Text>
                        <Text style={{ flexDirection: 'column' }}>{ivysaur.moves.map((item: {
                            [x: string]: any; version_group_details: { level_learned_at: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }[]; }, id: any) =>
                            <View key={id} style={{ flexDirection: 'column' }}><Text style={styles.text}>{item.move.name}</Text>{item.version_group_details.map((attr: {
                                [x: string]: any; level_learned_at: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                            }, index: React.Key | null | undefined) => (
                                <View style={{ flexDirection: 'row' }} key={index}> */}
                                    {/* <Text style={styles.text}>Level: </Text> */}
                                    {/* <Text style={styles.text}>{attr.level_learned_at}</Text>
                                    <Text style={styles.text}> ({attr.move_learn_method.name}) </Text>
                                    <Text style={styles.text}> ({attr.version_group.name}) </Text> */}
                                {/* </View> */}
                            {/* ))}</View>)}</Text> */}
                            {/* </View> */}

                            {/* <View style={{ flexDirection: 'column', backgroundColor: "yellow" }}> */}
                                {/* <View style={{ flexDirection: 'row' }}> */}
                                {/* <Text style={{ margin: 10, color: 'gray' }}>Location:</Text>
                                <Text style={{ margin: 10, color: 'gray' }}>Version:</Text> */}
                                {/* </View> */}
                            {/* <View>{arrayAreas}</View> */}
                                {/* <View>
                                    <Text>Locations found in the games:</Text>
                                    {locationIvysaur.map((place: { location_area: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; version_details: any[]; }, l: React.Key | null | undefined) =>
                                        <View key={l} style={{ flexDirection: 'row' }}>
                                            <Text >{place.location_area.name}</Text>
                                            <Text>{place.version_details.map((version, v) =>
                                                <Text key={v}> ({version.version.name})</Text>)}</Text>
                                        </View>)}
                                </View> */}

                                {/* <View> */}
                                    {/* {const fetch = async () => {
                                        
                                    }} */}
                                    {/* <Text>{placeBulbasaur?.location_area?.name}</Text> */}
                                    {/* {placeBulbasaur.map((place: { location_area: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; version_details: any[]; }, l: React.Key | null | undefined) =>
                                        <View key={l} style={{ flexDirection: 'row' }}>
                                            <Text >{place.location_area.name}</Text>
                                            <Text>{place.version_details.map((version, v) =>
                                                <Text key={v}> ({version.version.name})</Text>)}</Text>
                                        </View>)} */}
                                {/* </View> */}
                            
                            {/* </View> */}

                            {/* </View> */}
                    {/* } */}
                    




                {/* </View> */}

                {/* <Text>      {data.map((item, id) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            </View>
        ))}</Text> */} 



            {data.map((item: any, index: any) => {
            // var cry = require(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${index + 1}.ogg`);
            // var cryPlayer = useAudioPlayer(cry);
            // const playerRef = useRef<VideoPlayerRef>(null);
//             const cryPlayer = () => {
//     try{
//         SoundPlayer.playUrl(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${index + 1}.ogg`);
//     } catch (e) {
//  return e;
//     }
// }
// var cry = new Sound(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${index + 1}.ogg`, Sound.MAIN_BUNDLE, (error) => {
//     if (error){
//         return error
//     }
// });
            var placeHolder = null;
            const addRow = () => {
                setExtraSection(<Text>{item.name}</Text>);
            }; 
            var moveData = [
                <Text style={{ flexDirection: 'column' }}>{item.moves.map((item: {
                    [x: string]: any; version_group_details: { level_learned_at: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }[];
                }, id: any) =>
                    <View key={id} style={{ flexDirection: 'column' }}><Text style={{color: 'yellow'}}>{item.move.name}</Text>{item.version_group_details.map((attr: {
                        [x: string]: any; level_learned_at: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                    }, index: React.Key | null | undefined) => (
                        <View style={{ flexDirection: 'row' }} key={index}>
                            <Text style={styles.text}>{attr.level_learned_at}</Text>
                            <Text style={styles.text}> ({attr.move_learn_method.name}) </Text>
                            <Text style={styles.text}> ({attr.version_group.name}) </Text>
                        </View>
                    ))}
                    </View>)}
                </Text>
            ];            
            
            var locationCollectionData = [
                <View>
                <Text style={{color: 'white'}}>Locations found in the games:</Text>
                {locationData[index].map((place: { location_area: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; version_details: any[]; }, l: React.Key | null | undefined) =>
                    <View key={l} style={{ flexDirection: 'row' }}>
                        <Text style={{color: 'white'}}>{place.location_area.name}</Text>
                        <Text style={{color: 'white'}}>{place.version_details.map((version, v) =>
                            <Text key={v}> ({version.version.name})</Text>)}</Text>
                    </View>)}
            </View>
            ];
            
            var renderData = [
                <View>{item.types.map((type: { type: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }, t: React.Key | null | undefined) =>
                    <View key={t} style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white' }}>Type: </Text>
                    <Text key={t} style={{ color: 'white' }}>{type.type.name}</Text>
                    </View>
                )}
                </View>,
                <View>{item.abilities.map((ability: { ability: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }; }, a: React.Key | null | undefined)=>
                    <View key={a} style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white' }}>Abilities: </Text>
                        <Text key={a} style={{ color: 'white' }}>{ability.ability.name}</Text>
                    </View>
                )}</View>,
                <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>Height: </Text>
                <Text style={{ color: 'white' }}>{item.height}</Text>
                <Text style={{ color: 'white' }}> dm</Text>
                </View>,
                <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>Weight: </Text>
                <Text style={{ color: 'white' }}>{item.weight}</Text>
                <Text style={{ color: 'white' }}> hg</Text>
                </View>,
                <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>Base Experience: </Text>
                <Text style={{ color: 'white' }}>{item.base_experience}</Text>
                </View>,
                <SelectList setSelected={(val: any)=>setSelected(val)} inputStyles={{color: 'white'}} search={false} placeholder={'Click right arrow for move info'} data={moveData}/>,
                <SelectList setSelected={(val: any)=>setSelected(val)}  inputStyles={{color: 'white'}} search={false} placeholder={'Click right arrow for location info'} data={locationCollectionData}/>
            ];



                return (
                    <View key={index}>
                        <Pressable style={styles.container} onPress={() => addRow()}>
                        <View style={styles.imageBackground}>
                        <Image source={{ uri: item?.sprites?.front_default }} style={{ width: 50, height: 50, borderRadius: 100 / 2}} />
                        </View>
                        <Text style={{ color: 'white', textTransform: 'uppercase' }}>{item.name}</Text>
                        {/* <Button title={'Play cry'} onPress={() => cry.play()} />   */}
                       <SelectList setSelected={(val: any)=>setSelected(val)} inputStyles={{color: 'white'}} search={false} placeholder={'Click Arrow on the right for info'} data={renderData}/>
                        </Pressable>
                    {item && expanded ? <>
                    <View style={{backgroundColor: 'red'}}>
                    <Text style={{ color: 'white' }}>Basic Information:</Text>
                        <View>{item.types.map((type: { type: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }, t: React.Key | null | undefined) =>
                            <View key={t} style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white' }}>Type: </Text>
                            <Text key={t} style={{ color: 'white' }}>{type.type.name}</Text>
                            </View>
                        )}
                        </View>
                        <View>{item.abilities.map((ability: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, a: React.Key | null | undefined)=>{
                            <View key={a} style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'white' }}>Abilities: </Text>
                                <Text key={a} style={{ color: 'white' }}>{ability.name}</Text>
                            </View>
                        })}</View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white' }}>Weight: </Text>
                            <Text style={{ color: 'white' }}>{item.weight}</Text>
                            <Text style={{ color: 'white' }}> hg</Text>
                            
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white' }}>Base Experience: </Text>
                            <Text style={{ color: 'white' }}>{item.base_experience}</Text>
                        </View>

                    </View>



                        <View style={{backgroundColor: 'green'}}>
                            <Text style={{ color: 'white' }}>Locations found in the games:</Text>
                            {locationData[index].map((place: { location_area: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; version_details: any[]; }, l: React.Key | null | undefined) =>
                                <View key={l} style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'white' }}>{place.location_area.name}</Text>
                                    <Text style={{ color: 'white' }}>{place.version_details.map((version, v) =>
                                        <Text key={v}> ({version.version.name})
                                        </Text>)}</Text>
                                </View>)}
                        </View>

            </> : null }

                    </View>
                    
                    
                )
            }
            )
            }
                     
                <View style={{margin: 10}}>
                    <Text>No Copyright Infringement is Intended. Pokemon belongs to
                        Gamefreak, Nintendo, and The Pokemon Company, respectively. Pokemon are registered trademarks of Nintendo and Gamefreak. Pokémon and Pokémon character names are trademarks of Nintendo.&copy</Text>
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
            flexDirection: "column",
            borderColor: "red",
            borderWidth: 1,
            margin: 5,
            padding: 5,
            borderRadius: 5
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
        
        },
        imageBackground: {
            backgroundColor: 'gray',
            height: 50,
            width: 50,
            borderRadius: 2,
            borderColor: 'green',
            borderWidth: 1
        }
});