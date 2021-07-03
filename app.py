from flask import Flask, render_template,redirect, url_for
app = Flask(__name__)


@app.route('/')
def home():

    meninas = [
        {
            'nome': 'Lindinha',
            'foto': 'https://mundoencantado.info/powerpuff_girls/powerpuff_girls_88.gif',
            'vida': 100
        },
        {
            'nome': 'Florzinha',
            'foto': '/static/img/aflorzinha.png',
            'vida': 100
        },
        {
            'nome': 'Docinho',
            'foto': '/static/img/docinho.png',
            'vida': 100
        }
    ]

    viloes = [
        {
            'nome': 'vilao1',
            'foto': '/static/img/loko.png',
            'dano': 50
        },
        {
            'nome': 'vilao2',
            'foto': '/static/img/ele.png',
            'dano': 50
        },
        {
            'nome': 'vilao3',
            'foto': '/static/img/trio-amebas.png',
            'dano': 50
        }
    ]

    return render_template(
        'index.html',
        meninas=meninas,
        viloes=viloes
    )

if __name__ == '__main__':
    app.run(debug=True)
