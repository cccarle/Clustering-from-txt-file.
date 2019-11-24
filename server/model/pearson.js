/* 
  Pearson similarity
   */

exports.pearson = (numOfWords, blogA, blogB) => {
  let sumA = 0
  let sumB = 0
  let sumAsq = 0
  let sumBsq = 0
  let pSum = 0
  let cntA = 0
  let cntB = 0

  // sum up the word counts for each blog
  for (let i = 0; i < numOfWords; i++) {
    cntA = blogA.values[i]
    cntB = blogB.words[i]
    sumA += cntA
    sumB += cntB
    sumAsq += cntA ** 2
    sumBsq += cntB ** 2
    pSum += cntA * cntB
  }

  const num = pSum - (sumA * sumB) / numOfWords

  const den = Math.sqrt(
    (sumAsq - sumA ** 2 / numOfWords) * (sumBsq - sumB ** 2 / numOfWords)
  )

  // Invert the pearson score
  return 1 - num / den
}
