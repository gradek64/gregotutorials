/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.

    // Concatinate all of the javascript files in lib and shared functions.
    // Shared functions is last as it has lib dependencies.
    concat: {

        dist: {
            src: ['src/js/lib/*.js', 'src/js/shared-functionsUncompressed.js'],
            dest: 'dist/js/<%= pkg.name %>.js',
        },
        adspandable : {
            src : 'src/js/adspandable_config.js',
            dest : 'dist/js/adspandable_config.js'
        },
    },

    // Minify the concatinated file.
    uglify: {
        dist: {
            src: '<%= concat.dist.dest %>',
            dest: 'dist/js/<%= pkg.name %>.min.js'
        },
        adspandable: {
            src: '<%= concat.adspandable.dest %>',
            dest: 'dist/js/adspandable_config.js'
        }
    },
    
    // Check all our scripts for errors and monsters.
    jshint: {
        options: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            unused: true,
            boss: true,
            eqnull: true,
            browser: true,
            globals: {
                jQuery: true,
                process: true
            }
        },
    
        gruntfile: {
            src: 'Gruntfile.js'
        }
    },
    
    // Processhtml uses templating to remove script tags from the
    // unbuilt html file. It creates a new script tag with a source pointing
    // to the minified javascript file.
    processhtml: {
        options: {
            data: {
                sourcemin: 'js/<%= pkg.name %>.min.js'
            }
        },

        files: {
            src : 'src/index.html',
            dest : 'dist/index.html'
        }
    },
    
    // Copy task
    // Copys images and assets into their respective folders under the dist folder. 
    
    copy : {
        assets : {
            expand : true,
            cwd : 'src/assets/',
            src : '**/*',
            dest : 'dist/assets/'
        },
    
        images : {
            expand : true,
            cwd : 'src/images/',
            src : '**/*',
            dest : 'dist/images/'
        },
        images2 : {
            expand : true,
            cwd : 'src/img/',
            src : '**/*',
            dest : 'dist/img/'
        },

        test : {
            src : 'src/test.html',
            dest : 'dist/test.html'
        },
        edgeInclude : {
            expand : true,
            cwd : 'src/edge_includes/',
            src : '**/*',
            dest : 'dist/edge_includes/'
        },
        // glob any edge related files in the root over to the dist
        edgeFiles : {
            expand: true,
            cwd : 'src',
            src : '*edge*',
            dest : 'dist/'
        }
    },

    // Remove any stray un minified files from dist.
    clean : {
        min : {
            src: ['dist/**/*.js', '!dist/**/*min.js', '!dist/js/adspandable_config.js','!dist/*edge*.js']
        }
    },
    // This task executes system commands via bash
    shell : {
      // Task to sync dist with the the staging area on the avid server.
      // Rsync is useful for this task as data that has already been sent
      // to the server will not be sent again.
      // 
      // dist folder in the staging area will be given the name define in
      // package.json
        stage : {
            options : {
            stdout : true
        },
        command : [
            'echo "Syncing dist to avid:~/staging/campaigns/<%= pkg.name %>"',
            'rsync -r -v -e ssh dist/ avid:~/staging/campaigns/<%= pkg.name %>'
        ].join('&&')
    },
      
    // Task to to sync dist with the production server
    production : {
        options : {
            stdout : true
        },
        command : [
            'echo "Syncing dist to Production"',
            'rsync -r -v -e ssh dist/ avid:/var/www/sites/adbreak/campaigns/<%= pkg.name %>'
        ].join('&&')
    }
}
});

  // These plugins provide necessary tasks.
  // load task from
  var cwd = process.cwd();
  process.chdir('../..');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');
  process.chdir(cwd);

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify','processhtml', 'copy', 'clean']);
  
  // Staging task -- running this task will deploy contents to ~/staging/campaigns/'adname'
  grunt.registerTask('stage', ['shell:stage']);

  // Deployment task -- running this task will deploy out dist to where we will do this.
  grunt.registerTask('production', ['shell:production']);

};
