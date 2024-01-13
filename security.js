
  
  if ((traveler.alreadyHadTheVirus && traveler.recovered) || traveler.isVaccinated) {
    traveler.isImmune = true;
  }

  console.log(traveler);