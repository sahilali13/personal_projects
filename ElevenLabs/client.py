import requests
from elevenlabs import play

# API endpoint
url = "http://127.0.0.1:5000/generate_audio"

# Text to send to the API
text_input = "Tell me a funny joke"

# Make the POST request to the Flask API
response = requests.post(url, json={"text": text_input})

# Check if the request was successful
if response.status_code == 200:
    # Save the received audio file
    audio_path = "received_audio.mp3"
    with open(audio_path, "wb") as f:
        f.write(response.content)

    # Play the audio file
    with open(audio_path, "rb") as audio_file:
        audio_data = audio_file.read()
        play(audio_data)
else:
    print(
        f"Failed to get audio. Status code: {response.status_code}, Response: {response.text}"
    )
