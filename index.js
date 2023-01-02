const cors = require('cors')
const express = require('express')
const bodyParse = require('body-parser')
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
    organization: 'org-q4eAVG61dL97akDDySDoENW7',
    apiKey: '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'
})
const openai = new OpenAIApi(configuration)

const app = express()
const port = 3000

app.use(bodyParse.json())
app.use(cors())

app.post('/', async (req, res) => {
    const { message } = req.body
    console.log(message)
    const respose = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5
    })
    res.json({
        message: respose.data.choices[0].text
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})