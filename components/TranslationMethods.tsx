import { useTranslate, T } from "@tolgee/react";
import { StyleSheet, Text, View } from "react-native";
import { BaseView } from "./BaseView";

export function TranslationMethods() {
  const { t } = useTranslate();
  return (
    <BaseView title="Tolgee test app">
      <View>
        <View style={styles.example}>
          <Text style={styles.heading}>T component with default</Text>
          <Text>
            <T keyName="this_key_does_not_exist">This is default</T>
          </Text>
        </View>
        <View style={styles.example}>
          <Text style={styles.heading}>T component without default</Text>
          <Text>
            <T keyName="this_is_a_key" />
          </Text>
        </View>
        <View style={styles.example}>
          <Text style={styles.heading}>T component with params</Text>
          <Text>
            <T
              keyName="this_is_a_key_with_params"
              params={{ key: "value", key2: "value2" }}
            />
          </Text>
        </View>

        <View style={styles.example}>
          <Text style={styles.heading}>t function without default</Text>
          <Text>{t("this_is_a_key")}</Text>
        </View>

        <View style={styles.example}>
          <Text style={styles.heading}>t function with params</Text>
          <Text>
            {t("this_is_a_key_with_params", { key: "value", key2: "value2" })}
          </Text>
        </View>

        <View style={styles.example}>
          <Text style={styles.heading}>t function with default</Text>
          <Text>{t("this_key_does_not_exist", "This is default")}</Text>
        </View>

        <View style={styles.example}>
          <Text style={styles.heading}>t function with props object</Text>
          <Text>
            {t({
              key: "this_is_a_key",
              params: { key: "value", key2: "value2" },
            })}
          </Text>
        </View>

        <View style={styles.example}>
          <Text style={styles.heading}>t function with plural</Text>
          <Text>
            {t({
              key: "this_is_a_key_with_plural",
              params: { value: 1 },
            })}
          </Text>
        </View>
      </View>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  example: {
    display: "flex",
    marginVertical: 5,
  },
  heading: {
    fontWeight: "bold",
  },
});
