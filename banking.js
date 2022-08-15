// common

        // get Input value by id
        function getInputFildValueByID(inputFildID) {
            const inputValue = document.getElementById(inputFildID)
            const newInputText = inputValue.value
            const newInputValue = parseFloat(newInputText)
            inputValue.value = ''
            return newInputValue
        }
        // get text element by id
        function getTextElementById(elementID) {
            const textElement = document.getElementById(elementID)
            const textElementString = textElement.innerText
            const textElementValue = parseFloat(textElementString)
            return textElementValue
        }

        // set text element by id

        function setElementById(elementId, newValue) {
            const textElement = document.getElementById(elementId)
            textElement.innerText = newValue
        }
        
        ///////////////////////////////////


        // deposit event handle
        document.getElementById("deposit-btn").addEventListener('click', function () {
            const newDepositAmount = getInputFildValueByID("deposit-input")
            const priviousDepositAmount = getTextElementById("deposit-total")
            const totalDepositAmount = newDepositAmount + priviousDepositAmount;
            setElementById("deposit-total", totalDepositAmount)
            // Balance
            const priviousBalanceAmount = getTextElementById("balance-total")
            const totalBalance = newDepositAmount + priviousBalanceAmount
            setElementById("balance-total", totalDepositAmount)

        })

        // withdraw event handle
        document.getElementById("withdraw-btn").addEventListener('click', function () {

            const withdrawInputAmount = getInputFildValueByID("withdraw-input")
            const previusWithdrawAmount = getTextElementById("withdraw-total")
            const totalwithdraw = withdrawInputAmount + previusWithdrawAmount
            setElementById("withdraw-total", totalwithdraw)

            // Balance
            const priviousBalanceAmount = getTextElementById("balance-total")
            const totalBalance = priviousBalanceAmount - totalwithdraw
            setElementById("balance-total", totalBalance)

        })