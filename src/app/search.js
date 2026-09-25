import { ScrollView, TextInput, View } from "react-native";
import { IconButton } from "react-native-paper";
import songs from "../data/songs.json";
import Layout from "./layout.js";
import SongCard from "./SongCard.js";
import styles from "./styles.js";

export default function Search() {
    return (
        <Layout>
            <ScrollView>
                <View style={styles.horizontalBox}>
                    <TextInput placeholder="Search song, artist..." style={styles.textBox}/>
                    <IconButton icon="magnify" size={25} onPress={() => {}}/>
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