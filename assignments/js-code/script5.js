function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

function checkAge2(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function checkAge3(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function min(a,b) {
    return (a < b) ? a
        : (b < a) ? b
        : "They're the same number!"
}

function pow(x,n) {
    return x ** n;
}