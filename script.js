
let clutter = "";
function encryption(){

    document.querySelector("#encrypt_button").addEventListener("click", function(){
        let input = document.getElementById("text_msg").value
        console.log(input);

        let pwd = document.getElementById("pwd").value
        console.log(pwd);

        var str = input.split("");
        console.log(str);

        //converting input into a set of emojis
        str.forEach(element => {
            clutter += `&#128${(element.charCodeAt())}`
            
        });
        console.log(clutter);
        console.log("The line above are the emojis ^");
        
        // document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML = clutter;

        let dataarr = [];
        console.log(dataarr);

        if( JSON.parse(localStorage.getItem('data1'))){
            dataarr =JSON.parse(localStorage.getItem('data1'))
            dataarr.push({"pass" : pwd, "ip" : input, "clutter" : clutter});
        }
        else{
            dataarr = [{"pass" : pwd, "ip" : input, "clutter" : clutter}] ;
        }
       localStorage.setItem('data1', JSON.stringify(dataarr)) ;


       console.log(JSON.parse(localStorage.getItem('data1')));

  })
      
}

function decryption() {
    document.querySelector("#decrypt_button").addEventListener("click", function () {
       
        let orgMsg = '';
        let input2 = document.querySelector("#emoji_msg").value
        let pwd2 = document.querySelector("#final_pwd").value
        let userData = JSON.parse(localStorage.getItem('data1'))

        let str2 = input2.split(" ")
        str2.forEach(element => {
            orgMsg += `&#${(element.codePointAt(0))} `;
        });
        var matchedIP = null;
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].clutter === orgMsg || userData[i].pass === pwd2) {
                matchedIP = userData[i].ip;
                break; // Exit the loop when a match is found
            }
        }

        if (matchedIP) {
            console.log("jay ho")
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`
            document.querySelector("#result").innerHTML = matchedIP
        } else {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
        }
       
    });
}

function BtnClicking(){


    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
    })

    document.querySelector("#dec_button").addEventListener("click", function(){
        document.querySelector("#result").style.display = "none"
        document.querySelector("#decryption").style.display = "block" ; 
        document.querySelector("#encryption").style.display = "none" ;
        document.querySelector("#decrypt_button").style.backgroundColor="#333"
        document.querySelector("#encrypt_button").style.backgroundColor="#222"
        document.querySelector("#main>h1 span img").style.rotate="180deg"
        
    });

    document.querySelector("#enc_button").addEventListener("click", function(){
        document.querySelector("#result").style.display = "none"
        document.querySelector("#decryption").style.display = "none" ;
        document.querySelector("#encryption").style.display = "block" ;
        document.querySelector("#encrypt_button").style.backgroundColor="#333"
        document.querySelector("#decrypt_button").style.backgroundColor="#222"
        document.querySelector("#main>h1 span img").style.rotate="0deg"

    });
}


encryption();
decryption();
BtnClicking();


