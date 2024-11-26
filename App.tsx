import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// React modules
import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}>
                <Text style={styles.accountant}>{count}</Text>
            </Pressable>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    accountant: {
        fontSize: 120,
        fontWeight: '100',
    },
});
