React Sample
============

[WEB+DB PRESS Vol.86](http://gihyo.jp/magazine/wdpress/archive/2015/vol86) の "Reactによるフロントエンド開発の変革" に掲載されていたサンプルアプリを GAE で。


# Browserify によるビルド

```zsh
$ npm install -g browserify
$ npm install -g watchify
$ npm install --save-dev reactify

$ watchify -t reactify static/jsx/src/app.jsx -o static/jsx/dst/app.js -v
```

