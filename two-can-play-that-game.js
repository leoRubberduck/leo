let duos = (batman, robin) => {
    console.log(`${batman} and ${robin} !`);
  }
  
  let duosWork = (batman, robin, action) => {
    console.log(`${batman} and ${robin} ${action} !`);
  }
  
  duos('Batman', 'Robin'); 
  duosWork('Batman', 'Robin', 'protect Gotham');
  