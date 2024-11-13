const axios = require('axios');  // Import Axios
require('dotenv').config();      // Load the API key from .env

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;  // Your OpenAI API key

// Function to generate a message using OpenAI GPT-4
async function generatePersonalizedMessage(name, jobTitle, interests) {
    // Create the message prompt you will send to GPT-4
    const prompt = `Create a personalized LinkedIn message to ${name}, a professional working as a ${jobTitle}. Mention their interests: ${interests}. Be polite, professional, and engaging.`;

    try {
        // Send a request to OpenAI GPT-4
        const response = await axios.post(
            'https://api.openai.com/v1/completions',  // OpenAI API endpoint
            {
                model: 'gpt-4',  // Use GPT-4 model
                prompt: prompt,   // Send the prompt we created
                max_tokens: 150,  // Limit the length of the response
                temperature: 0.7, // Controls randomness (higher = more creative)
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,  // Your API key
                    'Content-Type': 'application/json',             // JSON format
                },
            }
        );

        // Return the generated message from OpenAI
        return response.data.choices[0].text.trim();  // Extract the message from the response
    } catch (error) {
        console.error('Error generating message:', error);
        return null;
    }
}

module.exports = { generatePersonalizedMessage };  // Export the function
