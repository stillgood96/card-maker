import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = (e) => {
    // input 태그의 속성상 클릭이 되면 submit이 되는 현상으로 페이지가 리프레쉬 된다 .
    // 그래서 preventDefault가 필요하다 .
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div class={styles.container}>
      <input
        class={styles.input}
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button class={styles.button} onClick={onButtonClick}>
        {name || "No File !"}
      </button>
    </div>
  );
};

export default ImageFileInput;
