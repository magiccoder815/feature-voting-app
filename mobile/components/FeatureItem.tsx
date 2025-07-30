import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type Feature = {
    id: number;
    title: string;
    upvotes: number;
};

type Props = {
    feature: Feature;
    onUpvote: () => void;
};

export default function FeatureItem({ feature, onUpvote }: Props) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{feature.title}</Text>
            <Text>Votes: {feature.upvotes}</Text>
            <Button title="Upvote" onPress={onUpvote} />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: "#f1f1f1",
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
