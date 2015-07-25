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

# Flux フレームワーク

[Fluxxor](http://fluxxor.com/)

# gulp タスクの作成

http://qiita.com/hkusu/items/e068bba0ae036b447754
http://qiita.com/yymm@github/items/1607084a78a92db9e682
