function isAnagram(str1, str2) {
    const sortedStr1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  
  function isAnagramInArray(phrase, arr) {
    const anagramsMatchingPhrase = [];
    for (const word of arr) {
      if (isAnagram(phrase, word)) {
        anagramsMatchingPhrase.push(word);
      }
    }
    return anagramsMatchingPhrase;
  }
  
  const anagrams = [
    "oz bilal tochberer",
    "it's razorbill beachcomber",
    "och robe tilblazer",
    "bib chorizo cellarmaster",
    "thor bble carizole",
    "zll borcht aberoie",
    "brzl orche atobile",
    "dame shelburne characterizing",
    "uber englishman characterized",
    "agnes rhumbline characterized",
    "rehab scrutinized charlemagne",
    "dreams zurich interchangeable",
    "bam hamster technocratic",
    "mechatronic masterbatch",
    "bam ratchet mechatronics"
  ];
  
  console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
  