import { useLocalSearchParams } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

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
                    <Image style={styles.icon} source={imagenes["heart-icon"]}/>
                </View>

                <View style={styles.horizontalBox}>
                    <Pressable>
                        <Image source={imagenes["prev-icon.png"]} style={styles.icon}/>
                    </Pressable>
                    <Pressable>
                        <Image source={imagenes["play-icon.svg"]} style={styles.icon}/>
                    </Pressable>
                    <Pressable>
                        <Image source={imagenes["next-icon.png"]} style={styles.icon}/>
                    </Pressable>
                </View>
            </View>
        </Layout>
    );
}