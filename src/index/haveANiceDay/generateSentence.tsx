const generateSentence = function (adjective: string) {
  const day = new Date().getDay();
  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
  return `Have a ${adjective} ${dayOfWeek}!`;
};

export default generateSentence;
