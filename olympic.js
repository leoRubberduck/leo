
const pedroIndex = athletes.indexOf('Pedro');


if (pedroIndex >= 0 && pedroIndex <= 2) {
    
    switch (pedroIndex) {
      case 0:
        console.log('🥇');
        break;
      case 1:
        console.log('🥈');
        break;
      case 2:
        console.log('🥉');
        break;
    }
  } else {
    console.log(`😞 Pedro is #${pedroIndex + 1}`);
  }