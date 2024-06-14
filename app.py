from flask import Flask, render_template, request, jsonify
from chatbot import load_knowledge_base, find_best_match, get_answer_for_question

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    knowledge_base = load_knowledge_base('entrenamiento.json')

    best_match = find_best_match(user_input.lower(), [q["question"].lower() for q in knowledge_base if "question" in q])
    if best_match:
        answer = get_answer_for_question(best_match, knowledge_base)
    else:
        answer = "No conozco esa pregunta. ¿Podrías enseñarme cómo debería responder a ella por favor?"

    return jsonify({'response': answer})

if __name__ == '__main__':
    app.run(debug=True)
