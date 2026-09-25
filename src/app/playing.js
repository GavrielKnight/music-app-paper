import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

import { imagenes } from "./imagenes.js";
import Layout from "./layout.js";

import songs from "../data/songs.json";
import styles from "./styles.js";

export default function Playing() {

    const { id } = useLocalSearchParams();

    const song = songs.find(
        (song) => song.id.toString() === id
    );

    return (
        <Layout>
            <View>
                <Image
                    source={imagenes[song.thumbnail]}
                    style={{
                        width: "100%",
                        height: 500
                    }}
                />
                <View style={styles.horizontalBox}>
                    <View>
                        <Text style={styles.title2}>Playing...</Text>
                        <Text style={styles.title1}>{song.titulo}</Text>
                        <Text style={styles.title2}>By {song.artista}</Text>
                    </View>
                    <IconButton
                        icon={() => (
                            <MaterialCommunityIcons name="heart-outline" size={35}/>
                        )}
                    />
                </View>

                <View style={styles.horizontalBox}>
                    {/* Shuffle */}
                    <IconButton
                        icon={() => (
                            <MaterialCommunityIcons name="shuffle" size={24}/>
                        )}
                    />
                    {/*Previous*/}
                    <IconButton
                        icon={() => (
                            <MaterialCommunityIcons name="skip-previous" size={35}/>
                        )}
                    />
                    {/*Play*/}
                    <IconButton
                        icon={() => (
                            <MaterialCommunityIcons name="play" size={35}/>
                        )}
                    />
                    {/*Next*/}
                    <IconButton
                        icon={() => (
                            <MaterialCommunityIcons name="skip-next" size={35}/>
                        )}
                    />
                    {/*Repeat*/}
                    <IconButton
                        icon={() => (
                            <MaterialCommunityIcons name="repeat" size={35}/>
                        )}
                    />
                </View>
            </View>
        </Layout>
    );
}