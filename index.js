function ayslexid(text){
  console.assert(typeof text === 'string', 'Ayslexid expects a string.');
  return text.replace(/\w+/gi, function(word){
    if(!word.length) return word;
    const chars    = word.split(''),
          first    = chars[0],
          last     = chars[chars.length - 1],
          firstCap = /[A-Z]/.test(first),
          lastCap  = /[A-Z]/.test(last);
    chars[0] = firstCap ? last.toUpperCase() : last.toLowerCase();
    chars[chars.length - 1] = lastCap ? first.toUpperCase() : first.toLowerCase();
    return chars.join('');
  });
}

if(typeof module !== 'undefined') module.exports = ayslexid;

