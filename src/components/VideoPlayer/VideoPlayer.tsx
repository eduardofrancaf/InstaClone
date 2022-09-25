import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import colors from "~/theme/colors";

interface IVideoPlayerProps {
  uri: string;
  paused: boolean;
}

export default function VideoPlayer({ uri, paused }: IVideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <View>
      <Video
        style={styles.video}
        source={{ uri }}
        resizeMode={ResizeMode.STRETCH}
        isLooping={true}
        isMuted={isMuted}
        shouldPlay={!paused}
      />
      <Pressable
        style={styles.containerIcon}
        onPress={() => setIsMuted((v) => !v)}
      >
        <Ionicons
          name={isMuted ? "volume-mute" : "volume-medium"}
          size={18}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 1 / 1,
  },
  icon: { color: colors.white },
  containerIcon: {
    position: "absolute",
    backgroundColor: colors.black,
    padding: 4,
    bottom: 10,
    right: 10,
    borderRadius: 20,
  },
});
