// common

        // get Input value by id
        function getInputFildValueByID(inputFildID) {
            const inputValue = document.getElementById(inputFildID)
            const newInputText = inputValue.value
            const newInputValue = parseFloat(newInputText)
            inputValue.value = ''
            return newInputValue
        }
        // updatetotalfild
        function updateTotalFild(elementId, previosAmount) {
            const totalTextElement = document.getElementById(elementId)
            const textElementString =  totalTextElement.innerText
            const textElementValue = parseFloat(textElementString)
            totalTextElement.innerText = textElementValue + previosAmount;
         
        }

        //get current blance
        function getCurrentBalance(){
            const textElement = document.getElementById("balance-total")
            const textElementString =   textElement.innerText
            const textElementValue = parseFloat(textElementString)
            return textElementValue

        }

        // updateTotalBalanc

        function updateTotalBalance(newAmount,isAdd) {
            const textElement = document.getElementById("balance-total")
            // const textElementString =   textElement.innerText
            // const textElementValue = parseFloat(textElementString)
             const textElementValue = getCurrentBalance()
            if(isAdd == true){
              textElement.innerText = textElementValue + newAmount;

            }
            else{
                textElement.innerText = textElementValue - newAmount;

            }  
        
        }
        
        ///////////////////////////////////


        // deposit event handle
         document.getElementById("deposit-btn").addEventListener('click', function () {
            const newDepositAmount = getInputFildValueByID("deposit-input")
           if(newDepositAmount >0){
            updateTotalFild("deposit-total", newDepositAmount )
            updateTotalBalance(newDepositAmount,true)
           }

        })

        // withdraw event handle
        document.getElementById("withdraw-btn").addEventListener('click', function () {

            const newwithdrawAmount = getInputFildValueByID("withdraw-input")
            const currentBlance = getCurrentBalance()
            if(newwithdrawAmount>0 && currentBlance > newwithdrawAmount){
                updateTotalFild("withdraw-total",newwithdrawAmount)
                updateTotalBalance(newwithdrawAmount,false)

            }
        
        })