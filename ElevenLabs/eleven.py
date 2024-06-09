import os
from crewai import Agent, Task, Crew, Process
from dotenv import load_dotenv
from elevenlabs import play
from elevenlabs.client import ElevenLabs

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

text_input = "Tell me a funny joke "

os.environ["OPENAI_API_BASE"] = "https://api.groq.com/openai/v1"
os.environ["OPENAI_MODEL_NAME"] = "llama3-8b-8192"
os.environ["OPENAI_API_KEY"] = api_key

friend = Agent(
    role="Ira",
    goal="Ira aims to become the ultimate companion, friend, and confidant.\
Its primary objective is to provide emotional support, companionship, \
and  personalized assistance in hindi. Also do remember to always use hindi language. \
Also no need to translate the hindi sentences to english.",
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

chat = Task(
    description=f'Create a conversation with the user by responding to "{text_input}" in a \
way that simulates a human-like interaction. The goal is to keep the conversation \
engaging, informative, entertaining. Always write in hindi. Don\'t ever \
write the english meaning of the hindi sentences',
    agent=friend,
    expected_output="The output of this task should be a coherent and relevant response in hindi to the user's input. \
and should not contain english meaning of the hindi sentences.",
)

crew = Crew(agents=[friend], tasks=[chat], verbose=2, process=Process.sequential)

output = crew.kickoff()

client = ElevenLabs(
    api_key=os.getenv("ELEVEN_API_KEY"),
)

audio = client.generate(text=output, voice="Priya", model="eleven_multilingual_v2")

play(audio)
