import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "../styles/app.styles";
import { pickStyles } from "../styles/pick.styles";
import { useEffect, useState, useContext } from "react";
import myColors from "../styles/colors.styles";
import AppContext from "../store/app.context";

export default Pick = () => {
    // consts & utils
    const genres = ['Drama', 'Comedy', 'Romance', 'Thriller', 'Action', 'Crime', 'Hindi', 'Western', 'Horror', 'Fantasy', 'Musical', 'War', 'Noir']

    // contexts
    const { appContext, setAppContext } = useContext(AppContext);

    // states
    const [isLoading, setIsLoading] = useState(false);
    // lifecycle
    useEffect(() => {
    });

    // functions
    const pickRandom = () => {
        setIsLoading(!isLoading);
    }
    const selectGenre = (newGenre) => {
        if (appContext.selectedGenres.includes(newGenre)) setAppContext({ ...appContext, selectedGenres: [...appContext.selectedGenres.filter(g => g !== newGenre)] })
        else setAppContext({ ...appContext, selectedGenres: [...appContext.selectedGenres, newGenre] });
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
                        appContext.selectedGenres.includes(genre) ? pickStyles.selectedGenreButton : null
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