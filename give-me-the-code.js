function jsFileOnly(filenames) {
    return filenames.filter((filename) => filename.endsWith('.js'));
  }
  
  const result = jsFileOnly([
    'essay.docx',
    'index.html',
    'info.txt',
    'lib.js',
    'README.md',
    'script.js',
  ]);
  
  