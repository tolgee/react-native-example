import { useTolgee } from "@tolgee/react";
import { Text, View, Modal, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { LanguageModal } from "./LanguageModal";

const languages = [
  { label: "English 🇬🇧", value: "en" },
  { label: "Česky 🇨🇿", value: "cs" },
  { label: "Français 🇫🇷", value: "fr" },
  { label: "Deutsch 🇩🇪", value: "de" },
];

export function LanguageSelector() {
  const tolgee = useTolgee(["pendingLanguage", "language"]);
  const language = tolgee.getLanguage()!;
  const [open, setOpen] = useState(false);
  const languageName =
    languages.find((l) => l.value === language)?.label || language;

  return (
    <>
      <Button title={languageName} onPress={() => setOpen(true)} />
      {open && (
        <LanguageModal
          value={tolgee.getLanguage()!}
          options={languages}
          onClose={() => setOpen(false)}
          onChange={(value) => tolgee.changeLanguage(value)}
        />
      )}
    </>
  );
}
