const User = require('../models/user');
const crypto = require('crypto');

exports.createUser = function (req, res) {
    let userName = req.body.userName;
    let password = req.body.password;

    // const hash = crypto.createHash('sha256');
    // hash.update(password);
    // let hash_password = hash.digest('hex');
    // // hash는 복호화 할 수 없음 

    let key = "jungkey";

    const ciper = crypto.createCipher('aes192', key);
    const deciper = crypto.createDecipher('aes192', key);
    let encrypted_password = ciper.update(password, 'utf8', 'hex');
    encrypted_password += ciper.final('hex');

    new User({userName: userName, password: encrypted_password}).save(function(err, doc){
        if(doc){ // 데이터가 정확히 들어갔는지 체크 코드
            console.log(doc);

            let target = doc.password; //db에 저장된 password를 받겠다.

            let descryped = deciper.update(target, 'hex', 'utf8');
            descryped += deciper.final('utf8');

            console.log("복호화된 패스워드: " + descryped)

            res.send("jung서버에 유저가 생성되었습니다.")
        }
    })
    
    res.send('유저가 생성되었습니다.');
}

exports.readUser = function (req, res) {
    res.send('유저가 확인되었습니다.');
}

exports.updateUser = function (req, res) {
    res.send('유저가 수정되었습니다.');
}

exports.deleteUser = function (req, res) {
    res.send('유저가 삭제되었습니다.');
}