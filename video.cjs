const gulp = require('gulp');
const { exec } = require('child_process');

// Source and destination directories
const paths = {
	videos: {
		src: 'src/assets/videos/**/*.mp4',
		dest: 'src/assets/'
	}
};

// Optimize .mp4 files
function optimizeVideos(done) {
	exec(
		`ffmpeg -i ${paths.videos.src} -vf "scale=iw/2:ih/2" ${paths.videos.dest}`,
		(err, stdout, stderr) => {
			if (err) {
				console.error('Error optimizing video:', err);
				return;
			}
			console.log('Video optimized:', stdout);
			console.log('Error:', stderr);
			done();
		}
	);
}

const build = gulp.series(optimizeVideos);

// Export tasks
exports.optimizeVideos = optimizeVideos;

exports.default = build;
