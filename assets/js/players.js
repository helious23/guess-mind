import { disablerChat, enableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  resetCanvas,
  showControls,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

export const handleGameStarted = () => {
  setNotifs("");
  disableCanvas();
  hideControls();
  enableChat();
};
export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disablerChat();
  setNotifs(`You are the leader, paint: ${word}`);
};
export const handleGameEnded = () => {
  setNotifs("Game Ended");
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleGameStarting = () => setNotifs("Game will start soon");
