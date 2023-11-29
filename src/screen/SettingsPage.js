import React from "react";
import Layout from "../components/Layout";
import {
  Text,
  Stack,
  Container,
  Button,
  Box,
  InputWrapper,
} from "../components/styled";
import SettingsBody from "../components/SettingsBody";
import Characters from "../data/characters";

import { useDispatch, useSelector } from "react-redux";
import {
  setThemeLight,
  setThemeDark,
  saveData,
  saveCharacter,
  editCharacter,
  deleteCharacter,
  setThemeColor,
} from "../redux/reducers/data-reducer";
import { getItemFromLocalStorage, setLocalStorageItem } from "../utils/helpers";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { themeColor } = useSelector((state) => state.data);
  const { data } = useSelector((state) => state);
  const { characters } = data;

  function clearLocalStorage() {
    localStorage.clear();
    alert("LocalStorage pulito");
  }

  const deleteCharacterFromStore = () => {
    dispatch(deleteCharacter(223));
  };

  const setCharactersToStore = (value) => {
    dispatch(saveData(value));
  };

  const editCharacterStore = (id, value) => {
    const edit = { nome: value };
    dispatch(editCharacter(id, edit));
  };

  const showStore = () => {
    console.log(data);
    let loop = JSON.stringify(data, null, 2);
    alert(loop);
    output(syntaxHighlight(loop));
  };

  function changeThemeLight() {
    dispatch(setThemeLight());
  }
  function changeThemeDark() {
    dispatch(setThemeDark());
  }

  const setThemeColorStore = (value) => {
    dispatch(setThemeColor(value));
  };

  return (
    <Layout>
      <Container size="fullwidth" height="100%">
        <SettingsBody />
        <Box m="5px">
          <Button
            size="sm"
            onClick={() => setThemeColorStore("green")}
            background={themeColor}
          >
            Cambia colore tema verde
          </Button>
        </Box>
        <Box m="5px">
          <Button
            size="sm"
            onClick={() => setThemeColorStore("red")}
            background={themeColor}
          >
            Cambia colore tema rosso
          </Button>
        </Box>
        <Box m="5px">
          <Button
            size="sm"
            onClick={() => setThemeColorStore("orange")}
            background={themeColor}
          >
            Cambia colore tema arancione
          </Button>
        </Box>
        <Box m="5px">
          <Button
            size="sm"
            onClick={() => setThemeColorStore("lightblue")}
            background={themeColor}
          >
            Cambia colore tema azzurro
          </Button>
        </Box>
        <Box m="5px">
          <Button size="sm" onClick={showStore} background={themeColor}>
            Mostra store
          </Button>
        </Box>
        <Box m="5px">
          <Button size="sm" onClick={clearLocalStorage} background={themeColor}>
            Pulisci Local Storage
          </Button>
        </Box>
        <Box m="5px">
          <Button size="sm" onClick={changeThemeLight} background={themeColor}>
            Imposta tema chiaro
          </Button>
        </Box>
        <Box m="5px">
          <Button size="sm" onClick={changeThemeDark} background={themeColor}>
            Imposta tema scuro
          </Button>
        </Box>
        <Box m="5px">
          <Button
            size="sm"
            onClick={() => setCharactersToStore(Characters)}
            background={themeColor}
          >
            Imposta Personaggi su Store
          </Button>
        </Box>
        <Box m="5px">
          <Button
            size="sm"
            onClick={() => editCharacterStore(123, "balabeo")}
            background={themeColor}
          >
            Modifica Personaggio 1 su Store
          </Button>
        </Box>
        <Box m="5px">
          <Button
            size="sm"
            onClick={() => deleteCharacterFromStore("223")}
            background={themeColor}
          >
            Elimina Personaggio 2 su Store
          </Button>
        </Box>
        <Box m="5px">
          <Button
            size="sm"
            onClick={() => setCharactersToStore([])}
            background={themeColor}
          >
            Elimina Personaggi su Store
          </Button>
        </Box>

        <div id="jsonlocal"></div>
        <Box width="100%" height="200px"></Box>
      </Container>
    </Layout>
  );
};
export default SettingsPage;

function syntaxHighlight(json) {
  if (typeof json != "string") {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}

function output(inp) {
  const node = document.getElementById("jsonlocal");
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
  document
    .getElementById("jsonlocal")
    .appendChild(document.createElement("pre")).innerHTML = inp;
}
