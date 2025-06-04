import { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

interface ICard {
  id: number;
  value: number;
  emoji: string;
}

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [cards, setCards] = useState<ICard[]>([
    { id: 0, value: 0, emoji: "🍏" },
    { id: 1, value: 1, emoji: "🍎" },
    { id: 2, value: 2, emoji: "🍐" },
    { id: 3, value: 3, emoji: "🍊" },
    { id: 4, value: 4, emoji: "🍋" },
    { id: 5, value: 5, emoji: "🍌" },
    { id: 6, value: 6, emoji: "🍉" },
    { id: 7, value: 7, emoji: "🍇" },
    { id: 8, value: 8, emoji: "🍓" },
    { id: 9, value: 9, emoji: "🫐" },
    { id: 10, value: 10, emoji: "🍈" },
    { id: 11, value: 11, emoji: "🍒" },
    { id: 12, value: 12, emoji: "🍑" },
    { id: 13, value: 13, emoji: "🥭" },
    { id: 14, value: 14, emoji: "🍍" },
    { id: 15, value: 15, emoji: "🥥" },
    { id: 16, value: 16, emoji: "🥝" },
    { id: 17, value: 17, emoji: "🍅" },
    { id: 18, value: 18, emoji: "🍆" },
    { id: 19, value: 19, emoji: "🥑" },
    { id: 20, value: 20, emoji: "🥦" },
    { id: 21, value: 21, emoji: "🥬" },
    { id: 22, value: 22, emoji: "🥒" },
    { id: 23, value: 23, emoji: "🌶️" },
    { id: 24, value: 24, emoji: "🫑" },
    { id: 25, value: 25, emoji: "🌽" },
    { id: 26, value: 26, emoji: "🥕" },
    { id: 27, value: 27, emoji: "🫒" },
    { id: 28, value: 28, emoji: "🧄" },
    { id: 29, value: 29, emoji: "🧅" },
    { id: 30, value: 30, emoji: "🥔" },
    { id: 31, value: 31, emoji: "🍠" },
    { id: 32, value: 32, emoji: "🥐" },
    { id: 33, value: 33, emoji: "🥯" },
    { id: 34, value: 34, emoji: "🍞" },
    { id: 35, value: 35, emoji: "🥖" },
    { id: 36, value: 36, emoji: "🥨" },
    { id: 37, value: 37, emoji: "🧀" },
    { id: 38, value: 38, emoji: "🥚" },
    { id: 39, value: 39, emoji: "🍳" },
    { id: 40, value: 40, emoji: "🥞" },
    { id: 41, value: 41, emoji: "🧇" },
    { id: 42, value: 42, emoji: "🥓" },
    { id: 43, value: 43, emoji: "🥩" },
    { id: 44, value: 44, emoji: "🍗" },
    { id: 45, value: 45, emoji: "🍖" },
    { id: 46, value: 46, emoji: "🦴" },
    { id: 47, value: 47, emoji: "🌭" },
    { id: 48, value: 48, emoji: "🍔" },
    { id: 49, value: 49, emoji: "🍟" },
    { id: 50, value: 50, emoji: "🍕" },
    { id: 51, value: 51, emoji: "🥪" },
    { id: 52, value: 52, emoji: "🥙" },
    { id: 53, value: 53, emoji: "🧆" },
    { id: 54, value: 54, emoji: "🌮" },
    { id: 55, value: 55, emoji: "🌯" },
    { id: 56, value: 56, emoji: "🥗" },
    { id: 57, value: 57, emoji: "🍝" },
    { id: 58, value: 58, emoji: "🍜" },
    { id: 59, value: 59, emoji: "🍲" },
    { id: 60, value: 60, emoji: "🍛" },
    { id: 61, value: 61, emoji: "🍣" },
    { id: 62, value: 62, emoji: "🍤" },
    { id: 63, value: 63, emoji: "🍚" },
    { id: 64, value: 0, emoji: "🍏" },
    { id: 65, value: 1, emoji: "🍎" },
    { id: 66, value: 2, emoji: "🍐" },
    { id: 67, value: 3, emoji: "🍊" },
    { id: 68, value: 4, emoji: "🍋" },
    { id: 69, value: 5, emoji: "🍌" },
    { id: 70, value: 6, emoji: "🍉" },
    { id: 71, value: 7, emoji: "🍇" },
    { id: 72, value: 8, emoji: "🍓" },
    { id: 73, value: 9, emoji: "🫐" },
    { id: 74, value: 10, emoji: "🍈" },
    { id: 75, value: 11, emoji: "🍒" },
    { id: 76, value: 12, emoji: "🍑" },
    { id: 77, value: 13, emoji: "🥭" },
    { id: 78, value: 14, emoji: "🍍" },
    { id: 79, value: 15, emoji: "🥥" },
    { id: 80, value: 16, emoji: "🥝" },
    { id: 81, value: 17, emoji: "🍅" },
    { id: 82, value: 18, emoji: "🍆" },
    { id: 83, value: 19, emoji: "🥑" },
    { id: 84, value: 20, emoji: "🥦" },
    { id: 85, value: 21, emoji: "🥬" },
    { id: 86, value: 22, emoji: "🥒" },
    { id: 87, value: 23, emoji: "🌶️" },
    { id: 88, value: 24, emoji: "🫑" },
    { id: 89, value: 25, emoji: "🌽" },
    { id: 90, value: 26, emoji: "🥕" },
    { id: 91, value: 27, emoji: "🫒" },
    { id: 92, value: 28, emoji: "🧄" },
    { id: 93, value: 29, emoji: "🧅" },
    { id: 94, value: 30, emoji: "🥔" },
    { id: 95, value: 31, emoji: "🍠" },
    { id: 96, value: 32, emoji: "🥐" },
    { id: 97, value: 33, emoji: "🥯" },
    { id: 98, value: 34, emoji: "🍞" },
    { id: 99, value: 35, emoji: "🥖" },
    { id: 100, value: 36, emoji: "🥨" },
    { id: 101, value: 37, emoji: "🧀" },
    { id: 102, value: 38, emoji: "🥚" },
    { id: 103, value: 39, emoji: "🍳" },
    { id: 104, value: 40, emoji: "🥞" },
    { id: 105, value: 41, emoji: "🧇" },
    { id: 106, value: 42, emoji: "🥓" },
    { id: 107, value: 43, emoji: "🥩" },
    { id: 108, value: 44, emoji: "🍗" },
    { id: 109, value: 45, emoji: "🍖" },
    { id: 110, value: 46, emoji: "🦴" },
    { id: 111, value: 47, emoji: "🌭" },
    { id: 112, value: 48, emoji: "🍔" },
    { id: 113, value: 49, emoji: "🍟" },
    { id: 114, value: 50, emoji: "🍕" },
    { id: 115, value: 51, emoji: "🥪" },
    { id: 116, value: 52, emoji: "🥙" },
    { id: 117, value: 53, emoji: "🧆" },
    { id: 118, value: 54, emoji: "🌮" },
    { id: 119, value: 55, emoji: "🌯" },
    { id: 120, value: 56, emoji: "🥗" },
    { id: 121, value: 57, emoji: "🍝" },
    { id: 122, value: 58, emoji: "🍜" },
    { id: 123, value: 59, emoji: "🍲" },
    { id: 124, value: 60, emoji: "🍛" },
    { id: 125, value: 61, emoji: "🍣" },
    { id: 126, value: 62, emoji: "🍤" },
    { id: 127, value: 63, emoji: "🍚" }
  ]);
  const [flippedCards, setFlippedCards] = useState<ICard[]>([]);
  const [matchedCards, setMatchedCards] = useState<ICard[]>([]);
  const [clicks, setClicks] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);

  function shuffleCards(): void {
    const newCards = [...cards];
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    setCards(newCards);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  function flipCard(card: ICard): void {
    if (flippedCards.length >= 2 || flippedCards.includes(card) || matchedCards.includes(card)) return;

    setClicks(clicks + 1);

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      if (newFlippedCards[0].value === newFlippedCards[1].value) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setFlippedCards([]);
        setPoints(points + 1);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }

  return (
    <>
    <header>
        <h1 className={`${theme === "dark" ? "text-white" : "text-black"}`}>
          Memory Game
        </h1>
        <button onClick={() => {
          if (theme === "dark") {
            setTheme("light")
            document.querySelector("body")!.style.backgroundColor = "white";
          } else {
            setTheme("dark")
            document.querySelector("body")!.style.backgroundColor = "black";
          }
        }}>
          🌓
        </button>
      </header>
      <main>
        {cards.map((card) =>
          <div key={card.id} onClick={() => flipCard(card)} className={`card ${flippedCards.includes(card) || matchedCards.includes(card) ? "flipped" : ""}`}>
            <div className="card-inner">
              <div className="card-front">
                <img src={theme === "dark" ? "/card-front-darkmode.png" : "/card-front-whitemode.png"} alt="Card" />
              </div>
              <div className={`card-back ${theme === "dark" ? "bg-neutral-800" : "bg-neutral-300"}`}>
                <span>
                  {card.emoji}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>
      <div className="flex justify-center pt-1 gap-20">
        <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
          clicks: {clicks}
        </span>
        <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
          points: {points}
        </span>
        <button className={`${theme === "dark" ? "text-white" : "text-black"} cursor-pointer`} onClick={() => {
          shuffleCards();
          setFlippedCards([]);
          setMatchedCards([]);
          setClicks(0);
          setPoints(0);
        }}>
          <FontAwesomeIcon icon={faRotateRight} />
        </button>
      </div>
    </>
  );
}