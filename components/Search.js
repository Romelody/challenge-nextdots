import React, { useState } from 'react';
import {View, TextInput, Text, Image, ScrollView, StyleSheet} from 'react-native';
import useAxios from 'axios-hooks'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const [ drinkSearched, setDrinkSearched ] = useState('')

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSearched}`

    const [{ data, loading, error }] = useAxios(
        url
    )
   
    if (error) return <Text>Error!</Text>

    const drinks = data && data.drinks && drinkSearched.length >= 3 ? data.drinks.map(drink => 
   
        <View style = {styles.card}>
            <Image style={styles.imgstyle} source={{uri: drink.strDrinkThumb}} />
            <Text style={styles.namestyle}>{drink.strDrink}</Text>
        </View>
   
    
    ) : <></>
    return (
		<View style = {styles.theview}>
			<View style = {styles.styleInput}>
				<View style = {styles.iconSearch}>
					<FontAwesomeIcon icon={faSearch}  />
				</View>
				<View style ={styles.textSearch}>
					<TextInput placeholder = 'Search your favourite cocktail'  value={drinkSearched} onChangeText={(text) => setDrinkSearched(text)}/>
				</View>
			</View>
			<View>
				<ScrollView>
					{ loading ? <Text>Loading...</Text> : drinks}
				</ScrollView>
			</View>
		</View>
		)

} 

const styles = StyleSheet.create({
	theview: {
		flex:1,
		width:'90%',
	},

	styleInput: {
		flexDirection:'row',
		height:45,
		backgroundColor: '#fff',
		borderRadius: 8,
		padding:0,
	},
	iconSearch:{
		width:'10%',
		paddingTop:8,
		paddingLeft:20,
		paddingTop:15,
	},

	textSearch: {
		width:'80%',
		fontSize: 5,
		paddingLeft:10,
	},
	card:{
		width:'100%',
		flexDirection: 'row',
		borderRadius: 8,
		backgroundColor: '#fff',
		marginVertical: 10,
		padding: 20,
	},
	imgstyle: {
		borderRadius: 100,
		width: 110,
		height: 110,
	},
	namestyle:{
		flex:1,
		textAlignVertical: "center",
		justifyContent:'center',
		padding: 25,
		fontSize: 25,
	}
})

export default Search