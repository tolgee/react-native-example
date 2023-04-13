import { Text } from "react-native";
import { Tolgee, TolgeeProvider, DevTools, FormatSimple } from "@tolgee/react";

import { TOLGEE_API_KEY, TOLGEE_API_URL } from "@env";
import { TranslationMethods } from "./views/TranslationMethods";
import en from "./i18n/en.json";
import cs from "./i18n/cs.json";
import fr from "./i18n/fr.json";
import de from "./i18n/de.json";

const tolgee = Tolgee().use(DevTools()).use(FormatSimple()).init({
  language: "en",
  apiUrl: TOLGEE_API_URL,
  apiKey: TOLGEE_API_KEY,
  staticData: { en, cs, fr, de },
});

export default function App() {
  return (
    <TolgeeProvider tolgee={tolgee} fallback={<Text>Loading...</Text>}>
      <TranslationMethods />
    </TolgeeProvider>
  );
}
