module.exports = function check(str, bracketsConfig) {
  let result = 0,
    strLen = str.length,
    tempConfig = bracketsConfig.slice(),
    tempStr;

    if (!str || !bracketsConfig) {
        throw new Error("not enough params in function check(string, array)");
    }
    
    // In worst case search config template in str for str.length/2 times for false
    // in best case for true there are no unnecessary cycles. 
    while (result < strLen / 2) {
        
        for (let i = 0, confLen = bracketsConfig.length; i < confLen; i++) {
            //each cycle search next template from config
            tempStr = tempConfig.slice(i, i + 1).shift().join('');
            //search all includes of one template from config sach as () or [] etc...
            while (str.indexOf(tempStr) !== -1) {
                str = str.replace(tempStr, '');
                if (!str)
                    return true;
            }
        }        
        result++;
   }
    return !str;
}