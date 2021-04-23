export const handleMessageNotif = (data) => {
  const { message, nickname } = data;
  console.log(`${nickname} : ${message}`);
};
