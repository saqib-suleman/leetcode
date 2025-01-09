function isAnagram(s, t) {
  let output = true;
  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    if (t.includes(s[i])) {
      mapS.set(s[i], s[i]);
    } else {
      return false;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (mapS.has(t[i])) {
      mapT.set(t[i], t[i]);
    } else {
      return false;
    }
  }

  return output;
}
