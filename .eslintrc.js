module.exports = {
    root: false,
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended'
    ],
    'parserOptions': {
        parser: 'babel-eslint'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'comma-spacing': ['error', { before: false, after: true }],
        'vue/multi-word-component-names': 0,
        'vue/require-default-prop' : 0
    }
}
