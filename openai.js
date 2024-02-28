require('dotenv').config();
const { OpenAI } = require('openai');
// OPENAI_API_KEY=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 -> for .env

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const useChat = async () => {
    const result = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: 'Hi'
            },
        ],
    });
    console.log(result.choices[0].message.content);
}


useChat();
