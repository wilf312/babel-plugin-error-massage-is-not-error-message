# babel-plugin-error-massage-is-not-error-message

Babel plugin that replace errorMassage to errorMessage.

## Example

Your `foo.js` that contains this code:

```js
export default class ErrorMassage {
  const errorMassage = 'ERROR_MASSAGE'
}
```

will be transpiled into something like this:

```js
export default class ErrorMessage {
  const errorMessage = 'ERROR_MESSAGE'
}
```

## Usage

* Install babel-plugin-error-massage-is-not-error-message

```
npm install babel-plugin-error-massage-is-not-error-message --save-dev
```

* Add error-massage-is-not-error-message into `.babelrc`

```
{
  "plugins": [
    "error-massage-is-not-error-message"
  ]
}
```