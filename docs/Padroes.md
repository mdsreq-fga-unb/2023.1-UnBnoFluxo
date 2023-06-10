# Padrões de codificação

## Do git
Para o github foi definido um gitflow de 3 branchs (main, dev e features branchs)

## Do front
Para o front mantidos convensôes mais usadas do React:
- Nomes de compontetes, variaveis, e similares em ingles
- Comentarios em portugues
- PascalCase para nomes de componentes
- camelCase para nomes de variaveis e estados
  
  Alem disso foi definido o uso do Prettier com a seguinte configuração para formatar o .jsx
```
{
    "arrowParens": "always",
    "bracketSpacing": true,
    "jsxSingleQuote": false,
    "printWidth": 100,
    "proseWrap": "always",
    "semi": false,
    "singleQuote": false,
    "tabWidth": 4,
    "trailingComma": "es5",
    "useTabs": false,
    "endOfLine": "auto"
}

```