import "@formatjs/intl-locale/polyfill";
import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/cs";
import "@formatjs/intl-pluralrules/locale-data/en";

import { FormatIcu } from "@tolgee/format-icu";

import { Text } from "react-native";
import { Tolgee, TolgeeProvider, DevTools, BackendFetch } from "@tolgee/react";

import { TranslationMethods } from "@/components/TranslationMethods";
import en from "@/i18n/en.json";
import cs from "@/i18n/cs.json";
import fr from "@/i18n/fr.json";
import de from "@/i18n/de.json";

const tolgee = Tolgee()
  .use(
    BackendFetch({
      prefix: "https://cdn.tolg.ee/825f5cca797b796b954bb14ff79aef7f",
    })
  )
  .use(DevTools())
  .use(FormatIcu())
  .init({
    language: "en",
    // @ts-ignore
    apiUrl: process.env.EXPO_PUBLIC_TOLGEE_API_URL,
    // @ts-ignore
    apiKey: process.env.EXPO_PUBLIC_TOLGEE_API_KEY,
    staticData: { en, cs, fr, de },
  });

export default function HomeScreen() {
  return (
    <TolgeeProvider tolgee={tolgee} fallback={<Text>Loading...</Text>}>
      <TranslationMethods />
    </TolgeeProvider>
  );
}
