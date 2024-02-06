const { Configuration, OpenAIApi } = require("openai");
const { OPENAI_API_KEY } = require('../config/index')
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openAI = new OpenAIApi(configuration);


class Model {
  constructor() {
  }

  async generate (param) {
    const { prompt, size } = param;
    const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

    const response = await openAI.createImage({
      prompt,
      n: 1,
      size: imageSize
    });
    return response.data.data[0].url;

  }
}

module.exports = Model
