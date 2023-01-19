import { useEffect, useState } from "react";
export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => setAllMemes(json.data.memes));
  }, []);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2kbn1e.jpg",
  });
  function getMemeImage() {
    var random = Math.floor(Math.random() * allMemes.length);
    var randomUrl = allMemes[random].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomUrl,
      };
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <input
          placeholder="First Text"
          type="text"
          name="topText"
          id="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          placeholder="Second Text"
          type="text"
          name="bottomText"
          id="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="" />

        <h2 className="meme_text top">{meme.topText}</h2>
        <h2 className="meme_text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
