module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-essential'
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        // com aspas simples
        "quotes": ["warn", "single", { "avoidEscape": true }],
        // espaço após comentário
        "spaced-comment": ["warn", "always"],
        // espaço antes de bloco de código
        "space-before-blocks": ["warn", "always"],
        // espaço antes de parênteses de função
        "space-before-function-paren": ["warn", "always"],
        // identação por 4 espaços
        "indent": ["warn", 4],
        // sem ponto e vírgula
        "semi": ["warn", "never"],
        // if de somente 1 (um) comando pode não ter chaves
        "curly": "off",
        // permite que os operadores '&&' e '||'object-curly-spacing possam ser usados misturados sem parênteses
        "no-mixed-operators": "off",
        // não permite que espaços e tabulações sejam misturados
        "no-mixed-spaces-and-tabs": ["warn"],
        // os espaços em branco precisam uniformes e de acordo com boas práticas do es5
        "no-irregular-whitespace": ["warn"],
        // permite a utilização de "formatação" mais livre na criação de objetos literiais
        "object-curly-newline": "off",
        // deve haver espaço entre as chaves de um objeto, exceto após um array ou objeto dentro o objeto
        "object-curly-spacing": ["warn", "always", {
            "objectsInObjects": false,
            "arraysInObjects": false
        }],
        // permite que linhas vazias sejam colocadas antes e após escopos
        "padded-blocks": "off",
        // permite construtores não usados
        "no-useless-constructor": "off",
        // permite que parâmetros de Promise tenham qualquer nome
        "promise/param-names": "off",
        // não permite a utilização do eval
        "no-eval": "error",
        // define a quebra de linha para LF
        "linebreak-style": ["error", "unix"],
        // variáveis declaradas precisam necessariamente ser usadas, exceto argumentos de funções
        "no-unused-vars": ["error", {
            "args": "none"
        }]
    }
}
