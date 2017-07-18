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
    
        all: ['Gruntfile.js', 'src/js/adspandable_config.js']
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
            src : ['**/*', '!**/*.jpg'],
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

        posters : {
            expand : true,
            cwd : 'src/assets/',
            src : '**/*.jpg',
            dest : 'src/img/'
        },

        postersDist : {
            expand : true,
            cwd : 'src/assets/',
            src : '**/*.jpg',
            dest : 'dist/img/'
        },

        test : {
            src : 'src/test.html',
            dest : 'dist/test.html'
        },
        test1 : {
            src : 'src/test1.html',
            dest : 'dist/test1.html'
        },
        edgeInclude : {
            expand : true,
            cwd : 'src/edge_includes/',
            src : '**/*',
            dest : 'dist/edge_includes/'
        },
        edgeAssets : {
            expand : true,
            cwd : 'src/edge_assets/',
            src : '**/*',
            dest : 'dist/_edge_assets/'
        },
        // glob any edge related files in the root over to the dist
        edgeFiles : {
            expand: true,
            cwd : 'src',
            src : '*edge*',
            dest : 'dist/'
        },
        css : {
            expand : true,
            cwd : 'src/css/',
            src : '**/*',
            dest : 'dist/css/'
        }
    },
    replace: {
        edgeReplace:{
            src: ['src/*edgePreload.js'],
            overwrite:true,
            replacements: [{
                from: '4E3',
                to: '20E3'
            }]
        },
        
        //Replace empty videoOpen() function if there are any videos uploaded. Grabs the array of files from taskHelper
        videoReplace:{
            src: 'src/js/shared-functionsUncompressed.js',
            overwrite: true,
            replacements: [{
                from: "openVideo('','intro',true)",
                to: function() {
                    var src = grunt.template.process('<%= taskHelper.deploy.options.filesArray %>');
                    if (!src) {
                        return "openVideo('','intro',true)";
                    } 
                    src = grunt.template.process('<%= taskHelper.deploy.options.filesArray[0].src %>');
                    var fileNameBegins = src.lastIndexOf("/") + 1;
                    var fileNameEnds = src.lastIndexOf(".");
                    var fileName = src.slice(fileNameBegins, fileNameEnds);
                    return "openVideo('"+fileName+".mp4','intro',true,'"+fileName+".jpg')";
                }
            }]
        }
    },
	
	//Used by videoReplace task to get an array of mp4s from /assets
    taskHelper: {
        deploy: {
            options: {
                filesArray: []
            },
            src: 'src/assets/*.mp4'
        }
    },

    // Remove any stray un minified files from dist.
    clean : {
        min : {
            src: ['dist/**/*.js', '!dist/**/*min.js', '!dist/js/adspandable_config.js','!dist/*edge*.js', 'src/assets/*.mp4', '!src/assets/*-640.mp4', 'dist/assets/*.mp4', '!dist/assets/*-640.mp4', 'src/assets/*.jpg']
        }
    },
    
    //This task uploads flash assets to Amazon server
    s3: {
      options: {
          key: 'AKIAIINYPRUELLD3YOBQ',
          secret: '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',
          bucket: 'adspdblflash',
          access: 'public-read',
          encodePaths: false,
          headers: {
            "Cache-Control": "max-age=630720000, public",
            "Expires": new Date(Date.now() + 63072000000).toUTCString()
          }
      },
      flashAssets: {
          sync: [
            {
                options: { verify: true },
                src: 'src/assets/*-640.mp4',
                dest: '<%= pkg.name %>/'
            }
          ]
      }
    },

    responsive_videos: {
      encodeWebVideo: {
        options: {
          sizes: [{
            width: 640,
            poster: true
          }],
          encodes:[{
            webm: [
              {'-vcodec': 'libvpx'},
              {'-acodec': 'libvorbis'},
              {'-crf': '25'},
              {'-b:v': '500k',},
              {'-q:a': '100'}
            ],
            mp4: [
              {'-vcodec':'libx264'},
              {'-acodec': 'libfaac'},
              {'-pix_fmt': 'yuv420p'},
              {'-q:v': '4'},
              {'-q:a': '100'},
              {'-threads': '0'}
            ]
          }]
        },
        files: [{
          expand: true,
          src: ['src/assets/*.mp4', '!src/assets/*-640.mp4'],
          dest: ''
        }]
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
      homebrewInstall : {
        options: {
          stdout : true
        },
        command : [
          'echo "Attempting to install Homebrew..."',
          'ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"'
        ].join('&&')
      },

      ffmpegInstall : {
        options : {
          stdout : true
        },
        command : [
          'echo "Attempting to intall FFmpeg..."',
          'brew install ffmpeg --with-libvorbis --with-nonfree --with-gpl --with-libvpx --with-pthreads --with-libx264 --with-libfaac --with-theora --with-libogg'
        ].join('&&')
      },

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
            'rsync -r -v -e ssh dist/ avid:/var/www/sites/adbreak/campaigns/<%= pkg.name %>',
            'ls'
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
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-responsive-videos');
  grunt.loadNpmTasks('grunt-task-helper');
  process.chdir(cwd);

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify','replace:edgeReplace','processhtml', 'shell:homebrewInstall' , 'shell:ffmpegInstall' , 'responsive_videos', 'copy', 's3', 'clean', 'taskHelper', 'replace:videoReplace']);
  
  // Staging task -- running this task will deploy contents to ~/staging/campaigns/'adname'
  grunt.registerTask('stage', ['shell:stage']);

  // Deployment task -- running this task will deploy out dist to where we will do this.
  grunt.registerTask('production', ['shell:production']);

};