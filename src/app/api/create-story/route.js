import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req) {
    
    const { name, age, topic } = await req.json();
    
    const input = {
  top_k: 50,
  top_p: 0.9,
  prompt: `Write one paragraph bedtime story about ${topic} for my ${age} years-old daughter named ${name}. `,
  temperature: 0.6,
  max_new_tokens: 1024,
  prompt_template: "<s>[INST] {prompt} [/INST] ",
  presence_penalty: 0,
  frequency_penalty: 0
};

    let answer = "";
for await (const event of replicate.stream("mistralai/mixtral-8x7b-instruct-v0.1", { input })) {
    answer += event.toString();
    console.log(answer);
    process.stdout.write(event.toString());
    };
    
    return Response.json({ status: "ok", answer });
}