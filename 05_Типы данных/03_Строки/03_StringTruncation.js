function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

alert ( truncate('1234567890', 10) );
alert ( truncate('1234567890', 5) );
alert ( truncate('123', 5) );