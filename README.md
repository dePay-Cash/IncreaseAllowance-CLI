# depay-IncreaseAllowance

use this while IncreaseAllowance step to authorize dePay for major operation </br></br>

## How to run

`node . -ftContractAddress -ftContractOwnerPrivateKey -spender -amount`

Description: Transfer crypto (MATIC) from the dePay account (dePay wallet address) to a given account (given wallet address)

**Payload:**

| Name                      | Type   | Description               |
| ------------------------- | ------ | ------------------------- |
| ftContractAddress         | STRING | ftContractAddress         |
| ftContractOwnerPrivateKey | STRING | ftContractOwnerPrivateKey |
| spender                   | STRING | accountAddressToBeAllowed |
| amount                    | STRING | amountOfFTToBeAllowed     |
