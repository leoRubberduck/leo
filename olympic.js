if (pedroIndex >= 0 && pedroIndex <= 2) {
    
    switch (pedroIndex) {
      case 0:
        console.log('🥇 Pedro is #1');
        break;
      case 1:
        console.log('🥈 Pedro is #2');
        break;
      case 2:
        console.log('🥉 Pedro is #3');
        break;
    }
  } else {
    console.log(`😞 Pedro is #${pedroIndex + 1}`);
  }