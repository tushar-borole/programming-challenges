/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let emailsArray = emails;
  emailsArray.forEach(function(value, index) {
    const [name, domainName] = value.split("@");
    emailsArray[index] = name
      .replace(/\+(.*)/g, "")
      .replace(/\./g, "")
      .concat(`@${domainName}`);
  });
  const uniqueValueCount = new Set(emailsArray).size;
  return uniqueValueCount;
};

numUniqueEmails([
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
]);
