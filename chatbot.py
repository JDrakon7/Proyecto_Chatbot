#Chatbot Proyecto JDBJ
import json #Biblioteca para utilizar archivos .json 
from difflib import get_close_matches #Biblioteca para encontrar  mejores coincidencias cercanas

def load_knowledge_base(file_path: str) -> list[dict]:
    with open(file_path, "r") as file:
        data: list[dict] = json.load(file)
        return data

def save_knowledge_base(file_path: str, data: list[dict]):
    with open(file_path, "w") as file:
        json.dump(data, file, indent=2)

def find_best_match(user_input: str, questions: list[str]) -> str | None:
    matches: list = get_close_matches(user_input, questions, n=1, cutoff=0.6)
    return matches[0] if matches else None

def get_answer_for_question(question: str, knowledge_base: list[dict]) -> str | None:
    for q in knowledge_base:
        if "question" in q and q["question"].lower() == question.lower():
            return q["answer"]

def chat_bot():
    knowledge_base: list[dict] = load_knowledge_base('entrenamiento.json')

    while True:
        user_input: str = input('Tu: ')

        if user_input.lower() == 'salir':
            print("Botmaster: Hasta la próxima")
            break

        best_match: str | None = find_best_match(user_input.lower(), [q["question"].lower() for q in knowledge_base if "question" in q])

        if best_match:
            answer: str = get_answer_for_question(best_match, knowledge_base)
            print(f"Botmaster: {answer}")
        else:
            print("Botmaster: No conozco esa pregunta. ¿Podrías enseñarme cómo debería responder a ella por favor?")
            new_answer: str = input("Escribe la respuesta o 'salir' para terminar la conversación: ")

            if new_answer.lower() != "salir":
                knowledge_base.append({"question": user_input.lower(), "answer": new_answer})
                save_knowledge_base('entrenamiento.json', knowledge_base)
                print('Botmater: ¡Gracias por tu tiempo! Aprendí una nueva pregunta que me ayudará a mejorar.')

if __name__ == '__main__':
    chat_bot()


                
            
            
            
            