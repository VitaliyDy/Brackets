module.exports = function check(str, bracketsConfig) {
  let couner = 0,
    strLen = str.length,
    tempStr;

    // In worst case search config template in str for str.length/2 times for false
    // in best case for true there are no unnecessary cycles. 
    while (couner++ < strLen/2) {        
        for (let i = 0, confLen = bracketsConfig.length; i < confLen; i++) {
            //each cycle search next template from config
            tempStr = bracketsConfig.slice(i, i + 1).shift().join('');
            //search all includes of one template from config sach as () or [] etc...
            while (str.indexOf(tempStr) !== -1) {
                str = str.replace(tempStr, '');
                if (!str)
                    return true;
            }
        }     
   }
    return !str;
}