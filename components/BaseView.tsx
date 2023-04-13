import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { LanguageSelector } from "./LanguageSelector";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function BaseView({ title, children }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <LanguageSelector />
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    width: "100%",
    maxWidth: 600,
    paddingLeft: 20,
    paddingRight: 20,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
