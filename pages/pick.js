import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "../styles/app.styles";
import { pickStyles } from "../styles/pick.styles";
import { useEffect, useState } from "react";
import myColors from "../styles/colors.styles";

export default Pick = () => {
    // consts & utils
    const genres = ['Drama', 'Comedy', 'Romance', 'Thriller', 'Action', 'Crime', 'Hindi', 'Western', 'Horror', 'Fantasy', 'Musical', 'War', 'Noir']

    // states
    const [isLoading, setIsLoading] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState([]);

    // lifecycle
    useEffect(() => {
    });

    // functions
    const pickRandom = () => {
        setIsLoading(!isLoading);
    }
    const selectGenre = (newGenre) => {
        if (selectedGenres.includes(newGenre)) setSelectedGenres([...selectedGenres.filter(g => g !== newGenre)])
        else setSelectedGenres([...selectedGenres, newGenre]);
    }
    return (
        <View style={[styles.page, pickStyles.pickPage]}>
            <View style={styles.horizontalCenterWrapper}>
                <TouchableOpacity style={pickStyles.pickRandomButton} onPress={pickRandom}>
                    <Text style={[styles.text]}>Pick Randomly</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.horizontalCenterWrapper, pickStyles.genresWrapper]}>
                {genres.map(genre =>
                    <TouchableOpacity key={`genre-${Math.random()}`}
                        style={[pickStyles.pickRandomButton,
                        selectedGenres.includes(genre) ? pickStyles.selectedGenreButton : null
                            ,]}
                        onPress={() => selectGenre(genre)}>
                        <Text style={[styles.text]}>{genre}</Text>
                    </TouchableOpacity>
                )}
            </View>



            {isLoading ? <View style={[styles.horizontalCenterWrapper, styles.verticalCenterWrapper, pickStyles.spinnerWrapper]}>
                <ActivityIndicator style={pickStyles.spinner} size={"large"} color={myColors.lightgreen}></ActivityIndicator>
            </View> : null}

        </View>
    );
}