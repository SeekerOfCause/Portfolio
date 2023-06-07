import { micromark } from "micromark";
import { Configuration, OpenAIApi } from "openai";

type weaponInput = {
  type: string,
  magic: boolean,
  anchient: boolean,
  userDescription: string
}




const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const weaponChoice: weaponInput = req.body.weaponType;

  let weaponType: string = weaponChoice.type;
  let isMagic: string = weaponChoice.magic? "it is magical": "it is not magical";
  let isAnchent: string = weaponChoice.anchient? "it is ancient": "it is not ancient";
  let userDesc: string;

  if (weaponChoice.userDescription != "") {
    userDesc = "Please include the following informaiton: " + weaponChoice.userDescription;
  }
  else {
    userDesc = "";
  }
  
 

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  try {
    

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant. You design weapons for table top role playing games.",
        },
        {
          role: "user",
          content:
            "Can you generate a description of a weapon in a fantasy world. It should contain details of who made it, how old it is, special features of it, and a description of how it is used. It should also have weapon stats listed at the end, for Dungeons and Dragons 5th edition.",
        },
        {
          role: "assistant",
          content:
            "Yes, I can generate a weapon description for you. Can you tell me what format you would like it in?",
        },
        {
          role: "user",
          content:
            "Can you generate it in Markdown format? It should consist of a 'Description' section,  a 'Stats' section, and a 'Special Features' section.",
        },
        {
          role: "assistant",
          content:
            "Yes, I will display only the Markdown text. I will not add in messages to you in my response. Please tell me about the weapon you want",
        },
        { role: "user", content: `The weapoin will be a ${weaponType}, ${isMagic}, ${isAnchent}. ${userDesc}`},
        { role: "assistant", content:"Sure, here is the markdown text for your weapon:"}
      ],
    });
    console.log(completion.data.choices);
    res.status(200).json({ weaponResult: micromark(completion.data.choices[0].message.content) });
    console.log(micromark(completion.data.choices[0].message.content));
  } catch (error) {
    console.error(`Error with OpenAI API request: ${error.message}`);
    res.status(500).json({
      error: {
        message: "An error occurred during your request.",
      },
    });
  }
}
