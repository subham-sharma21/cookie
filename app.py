from flask import Flask, render_template
import random

app = Flask(__name__)

fortunes = [
    "Your next bug will mysteriously fix itself. Rejoice.",
    "You will write code so clean, Linus Torvalds will weep.",
    "Beware the infinite loop that hides in plain sight.",
    "A coffee-powered breakthrough is coming your way.",
    "Your pull request will be merged without comments.",
    "Tomorrow, your Wi-Fi will be strong and stable.",
    "Stack Overflow shall guide you in your darkest hour.",
    "New framework incoming: resist the urge (you won't).",
    "Sleep is for the weak... and the well-rested coder.",
    "You will finally understand that regex. Kind of."
]

@app.route("/")
def home():
    fortune = random.choice(fortunes)
    return render_template("home.html", fortune=fortune)

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)
