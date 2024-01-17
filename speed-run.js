function scoreboard(scores) {
    return scores
      .filter(score => score.duration < 720)
      .map(score => `${score.name}, ${score.duration} seconds`);
  }
  
  let result = scoreboard([
    { name: 'Noura', duration: 235 },
    { name: 'Maitha', duration: 927 },
    { name: 'Muntaser', duration: 122 },
  ]);
  
  console.log(result);
  