function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }
  
  function ultimateScoreboard(scores, count) {
    const sortedScores = scores
      .sort((a, b) => a.duration - b.duration)
      .slice(0, count);
  
    return sortedScores.map((score, index) => {
      const position = `#${String(index + 1).padStart(2, '0')}`;
      const formattedDuration = formatDuration(score.duration);
      return `${position} - ${formattedDuration}, ${score.name}`;
    });
  }
  
  let scores = [
    { name: 'Wasan', duration: 93 },
    { name: 'Muntaser', duration: 122 },
    { name: 'Noura', duration: 235 },
    { name: 'Maitha', duration: 927 },
  ];
  
  let scoreboard = ultimateScoreboard(scores, 3);