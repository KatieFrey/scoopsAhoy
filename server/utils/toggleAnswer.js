const toggleAnswer = counter => {
  let comeback;
  if (counter % 2 === 0) {
    comeback = "Turns out I'm a pretty damn good babysitter.";
  } else {
    comeback = "Man, kids are the worst! Who needs 'em anyway?";
  }
  counter++;
  return { comeback: comeback, counter: counter };
};

module.exports = toggleAnswer;
