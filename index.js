require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

async function testOpenAI() {
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: '¿que es un QA?' }],
        });
        console.log(response.data.choices[0].message.content);
    } catch (error) {
        console.error('Error:', error);
    }
}

testOpenAI();
