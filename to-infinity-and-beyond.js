const candidate = {
    physicalAptitudes: 85,
    noFamily: true
  };
  
  if (candidate.physicalAptitudes < 80) {
    console.log('Stay on Earth');
  } else if (candidate.noFamily) {
    console.log('Go to Mars');
  } else {
    console.log('Go to the Moon');
  }
  