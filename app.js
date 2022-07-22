const messageContainer = document.querySelector('.message-input');
const codeContainer = document.querySelector('.code-input');
const resultContainer = document.querySelector('.result-input');
const btns = document.querySelectorAll('.btns button');
const resultMessage = document.querySelector('.result-message');
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
const copyBtn = document.querySelector('.copy');

btns.forEach(btn =>{
    btn.addEventListener('click',function(e){
        const message = messageContainer.value;
        const secretKey = codeContainer.value;
        if(message && secretKey){
            if(e.target.classList.contains('encrypt')){
                resultContainer.textContent = encrypt(message,secretKey).toLowerCase();
                resultMessage.textContent = 'Your encrypted message:';
            }else{
                resultContainer.textContent = decrypt(message,secretKey).toLowerCase();
                resultMessage.textContent = 'Your decrypted message:';
            }
            
        }
    })
})

function encrypt(message,secretKey){
        let result = [...message].map((item,index) =>{
          const encryptedCharacter = (characters.indexOf(item.toUpperCase()) + characters.indexOf(secretKey.toUpperCase()[index % secretKey.length])) % characters.length;
          return characters[encryptedCharacter];
        })
        return result.join('');
}

function decrypt(message,secretKey){
        let result = [...message].map((item,index) =>{
          const encryptedCharacter = (characters.indexOf(item.toUpperCase()) - characters.indexOf(secretKey.toUpperCase()[index % secretKey.length]) % characters.length + characters.length) % characters.length;
          return characters[encryptedCharacter];
        })
        return result.join('');
}


copyBtn.addEventListener('click',function(){
    document.querySelector('textarea').select();
    document.execCommand('copy');
})