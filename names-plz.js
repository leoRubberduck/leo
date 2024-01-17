function namePlz(objects) {
    return objects
      .map(obj => obj.name)
      .join(', ');
  }
  
  const result = namePlz([
    { name: 'Wasan' },
    { name: 'Alanoud' },
    { name: 'Salama' },
    { name: 'Yousuf' },
    { name: 'Maitha' },
  ]);  