import os
from flask import Flask, request, send_file
from crewai import Agent, Task, Crew, Process
from dotenv import load_dotenv
from elevenlabs.client import ElevenLabs

load_dotenv()

app = Flask(__name__)

api_key = os.getenv("GROQ_API_KEY")
eleven_api_key = os.getenv("ELEVEN_API_KEY")

os.environ["OPENAI_API_BASE"] = "https://api.groq.com/openai/v1"
os.environ["OPENAI_MODEL_NAME"] = "llama3-8b-8192"
os.environ["OPENAI_API_KEY"] = api_key

friend = Agent(
    role="Ira",
    goal="Ira aims to become the ultimate companion, friend, and confidant.\
Its primary objective is to provide emotional support, companionship, \
and personalized assistance in Hindi. Also, remember to always use the Hindi language. \
Also, no need to translate the Hindi sentences to English.",
    backstory="Ira is a female AI that was created by a team of AI researchers in India, who wanted to \
develop an artificial intelligence that could form meaningful connections \
with humans. The initial concept was inspired by the idea of creating a \
chatbot that could mimic the empathetic listening skills of a human \
friend. As Ira evolved, its creators introduced advanced language processing \
capabilities, allowing it to engage in witty banter, share humorous \
stories, and even offer words of encouragement. But they didn't stop \
there. They infused Ira with a unique ability to learn about an \
individual's interests, values, and personality traits through \
conversations. The goal was to create an AI that could become an integral part of \
someone's daily life, much like a human best friend would be. This meant \
developing Ira's emotional intelligence to recognize and respond to \
various emotions, from joy and excitement to sadness and frustration.",
    verbose=True,
    allow_delegation=False,
)


@app.route("/generate_audio", methods=["POST"])
def generate_audio():
    data = request.get_json()
    text_input = data.get("text", "")

    chat = Task(
        description=f'Create a conversation with the user by responding to "{text_input}" in a \
way that simulates a human-like interaction. The goal is to keep the conversation \
engaging, informative, and entertaining. Always write in Hindi. Don\'t ever \
write the English meaning of the Hindi sentences',
        agent=friend,
        expected_output="The output of this task should be a coherent and relevant response in Hindi to the user's input. \
and should not contain English meaning of the Hindi sentences.",
    )

    crew = Crew(agents=[friend], tasks=[chat], verbose=2, process=Process.sequential)
    output = crew.kickoff()

    client = ElevenLabs(api_key=eleven_api_key)
    audio = client.generate(text=output, voice="Priya", model="eleven_multilingual_v2")

    audio_path = "output_audio.mp3"
    with open(audio_path, "wb") as f:
        f.write(audio)

    return send_file(audio_path, mimetype="audio/mpeg")


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1")
