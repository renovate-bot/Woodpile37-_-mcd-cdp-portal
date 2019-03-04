export function padRight(string, chars, sign) {
  return string + new Array(chars - string.length + 1).join(sign ? sign : '0');
}

export function toHex(str, { with0x = true, rightPadding = 64 } = {}) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  if (rightPadding > 0) result = padRight(result, rightPadding);
  return with0x ? '0x' + result : result;
}

export function addressAsNumber(address) {
  return parseInt(address.slice(2, 10), 16);
}

export function isMissingContractAddress(calldata) {
  if (calldata.target === undefined) {
    console.error(`Address for ${calldata.call} not found`);
    return true;
  }
  return false;
}