async function main() {
        const apiKey = document.getElementById('username')
        const apiSecret = document.getElementById('password')
        const account = document.getElementById('accountNumber')
        const api = `https://alpha-api.usbank.com/innovation/bank-node/customer-accounts/v1/customer/`;
        let extension = `${account.value}/accounts`
        var config = {
          method: 'get',
          headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`),
                'Accept': 'application/json' 
         }
        };
        console.log(config.url)
        fetch(`${api}${account}/accounts`, config)
        .then(response => response.data
        )
        .then(responseJSON => {
                //console.log(responseJSON)
                for (account of responseJSON.accounts) {
                        console.log(account)
                }
        })
        .catch(function (error) {
          console.log(error);
        });  
}