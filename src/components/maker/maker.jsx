import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "sunwoo1",
      company: "kakao",
      theme: "dark",
      title: "front-end engineer",
      email: "sunwoo866@naver.com",
      message: "go for it",
      fileName: "sunwoo",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "sunwoo2",
      company: "kakao",
      theme: "light",
      title: "front-end engineer",
      email: "sunwoo866@naver.com",
      message: "go for it",
      fileName: "sunwoo",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "sunwoo3",
      company: "kakao",
      theme: "colorful",
      title: "front-end engineer",
      email: "sunwoo866@naver.com",
      message: "go for it",
      fileName: "sunwoo",
      fileURL: null,
    },
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdate}
          updateCard={createOrUpdate}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
