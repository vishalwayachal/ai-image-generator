# Building an Image generator API 


### Prerequisites

- Installed local [Node.js](https://nodejs.org/) environment
- Package manager to install packages.  [npm](https://www.npmjs.com/)

Clone the repo in your environment


### Installing

```bash
# move into project folder
cd ai-image-generator

# install the dependencies
npm install

# rename the .env.sample
mv .env.sample .env

# add your variables
nano .env
```

#### Running the server

```bash
npm start
```

## Example

```bash
# POST - /detection
curl --location 'http://localhost:3000/image-generator' \
--header 'Content-Type: application/json' \
--data '{
    "prompt": "Create an abstract painting inspired by the rush hour traffic in Mumbai City. Compose a collage of portraits of the India presidents.Design a piece of digital artwork showing an imagined colony on Mars",
    "size": "medium"
}'
```

##### Response

```json
{
    "duration": 8926,
    "result": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-dyHP4PJ7ycEIN5B9ks1C2QnG/user-hNXlO6a7ILyS2OpgQlX57Typ/img-Vix2gBOz0UkSxlxVWv6gFn7Y.png?st=2024-02-06T11%3A25%3A31Z&se=2024-02-06T13%3A25%3A31Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-02-06T06%3A57%3A28Z&ske=2024-02-07T06%3A57%3A28Z&sks=b&skv=2021-08-06&sig=/7Ejagyw6FDZMrPwH2n6cUCJ6DQSPWPkxpA3ZYVV2LY%3D"
}
```

## Running the tests

```bash
npm test
```
