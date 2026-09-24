import { ScrollView, Text, View } from "react-native";
import songs from "../data/songs.json";
import Layout from "./layout.js";
import SongCard from "./SongCard.js";
import styles from "./styles.js";

import { Chip } from "react-native-paper";

export default function Inicio(){
    return (
        <Layout>
            <ScrollView>
                <View>
                    <Text style={styles.title1}>Hola, Gavriel</Text>
                </View>
                <View>
                    <Text style={styles.title2}>Selecciona</Text>
                    <ScrollView horizontal contentContainerStyle={styles.scrollingBox}>
                        <Chip>Todas</Chip>
                        <Chip>Hip Hop</Chip>
                        <Chip>Fiesta</Chip>
                        <Chip>Rock</Chip>
                    </ScrollView>

                    
                    <Text style={styles.title2}>Canciones Populares</Text>
                    <ScrollView horizontal contentContainerStyle={styles.scrollingBox}>
                        {songs.map((song) => (
                            <SongCard
                                key={song.id}
                                song={song}
                            />
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </Layout>
    );
}