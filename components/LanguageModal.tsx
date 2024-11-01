import { Text, View, Modal, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

type Option = { label: string; value: string };
type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  onClose: () => void;
};

export function LanguageModal({ value, options, onChange, onClose }: Props) {
  const [language, setLanguage] = useState(value);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => onClose()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select language</Text>
            <Picker
              selectedValue={language}
              onValueChange={(value) => setLanguage(value)}
              style={{ width: 300 }}
              mode="dropdown"
            >
              {options.map(({ label, value }) => (
                <Picker.Item key={value} label={label} value={value} />
              ))}
            </Picker>
            <Button
              title="Ok"
              onPress={() => {
                onChange(language);
                onClose();
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  languageButton: {
    flexGrow: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
  },
});
