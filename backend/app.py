from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from posts import posts
app = Flask(__name__)


@app.route("/posts")
@cross_origin()
def index():
    lang = request.headers.get("Accept-Language", "en")[:2]
    p = list(map(lambda post: translate(post, lang), posts))

    return jsonify(p)


def translate(post, lang):
    translation = next(t for t in post['translations'] if t['locale'] == lang)

    return {
        "id": post["id"],
        "title": translation['title'],
        "description": translation["description"],
        'image': post['image'],
        'quantity_left': post['quantity_left']
    }


if __name__ == "__main__":
    app.run(port=5000)
