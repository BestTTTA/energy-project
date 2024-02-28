require('dotenv').config();
const { OpenAI } = require('openai');

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
