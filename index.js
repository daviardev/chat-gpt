const { Configuration, OpenAIApi } = require('openai')

const express = require('express')

const configuration = new Configuration({
    organization: 'org-q4eAVG61dL97akDDySDoENW7',
    apiKey: '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'
})
const openai = new OpenAIApi(configuration)

const app = express()
const port = 3000

app.post('/', async (req, res) => {
    const respose = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'Say this is a test',
        max_tokens: 7,
        temperature: 0
    })
    console.log(respose.data.choices[0].text)
    res.json({
        data: response.data
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})