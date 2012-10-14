The h5bp build script now has three versions, the main one being
the [ant-build-script][].

This project is the node version, and it uses [Grunt][grunt] as a build tool.
It later became the foundation of [Yeoman](https://yeoman.io), for the build
part.

Since both projects were based on the same codebase, yeoman is now a dependency
of node-build-script. It's simply bundling yeoman as a grunt plugin, providing
you with a collection of grunt tasks.

## Quick start

Create a new project.

```
mkdir -p ~/Sites/new-project
cd ~/Sites/new-project
npm init
npm i http://nodeload.github.com/h5bp/node-build-script/tarball/master
npm run node-build-script gruntfile
```




## Install

Install this plugin locally to your project (no global `-g` install)

```sh
npm i http://nodeload.github.com/h5bp/node-build-script/tarball/master
```

Or as a project dependency:

```
{
  "dependencies": {
    "node-build-script": "http://nodeload.github.com/h5bp/node-build-script/tarball/master"
  }
}
```

**You can choose to change the `master` sha1 to point to a specific tag**

Then, load the tasks in your Gruntfile:

```
grunt.loadNpmTasks('node-build-script');
```

## Getting started

> todo update docs & links

* [Install](https://github.com/h5bp/node-build-script/wiki/install) the package
* Check out the extensive [grunt documentation][], specifically the
  [Getting Started][] section.
* Learn more about [Usage](https://github.com/h5bp/node-build-script/wiki/overview)
  and [Configuration](https://github.com/h5bp/node-build-script/wiki/configuration)
* Look at the [available tasks](https://github.com/h5bp/node-build-script/wiki/tasks)
* Test out the experimental
  [dom-based](https://github.com/h5bp/node-build-script/wiki/dom) build
  system.



## Project information

* Source: http://github.com/h5bp/node-build-script
* Docs: http://github.com/h5bp/node-build-script/wiki
* Issues: http://github.com/h5bp/node-build-script/issues


## Run the tests

```sh
$ npm test
```

[grunt]: https://github.com/cowboy/grunt
[grunt documentation]: https://github.com/cowboy/grunt/blob/master/docs/toc.md
[grunt plugin]: https://github.com/cowboy/grunt/blob/master/docs/plugins.md
[Getting Started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md#readme)
[ant-build-script]: https://github.com/h5bp/ant-build-script
[html-minifier]: https://github.com/kangax/html-minifier
