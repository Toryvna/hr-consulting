module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		}
	},

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/slick.min.js': ['dist/js/plugin/slick.js'],
				'../markup/js/jquery.jscroll.min.js': ['dist/js/plugin/jquery.jscroll.js'],
				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/search-rezult.min.js': ['dist/js/search-rezult.js'],
				'../markup/js/hr-facts.min.js': ['dist/js/hr-facts.js'],
				'../markup/js/cases.min.js': ['dist/js/cases.js'],
				
				
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				//sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: ['**/*.html'],
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
                    templates: '<%= fixturesPath %>/*.html',
                    layout: {
						header: '<%= fixturesPath %>/templates/header.html',
						footer: '<%= fixturesPath %>/templates/footer.html',
						scrollTop_btn: '<%= fixturesPath %>/templates/scrollTop-btn.html',
						contactUs_form: '<%= fixturesPath %>/templates/contactUs-form.html',
						callBtn: '<%= fixturesPath %>/templates/callBtn.html'
						
						
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
