import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import FeatureItem from "../components/FeatureItem";
import { API_BASE_URL } from "../constants";

type Feature = {
    id: number;
    title: string;
    upvotes: number;
};

export default function HomeScreen() {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [newTitle, setNewTitle] = useState<string>("");

    const fetchFeatures = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/features/`);
            setFeatures(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addFeature = async () => {
        if (!newTitle.trim()) return;
        await axios.post(`${API_BASE_URL}/features/`, { title: newTitle });
        setNewTitle("");
        fetchFeatures();
    };

    const upvoteFeature = async (id: number) => {
        await axios.post(`${API_BASE_URL}/features/${id}/upvote/`);
        fetchFeatures();
    };

    useEffect(() => {
        fetchFeatures();
    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="New Feature..."
                style={styles.input}
                value={newTitle}
                onChangeText={setNewTitle}
            />
            <Button title="Submit Feature" onPress={addFeature} />

            <FlatList
                data={features}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <FeatureItem
                        feature={item}
                        onUpvote={() => upvoteFeature(item.id)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 50 },
    input: { borderWidth: 1, padding: 8, marginBottom: 10 },
});
