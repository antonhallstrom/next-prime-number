function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        return false
    }
  }
   return n > 1
}

function nextPrime(n) {
  for (let i = n; i < 2 * n; i++) {
    let next = i + 1

    if (isPrime(next)) {
      return next
    }
  }
}

module.exports = nextPrime
