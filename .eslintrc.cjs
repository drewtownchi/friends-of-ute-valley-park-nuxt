module.exports = {
    root: true,
    extends: ['@nuxt/eslint-config'],
    rules: 
      {
        "vue/html-closing-bracket-newline": [
          "error",
          {
            "multiline": "never",
            "selfClosingTag": {
              "multiline": "never",
            }
          }
        ],
        "vue/first-attribute-linebreak": ["error", {
          "multiline": "beside"
        }]
      }
      
    
  }