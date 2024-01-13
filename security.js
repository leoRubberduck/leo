let traveler = {
    alreadyHadTheVirus: true,
    recovered: false, 
    isVaccinated: false,
    isImmune: false 
  };
  
  if ((traveler.alreadyHadTheVirus && traveler.recovered) || traveler.isVaccinated) {
    traveler.isImmune = true;
  }