import { router } from "expo-router";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { imagenes } from "./imagenes.js";
import styles from "./styles.js";

export default function SongCard({ song }) {
    return (
        <Card style={styles.card} onPress={() => router.push("/playing?id=" + song.id)}>
            <Card.Cover source={imagenes[song.thumbnail]}/>
            <Card.Content>
                <Text>{song.titulo}</Text>
                <Text>{song.artista}</Text>
            </Card.Content>
        </Card>
    );
}