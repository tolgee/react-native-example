import "@formatjs/intl-locale/polyfill";
import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/cs";
import "@formatjs/intl-pluralrules/locale-data/en";

import { TOLGEE_API_URL, TOLGEE_API_KEY } from "@env";

import { FormatIcu } from "@tolgee/format-icu";

import { Text } from "react-native";
import { Tolgee, TolgeeProvider, DevTools } from "@tolgee/react";

import { TranslationMethods } from "@/components/TranslationMethods";
import en from "@/i18n/en.json";
import cs from "@/i18n/cs.json";
import fr from "@/i18n/fr.json";
import de from "@/i18n/de.json";

console.log({ apiUrl: TOLGEE_API_URL, apiKey: TOLGEE_API_KEY });

const tolgee = Tolgee().use(DevTools()).use(FormatIcu()).init({
  language: "en",
  apiUrl: TOLGEE_API_URL,
  apiKey: TOLGEE_API_KEY,
  staticData: { en, cs, fr, de },
});

export default function HomeScreen() {
  return (
    <TolgeeProvider tolgee={tolgee} fallback={<Text>Loading...</Text>}>
      <TranslationMethods />
    </TolgeeProvider>
  );
}
