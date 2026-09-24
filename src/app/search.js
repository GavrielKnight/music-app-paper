import { Image, Pressable, ScrollView, TextInput, View } from "react-native";
import songs from "../data/songs.json";
import { imagenes } from "./imagenes.js";
import Layout from "./layout.js";
import SongCard from "./SongCard.js";
import styles from "./styles.js";

export default function Search() {
    return (
        <Layout>
            <ScrollView>
                <View style={styles.horizontalBox}>
                    <TextInput placeholder="Search song, artist..." style={styles.textBox}/>
                    <Pressable style={styles.button}>
                        <Image style={styles.icon} source={imagenes["search-icon"]}/>
                    </Pressable>
                </View>
                <ScrollView horizontal contentContainerStyle={styles.scrollingBox}>
                    {songs.map((song) => (
                        <SongCard
                            key={song.id}
                            song={song}
                        />
                    ))}
                </ScrollView>
            </ScrollView>
        </Layout>
    );
}