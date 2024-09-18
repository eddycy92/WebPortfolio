// This function converts a string to title case while handling exceptions.
export const applyTitleCaseWithExceptions = (inputString: string) => {
  const exceptions = ["the", "in", "on", "and", "or", "of"];
  return inputString
    .split(" ")
    .map((word, index) => {
      // If the word is in the exceptions list and not the first word, keep it lowercase.
      if (exceptions.includes(word.toLowerCase()) && index !== 0) {
        return word.toLowerCase();
      }
      // If the word is in all caps (indicating an acronym), leave it as is.
      if (word === word.toUpperCase() && word.length > 1) {
        return word;
      }
      // Otherwise, convert to title case.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

// This function applies automatic hyphenation to certain words.
export const applyAutomaticHyphenation = (inputString: string) => {
  const hyphenationMap: Record<string, string> = {
    "PreSales": "Pre-Sales",
    "PostSales": "Post-Sales",
    "PreService": "Pre-Service",
    "PostService": "Post-Service",
  };

  // Adjust regex to match patterns with spaces (e.g., "Pre Sales")
  return inputString.replace(/\b(Pre[-\s]?Sales|Post[-\s]?Sales|Pre[-\s]?Service|Post[-\s]?Service)\b/gi, (matched) => {
    // Normalize spaces and hyphens to ensure correct replacement
    const normalized = matched.replace(/\s+/g, '').replace(/-/g, '');
    return hyphenationMap[normalized] || matched;
  });
};


export const extractFileInfoFromName = (filename: string) => {
  // Remove the file extension and split by dash
  const parts = filename.replace(/\.(png|jpe?g|gif|svg)$/, '').split("-");

  // Determine primary and secondary name parts
  let primaryNameRaw = parts.slice(0, -1).join(' ').replace(/_/g, " ");
  let secondaryNameRaw = parts[parts.length - 1].replace(/_/g, " ");

  // Detect acronyms
  const detectedAcronymPrimary = primaryNameRaw.match(/\b[A-Z]{2,}\b/g)?.join('') || primaryNameRaw.match(/\b(\w)/g)?.join("").toUpperCase();
  const detectedAcronymSecondary = secondaryNameRaw.match(/\b[A-Z]{2,}\b/g)?.join('') || secondaryNameRaw.match(/\b(\w)/g)?.join("").toUpperCase();

  // Ensure acronyms are always capitalized
  let acronym = '';
  if (detectedAcronymPrimary && primaryNameRaw.includes(detectedAcronymPrimary)) {
    primaryNameRaw = primaryNameRaw.replace(new RegExp(`\\b${detectedAcronymPrimary}\\b`, 'g'), '').trim();
    acronym = `(${detectedAcronymPrimary.toUpperCase()})`;
    primaryNameRaw = `${primaryNameRaw} ${acronym}`;
  }
  if (detectedAcronymSecondary && secondaryNameRaw.includes(detectedAcronymSecondary)) {
    secondaryNameRaw = secondaryNameRaw.replace(new RegExp(`\\b${detectedAcronymSecondary}\\b`, 'g'), '').trim();
    acronym = `(${detectedAcronymSecondary.toUpperCase()})`;
    secondaryNameRaw = `${secondaryNameRaw} ${acronym}`;
  }

  // Format names
  const formattedPrimaryName = applyAutomaticHyphenation(applyTitleCaseWithExceptions(primaryNameRaw));
  const formattedSecondaryName = applyTitleCaseWithExceptions(secondaryNameRaw);

  // Return formatted names and acronym
  return {
    formattedPrimaryName: formattedPrimaryName.trim(),
    formattedSecondaryName: formattedSecondaryName.trim(),
    acronym: acronym,
  };
};
