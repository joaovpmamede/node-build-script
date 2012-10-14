var path = require('path');

module.exports = function(grunt) {

  var tasks = grunt.file.findup(path.dirname(require.resolve('yeoman')), 'tasks');
  if(!tasks) {
    grunt.log.error('Unable to load yeoman tasks, no tasks/ folder to load.');
  }

  grunt.util = grunt.util || grunt.utils;

  // actually load the tasks
  grunt.loadTasks(tasks);

  // these are all the tasks that need further needs on either adaptors, mainly
  // due to the version mismatch between grunt (globals, and the grunt 0.4.x
  // version yeoman expects to use)
  grunt.registerMultiTask('compass', 'compass task noop', function() {});
  grunt.registerMultiTask('manifest', 'manifest task noop', function() {});

  grunt.renameTask('rjs', 'yrjs');
  grunt.registerTask('rjs', 'Optimizes through require.js optimizer', function() {
    // hack around hardcode path in rjs task, until it gets better with path & config stuff
    var opts = grunt.config(this.name) || {};

    grunt.util._.defaults(opts, {
      // one lvl up: ../app/../index.html -> ./index.html
      mainFile: '../index.html'
    });

    grunt.config('yrjs', opts);
    grunt.task.run('yrjs');
  });


  // server support?
  grunt.registerTask('server', 'Simple server task', function() {
    var cb = this.async();
    var opts = grunt.config('server') || {};

    grunt.util._.defaults(opts, {
      port: 3000,
      hostname: 'localhost',
      target: 'h5bp',
      base: path.resolve('./'),
      open: true
    });

    // queue up the watch task
    grunt.task.run('watch');

    // and start up the server
    var srv = grunt.helper('server', opts, function(e) {
      if(e) return cb(false);
      srv.on('error', function(e) {
        console.log('got error', e);
      });
      srv.on('start', console.log.bind(console, 'start'));
      srv.on('listen', console.log.bind(console, 'listen'));
      cb();
    });
  });

};
