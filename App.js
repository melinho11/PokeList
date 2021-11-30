import react from "react";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View, Image, text } from "react-native";

export default function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(Response => Response.json())
      .then(data => {
        setPokemons(data.results)
      })
  }, [])


  return (
    <SafeAreaView>
      <FlatList>
        data={pokemons}
        keyStracktor={(pokemon) => pokemon.name}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={pokemonShow}
      </FlatList>
    </SafeAreaView>
  )
}

function pokemonShow(item) {

  const { name, url } = item.item
  const pokemonNumber = url.replace('"https://pokeapi.co/api/v2/pokemon', '').replace('/', '')
  const imageUrl  = 'https://pokeres.bastionbot.org/images/pokemon/'+pokemonNumber+'.png'
  return (
    <view style = {{flexDirection: 'row'}}>
      <Image style = {{width: 50, height: 50}} source={{uri: imageUrl}}/>
      <text>{name}</text>
    </view> >
  )
}