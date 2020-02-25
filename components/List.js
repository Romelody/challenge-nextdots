import React from 'react';
import {View, Text, Image} from 'react-native';


const List = () => {
    const drinks = data && data.drinks ? data.drinks.map(drink => 
        <View>
            <Text>{drink.strDrink}</Text>
            <Image style={{width: 150, height: 150}} source={{uri: drink.strDrinkThumb}} />
        </View>
    
    
    ) : <></>
    
    return (
        <View>
             <ScrollView>
                { loading ? <Text>Loading...</Text> : drinks}
              </ScrollView>
        </View>
    )
}


export default List