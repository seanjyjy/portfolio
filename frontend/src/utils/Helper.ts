export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const throttle = (fn: Function, ms = 300) => {
  let enableCall = true;

  return function (this: any, ...args: any[]) {
    if (!enableCall) return;
    enableCall = false;
    fn.apply(this, args);
    setTimeout(() => (enableCall = true), ms);
  };
};

export const getEditDistanceMetric = (word1: string, word2: string): number => {
  let len1 = word1.length;
  let len2 = word2.length;

  if (len1 * len2 === 0) return len1 + len2;

  let dp1 = Array(len2).fill(0);
  let dp2 = Array(len2).fill(0);

  for (let i = 1; i <= len2; i++) {
    dp1[i] = i;
  }
  for (let i = 1; i <= len1; i++) {
    dp2[0] = i;

    for (let j = 1; j <= len2; j++) {
      if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
        dp2[j] = dp1[j - 1];
      } else {
        dp2[j] = Math.min(dp2[j - 1], Math.min(dp1[j - 1], dp1[j])) + 1;
      }
    }

    for (let j = 0; j <= len2; j++) {
      dp1[j] = dp2[j];
      dp2[j] = 0;
    }
  }

  return dp1[len2];
};

export const nearestUrl = () => {
  const locArray = location.pathname.split("/"); // first is a space which is useless
  const possibleFirst = ["About", "Experience", "Project", "Contact"];
  if (locArray.length <= 1) return "/";

  const locationToMatch = locArray[1];

  if (locationToMatch.length === 0) return "/";

  // sub directory might be wrong so just return to best directory
  if (possibleFirst.includes(locationToMatch)) return "/" + locationToMatch;

  let bestFirstDirectory = "/";
  let amount = 1;

  for (let loc of possibleFirst) {
    let currentMetric =
      getEditDistanceMetric(loc, locationToMatch) / loc.length;
    if (currentMetric <= 0.5 && currentMetric < amount) {
      currentMetric = amount;
      bestFirstDirectory = loc;
    }
  }

  if (bestFirstDirectory === "/") return "/";

  return "/" + bestFirstDirectory;
};
