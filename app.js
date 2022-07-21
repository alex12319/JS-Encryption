const messageContainer = document.querySelector('.message-input');
const codeContainer = document.querySelector('.code-input');
const resultContainer = document.querySelector('.result-input');
const btns = document.querySelectorAll('button');
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];


btns.forEach(btn =>{
    btn.addEventListener('click',function(e){
        const message = messageContainer.value;
        const secretKey = codeContainer.value;
        if(message && secretKey){
            if(e.target.classList.contains('encrypt')){
                resultContainer.textContent = encrypt(message,secretKey).toLowerCase();
            }else{
                resultContainer.textContent = decrypt(message,secretKey).toLowerCase();
            }
            
        }
    })
})

function encrypt(message,secretKey){
    if(message.length === secretKey.length || message.length < secretKey.length){
        let result = [...message].map((item,index) =>{
        if(characters.indexOf(item.toUpperCase()) + characters.indexOf(secretKey.toUpperCase()[index]) > characters.length){
                const encryptedCharacter = characters.indexOf(item.toUpperCase()) + characters.indexOf(secretKey.toUpperCase()[index]) - characters.length;
                return characters[encryptedCharacter];
        }
          const encryptedCharacter = characters.indexOf(item.toUpperCase()) + characters.indexOf(secretKey.toUpperCase()[index]);
          return characters[encryptedCharacter];
        })
        return result.join('');
    }
        let i = 0;
        let result = [...message].map((item) =>{
            if(i >= secretKey.length) i = 0;
            if(characters.indexOf(item.toUpperCase()) + characters.indexOf(secretKey.toUpperCase()[i]) > characters.length){
                const encryptedCharacter = characters.indexOf(item.toUpperCase()) + characters.indexOf(secretKey.toUpperCase()[i]) - characters.length;
                i++;
                return characters[encryptedCharacter];
            }
            const encryptedCharacter = characters.indexOf(item.toUpperCase()) + characters.indexOf(secretKey.toUpperCase()[i]);
            i++;
            return characters[encryptedCharacter];
          })
          return result.join('');
}

function decrypt(message,secretKey){
    if(message.length === secretKey.length || message.length < secretKey.length){
        let result = [...message].map((item,index) =>{
            if(characters.indexOf(item.toUpperCase()) - characters.indexOf(secretKey.toUpperCase()[index]) < 0){
                const encryptedCharacter = characters.indexOf(item.toUpperCase()) - characters.indexOf(secretKey.toUpperCase()[index]) + characters.length;
            
                return characters[encryptedCharacter];
            }
          const encryptedCharacter = characters.indexOf(item.toUpperCase()) - characters.indexOf(secretKey.toUpperCase()[index]);
          return characters[encryptedCharacter];
        })
        return result.join('');
    }
        let i = 0;
        let result = [...message].map((item) =>{
            if(i >= secretKey.length) i = 0;
            if(characters.indexOf(item.toUpperCase()) - characters.indexOf(secretKey.toUpperCase()[i]) < 0){
                const encryptedCharacter = characters.indexOf(item.toUpperCase()) - characters.indexOf(secretKey.toUpperCase()[i]) + characters.length;
                i++;
                return characters[encryptedCharacter];
            }
            const encryptedCharacter = characters.indexOf(item.toUpperCase()) - characters.indexOf(secretKey.toUpperCase()[i]);
            i++;
            return characters[encryptedCharacter];
          })
          return result.join('');
}