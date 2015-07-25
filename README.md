React Sample
============

- [WEB+DB PRESS Vol.86](http://gihyo.jp/magazine/wdpress/archive/2015/vol86) "Reactによるフロントエンド開発の変革"
- [WEB+DB PRESS Vol.87](http://gihyo.jp/magazine/wdpress/archive/2015/vol87) "Flux …フロントエンド開発の新しいアーキテクチャ"

に掲載されていたサンプルアプリを GAE で。


# Browserify によるビルド

gulp のタスクとして定義したので

```zsh
$ npm install -g browserify
$ npm install -g watchify
$ npm install -g gulp
$ npm install
$ gulp
```

とすると、`static/jsx/src/*.jsx` に変更があったときに自動的に `static/jsx/dst/bundle.js` を更新します。

Google App Engine の開発サーバーは別途起動する必要があります。

```zsh
$ /usr/local/google_appengine/dev_appserver.py .
```

# Flux フレームワーク

Flux のリファレンス実装として、記事に記載されていた [Fluxxor](http://fluxxor.com/) を使っています。

# gulp タスクの作成

`gulpfile.js` については以下の記事を参考にさせていただきました。

- http://qiita.com/hkusu/items/e068bba0ae036b447754
- http://qiita.com/yymm@github/items/1607084a78a92db9e682
